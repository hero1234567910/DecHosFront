import Vue from "vue";
import Router from "vue-router";
import outPaymentRecordsDetail from "../components/outPaymentRecordsDetail.vue";
import outPaymentRecordsList from "../components/outPaymentRecordsList.vue";
import userFiling from "../components/userFiling.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "outPaymentRecordsList",
      component: outPaymentRecordsList
    },
    {
        path: "/outPaymentRecordsDetail",
        name: "outPaymentRecordsDetail",
        component: outPaymentRecordsDetail
      }
      ,
    {
        path: "/userFiling",
        name: "userFiling",
        component: userFiling
      }
  ]
});
