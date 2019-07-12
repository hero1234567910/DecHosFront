import Vue from 'vue'
import IndexView from './pay.vue'
import axios from 'axios'
import $ from 'jquery'
import  FastClick  from  'fastclick'
import router from './router'
import '../../../static/css/jquery-weui.min.css'
import '../../../static/lib/weui.css'
import '../../../static/css/local.css'
   
   FastClick.attach(document.body);
//Vue.use(ElementUI);
Vue.prototype.axios = axios
new Vue({
  el: '#app',
  router,
  render: h => h(IndexView)
});

