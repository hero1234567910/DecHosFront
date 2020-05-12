import Vue from 'vue'
import IndexView from './index.vue'
import axios from 'axios'
import $ from 'jquery'
import  FastClick  from  'fastclick'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../../../static/css/jquery-weui.min.css'
import '../../../static/lib/weui.css'
import '../../../static/css/local.css'
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import IdCard from "../../entry/index/components/IdCard";
   
   FastClick.attach(document.body);
Vue.use(ElementUI);
Vue.prototype.axios = axios
Vue.prototype.validid = IdCard;
new Vue({
  el: '#app',
  router,
  render: h => h(IndexView)
});
