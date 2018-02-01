<template>
  <div class="container">
    <div v-if="error.statusCode === 404">
      <img
        src="~/assets/not-found.jpg"
      />
      <span>It seems that this page doesn't exist...</span>
    </div>
    <div v-if="error.statusCode === 418">
      <img
        src="~/assets/teapot.jpg"
      />
    </div>
    <div v-else class="general-error">
      <div class="notification is-danger column error-notification">
        <span>C'mon! Don't be rude!</span>
        <span>This page was made in a hackathon velocity and the fuel was coffee!</span>
      </div>
      <img
        src="~/assets/leggo-my-coffee.png"
      />
    </div>

    <h1>An error occurred</h1>
    <nuxt-link to="/">Come back to the beginning</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>
