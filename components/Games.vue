<template>
  <div>
    <ul class="list pa2">
      <li v-for="game in games" :key="game.appid">
        <Gamecard
          :game="game"
          :userPic='userPic'
          :friendPic='friendPic'
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Gamecard from './Gamecard'

export default {
  name: 'Games',
  props: ['games', 'userPic', 'friendPic'],
  components: {
    Gamecard
  }
}
</script>
