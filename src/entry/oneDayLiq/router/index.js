import Vue from 'vue'
import Router from 'vue-router'
import oneDayLiqList from '../components/oneDayLiqList.vue'

Vue.use(Router);

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'oneDayLiqList',
      component: oneDayLiqList
   }
  ]
})
