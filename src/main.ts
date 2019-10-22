import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import ymap from './plugins/ymap';
import constants from './constants/constants';

Vue.config.productionTip = false;
Vue.use(constants);
Vue.use(ymap);


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
