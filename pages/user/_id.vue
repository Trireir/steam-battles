<template>
  <div>
    <h1 class="title">Okey {{user.name}}, your time to shine finally arrive. Choose wisely your opponent and destroy him </h1>
    <div class="friend-list">
      <div v-for="friend in friends" :key="friend.id">
        <Friend :friend="friend" :link="`/user/${user.id}/${friend.id}`" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Friend from '~/components/Friend'
export default {
  computed: mapState([
    'userError',
    'user',
    'friends'
  ]),
  components: {
    Friend
  },

  async asyncData({ store, route }) {
    await store.dispatch('LOAD_DATA', route.params.id)
  }
}
</script>
