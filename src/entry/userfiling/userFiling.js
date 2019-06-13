import Vue from 'vue'
import Router from 'vue-router'
import UserFilingView from './userFiling.vue'
import axios from 'axios'
import $ from 'jquery'

//Vue.use(ElementUI);
import  FastClick  from  'fastclick'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

FastClick.attach(document.body);
Vue.use(ElementUI);
Vue.prototype.axios = axios
new Vue({
  el: '#app',
  render: h => h(UserFilingView)
});