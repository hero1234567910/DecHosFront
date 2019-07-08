import Vue from 'vue'
import Router from 'vue-router'
import outpatientMain from '../components/outpatientMain.vue'
import userFiling from '../components/userFiling.vue'


Vue.use(Router);

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'outpatientMain',
      component: outpatientMain
   },
   {
      path: '/userFiling',
      name: 'userFiling',
      component: userFiling
   }
  ]
})
