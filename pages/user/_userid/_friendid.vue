<template class="friendContainer">
  <div>
    <div v-if='!friendidError'>
      <Logo />
      <Classification
        :user='games.user'
        :friend='games.friend'
      />
      <span id="commonMessage">
        This are the {{games.common.length}} games and achievements you have in common
      </span>
        <div class="">
          <Games
            :games='games.common'
          />
        </div>
        <!-- <div class="column">
          <AchievementsHeader
            :user="games.user.avatarmedium"
            :friend="games.friend.avatarmedium"
          />
          <AchievementsColumn
            :achievements='games.common.achievements'
          />  
        </div>         -->

    </div> 
    <div v-if='friendidError'>
      {{friendidError}}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AchievementsColumn from '../../../components/AchievementsColumn'
import AchievementsHeader from '../../../components/AchievementsHeader'
import Classification from '../../../components/Classification'
import Games from '../../../components/Games'
import Logo from '../../../components/Logo'

export default {
  computed: mapState([
    'games',
    'friendidError'
  ]),
  components: {
    AchievementsColumn,
    AchievementsHeader,
    Classification,
    Games,
    Logo
  },
  async asyncData({ store, route }) {
    await store.dispatch('LOAD_COMMON_GAMES', {
      userid: route.params.userid,
      friendid: route.params.friendid
    })
  }
}
</script>
