<template id="friendContainer">
  <div id="paper">
    <div v-if='!friendidError'>
      <Logo />
      <Classification
        :user='games.user'
        :friend='games.friend'
      />
      <span id="commonMessage">
        This are the {{games.common.length}} games and achievements you have in common
      </span>
      <Games
        :games='games.common'
        :userPic='games.friend.avatarmedium'
        :friendPic='games.user.avatarmedium'
      />
    </div> 
    <div v-if='friendidError'>
      {{friendidError}}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Classification from '../../../components/Classification'
import Games from '../../../components/Games'
import Logo from '../../../components/Logo'

export default {
  computed: mapState([
    'games',
    'friendidError'
  ]),
  components: {
    Classification,
    Games,
    Logo
  },
  async asyncData({ store, route }) {
    await store.dispatch('LOAD_COMMON_GAMES', { userid: route.params.userid, friendid: route.params.friendid })
  }
}
</script>

<style>
  #__layout{
    display: flex;
    justify-content: center;
    background-color: aliceblue;
  }
  #paper{
    width: 80%;
    background-color: white;
    display: flex;
    justify-content: center;
  }
  #commonMessage{
    /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif */
    /* font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI'
  }
</style>
