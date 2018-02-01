<template>
  <div class='card-container'>
    <img
      class='image'
      v-if='game.img_logo_url'
      v-bind:src="`http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_logo_url}.jpg`"
      v-on:click='toggle'
    />
    <span>
      {{game.name}}
    </span>
    <modal
      :name="`modal-${game.appid}`"
      height="auto"
      width="75%"
      :scrollable="true"
      transition="nice-modal-fade"
      :pivot-y="0.5"
      :adaptive="true"
      :reset="true"
    >
      <div class='modal-container'>
        <div class='card-container'>
          <img
            class='image'
            v-if='game.img_logo_url'
            v-bind:src="`http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_logo_url}.jpg`"
            v-on:click='toggle'
          />
          <span>
            {{game.name}}
          </span>
        </div>
        <AchievementsColumn
          v-if='game.achievements && game.achievements.length !== 0'
          :achievements='game.achievements'
          :userPhoto='userPhoto'
          :friendPhoto='friendPhoto'
        />
        <div v-else>
          This game don't have achievements
        </div>
      </div>
    </modal>

  </div>
</template>


<script>
import AchievementsColumn from './AchievementsColumn';
import AchievementsHeader from './AchievementsHeader';

export default {
  name: 'Gamecard',
  props: ['game', 'userPhoto', 'friendPhoto'],
  methods: {
    toggle() {
      this.$modal.show(`modal-${this.$props.game.appid}`);
    }
  },
  components: {
    AchievementsColumn
  }
}
</script>

<style>
  .card-container {
    display: flex;
    flex-direction: column;
    width: 184px;
    margin: 10px;
  }
  .image {
    height: 69px;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, .5);
  }

  .image:hover,
  .image:focus {
    box-shadow: 4px 8px 16px rgba(0, 0, 0, 0.5);
  }

  .modal1 {
    height: auto;
  }

  .modal-container {
    margin: 25px;
  }
</style>
