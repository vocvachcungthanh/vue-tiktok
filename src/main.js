import Vue from "vue";
import VueRouter from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import App from "./App.vue";
import { publicRoutes } from "./routes";

library.add(fas);
Vue.component("FontAwesomeIcon", FontAwesomeIcon);

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
