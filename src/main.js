import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap-vue/dist/bootstrap-vue.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue } from "bootstrap-vue";
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.config.productionTip = false;
Vue.use(BootstrapVue, axios, VueAxios,);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
