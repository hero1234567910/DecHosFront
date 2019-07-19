import Vue from "vue";
import Router from "vue-router";
import reservationDetail from "../components/reservationDetail.vue";
import reservationList from "../components/reservationList.vue";
import mycenter from "../../index/components/mycenter.vue";
import userFiling from '../components/userFiling.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "reservationList",
      component: reservationList
    },
    {
      path: "/reservationDetail",
      name: "reservationDetail",
      component: reservationDetail
    },
    {
      path: "/mycenter",
      name: "mycenter",
      component: mycenter
    },
    {
      path: "/userFiling",
      name: "userFiling",
      component: userFiling
    }
  ]
});
