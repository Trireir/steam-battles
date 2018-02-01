<template>
  <div
    class="notification is-primary friend-card"
  >
    <nuxt-link
      :to="link"
    >
      <img v-bind:src="friend.avatar">
      <p class="subtitle is-4 is-marginless"><strong>{{friend.name}}</strong></p>
    </nuxt-link>
    <a v-bind:href="friend.profile" target="_blank">Visit Profile</a> 
  </div>
</template>

<script>
export default {
  name: 'Friend',
  props: ['friend', 'link']
}
</script>
