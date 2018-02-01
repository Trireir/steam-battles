<template>
  <nuxt-link
    :to="link"
  >
    <div
      class="friend-card"
    >
      <img class="friend-photo" v-bind:src="friend.avatar">
      <p class="friend-name">{{friend.name}}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Friend',
  props: ['friend', 'link']
}
</script>
