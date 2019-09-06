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
    	meta: {
          keepAlive: true, //此组件需要被缓存
          isBack:false, //用于判断上一个页面是哪个
      },
      path: "/",
      name: "reservationList",
      component: reservationList
    },
    {
    	meta:{
      	keepAlive: false
     },
      path: "/reservationDetail",
      name: "reservationDetail",
      component: reservationDetail
    },
    {
    	meta:{
      	keepAlive: false
     },
      path: '/userFiling',
      name: 'userFiling',
      component: userFiling
   },
  ]
});
