<template>
  <div style="overflow: auto;background-color: #EFF7FD;">
 		 <div class="ad-header">
  		<div class="ad-headerImg">
  			<img src="../../../../static/img/缴费.svg" style="width: 11%;position: absolute;top: 7px;
	    left: 17px;"/>
	  		</div>
	  		<div class="ad-title">
	  			<p style="font-size: 20px;font-weight: 700;">门诊缴费</p>
	  		</div>
  		</div>
  		<div style="">
	  		<!--<div class="panel-hero">
	  			<el-card class="box-card">
					  <div slot="header" class="clearfix">
					    <span>挂号结算</span>
					    <div style="height: 25px;width: 25px;float: right;position: relative;">
	  						<img src="../../../../static/img/单据.png" style="width: 200%;position: absolute;left: -18px;top: -12px;"/>
	  					</div>
					  </div>
					 <div class="text item">
					    {{content1}}<el-button style="float: right; padding: 3px 0" type="text" @click="selectBlh">选号</el-button>
					  </div>
					  <div class="text item">
					    {{content2}} <el-button style="float: right; padding: 3px 0" type="text" @click="selectSe">选择记录</el-button>
					  </div>
					  <div class="text item">
					    3.结算付款<el-button style="float: right; padding: 3px 0" type="text" @click="toghPay">点我结算</el-button>
					  </div>
					  <div class="text item">
					    4.可前往个人中心查看缴费记录<el-button style="float: right; padding: 3px 0" type="text" @click="toRecord()">立即前往</el-button>
					  </div>
					</el-card>
	  		</div>-->
	  		
	  		<div class="panel-hero" style="margin-bottom: 30px;">
	  			<el-card class="box-card">
					  <div slot="header" class="clearfix">
					    <span>门诊结算</span>
					    <div style="height: 25px;width: 25px;float: right;position: relative;">
	  						<img src="../../../../static/img/药品.png" style="width: 140%;position: absolute;left: -9px;top: -6px;"/>
	  					</div>
					  </div>
					  <!--<div class="text item">
					    {{content1}}<el-button style="float: right; padding: 3px 0" type="text" @click="selectBlh">选号</el-button>
					  </div>
					  <div class="text item">
					    {{content2}}<el-button style="float: right; padding: 3px 0" type="text" @click="selectSe">选择记录</el-button>
					  </div>-->
					  <div class="text item">
					    {{content3}}<el-button style="float: right; padding: 3px 0" type="text" @click="selectCf">确认处方</el-button>
					  </div>
					  <div class="text item">
					    	2：结算付款<el-button style="float: right; padding: 3px 0" type="text" @click="toSePay">点我结算</el-button>
					  </div>
					  <!--<div class="text item">
					    5.可前往个人中心查看缴费记录<el-button style="float: right; padding: 3px 0" type="text" @click="toRecord()">立即前往</el-button>
					  </div>-->
					</el-card>
	  		</div>
  		</div>
  		
  		<div style="margin-top: 30px;margin-bottom: 30px;">
        <div>
          <a href="javascript:;" class="weui-btn weui-btn_primary" v-on:click="toIndex()">返回主页</a>
        </div>
      </div>
      
  		<!--<el-dialog title="选择要结算的病历号" :visible.sync="isShow">
				<commonSelect v-bind:mzData='mzData' @handleCall="handleCall"></commonSelect>
			 </el-dialog>
			 
			 <el-dialog title="选择要结算的预约记录" :visible.sync="Show">
				<Select v-bind:seData='seData' @seCall="seCall"></Select>
			 </el-dialog>-->
			 
			 <el-dialog title="请确认处方信息" :visible.sync="cfShow">
				<cfSelect v-bind:cfData='cfData' @cfCall="cfCall"></cfSelect>
			 </el-dialog>
  		
  </div>
</template>


