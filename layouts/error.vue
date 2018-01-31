<template>
  <div class="container">
    <div v-if="error.statusCode === 404">
      <span>It seems that this page doesn't exist...</span>
      <span>C'mon! Don't be rude! This page was made in a hackathon velocity and the fuel was coffee!</span>
    </div>
    <div v-if="error.statusCode === 400">

    </div>





    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/">Come back to the beginning</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>
