<template>
  <div style="height: 100%;background-color: #EFF7FD;overflow: auto;">
 		<router-view :key="$route.fullPath" :patid="patid"></router-view>
  </div>
</template>


<script>
	
import weui from 'jquery-weui/dist/js/jquery-weui.min'
import model from './model.js'
import outpatientMain from './components/outpatientMain'
import userFiling from './components/userFiling'
import appointDoc from './components/appointDoc'
import outpatientMainToday from './components/outpatientMainToday'
import appointChoice from './components/appointChoice'


  export default {
	components:{outpatientMain,userFiling,appointDoc,outpatientMainToday,appointChoice},
	data() {
    	this.model = model(this.axios)
      return {
      	zjh:localStorage.getItem('sec_patientIdcard'),
      	hzxm:localStorage.getItem('sec_patientName'),
      	patid:''
      }
    },
    mounted(){
      	 this.getInfo();
    },
	methods:{
		//获取url中的参数
		 GetQueryString(name){
			     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
			     var r = window.location.search.substr(1).match(reg);//search,查询？后面的参数，并匹配正则
			     if(r!=null)return  decodeURI(r[2]); return null;
			},
			//检查是否有绑定并查询患者门诊信息
			getInfo(){
				let self = this;
				this.zjh = localStorage.getItem('sec_patientIdcard');
				this.hzxm = localStorage.getItem('sec_patientName');
				if(this.zjh == 'null' || this.zjh == '' || this.zjh == null){
					$.confirm("您并未绑定身份证，请先绑定","提示",function() {
							if (process.env.NODE_ENV == 'dev') {
							  window.location='../index.html#/userBinding'
							} else if (process.env.NODE_ENV == 'production') {
							  window.location='../2ysechos/index.html#/userBinding'
							}
						}, function() {
					  	if (process.env.NODE_ENV == 'dev') {
							  window.location='../index.html'
							} else if (process.env.NODE_ENV == 'production') {
							  window.location='../2ysechos/index.html'
							}
					  });
					  return;
				}
				if(localStorage.getItem('sec_flag') == 'zf'){
					self.patid = localStorage.getItem('zfpatid');
				}
				if(localStorage.getItem('sec_flag') == 'cb'){
					self.patid = localStorage.getItem('cbpatid');
				}
				if(localStorage.getItem('sec_flag') == ''){
					$.alert("未查询到您的信息，请先建档", "提示", function() {
						  //点击确认后的回调函数
					  self.$router.push('/userFiling?zjh='+self.zjh+'&hzxm='+self.hzxm);
					});
				}
//				let data={
//					hzxm:this.hzxm,
//					zjh:this.zjh,
//					action:'mz',
//					openid:localStorage.getItem('sec_openId')
//				}
//				
//				this.model.getInfo(data).then(function(res){
//					if(res.data.code == '0'){
//						//门诊模块 就取门诊自费并且病历号最大的
//						let blh = '';
//						let outArray = res.data.data;
//						for(var i=0;i<outArray.length;i++){
//								if(outArray[i].ybdm == '101'){
//									blh = outArray[i].blh;
//									self.patid = outArray[i].patid;
//									break;
//								}
//								//门诊医保病人
//								if(outArray[i].ybdm == '701'){
//									blh = outArray[i].blh;
//									self.patid = outArray[i].patid;
//									localStorage.setItem('sec_yb',true);								
//								}
//						}
//						if(blh == ''){
//							$.alert("未查询到您的信息，请先建档", "提示", function() {
//								self.$router.push('/userFiling?zjh='+self.zjh+'&hzxm='+self.hzxm);
//						  //点击确认后的回调函数
////						  if (process.env.NODE_ENV == 'dev') {
////								  window.location='../../userFiling?zjh='+self.zjh+'&hzxm='+self.hzxm;
////								} else if (process.env.NODE_ENV == 'production') {
////								  window.location='../../2ysechos/userFiling?zjh='+self.zjh+'&hzxm='+self.hzxm;
////								}
//							});
//								
//							return;
//						}
//					}
//					if(res.data.msg == '未查询到门诊患者'){
//						$.alert("未查询到您的信息，请先建档", "提示", function() {
//						  //点击确认后的回调函数
////						  self.$router.push('/userFiling?zjh='+self.zjh)
////						  if (process.env.NODE_ENV == 'dev') {
////								  window.location='../../index.html#/userFiling?zjh='+this.zjh+'&hzxm='+this.hzxm;
////								} else if (process.env.NODE_ENV == 'production') {
////								  window.location='../../2ysechos/index.html#/userFiling?zjh='+this.zjh+'&hzxm='+this.hzxm;
////								}
//									self.$router.push('/userFiling?zjh='+self.zjh+'&hzxm='+self.hzxm);
//						});
//					}
//				})
			}
		}
  }
  </script>

<style scoped>
	
</style>
