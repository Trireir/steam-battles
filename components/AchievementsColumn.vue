<template>
  <div>
    <AchievementsHeader
      :user="userPhoto"
      :friend="friendPhoto"
    />
    <div v-if='!achievements'>
      <p>This game don't have achievements</p>
    </div>
    <div v-for="achievement in achievements" :key="achievement.displayName">
      <Achievements
        :achievement='achievement'
      />
    </div>
  </div>
</template>

<script>
import Achievements from './Achievements'
import AchievementsHeader from './AchievementsHeader'

export default {
  name: 'AchievementsColumn',
  props: ['achievements', 'userPhoto', 'friendPhoto'],
  components: {
    Achievements,
    AchievementsHeader
  }
}
</script>
