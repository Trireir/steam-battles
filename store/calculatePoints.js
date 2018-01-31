const TIME_PLAYED_MODIFIER = 1;
const PLAYED_GAMES_MODIFIER = 1;
const PAYED_GAMES_MODIFIER = 1;
const FRIENDS_MODIFIER = 3;
const ACHIEVEMENT_MODIFIER = 1;
const ACHIEVEMENT_HIDDEN_MODIFIER = 3;

function calculatePointsTimePlayed(minutes) {
  return (minutes / 60) * TIME_PLAYED_MODIFIER;
}

function calculatePointsPlayedGames(gamesPlayed) {
  return (gamesPlayed) * PLAYED_GAMES_MODIFIER;
}

function calculatePointsGames(gamesPayed) {
  return (gamesPayed) * PAYED_GAMES_MODIFIER;
}

function calculatePointsFriends(numberOfFriends) {
  return (numberOfFriends) * FRIENDS_MODIFIER;
}

function calculatePointsAchievements(common) {
  let userAchievements = 0;
  let friendAchievements = 0;
  common.forEach((c) => {
    if (!c.achievements) return;
    Object.keys(c.achievements).forEach((a) => {
      if (c.achievements[a].userAchieved === 1) {
        userAchievements += c.achievements[a].hidden === 1 ? ACHIEVEMENT_HIDDEN_MODIFIER : ACHIEVEMENT_MODIFIER;
      }
      if (c.achievements[a].friendAchieved === 1) {
        friendAchievements += c.achievements[a].hidden === 1 ? ACHIEVEMENT_HIDDEN_MODIFIER : ACHIEVEMENT_MODIFIER;
      }
    });
  });

  return { userAchievements, friendAchievements };
}

function calculateData(games) {
  const userData = {
    minutesPlayed: 0,
    gamesPlayed: 0,
  };
  games.map((game) => {
    if (game.playtime_forever) {
      userData.minutesPlayed += game.playtime_forever;
      userData.gamesPlayed += 1;
    }
  });
  return userData;
}

export default function calculatePoints({ user, common, friend }) {
  const userData = calculateData(user.games);
  const friendData = calculateData(friend.games);

  const userTimePlayed = calculatePointsTimePlayed(userData.minutesPlayed);
  const friendTimePlayed = calculatePointsTimePlayed(friendData.minutesPlayed);

  const userPlayedGames = calculatePointsPlayedGames(userData.gamesPlayed);
  const friendPlayedGames = calculatePointsPlayedGames(friendData.gamesPlayed);

  const userGames = calculatePointsGames(user.games.length);
  const friendGames = calculatePointsGames(friend.games.length);

  const userFriends = calculatePointsFriends(user.numberOfFriends);
  const friendFriends = calculatePointsFriends(friend.numberOfFriends);

  const { userAchievements, friendAchievements } = calculatePointsAchievements(common);

  const userPoints = {
    total: userTimePlayed + userPlayedGames + userGames + userFriends + userAchievements,
    timePlayed: userTimePlayed,
    playedGames: userPlayedGames,
    games: userGames,
    friends: userFriends,
    achievements: userAchievements,
  };

  const friendPoints = {
    total: friendTimePlayed + friendPlayedGames + friendGames + friendFriends + friendAchievements,
    timePlayed: friendTimePlayed,
    playedGames: friendPlayedGames,
    games: friendGames,
    friends: friendFriends,
    achievements: friendAchievements,
  };

  return { userPoints, friendPoints };
}
