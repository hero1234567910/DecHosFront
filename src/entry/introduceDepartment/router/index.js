import Vue from "vue";
import Router from "vue-router";
import departmentList from "../components/departmentList.vue";
import departmentDetail from "../components/departmentDetail.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "departmentList",
      component: departmentList
    },
    {
      path: "/departmentDetail",
      name: "departmentDetail",
      component: departmentDetail
    }
  ]
});