<script>
	import model from './model.js'
	import commonSelect from './commonSelect'
	import Select from './select'
	import cfSelect from './cfSelect'
  export default {
  	components: {commonSelect,Select,cfSelect},
  	data() {
    	this.model = model(this.axios)
      return {
      	Show: false,
  			blh:'',
  			zjh:localStorage.getItem('sec_patientIdcard'),
				hzxm:localStorage.getItem('sec_patientName'),
				patientGuid:localStorage.getItem('sec_patientGuid'),
				patid:'',
				isShow:false,
				mzData:[],
				seData:[],
				cfData:[],
				content1:'1.请先选择您要结算的病历号',
				content2:'2.请选择预约记录',
				content3:'1：确认待缴费处方信息',
				pbxh:'',
				cfShow:false,
				cfxh:'',
				ghxh:''
      }
    },
    mounted(){
    	this.getInfo();
    },
  	methods:{
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
					$.alert("查询到您是医保用户，暂不支持脱卡支付", "提示", function() {
					  //点击确认后的回调函数
					  if (process.env.NODE_ENV == 'dev') {
							  window.location='../index.html'
							} else if (process.env.NODE_ENV == 'production') {
							  window.location='../2ysechos/index.html'
							}
					});
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
//									$.alert("查询到您是医保用户，暂不支持脱卡支付", "提示", function() {
//								  //点击确认后的回调函数
//								  self.$router.push('/userFiling?zjh='+self.zjh+'&hzxm='+self.hzxm);
//								}
//						}
//						if(blh == ''){
//							$.alert("未查询到您的信息，请先建档", "提示", function() {
//						  //点击确认后的回调函数
////						  if (process.env.NODE_ENV == 'dev') {
////								  window.location='../../index.html#/userFiling?zjh='+self.zjh+'&hzxm='+self.hzxm;
////								} else if (process.env.NODE_ENV == 'production') {
////								  window.location='../../2ysechos/index.html#/userFiling?zjh='+self.zjh+'&hzxm='+self.hzxm;
////								}
//									self.$router.push('/userFiling?zjh='+self.zjh+'&hzxm='+self.hzxm);
//							});
//							return;
//						}
////						arr.sort().reverse();
////						let val = arr[0];
////						for(var i=0;i<outArray.length;i++){
////							if(val == outArray[i].blh){
////								self.patid = outArray[i].patid;
////							}
////						}
//					}
//					if(res.data.msg == '未查询到门诊患者'){
//						$.alert("未查询到您的信息，请先建档", "提示", function() {
//						  //点击确认后的回调函数
////						  self.$router.push('/userFiling?zjh='+self.zjh)
//						  if (process.env.NODE_ENV == 'dev') {
//								  window.location='../../index.html#/userFiling?zjh='+self.zjh+'&hzxm='+self.hzxm;
//								} else if (process.env.NODE_ENV == 'production') {
//								  window.location='../../2ysechos/index.html#/userFiling?zjh='+self.zjh+'&hzxm='+self.hzxm;
//								}
//						});
//					}
//				})
			},
  		toIndex(){
  			if (process.env.NODE_ENV == 'dev') {
				  window.location='../../index.html'
				} else if (process.env.NODE_ENV == 'production') {
				  window.location='../../2ysechos/index.html'
				}
  		},
  		toRecord(){
  			if (process.env.NODE_ENV == 'dev') {
				  window.location='../../outPaymentRecords.html'
				} else if (process.env.NODE_ENV == 'production') {
				  window.location='../../2ysechos/outPaymentRecords.html'
				}
  		},
  		toSePay(){
//			$.alert("处方缴费正在维护，请去现场交费", "提示", function() {});
//				return;
  			
  			//以下代码为缴费代码  暂时注掉几天
				if(this.cfxh == ''){
						$.alert("请先确认处方信息", "提示", function() {
							});
							return;
					}
				this.$router.push('/mzPay?cfxh='+this.cfxh+'&patid='+this.patid+'&ghxh='+this.ghxh);
  		},
  		selectCf(){
//			if(this.patid == ''){
//						$.alert("请先选择病历号", "提示", function() {
//							});
//							return;
//					}
//				if(this.pbxh == ''){
//						$.alert("请先选择预约记录", "提示", function() {
//							});
//							return;
//					}
  			 $.showLoading();
					let self = this;
					let data={
						pationRowGuid:this.patientGuid,
						patid:this.patid,
						hzxm:this.hzxm,
						ksrq:'20190101',
						jsrq:'20900101',
					}
					
					this.model.getOutpatientToPayPrescription(data).then(function(res){
						 $.hideLoading();
						if(res.data.code == '0'){
							self.cfData = res.data.data;
							self.cfShow = true;
						}else{
							$.toptip(res.data.msg,'error')
						}
						
					})
  		},
  		cfCall(res){
  			this.content3 = '已确认处方 '+ res.cfxh;
  			this.cfxh = res.cfxh;
  			this.ghxh = res.ghxh;
  			console.log(this.ghxh)
				this.cfShow = false;
  		},
  		seCall(res){
  			this.content2 = '已选择    '+res.ksmc;
  			this.pbxh = res.pbxh;
				this.Show = false;
  		},
  		handleCall(res){
  			this.content1 = '已选中病历号：'+res.blh;
  			this.blh = res.blh;
  			this.patid = res.patid;
				this.isShow = false;
			},
			toghPay(){
				if(this.patid == ''){
						$.alert("请先选择病历号", "提示", function() {
							});
							return;
					}
				if(this.pbxh == ''){
						$.alert("请先选择预约记录", "提示", function() {
							});
							return;
					}
				this.$router.push('/ghPay?pbxh='+this.pbxh+'&patid='+this.patid);
			},
  		selectBlh(){
  			//获取
  			 $.showLoading();
					let self = this;
					let data={
						hzxm:this.hzxm,
						zjh:this.zjh,
						action:'mz',
						openid:localStorage.getItem('sec_openId')
					}
					
					this.model.selectPatient(data).then(function(res){
						 $.hideLoading();
						if(res.data.code == '0'){
							self.mzData = res.data.data;
							self.isShow = true;
						}
						if(res.data.msg == '未查询到门诊患者'){
							$.alert("未查询到您的信息，请先建档", "提示", function() {
							  //点击确认后的回调函数
							  self.$router.push('/userFiling?zjh='+self.zjh)
							});
						}
					})
  		},
  		selectSe(){
  			//获取
					let self = this;
					if(this.patid == ''){
						$.alert("请先选择病历号", "提示", function() {
							});
							return;
					}
					 $.showLoading();
					let data={
						hzxm:this.hzxm,
						patid:this.patid
					}
					
					this.model.getPatientAppointInfo(data).then(function(res){
						 $.hideLoading();
						if(res.data.code == '0'){
							self.seData = res.data.data;
							self.Show = true;
						}else{
							$.toptip(res.data.msg,'error')
						}
					})
  		}
		
  	}
  }
  </script>

<style>
	.el-dialog{
		width: calc(100vw - 20px);
	}
</style>
<style scoped>
	.weui-btn_primary{
		background-color: #4CCBDB;
	}
	.weui-btn{
		width: 230px;
	}
	.el-dialog{
		width: calc(100vw - 20px);
	}
	.el-button--primary.is-plain{
		    height: 22px;
    line-height: 22px;
        position: absolute;
    right: 30px;
	}
	.el-button{
		padding: 0px;
	}
	.panel-hero{
		width: calc(100vw - 20px);
		margin-left: auto;
		margin-right: auto;
		margin-top: 10px;
	}
	 .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    
  }
	.ad-fin{
		height: 60px;
		width: 60px;
		line-height: 60px;
		position: relative;
	}
	.ad-title{
		float:left;
		height: 60px;
		line-height: 60px;
	}
	.ad-headerImg{
		width: 80px;
		height: 60px;
		line-height: 60px;
		float: left;
	}
	.ad-header{
		position: relative;
		width: 100%;
		height: 60px;
		background-color: #FFFFFF;
	}
</style>
