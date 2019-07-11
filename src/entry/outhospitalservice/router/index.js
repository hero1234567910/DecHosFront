import Vue from 'vue'
import Router from 'vue-router'
import outhospitalList from '../components/outhospitalList.vue'

Vue.use(Router);

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'outhospitalList',
      component: outhospitalList
   }
  ]
})
