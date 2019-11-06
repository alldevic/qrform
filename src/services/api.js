import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import BASE_URL from "./config";

const ApiService = {
    init() {
        Vue.use(VueAxios, axios);
        Vue.axios.defaults.baseURL = BASE_URL;
    },
    get(resource, id = "") {
        return Vue.axios.get(`${resource}/${id}`);
    },
    post(resource, params) {
        return Vue.axios.post(`${resource}/`, params);
    }
};

export default ApiService;
