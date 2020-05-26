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
      component: departmentList,
      meta: {
        keepAlive: true, //此组件需要被缓存
        isBack: false 
      },
    },
    {
      path: "/professorList",
      name: "professorList",
      component: professorList,
      meta: {
        keepAlive: true, //此组件需要被缓存
        isBack: false 
      },
    }
  ]
});
