import Vue from "vue";
import Router from "vue-router";
import outPaymentRecordsDetail from "../components/outPaymentRecordsDetail.vue";
import outPaymentRecordsList from "../components/outPaymentRecordsList.vue";
import userFiling from "../components/userFiling.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
    	meta:{
      	keepAlive: true,
      	isBack:false, //用于判断上一个页面是哪个
     },
      path: "/",
      name: "outPaymentRecordsList",
      component: outPaymentRecordsList
    },
    {
	    	meta:{
	      	keepAlive: false
	     },
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
