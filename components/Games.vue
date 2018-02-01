<template>
  <div>
    <ul>
      <li v-for="(game, index) in games" :key="game.appid">
        <Gamecard
          :position="index"
          :game="game"
          :selectedGame="selectedGame"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Gamecard from './Gamecard'

export default {
  name: 'Games',
  props: ['games', 'selectedGame'],
  components: {
    Gamecard
  }
}
</script>
