<template>
  <div>
    <transition-group name="cell-fade" mode="out-in" duration="1000">
      <div v-if='!achievements'>
        <p>This game don't have achievements</p>
      </div>
      <div v-for="achievement in achievements" :key="achievement.displayName">
        <Achievements
          :achievement='achievement'
        />
      </div>
    </transition-group>
  </div>
</template>

<script>
import Achievements from './Achievements'
import AchievementsHeader from './AchievementsHeader'

export default {
  name: 'AchievementsColumn',
  props: ['achievements'],
  components: {
    Achievements
  }
}
</script>
