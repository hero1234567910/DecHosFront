import Vue from 'vue'
import Router from 'vue-router'
import outhospitalList from '../components/outhospitalList.vue'
import evaluate from '../components/evaluate.vue'

Vue.use(Router);

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'outhospitalList',
      component: outhospitalList
   },
   {
      path: '/evaluate',
      name: 'evaluate',
      component: evaluate
   	}
  ]
})
