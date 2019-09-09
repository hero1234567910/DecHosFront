import Vue from "vue";
import Router from "vue-router";
import doctorLoginPage from "../components/doctorLoginPage.vue";
import doctorMenu from "../components/doctorMenu.vue";
import myRepairList from '../components/myRepairList.vue';
import repairOnline from '../components/repairOnline.vue';
import repairDetail from '../components/repairDetail.vue';
import repairSatisfaction from '../components/repairSatisfaction.vue';
import repairSatisfactionList from '../components/repairSatisfactionList.vue';

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
    },
    {
      path: '/myRepairList',
      name: 'myRepairList',
      component: myRepairList
   },
   {
     path:'/repairOnline',
     name: 'repairOnline',
     component:repairOnline
   },
   {
     path:'/repairDetail',
     name:'repairDetail',
     component:repairDetail
   },
   {
     path:'/repairSatisfaction',
     name:'repairSatisfaction',
     component:repairSatisfaction
   },
   {
     path:'/repairSatisfactionList',
     name:'repairSatisfactionList',
     component:repairSatisfactionList
   }
  ]
});
