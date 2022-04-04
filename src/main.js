import Vue from "vue";
import App from "./App.vue";
//라우터
import { router } from "./routers/index";
//스토어
import { store } from "./store/index";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router, //router: router
  store,
}).$mount("#app");
