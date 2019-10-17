import Vue from 'vue';
import Router from 'vue-router';
import ShopList from '@/views/equipment/ShopList.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'equipment',
      component: ShopList,
    },
    {
      path: '/equipment/:id/details',
      name: 'equipment-detail',
      component: () => import('./views/equipment/ShopDetail.vue'),
      props: true,
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('./views/projects/ProjectList.vue'),
    },
    {
      path: '/exports',
      name: 'exports',
      component: () => import('./views/exports/ExportList.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('./views/Settings.vue'),
    },
  ],
});
