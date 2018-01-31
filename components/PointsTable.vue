<template>
  <div id="app">
    <div class="pa4">
      <div class="overflow-auto">
        <table class="f6 w-100 mw8 center" cellspacing="0">
          <thead>
            <tr class="stripe-dark">
              <th class="fw6 tl pa3 bg-white">Icon</th>          
              <th class="fw6 tl pa3 bg-white">Name</th>
              <th class="fw6 tl pa3 bg-white">Games</th>
              <th class="fw6 tl pa3 bg-white">Played Games</th>
              <th class="fw6 tl pa3 bg-white">Time Played</th>
              <th class="fw6 tl pa3 bg-white">Friends</th>
              <th class="fw6 tl pa3 bg-white">Achievements</th>
              <th class="fw6 tl pa3 bg-white">Total</th>
            </tr>
          </thead>
          <tbody class="lh-copy">
            <tr class="stripe-dark">
              <td class="pa3">
                <img
                  v-bind:src="user.avatar"
                />
              </td>
              <td class="pa3">{{user.personaname}}</td>
              <td class="pa3">{{user.points.games}}</td>
              <td class="pa3">{{user.points.playedGames}}</td>
              <td class="pa3">{{Math.round(user.points.timePlayed * 100) / 100}}</td>
              <td class="pa3">{{user.points.friends}}</td>
              <td class="pa3">{{user.points.achievements}}</td>
              <td class="pa3">{{Math.round(user.points.total * 100) / 100}}</td>
            </tr>
            <tr class="stripe-dark">
              <td class="pa3">
                <img
                  v-bind:src="friend.avatar"
                />
              </td>
              <td class="pa3">{{friend.personaname}}</td>
              <td class="pa3">{{friend.points.games}}</td>
              <td class="pa3">{{friend.points.playedGames}}</td>
              <td class="pa3">{{Math.round(friend.points.timePlayed * 100) / 100}}</td>
              <td class="pa3">{{friend.points.friends}}</td>
              <td class="pa3">{{friend.points.achievements}}</td>
              <td class="pa3">{{Math.round(friend.points.total * 100) / 100}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PointsTable',
    props: ['user', 'friend']
  }
</script>

<style>
  td, th{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
</style>
