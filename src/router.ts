import Vue from 'vue';
import Router from 'vue-router';
import Platforms from '@/views/platforms/Platforms.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'platforms',
      component: Platforms,
    },
  ],
});
