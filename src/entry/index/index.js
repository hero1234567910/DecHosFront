import Vue from 'vue'
import ElementUI from 'element-ui';
import IndexView from './index.vue'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import axios from 'axios'

// import VueResource from 'vue-resource';
// Vue.use(VueResource);
Vue.use(ElementUI);
Vue.prototype.axios = axios
new Vue({
  el: '#app',
  router,
  render: h => h(IndexView)
});

