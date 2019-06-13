import Vue from 'vue'
import Router from 'vue-router'
import PersonalCenterView from './personalCenter.vue'
import axios from 'axios'
import $ from 'jquery'

//Vue.use(ElementUI);
Vue.prototype.axios = axios
new Vue({
  el: '#app',
  render: h => h(PersonalCenterView)
});