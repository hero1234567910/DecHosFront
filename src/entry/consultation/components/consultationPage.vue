<template>
  <div style="overflow: auto;">
 		<div class="page-panel">
 			<div class="panel-img">
 				<img src="../../../../static/img/头像1.png" width="45%" style="position: absolute;bottom: 3px;left: 20px;"/>
 			</div>
 			<div class="page-content">
 				<p style="position: absolute;bottom: 0px;left: 50px;">咨询人姓名</p>
 			</div>
 		</div>
 		<div class="page-input">
			<div class="weui-cells">
			  <div class="weui-cell">
			    <div class="weui-cell__bd">
			      <input class="weui-input" type="text">
			    </div>
			  </div>
			</div>
 		</div>
 		
 		<div class="page-panel">
 			<div class="panel-img">
 				<img src="../../../../static/img/手机 (2).png" width="35%" style="position: absolute;bottom: 3px;left: 20px;"/>
 			</div>
 			<div class="page-content">
 				<p style="position: absolute;bottom: 0px;left: 50px;">咨询人手机号码</p>
 			</div>
 		</div>
 		<div class="page-input">
			<div class="weui-cells">
			  <div class="weui-cell">
			    <div class="weui-cell__bd">
			      <input class="weui-input" type="text">
			    </div>
			  </div>
			</div>
 		</div>
 		
 		<div class="page-panel">
 			<div class="panel-img">
 				<img src="../../../../static/img/手机 (2).png" width="35%" style="position: absolute;bottom: 3px;left: 20px;"/>
 			</div>
 			<div class="page-content">
 				<p style="position: absolute;bottom: 0px;left: 50px;">咨询内容</p>
 			</div>
 		</div>
 		
			<div class="weui-cells weui-cells_form">
			  <div class="weui-cell">
			    <div class="weui-cell__bd">
			      <textarea class="weui-textarea" placeholder="请输入咨询内容" rows="3"></textarea>
			      <div class="weui-textarea-counter"><span>0</span>/200</div>
			    </div>
			  </div>
			</div>
			
			<div style="margin-top: 30px;">
				<div>
					<a href="javascript:;" class="weui-btn weui-btn_primary" v-on:click="tolist()">确认咨询</a>
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
  			
  		}
  	},
  	methods:{
  		tolist(){
  			this.$router.push('/');
  		}
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
	.weui-textarea{
		height: 130px;
	}
	.weui-cells{
		margin-top: 5px;
	}
	.page-panel{
		height: 45px;
		width: 100%;
	}
	.panel-img{
		height: 100%;
		line-height: 45px;
		float: left;
		width: 45px;
		position: relative;
	}
	.page-content{
		height: 45px;
		position: relative;
	}
	.page-input{
		height: 45px;
		width: 100%;
	}
</style>
