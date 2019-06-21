import Vue from 'vue'
import Router from 'vue-router'
import consultationList from '../components/consultationList.vue'
import consultationPage from '../components/consultationPage.vue'
import consultationDetails from '../components/consultationDetails.vue'

Vue.use(Router);

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'consultationList',
      component: consultationList
   },
   {
      path: '/consultationPage',
      name: 'consultationPage',
      component: consultationPage
   },
   {
      path: '/consultationDetails',
      name: 'consultationDetails',
      component: consultationDetails
   }
  ]
})
