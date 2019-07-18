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
  		<div style="overflow-y: auto;margin-bottom: 20px;height: calc(100vh - 60px);">
	  		<div class="panel-hero">
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
					    4.可前往个人中心查看缴费记录<el-button style="float: right; padding: 3px 0" type="text">立即前往</el-button>
					  </div>
					</el-card>
	  		</div>
	  		
	  		<div class="panel-hero" style="margin-bottom: 30px;">
	  			<el-card class="box-card">
					  <div slot="header" class="clearfix">
					    <span>门诊结算</span>
					    <div style="height: 25px;width: 25px;float: right;position: relative;">
	  						<img src="../../../../static/img/药品.png" style="width: 140%;position: absolute;left: -9px;top: -6px;"/>
	  					</div>
					  </div>
					  <div class="text item">
					    {{content1}}<el-button style="float: right; padding: 3px 0" type="text" @click="selectBlh">选号</el-button>
					  </div>
					  <div class="text item">
					    {{content2}}<el-button style="float: right; padding: 3px 0" type="text" @click="selectSe">选择记录</el-button>
					  </div>
					  <div class="text item">
					    {{content3}}<el-button style="float: right; padding: 3px 0" type="text" @click="selectCf">确认处方</el-button>
					  </div>
					  <div class="text item">
					    4.结算付款<el-button style="float: right; padding: 3px 0" type="text" @click="toSePay">点我结算</el-button>
					  </div>
					  <div class="text item">
					    5.可前往个人中心查看缴费记录<el-button style="float: right; padding: 3px 0" type="text">立即前往</el-button>
					  </div>
					</el-card>
	  		</div>
  		</div>
  		
  		<el-dialog title="选择要结算的病历号" :visible.sync="isShow">
				<commonSelect v-bind:mzData='mzData' @handleCall="handleCall"></commonSelect>
			 </el-dialog>
			 
			 <el-dialog title="选择要结算的预约记录" :visible.sync="Show">
				<Select v-bind:seData='seData' @seCall="seCall"></Select>
			 </el-dialog>
			 
			 <el-dialog title="选择要结算的预约记录" :visible.sync="cfShow">
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
				patid:'',
				isShow:false,
				mzData:[],
				seData:[],
				cfData:[],
				content1:'1.请先选择您要结算的病历号',
				content2:'2.请选择预约记录',
				content3:'3.确认代缴费处方信息',
				pbxh:'',
				cfShow:false,
				cfxh:''
      }
    },
    mounted(){
    	
    },
  	methods:{
  		toSePay(){
  			if(this.patid == ''){
						$.alert("清先选择病历号", "提示", function() {
							});
							return;
					}
				if(this.pbxh == ''){
						$.alert("清先选择预约记录", "提示", function() {
							});
							return;
					}
				if(this.cfxh == ''){
						$.alert("清先确认处方信息", "提示", function() {
							});
							return;
					}
				this.$router.push('/mzPay?cfxh='+this.cfxh+'&patid='+this.patid);
  		},
  		selectCf(){
  			if(this.patid == ''){
						$.alert("清先选择病历号", "提示", function() {
							});
							return;
					}
				if(this.pbxh == ''){
						$.alert("清先选择预约记录", "提示", function() {
							});
							return;
					}
  			 $.showLoading();
					let self = this;
					let data={
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
  			this.content3 = '已确认处方 '+ res;
  			this.cfxh = res;
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
						$.alert("清先选择病历号", "提示", function() {
							});
							return;
					}
				if(this.pbxh == ''){
						$.alert("清先选择预约记录", "提示", function() {
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
							$.alert("未查询到您的信息，清先建档", "提示", function() {
							  //点击确认后的回调函数
							  self.$router.push('/userFiling?zjh='+zjh)
							});
						}
					})
  		},
  		selectSe(){
  			//获取
					let self = this;
					if(this.patid == ''){
						$.alert("清先选择病历号", "提示", function() {
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
