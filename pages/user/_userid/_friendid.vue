<template class="friendContainer">
  <div>
    <div v-if='!friendError'>
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
            :userPhoto='games.user.avatarmedium'
            :friendPhoto='games.friend.avatarmedium'
          />
        </div>
    </div> 
    <div v-else>
      <PrivateError />
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
import PrivateError from '../../../components/PrivateError'

export default {
  computed: mapState([
    'games',
    'friendError'
  ]),
  components: {
    AchievementsColumn,
    AchievementsHeader,
    Classification,
    Games,
    Logo,
    PrivateError
  },
  async asyncData({ store, route }) {
    await store.dispatch('LOAD_COMMON_GAMES', {
      userid: route.params.userid,
      friendid: route.params.friendid
    })
  }
}
</script>
