import Vue from "vue";
import Router from "vue-router";
import maintainLoginPage from "../components/maintainLoginPage.vue";
import maintainMenu from "../components/maintainMenu.vue";
import myMaintainList from '../components/myMaintainList.vue';
import maintainDetail from '../components/maintainDetail.vue';
import maintainRecordList from '../components/maintainRecordList.vue';
import maintainSatisfactionList from '../components/maintainSatisfactionList.vue';
import repairSatisfaction from '../components/repairSatisfaction.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "maintainLoginPage",
      component: maintainLoginPage
    },
    {
      path: "/maintainMenu",
      name: "maintainMenu",
      component: maintainMenu
    },
    {
      path: '/myMaintainList',
      name: 'myMaintainList',
      component: myMaintainList
   },
   {
     path:'/maintainDetail',
     name:'maintainDetail',
     component:maintainDetail
   },
   {
     path:'/maintainRecordList',
     name:'maintainRecordList',
     component:maintainRecordList
   },
   {
     path:'/maintainSatisfactionList',
     name:'maintainSatisfactionList',
     component:maintainSatisfactionList
   },
   {
     path:'/repairSatisfaction',
     name:'repairSatisfaction',
     component:repairSatisfaction
   }
  ]
});
