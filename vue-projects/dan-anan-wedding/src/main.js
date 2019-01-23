import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
// import '@font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  theme: {
    primary: '#00b0ff',
    secondary: '#90caf9',
    accent: '#ff5252',
    error: '#b71c1c',
    info: '#0097a7',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
  iconfont: 'fa4',
}).$mount('#app');
