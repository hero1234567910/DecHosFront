<template>
  <div style="height: 100%;background-color: #EFF7FD;">
 		<router-view :key="$route.fullPath"></router-view>
  </div>
</template>


<script>
	
import weui from 'jquery-weui/dist/js/jquery-weui.min'
import model from './model.js'
import outhospitalList from './components/outhospitalList'

  export default {
	components:{outhospitalList},
	data() {
    	this.model = model(this.axios)
      return {
      	zjh:localStorage.getItem('sec_patientIdcard'),
      	hzxm:localStorage.getItem('sec_patientName'),
      	patid:''
      }
    },
    mounted(){
//  	this.getInfo();
    },
	methods:{
		
//		//检查是否有绑定并查询患者门诊信息
//			getInfo(){
//				let self = this;
//				if(self.zjh == null || self.zjh == ''){
//					$.confirm("您并未绑定身份证，请先绑定","提示",function() {
//							if (process.env.NODE_ENV == 'dev') {
//							  window.location='../index.html'
//							} else if (process.env.NODE_ENV == 'production') {
//							  window.location='../2ysechos/index.html'
//							}
//						}, function() {
//					  	if (process.env.NODE_ENV == 'dev') {
//							  window.location='../index.html'
//							} else if (process.env.NODE_ENV == 'production') {
//							  window.location='../2ysechos/index.html'
//							}
//					  });
//				}
//				
//		},
		
		//获取url中的参数
		 GetQueryString(name){
			     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
			     var r = window.location.search.substr(1).match(reg);//search,查询？后面的参数，并匹配正则
			     if(r!=null)return  decodeURI(r[2]); return null;
			},
			
		}
  }
  </script>

<style scoped>
	
</style>
