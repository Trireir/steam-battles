<template>
  <div id="paper">
    <Logo />
    Put your name here, and let the battle begin!
    <input 
      v-on:input="setInputUser"
    />
    <h1>{{indexError}}</h1>
    <button
      class="f6 no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue"
      v-on:click="validateUsername"
    >Primary</button>

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
    flex-direction: column;
  }
</style>
