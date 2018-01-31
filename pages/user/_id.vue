<template>
  <div>
    {{user.personaname}}
    <img
      v-bind:src="user.avatar"
    />
    Have {{Object.keys(friends).length}} friends
    <ul class="list pa2">
      <li v-for="friend in friends" :key="friend.id">
        <div>
          <nuxt-link :to="`/user/${user.id}/${friend.id}`">{{friend.name}}</nuxt-link>
          <img
            v-bind:src="friend.avatar"
          />
          <a v-bind:href="friend.profile" target="_blank">Visit Profile</a>    
          {{friend.visibility}} visibility
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState([
    'userError',
    'user',
    'friends'
  ]),

  async asyncData({ store, route }) {
    await store.dispatch('LOAD_DATA', route.params.id)
  }
}
</script>
