<template>
  <div id="container">
    <div>
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
        id="title"
        style="
          display: flex;
          flex-grow: 1;
          margin-top: 10px;"
      >{{achievement.displayName}}</p>
      <p 
        id="description"
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
  #title{
    font-weight: bold;
    font-size: 18px;
    justify-content: flex-start;
    margin: 0px;
    margin-left: 10px;
    max-width: 300px;
  }
  #description{
    margin: 0px;
    margin-left: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 650px;
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
