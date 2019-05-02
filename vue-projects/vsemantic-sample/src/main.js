import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "semantic-ui-css/semantic.min.css";
import SuiVue from "semantic-ui-vue";

Vue.config.productionTip = false;

Vue.use(SuiVue);

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
