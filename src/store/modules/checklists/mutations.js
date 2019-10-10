import types from "../../types";

export const mutations = {
    [types.SET_CHECKLIST](state, payload) {
        state.checklist = payload;
    }
};
