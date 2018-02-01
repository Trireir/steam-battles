<template>
  <div id="container">
    <div class="achievements-icons">
      <img
        id="border"
        v-bind:src="achievement.userAchieved ? achievement.icon : achievement.icongray"
      />
      <img
        id="border"
        v-bind:src="achievement.friendAchieved ? achievement.icon : achievement.icongray"
      />
    </div>
    <div id="achievementInfo">
      <p
        class="achievements-text achievements-title"
        style="
          display: flex;
          flex-grow: 1;
          margin-top: 10px;"
      >{{achievement.displayName}}</p>
      <p
        class="achievements-text achievements-description"
        style="
          display: flex;
          flex-grow: 1;
          margin-bottom: 10px;"
      >{{achievement.description}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Achievements',
  props: ['achievement']
}
</script>

<style>
  #container{
    display: flex;
    flex-direction: row;
  }
  #achievementInfo {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  #border {
    border-style: groove;
  }
</style>
