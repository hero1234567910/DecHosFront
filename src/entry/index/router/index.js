import Vue from 'vue'
import Router from 'vue-router'
import userBinding from '../components/userBinding.vue'
import home from '../components/home.vue'
import mycenter from '../components/mycenter.vue'
import userFiling from '../components/userFiling.vue'

Vue.use(Router);

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'mycenter',
      component: mycenter
   },
    {
      path: '/userBinding',
      name: 'userBinding',
      component: userBinding
    },
    {
      path: '/userFiling',
      name: 'userFiling',
      component: userFiling
    }
  ]
})
