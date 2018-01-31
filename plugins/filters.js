import Vue from 'vue';

Vue.filter('minuteToHour', timestamp => (
  Number(timestamp) / 60
));
