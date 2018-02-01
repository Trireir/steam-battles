<template>
  <div class="points-table">
    <table class="table is-striped is-hoverable is-fullwidth" cellspacing="0">
      <thead>
        <tr>
          <th>Icon</th>          
          <th>Name</th>
          <th>Games</th>
          <th>Played Games</th>
          <th>Time Played</th>
          <th>Friends</th>
          <th>Achievements</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody >
        <tr>
          <td>
            <img
              v-bind:src="user.avatar"
            />
          </td>
          <td>{{user.personaname}}</td>
          <td>{{user.points.games}}</td>
          <td>{{user.points.playedGames}}</td>
          <td>{{Math.round(user.points.timePlayed * 100) / 100}}</td>
          <td>{{user.points.friends}}</td>
          <td>{{user.points.achievements}}</td>
          <td>{{Math.round(user.points.total * 100) / 100}}</td>
        </tr>
        <tr>
          <td>
            <img
              v-bind:src="friend.avatar"
            />
          </td>
          <td>{{friend.personaname}}</td>
          <td>{{friend.points.games}}</td>
          <td>{{friend.points.playedGames}}</td>
          <td>{{Math.round(friend.points.timePlayed * 100) / 100}}</td>
          <td>{{friend.points.friends}}</td>
          <td>{{friend.points.achievements}}</td>
          <td>{{Math.round(friend.points.total * 100) / 100}}</td>
        </tr>
      </tbody>
    </table>
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
