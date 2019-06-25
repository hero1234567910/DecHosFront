import Vue from 'vue'
import axios from 'axios'
import floorDistributionView from './floorDistribution.vue'
import $ from 'jquery'
import  FastClick  from  'fastclick'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import evn from '../index/utils/evn.js';
   
FastClick.attach(document.body);
Vue.use(ElementUI);
Vue.prototype.axios = axios
new Vue({
  el: '#app3',
  render: h => h(floorDistributionView),
});