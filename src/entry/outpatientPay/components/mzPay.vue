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
					    <el-button style="float: right; padding: 3px 0" type="text">点我结算</el-button>
					  </div>
					 <div class="text item">
					    1.请先选择您要结算的病历号   
					  </div>
					  <div class="text item">
					    2.可以查看挂号预结算信息
					  </div>
					  <div class="text item">
					    3.结算付款
					  </div>
					  <div class="text item">
					    4.可前往个人中心查看缴费记录
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
  </div>
</template>


<script>
	import model from './model.js'
  export default {
  	data() {
    	this.model = model(this.axios)
      return {
      }
    },
    mounted(){
    	
    },
  	methods:{
  		
		
  	}
  }
  </script>


<style scoped>
	/*.el-button--primary.is-plain{
		    height: 22px;
    line-height: 22px;
        position: absolute;
    right: 30px;
	}
	.el-button{
		padding: 0px;
	}*/
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
