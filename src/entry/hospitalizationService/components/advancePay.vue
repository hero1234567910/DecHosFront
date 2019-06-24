<template>
  <div style="overflow: auto;height: 100%;">
  	<div class="ad-header">
  		<div class="ad-headerImg">
  			<img src="../../../../static/img/头像1.png" style="width: 6%;position: absolute;top: 18px;
    left: 17px;"/>
  		</div>
  		<div class="ad-title">
  			<p style="font-size: 20px;font-weight: 700;">张三</p>
  		</div>
  		<div class="ad-fin">
  			<img src="../../../../static/img/在院.png" style="position: absolute;width: 73%;
    top: 20px;
    left: 100px;"/>
  		</div>
  	</div>
  	
  	<div class="page-panel">
 			<div class="page-content">
 				<p style="position: absolute;bottom: 0px;left: 18px;">预交金余额</p>
 			</div>
 		</div>
 		<div class="page-input">
			<div class="weui-cells">
			  <div class="weui-cell">
			    <div class="weui-cell__bd">
			      <input class="weui-input" type="text" v-model="money">
			    </div>
			  </div>
			</div>
 		</div>
 		
 		<div class="page-panel">
 			<div class="page-content">
 				<p style="position: absolute;bottom: 0px;left: 18px;">缴纳金额</p>
 			</div>
 		</div>
 		<div class="page-input">
			<div class="weui-cells">
			  <div class="weui-cell">
			    <div class="weui-cell__bd">
			      <input class="weui-input" type="number" placeholder="请输入缴费金额">
			    </div>
			  </div>
			</div>
 		</div>
 		
 		<div class="page-panel">
 			<div class="page-content">
 				<p style="position: absolute;bottom: 0px;left: 18px;">快捷选择金额</p>
 			</div>
 		</div>
 		<div class="ad-select">
			<div class="weui-row" style="height: 60px;width: calc(100vw - 20px);margin-left: auto;margin-right: auto;">
				<div class="weui-col-25">
					<a href="javascript:;" class="weui-btn weui-btn_primary">100</a>
				</div>
				<div class="weui-col-25">
					<a href="javascript:;" class="weui-btn weui-btn_primary">500</a>
				</div>
				<div class="weui-col-25">
					<a href="javascript:;" class="weui-btn weui-btn_primary">1000</a>
				</div>
				<div class="weui-col-25">
					<a href="javascript:;" class="weui-btn weui-btn_primary">1500</a>
				</div>
			</div>
			
			<div class="ad-sub">
				  <el-button type="primary" v-on:click="toList()">立即缴纳</el-button>
				  <div class="ad-desc">
				  	<p class="desc">1.请住院患者确认个人信息无误后再缴费</p>
				  	<p class="desc">2.温馨提示：xxxxxx</p>
				  </div>
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
  			money:120
  		}
  	},
  	methods:{
  		toList(){
  			this.$router.push('/')
  		}
  	}
  }
  </script>

<style>
	
</style>
<style scoped>
	.desc{
		color: #47C7E0;
	}
	.ad-desc{
		height: 50px;
		margin-top: 15px;
	}
	.el-button--primary{
		width: 300px;
		font-size: 18px;
		background-color: #47C7E0;
	}
	.ad-sub{
		text-align: center;
		position: absolute;
		width: 100%;
		height: 100px;
		top: 120px;
	}
	.weui-btn:after{
		border: 3px solid rgba(0, 0, 0, 0.2);
	}
	.weui-btn:focus{
		background-color: #FAAE3D;
		color: white;
	}
	.weui-btn{
		background-color: #FFFFFF;
		color: #8B8B8B;
		    height: 39px;
    line-height: 39px;
	}
	.ad-select{
		position: relative;
		padding-top: 10px;
		height: 60px;
		width: 100%;
		background-color: #FFFFFF;
	}
	.weui-cells{
		margin-top: 5px;
	}
	.page-panel{
		height: 40px;
		width: 100%;
	}
	.page-content{
		height: 40px;
		position: relative;
	}
	.page-input{
		height: 40px;
		width: 100%;
	}
	.ad-fin{
		height: 60px;
		width: 60px;
		line-height: 60px;
		position: relative;
	}
	.ad-title{
		float:left;
		width: 50px;
		height: 60px;
		line-height: 60px;
	}
	.ad-headerImg{
		width: 50px;
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
