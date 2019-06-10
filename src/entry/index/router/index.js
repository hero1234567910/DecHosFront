import Vue from 'vue'
import Router from 'vue-router'
import SliderBar from '../components/common/SliderBar.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SliderBar',
      component: SliderBar
    }
  ]
})
