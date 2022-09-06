import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import { publicRoutes } from "./routes";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

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
