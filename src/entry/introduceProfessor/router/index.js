import Vue from "vue";
import Router from "vue-router";
import professorList from "../components/professorList.vue";
import departmentList from "../components/departmentList.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "departmentList",
      component: departmentList
    },
    {
      path: "/professorList",
      name: "professorList",
      component: professorList
    }
  ]
});
