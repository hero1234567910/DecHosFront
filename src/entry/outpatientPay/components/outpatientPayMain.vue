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
					  </div>
					 <div class="text item">
					    {{content1}}<el-button style="float: right; padding: 3px 0" type="text" @click="selectBlh">选号</el-button>
					  </div>
					  <div class="text item">
					    {{content2}} <el-button style="float: right; padding: 3px 0" type="text" @click="selectSe">选择记录</el-button>
					  </div>
					  <div class="text item">
					    3.结算付款<el-button style="float: right; padding: 3px 0" type="text">点我结算</el-button>
					  </div>
					  <div class="text item">
					    4.可前往个人中心查看缴费记录<el-button style="float: right; padding: 3px 0" type="text">立即前往</el-button>
					  </div>
					</el-card>
	  		</div>
	  		
	  		<div class="panel-hero">
	  			<el-card class="box-card">
					  <div slot="header" class="clearfix">
					    <span>门诊结算</span>
					    <el-button style="float: right; padding: 3px 0" type="text">点我结算</el-button>
					  </div>
					  <div class="text item">
					    1.请先选择您要结算的病历号   
					  </div>
					  <div class="text item">
					    2.可以查看代缴费处方信息
					  </div>
					  <div class="text item">
					    3.可以查看门诊预结算信息
					  </div>
					  <div class="text item">
					    4.结算付款
					  </div>
					  <div class="text item">
					    5.可前往个人中心查看缴费记录
					  </div>
					</el-card>
	  		</div>
  		</div>
  		
  		<el-dialog title="选择要结算的病历号" :visible.sync="isShow">
				<commonSelect v-bind:mzData='mzData' @handleCall="handleCall"></commonSelect>
			 </el-dialog>
			 
			 <el-dialog title="选择要结算的病历号" :visible.sync="Show">
				<commonSelect v-bind:mzData='seData' @handleCall="handleCall"></commonSelect>
			 </el-dialog>
  		
  </div>
</template>


<script>
	import model from './model.js'
	import commonSelect from './commonSelect'
	import Select from './Select'
  export default {
  	components: {commonSelect,Select},
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
				content1:'1.请先选择您要结算的病历号',
				content2:'2.请选择预约记录'
      }
    },
    mounted(){
    	
    },
  	methods:{
  		seCall(res){
  			console.log(res);
  			this.content1 = '已选择';
				this.Show = false;
  		},
  		handleCall(res){
  			this.content1 = '已选中病历号：'+res.blh;
  			this.blh = res.blh;
  			this.patid = res.patid;
				this.isShow = false;
				
				
			},
  		selectBlh(){
  			//获取
  			 $.showLoading();
					let self = this;
					let data={
						hzxm:this.hzxm,
						zjh:this.zjh,
						action:'zy',
						openid:localStorage.getItem('sec_openId')
					}
					
					this.model.selectPatient(data).then(function(res){
						 $.hideLoading();
						if(res.data.code == '0'){
							self.mzData = res.data.data;
							self.isShow = true;
						}else{
							$.alert("未查询到您的住院信息", "提示", function() {
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
