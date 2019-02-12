import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify, {
  theme: {
    primary: "#ffeb3b",
    secondary: "#607d8b",
    accent: "#8bc34a",
    error: "#f44336",
    warning: "#ff5722",
    info: "#00bcd4",
    success: "#4caf50"
  },
  iconfont: "md"
});
