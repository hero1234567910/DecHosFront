import Vue from 'vue'
import Router from 'vue-router'
import reportMainList from '../components/reportMainList.vue'
import reportTab from '../components/reportTab.vue'
import reportDetail from '../components/reportDetail'
import labReportDetail from '../components/labReportDetail'

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
   {
      path: '/reportDetail',
      name: 'reportDetail',
      component: reportDetail
   },
   {
      path: '/labReportDetail',
      name: 'labReportDetail',
      component: labReportDetail
   },
  ]
})
