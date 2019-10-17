import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import TokenService from '@/api/token-service';

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
  },
  setHeader() {
    Vue.axios.defaults.headers.common.Authorization = `Bearer ${TokenService.getToken()}`;
  },
  removeHeader() {
    Vue.axios.defaults.headers.common.Authorization = null;
  },
};

export default ApiService;
