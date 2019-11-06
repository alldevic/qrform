import types from "@/store/types.js";
import ApiService from "@/services/api.js";

console.log(ApiService);

export const actions = {
    [types.FETCH_CHECKLIST]({ commit }) {
        return new Promise((resolve, reject) => {
            ApiService.get("5999")
                .then(({ data }) => {
                    console.log(data);
                    commit(types.SET_CHECKLIST, data);
                    resolve(data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                });
        });
    },
    [types.SEND_CHECKLIST](filledChecklist) {
        return new Promise((resolve, reject) => {
            ApiService.post("", filledChecklist)
                .then(({ data }) => {
                    console.log(data);
                    resolve(data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                });
        });
    }
};
