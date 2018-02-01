<template>
  <div class='games-container'>
    <div v-for="game in games" :key="game.appid">
      <Gamecard
        v-if="game.img_logo_url"
        :position="index"
        :game="game"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Gamecard from './Gamecard'

export default {
  name: 'Games',
  props: ['games'],
  components: {
    Gamecard
  }
}
</script>

<style>
  .games-container {
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
    flex-wrap: wrap;
  }
</style>

