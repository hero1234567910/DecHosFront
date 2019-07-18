import Vue from 'vue'
import Router from 'vue-router'
import noticeSuccess from '../components/noticeSuccess.vue'

Vue.use(Router);

export default new Router({
  routes: [
  	{
      path: "/noticeSuccess",
      name: "noticeSuccess",
      component: noticeSuccess
    },
  ]
})
