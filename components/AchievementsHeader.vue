<template>
  <div class="achievements-header">
    <img
      id='border'
      v-bind:src="user"
    />
    <img
      id='border'
      v-bind:src="friend"
    />
  </div>
</template>

<script>
export default {
  name: 'AchievementsHeader',
  props: ['user', 'friend']
}
</script>
