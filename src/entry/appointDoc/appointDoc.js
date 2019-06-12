import Vue from 'vue'
import IndexView from './appointDoc.vue'
import axios from 'axios'
import $ from 'jquery'
import  FastClick  from  'fastclick'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
   
   FastClick.attach(document.body);
Vue.use(ElementUI);
Vue.prototype.axios = axios
new Vue({
  el: '#app',
  render: h => h(IndexView)
});
