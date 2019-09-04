import Vue from "vue";
import Router from "vue-router";
import doctorLoginPage from "../components/doctorLoginPage.vue";
import doctorMenu from "../components/doctorMenu.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "doctorLoginPage",
      component: doctorLoginPage
    },
    {
      path: "/doctorMenu",
      name: "doctorMenu",
      component: doctorMenu
    }
  ]
});
