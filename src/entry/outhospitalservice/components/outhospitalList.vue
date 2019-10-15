<template>
  <div style="overflow: auto;">
  	<a href="javascript:void(0)" v-on:click="toInformation('cyyd')">
	 		<div class="hospital-panel" style="margin-top: 15px;">
	 			<div class="hospital-inner">
	 				<div class="hospital-img">
	 					<img src="../../../../static/images/出院.png" style="vertical-align: middle;width: 80%;"/>
	 				</div>
	 				<div class="hospital-title">
	 						<p style="color: #000000;font-size: 17px;position: absolute;top: 23px;">出院导引</p>
	 						<img src="../../../../static/images/圆角矩形-1.png"  style="position: absolute;top: 56px;width: 51%;"/>
	 				</div>
	 				<div class="hospital-arrow">
	 					<img src="../../../../static/img/ARROW.svg" style="position: absolute;top: 29px;width: 85%;left: 30px;"/>
	 				</div>
	 			</div>
	 		</div>
 		</a>
 		<a href="javascript:void(0)" @click="toInformation('fzyy')">
	 		<div class="hospital-panel">
	 			<div class="hospital-inner">
	 				<div class="hospital-img">
	 					<img src="../../../../static/images/复诊.png" style="vertical-align: middle;width: 80%;"/>
	 				</div>
	 				<div class="hospital-title">
	 						<p style="color: #000000;font-size: 17px;position: absolute;top: 23px;">复诊预约流程</p>
	 						<img src="../../../../static/images/圆角矩形-3.png"  style="position: absolute;top: 56px;width: 51%;"/>
	 				</div>
	 				<div class="hospital-arrow">
	 					<img src="../../../../static/img/ARROW.svg" style="position: absolute;top: 29px;width: 85%;left: 30px;"/>
	 				</div>
	 			</div>
	 		</div>
 		</a>
 		<a href="javascript:void(0)" @click="toEvaluate()">
	 		<div class="hospital-panel">
	 			<div class="hospital-inner">
	 				<div class="hospital-img">
	 					<img src="../../../../static/img/评价.svg" style="vertical-align: middle;width: 80%;"/>
	 				</div>
	 				<div class="hospital-title">
	 						<p style="color: #000000;font-size: 17px;position: absolute;top: 23px;">出院评价</p>
	 						<img src="../../../../static/images/圆角矩形-3.png"  style="position: absolute;top: 56px;width: 51%;"/>
	 				</div>
	 				<div class="hospital-arrow">
	 					<img src="../../../../static/img/ARROW.svg" style="position: absolute;top: 29px;width: 85%;left: 30px;"/>
	 				</div>
	 			</div>
	 		</div>
 		</a>
 		
 		<div style="margin-top: 30px;">
				<div>
					<a href="javascript:;" class="weui-btn weui-btn_primary" v-on:click="toindex()">返回主页</a>
				</div>
			</div>
  </div>
</template>


<script>
	import model from './model.js'
  export default {
  	data(){
  		this.model = model(this.axios);
  		return{
  			zjh:localStorage.getItem('sec_patientIdcard'),
      	hzxm:localStorage.getItem('sec_patientName'),
      	patientId:'',
      	blh:'',
      	flag:true,
      	zyzt:''
  		}
  	},
  	 mounted(){
    	this.getInfo();
    },
  	methods:{
  		toindex(){
  			if (process.env.NODE_ENV == 'dev') {
				  window.location='../../index.html'
				} else if (process.env.NODE_ENV == 'production') {
				  window.location='../../2ysechos/index.html'
				}
  		},
  		toInformation(str){
  			if (process.env.NODE_ENV == 'dev') {
				if(str == 'cyyd'){
  					window.location='../../hosProfile.html?infoType=OutHospital'
				}
				if(str == 'fzyy'){
  					window.location='../../hosProfile.html?infoType=FollowAppointment'
				}
				} else if (process.env.NODE_ENV == 'production') {
				if(str == 'cyyd'){
  					window.location='../../2ysechos/hosProfile.html?infoType=OutHospital'
  				}
  				if(str == 'fzyy'){
  					window.location='../../2ysechos/hosProfile.html?infoType=FollowAppointment'
  				}
				}
  		},
  		toEvaluate(){
  			if(this.zyzt == 4){
  				this.$router.push('/evaluate?patid='+this.patientId);
  			}else{
  				$.alert("您暂未出院", "提示", function() {
						});
  			}
  			
  		},
  		//检查是否有绑定并查询患者住院信息
  		//检查是否有绑定并查询患者住院信息
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
				
				let data={
					hzxm:this.hzxm,
					zjh:this.zjh,
					action:'zy',
					openid:localStorage.getItem('sec_openId')
				}
				
				this.model.getInfo(data).then(function(res){
					if(res.data.code == '0'){
						//住院缴费模块 就取病历号最大的
						let arr = [];
						let hosArray = res.data.data;
						for(var i=0;i<hosArray.length;i++){
								let blh = hosArray[i].blh;
								arr.push(parseInt(blh));
						}
						arr.sort().reverse();
						let val = arr[0];
						for(var i=0;i<hosArray.length;i++){
							if(val == hosArray[i].blh){
								self.patientId = hosArray[i].patid;
								self.blh = hosArray[i].blh;
								self.zyzt = hosArray[i].zyzt;
							}
						}
					}else{
						$.alert("未查询到您的住院信息", "提示", function() {
						});
					}
				})
			},
//			getInfo(){
//				let self = this;
//				if(self.zjh == null || self.zjh == ''){
//					$.alert("您并未绑定身份证，请先绑定","提示",function() {
//							if (process.env.NODE_ENV == 'dev') {
//							  window.location='../index.html'
//							} else if (process.env.NODE_ENV == 'production') {
//							  window.location='../2ysechos/index.html'
//							}
//					  });
//				}
//				
//				let data={
//					hzxm:this.hzxm,
//					zjh:this.zjh,
//					action:'zy',
//					openid:localStorage.getItem('sec_openId')
//				}
//				
//				this.model.getInfo(data).then(function(res){
//					if(res.data.code == '0'){
//						
//					}else{
//						$.alert("未查询到您的住院信息", "提示", function() {
//							self.flag = false;
//						});
//					}
//				})
//			}
  	}
  }
  </script>

<style>
	
</style>
<style scoped>
	.weui-btn_primary{
		background-color: #4CCBDB;
	}
	.weui-btn{
		width: 230px;
	}
	.hospital-arrow{
		position: relative;
		height: 85px;
		line-height: 85px;
		width: 35px;
		float: left;
	}
	.hospital-title{
		height: 85px;
		width: 200px;
		position: relative;
		float: left;
	}
	.hospital-img{
		width: 65px;
		height: 85px;
		line-height: 85px;
		float: left;
	}
	.hospital-inner{
		margin-left: auto;
		margin-right: auto;
		width: 300px;
		height: 85px;
	}
	.hospital-panel{
		margin-top: 5px;
		width: 100%;
		height: 85px;
		background-color: #FFFFFF;
	}
</style>
