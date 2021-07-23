import Vue from 'vue'
import Router from 'vue-router'
import indexComp from '../components/index.vue'

Vue.use(Router);

export default new Router({
  routes: [
  	{
      path: '/',
      name:'index',
      component: indexComp,
      
      // children:[{
      //   path: '/saveInfo',
      //   component: ()=> import('../components/saveInfo.vue')
      // },{
      //   path: '/historyInfo',
      //   component: ()=> import('../components/historyInfo.vue'),
      //   redirect:'/historyList',
      //   children:[{
      //     path: '/historyList',
      //     component: ()=> import('../components/historyList.vue'),
      //   },{
      //     path: '/infoDetail',
      //     component: ()=> import('../components/infoDetail.vue'),
      //   }]
      // }]
   },
   {
    path: '/infoList',
    name:'infoList',
    component:() => import("../components/infoList.vue"),
  },
  {
    path: '/userDetail',
    name:'userDetail',
    component:() => import("../components/userDetail.vue"),
  }
  //  {
  //     path: '/cs',
  //     component: ()=> import('../components/cs.vue')
  //   }
  ]
})
