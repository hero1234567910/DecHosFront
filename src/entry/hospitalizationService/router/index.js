import Vue from 'vue'
import Router from 'vue-router'
import hospitalizationList from '../components/hospitalizationList.vue'
import advancePay from '../components/advancePay.vue'

Vue.use(Router);

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'hospitalizationList',
      component: hospitalizationList
   },
   {
   	path:'/advancePay',
   	name:'advancePay',
   	component:advancePay
   }
  ]
})
