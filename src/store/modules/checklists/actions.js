import types from "../../../store/types.js";
import { API } from "../../../services/api/service.js";

export const actions = {
    [types.FETCH_CHECKLIST]({ commit }) {
        return new Promise((resolve, reject) => {
            API.getChecklist()
                .then(response => {
                    console.log(response);
                    commit(types.SET_CHECKLIST, response.data);
                    resolve(response);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                });
        });
    }
};
