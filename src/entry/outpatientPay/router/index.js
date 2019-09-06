import Vue from 'vue'
import Router from 'vue-router'
import outpatientPayMain from '../components/outpatientPayMain'
import ghPay from '../components/ghPay'
import mzPay from '../components/mzPay'
import userFiling from '../components/userFiling.vue'

Vue.use(Router);

export default new Router({
  routes: [
  	{
  		path: '/',
      name: 'outpatientPayMain',
      component: outpatientPayMain
  	},
  	{
  		path: '/ghPay',
      name: 'ghPay',
      component: ghPay
  	},
  	{
  		path: '/mzPay',
      name: 'mzPay',
      component: mzPay
  	},
  	{
      path: '/userFiling',
      name: 'userFiling',
      component: userFiling
   },
  ]
})
