import Vue from 'vue'
import IndexView from './diseaseManage.vue'
import axios from 'axios'
import $ from 'jquery'
import FastClick from 'fastclick'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../../../static/css/jquery-weui.min.css'
import '../../../static/lib/weui.css'
import '../../../static/css/local.css'
import 'vant/lib/index.css';
import { Dialog } from 'vant';
import { DatetimePicker } from 'vant';
import { Form } from 'vant';
import { Field } from 'vant';
import { Popup } from 'vant';
import { Button } from 'vant';

Vue.use(Button);
Vue.use(Popup);
Vue.use(Form);
Vue.use(Field);
Vue.use(DatetimePicker);
// 全局注册
Vue.use(Dialog);
   
FastClick.attach(document.body);
Vue.use(ElementUI);
Vue.prototype.axios = axios
new Vue({
  el: '#app',
  router,
  render: h => h(IndexView)
});

