import { nanoid } from "nanoid";
import Vue from "vue";
import VueCodemirror from "vue-codemirror";
import App from "./App.vue";
import "./core/lazy_use";
import router from "./router";
import store from "./store/";
import VueClipboard from "vue-clipboard2";

Vue.use(VueCodemirror);
Vue.use(VueClipboard);

Vue.config.productionTip = false;
Vue.prototype.$nid = nanoid;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
