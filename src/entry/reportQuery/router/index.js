import Vue from 'vue'
import Router from 'vue-router'
import reportMainList from '../components/reportMainList.vue'
import reportTab from '../components/reportTab.vue'
import reportDetail from '../components/reportDetail'
import labReportDetail from '../components/labReportDetail'
import userFiling from '../components/userFiling'
import examinationList from '../components/examinationList'
import examinationDetail from '../components/examinationDetail'
import examinationItemDetail from '../components/examinationItemDetail'

Vue.use(Router);

export default new Router({
  routes: [
  	{
  		meta:{
      	keepAlive: false
     },
      path: '/',
      name: 'reportMainList',
      component: reportMainList
   },
   {
   		meta:{
      	keepAlive: false
     },
      path: '/reportTab',
      name: 'reportTab',
      component: reportTab
   },
   {
   		meta:{
      	keepAlive: false
     },
      path: '/reportDetail',
      name: 'reportDetail',
      component: reportDetail
   },
   {
   		meta:{
      	keepAlive: false
     },
      path: '/labReportDetail',
      name: 'labReportDetail',
      component: labReportDetail
   },
   {
   		meta:{
      	keepAlive: false
     },
      path: '/userFiling',
      name: 'userFiling',
      component: userFiling
   },
   {
   		meta:{
      	keepAlive: false
     },
      path: '/examinationList',
      name: 'examinationList',
      component: examinationList
   },
   {
      path: '/examinationDetail',
      name: 'examinationDetail',
      component: examinationDetail,
       meta: {
              keepAlive: true, //此组件需要被缓存
              isBack:false, //用于判断上一个页面是哪个
          }
   },
   {
      path: '/examinationItemDetail',
      name: 'examinationItemDetail',
      component: examinationItemDetail,
      meta:{
      	keepAlive: false
      }
   }
  ]
})
