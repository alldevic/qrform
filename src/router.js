import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: () =>
                import(/* webpackChunkName: "home" */ "./views/Home.vue")
        },
        {
            path: "/platforms",
            name: "platforms",
            component: () =>
                import(/* webpackChunkName: "platforms" */ "./views/Platforms.vue")
        }
    ]
});
