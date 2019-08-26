<template>
  <div style="height: 100%;background-color: #EFF7FD;">
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>


<script>
import weui from "jquery-weui/dist/js/jquery-weui.min";
//import oneDayLiq from "./components/oneDayLiqList";
import model from './model.js'
import Jzlsh from './jzlsh.vue'
export default {
//components: { oneDayLiq },
  data() {
    this.model = model(this.axios);
    return {
      zjh: localStorage.getItem("sec_patientIdcard"),
      hzxm: localStorage.getItem("sec_patientName"),
      patientId: "",
      blh: "",
      jzlsh:''
    };
  },
  created(){
    this.getInfo();
  },
  mounted() {
    
  },
  methods: {
    //获取url中的参数
    GetQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg); //search,查询？后面的参数，并匹配正则
      if (r != null) return decodeURI(r[2]);
      return null;
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
//						let arr = [];
//						let outArray = res.data.data;
//						for(var i=0;i<outArray.length;i++){
//								if(outArray[i].ybdm == '101'){
//									let blh = outArray[i].blh;
//									arr.push(parseInt(blh));
//								}
//						}
//						arr.sort().reverse();
//						let val = arr[0];
//						for(var i=0;i<outArray.length;i++){
//							if(val == outArray[i].blh){
//								self.patid = outArray[i].patid;
//							}
//						}
//					}
//					if(res.data.msg == '未查询到门诊患者'){
//						$.alert("未查询到您的信息，请先建档", "提示", function() {
//						  //点击确认后的回调函数
////						  self.$router.push('/userFiling?zjh='+self.zjh)
//						  if (process.env.NODE_ENV == 'dev') {
//								  window.location='../../index.html#/userFiling?zjh='+zjh+'&hzxm='+hzxm;
//								} else if (process.env.NODE_ENV == 'production') {
//								  window.location='../../2ysechos/index.html#/userFiling?zjh='+zjh+'&hzxm='+hzxm;
//								}
//						});
//					}
//				})
			}
    
  }
};
</script>

<style scoped>
</style>
