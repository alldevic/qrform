import config from "./config.js";
import axios from "axios";

console.log(config.baseURL);

export const API = {
    getChecklist() {
        return axios({
            method: "get",
            url: config.baseURL
        });
    },
    getPlatform() {
        return axios({
            method: "get",
            url: config.baseURL
        });
    }
};
