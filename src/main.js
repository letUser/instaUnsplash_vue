import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

export let routes = [
  {
    path: "/@jason_mowry_photo",
    name: "User"
  }
];

export let router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
