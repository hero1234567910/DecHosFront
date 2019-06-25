import Vue from 'vue'
import axios from 'axios'
import outPatientProcessView from './outPatientProcess.vue'
import $ from 'jquery'
import  FastClick  from  'fastclick'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import evn from '../index/utils/evn.js';
   
FastClick.attach(document.body);
Vue.use(ElementUI);
Vue.prototype.axios = axios
new Vue({
  el: '#app2',
  render: h => h(outPatientProcessView),
});

// function hosInfo(http) {
//   return {
//     // 获取医院简介信息
//     getHosIntroduction(data) {
//     	console.log(data);
//       return http.get(evn.SEC_HOSAPI+'wx/sys/informationinfo/getHosIntroduction',data,{
//       	headers:{
//       		'Content-Type': 'application/json;charset=utf-8'
//       	}
//       });
//     },
//   }

// }

// export default hosInfo