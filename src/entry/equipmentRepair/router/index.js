import Vue from 'vue'
import Router from 'vue-router'
import myRepairList from '../components/myRepairList.vue'
import repairOnline from '../components/repairOnline.vue'
import repairDetail from '../components/repairDetail.vue'
import repairSatisfaction from '../components/repairSatisfaction.vue'

Vue.use(Router);

export default new Router({
  routes: [
  	{
      path: '/',
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
   }
  ]
})
