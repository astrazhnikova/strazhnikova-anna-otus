import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VueRouter from "vue-router";
import App from "./App.vue";

import Main from "./components/Main";
import Game from "./components/Game";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueRouter);

const routes = [
  { path: "/game", component: Game },
  { path: "*", component: Main }
];

export const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
