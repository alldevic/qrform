import Vue from "vue";
import Vuex from "vuex";
import checklists from "./modules/checklists";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        checklists
    }
});
