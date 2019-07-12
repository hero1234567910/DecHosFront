import Vue from 'vue'
import Router from 'vue-router'
import reportMainList from '../components/reportMainList.vue'
import reportTab from '../components/reportTab.vue'
import reportDetail from '../components/reportDetail'
import labReportDetail from '../components/labReportDetail'
import userFiling from '../components/userFiling'
import examinationList from '../components/examinationList'
import examinationDetail from '../components/examinationDetail'

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
   {
      path: '/userFiling',
      name: 'userFiling',
      component: userFiling
   },
   {
      path: '/examinationList',
      name: 'examinationList',
      component: examinationList
   },
   {
      path: '/examinationDetail',
      name: 'examinationDetail',
      component: examinationDetail
   }
  ]
})
