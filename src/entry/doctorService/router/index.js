import Vue from 'vue'
import Router from 'vue-router'
import userBinding from '../components/userBinding.vue'
import home from '../components/home.vue'
import mycenter from '../components/mycenter.vue'
import main from '../components/main.vue'
import userFiling from '../components/userFiling.vue'
import waitPatient from '../components/waitPatient.vue'

Vue.use(Router);

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'main',
      component: main
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
    },
    {
      path: '/waitPatient',
      name: 'waitPatient',
      component: waitPatient
    },
  ]
})
