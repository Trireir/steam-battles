<template>
  <div v-bind:class="getClassList()">
    <div id="gameContainer" style="display: flex; cursor: pointer; align-items: center" v-on:click="selectGame()">
      <img
        id='border'
        v-if='game.img_logo_url'
        v-bind:src="`http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_logo_url}.jpg`"
      />
      <span id="gameName">
        {{game.name}}
      </span>
      <img
        class="arrow"
        v-if='this.selectedGame === this.position'
        src="~/assets/arrow.png"
      >
    </div>
  </div>
</template>

<script>
import Achievements from './Achievements'

export default {
  name: 'Gamecard',
  props: ['position', 'game', 'selectedGame'],
  methods: {
    selectGame() {
      this.$store.commit('selectGame', this.position)
    },
    getClassList() {
      if(this.selectedGame === this.position) {
        return 'selected-game'
      }
      return '';
    }
  },
  components: {
    Achievements
  }
}
</script>

<style>
  .cell-fade-enter-active, .cell-fade-leave-active {
    transition: all 1s ease;
  }
  .cell-fade-enter, .cell-fade-leave-to {
    opacity: 0;
    transform: translateY(-50px);
  }
  div{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  #border {
    border-style: groove;
  }
  #gameName{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    align-self: center;
    margin-left: 10px;
    font-weight: 500;
  }
  #gameContainer:hover{
    background-color: WhiteSmoke;
  }
</style>
