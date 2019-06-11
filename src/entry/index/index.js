import Vue from 'vue'
import IndexView from './index.vue'
import axios from 'axios'
import $ from 'jquery'

//Vue.use(ElementUI);
Vue.prototype.axios = axios
new Vue({
  el: '#app',
  render: h => h(IndexView)
});

