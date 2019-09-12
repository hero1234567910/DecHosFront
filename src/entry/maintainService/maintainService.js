import Vue from 'vue'
import IndexView from './maintainService.vue'
import axios from 'axios'
import $ from 'jquery'
import  FastClick  from  'fastclick'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../../../static/css/jquery-weui.min.css'
import '../../../static/lib/weui.css'
import '../../../static/css/local.css'
import vuePicturePreview from 'vue-picture-preview'

Vue.use(vuePicturePreview)   
FastClick.attach(document.body);
Vue.use(ElementUI);
Vue.prototype.axios = axios

// router.beforeEach((to, from, next) => {
//   // to and from are both route objects. must call `next`.
//   let user = localStorage.getItem('m_token');
//   if(to.path == '/'){
//       if(user){
//           next({path:'/maintainMenu'})
//       }else{
//           next();
//       }
//   }else{
//       if(!user){
//           next({path:'/'})
//       }else{
//           next();
//       }
//   }
// });

new Vue({
  el: '#app',
  router,
  render: h => h(IndexView)
});
