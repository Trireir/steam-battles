<template>
  <div id="classificationContainer">
    <div id="laurel">
      <img
        src="../assets/laurel.png"
      />
      <img
        id="winnerLogo"
        v-bind:src="user.points.total > friend.points.total ? user.avatarfull : friend.avatarfull"
      />
      <img
        src="../assets/laurel.png"
        style="transform: scaleX(-1)"
      />
    </div>
    <span id="winner">
      WINNER
    </span>
    <PointsTable :user='user' :friend='friend'></PointsTable>
  </div>
</template>

<script>
import Gamecard from './Gamecard'
import PointsTable from './PointsTable'

export default {
  name: 'Classification',
  props: ['user', 'friend'],
  components: {
    PointsTable
  }
}
</script>

<style>
  #classificationContainer{
    display: flex;
    flex-direction: column;
  }
  #laurel{
    display: flex;
    justify-content: center;
  }
  #winnerLogo{
    display: flex;
    align-self: flex-end;
  }
  #winner{
    align-self: center;
    font-size: 50px;
    font-weight: bolder;
  }
</style>
