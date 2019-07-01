import Vue from 'vue'
import Router from 'vue-router'
import reportMainList from '../components/reportMainList.vue'
import reportTab from '../components/reportTab.vue'

Vue.use(Router);

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'reportMainList',
      component: reportMainList
   },
   {
      path: '/reportTab',
      name: 'reportTab',
      component: reportTab
   },
  ]
})
