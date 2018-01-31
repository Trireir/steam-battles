<template>
  <div>
    <div id="gameContainer" style="display: flex; cursor: pointer" v-on:click="toggle()">
      <img
        id='border'
        v-if='game.img_logo_url'
        v-bind:src="`http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_logo_url}.jpg`"
      />
      <span id="gameName">
        {{game.name}}
      </span>
    </div>
    <transition-group name="cell-fade" mode="out-in" duration="1000">
      <div v-if="this.showAchievements && game.achievements" v-bind:key="'achievements'">
        <div>
          <img
            id='border'
            v-bind:src="friendPic"
          />
          <img
            id='border'
            v-bind:src="userPic"
          />
        </div>
        <li v-for="achievement in game.achievements" :key="achievement.displayName">
          <Achievements
            :achievement='achievement'
          />
        </li>
      </div>
    </transition-group>
  </div>
</template>

<script>
import Achievements from './Achievements'

export default {
  name: 'Gamecard',
  props: ['game', 'userPic', 'friendPic'],
  data: () => ({
    showAchievements: false,
  }),
  methods: {
    toggle() {
      this.showAchievements = !this.showAchievements
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
