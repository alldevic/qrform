import types from "@/store/types.js";

export const mutations = {
    [types.SET_CHECKLIST](state, payload) {
        state.checklist = payload;
    },
    [types.SET_PLATFORMS](state, payload) {
        state.platforms = payload;
    }
};
