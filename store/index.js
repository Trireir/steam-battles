import _ from 'lodash';
import Promise from 'bluebird';

import axios from '~/plugins/axios'
import calculatePoints from '~/store/calculatePoints'

const initState = {
  username: '',
  user: {},
  friends: [],
  games: [],
  indexError: '',
  userError: '',
};

export const state = () => (initState);

export const mutations = {
  initialize(state) {
    state = initState;
  },
  setInputUser(state, username) {
    state.username = username;
  },
  setError(state, error) {
    state[error.page] = error.message;
  },
  setUser(state, user) {
    state.user = user;
  },
  setFriends(state, friends) {
    state.friends = friends;
  },
  setGames(state, games) {
    state.games = games;
  }
}

function processPlayerInfo(player) {
  return {
    id: player.steamid,
    name: player.personaname,
    avatar: player.avatarmedium,
    profile: player.profileurl,
    visibility: player.communityvisibilitystate,
  };
}

function processPlayersInfo(players, userid) {
  let userinfo;
  const friendsinfo = {};
  players.forEach((p) => {
    if (p.steamid === userid) {
      userinfo = processPlayerInfo(p);
    } else {
      friendsinfo[p.personaname] = processPlayerInfo(p);
    }
  });
  return { userinfo, friendsinfo };
}

function generateArrayIds(userid, friends) {
  return [
    userid,
    ...friends.friends.map(f => f.steamid),
  ];
}

function getUsersInfo(userid, friendid, infolist) {
  if (infolist.players[0].steamid === userid) {
    return {
      userinfo: infolist.players[0],
      friendinfo: infolist.players[1],
    };
  }
  return {
    userinfo: infolist.players[1],
    friendinfo: infolist.players[0],
  };
}

function getCommonGames(userid, friendid) {
  return Promise.all([
    axios.get(`/api/getUserGames?userid=${userid}`),
    axios.get(`/api/getUserGames?userid=${friendid}`),
    axios.get(`/api/getUserInfo?userid=[${userid},${friendid}]`),
  ])
    .spread((gamesUserInfo, gamesFriendInfo, rawusersinfo) => {
      const { userinfo, friendinfo } = getUsersInfo(userid, friendid, rawusersinfo.data);

      let minutesUserPlayed = 0;
      let minutesFriendPlayed = 0;
      const gamesUserIds = gamesUserInfo.data.games.map((g) => {
        minutesUserPlayed += g.playtime_forever;
        return g.appid;
      });
      const gamesFriendId = gamesFriendInfo.data.games.map((g) => {
        minutesFriendPlayed += g.playtime_forever;
        return g.appid;
      });

      const achievementsPromises = [
        axios.get(`/api/getFriendsIds?userid=${userid}`),
        axios.get(`/api/getFriendsIds?userid=${friendid}`),
      ];
      const commonGamesId = _.intersection(gamesUserIds, gamesFriendId);
      const commonGames = _.sortBy(commonGamesId.map((id) => {
        const position = _.findIndex(gamesUserInfo.data.games, game => (game.appid === id));
        achievementsPromises.push(axios.get(`/api/getGameAchievements?gameid=${id}&userid=${userid}&friendid=${friendid}`));
        return gamesUserInfo.data.games[position];
      }), 'name');

      return Promise.all(achievementsPromises)
        .spread((userFriends, friendFriends, ...achievementsResponse) => {
          achievementsResponse.forEach((a) => {
            if (a.data.error) {
              return;
            }
            const position = _.findIndex(commonGames, game => (game.appid === parseInt(a.data.appid, 10)));
            commonGames[position].achievements = a.data.achievements;
          });
          const games = {
            user: _.merge(gamesUserInfo.data, userinfo, { numberOfFriends: userFriends.data.friends.length }),
            common: commonGames,
            friend: _.merge(gamesFriendInfo.data, friendinfo, { numberOfFriends: friendFriends.data.friends.length })
          };
          const { userPoints, friendPoints } = calculatePoints(games);
          games.user.points = userPoints;
          games.friend.points = friendPoints;
          return games;
        });
    });
}

export const actions = {
  async setInputUser(context, username) {
    const { commit } = context;
    commit('setInputUser', username.target.value);
  },
  async validateUsername({ commit, state }) {
    try {
      commit('setError', { message: '', page: 'indexError' });
      const user = await axios.get(`/api/getUserId?username=${state.username}`);
      const userid = user.data.steamid;
      this.$router.push(`/user/${userid}`);
    } catch (err) {
      commit('setError', { message: err.response.statusText, page: 'indexError' });
    }
  },
  async LOAD_DATA(context, userid) {
    const { commit } = context;
    try {
      commit('initialize');
      commit('setError', { message: '', page: 'userError' });
      const friendslist = await axios.get(`/api/getFriendsIds?userid=${userid}`);
      const rawfriendsinfo = await axios.get(`/api/getUserInfo?userid=${generateArrayIds(userid, friendslist.data)}`);
      
      const { userinfo, friendsinfo } = processPlayersInfo(rawfriendsinfo.data.players, userid);
      commit('setUser', userinfo);
      commit('setFriends', friendsinfo);
    } catch(err) {
      commit('setError', { message: 'to malo', page: 'userError' });
    }
  },
  async LOAD_COMMON_GAMES(context, { userid, friendid }) {
    const { commit } = context;
    commit('initialize');
    commit('setGames', await getCommonGames(userid, friendid));
  },
};
