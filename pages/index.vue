<template>
  <div class="paper">
    <Logo />
    <h1 class="title big-margin-top">Put your name here, and let the battle begin!</h1>
    <div class="bigZone">
      <input
        class="input is-large has-text-centered"
        type="text"
        placeholder="Steam name"
        v-on:input="setInputUser"
      >
    </div>
    <h1>{{indexError}}</h1>
    <p
      class="button is-medium is-primary hvr-float-shadow medium-margin"
      v-on:click="validateUsername"
    >Look for an oponent</p>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Logo from '../components/Logo'

export default {
  computed: mapState([
    'indexError'
  ]),
  methods: {
    ...mapActions([
      'setInputUser',
      'validateUsername'
    ])
  },
  components: {
    Logo
  }
}
</script>
