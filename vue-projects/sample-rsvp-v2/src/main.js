import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from "vuetify/lib";
import "vuetify/dist/vuetify.min.css";
import vuetify from "./plugins/vuetify";
import axios from "axios";

Vue.use(Vuetify);

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
