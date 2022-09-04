import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import { publicRoutes } from "./routes";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  mode: "history",
  routes: publicRoutes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
