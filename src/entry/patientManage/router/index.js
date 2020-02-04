import Vue from "vue";
import Router from "vue-router";
import patientList from "../components/patientList.vue";
import userBinding from "../components/userBinding.vue";
import userFiling from "../components/userFiling.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "patientList",
      component: patientList
    },
    {
      path: "/userBinding",
      name: "userBinding",
      component: userBinding
    },
    {
      path: "/userFiling",
      name: "userFiling",
      component: userFiling
    }
  ]
});
