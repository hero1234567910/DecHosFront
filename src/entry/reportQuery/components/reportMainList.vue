<template>
  <div style="overflow: auto;height: 100%;">
  	<a href="javascript:void(0)" v-on:click="toTest()">
	 		<div class="hospital-panel" style="margin-top: 15px;">
	 			<div class="hospital-inner">
	 				<div class="hospital-img">
	 					<img src="../../../../static/img/体检标.png" style="vertical-align: middle;width: 80%;"/>
	 				</div>
	 				<div class="hospital-title">
	 						<p style="color: #000000;font-size: 17px;position: absolute;top: 23px;">体检报告查询</p>
	 						<img src="../../../../static/images/体检1.png"  style="position: absolute;top: 56px;width: 51%;"/>
	 				</div>
	 				<div class="hospital-arrow">
	 					<img src="../../../../static/img/ARROW.svg" style="position: absolute;top: 29px;width: 85%;left: 30px;"/>
	 				</div>
	 			</div>
	 		</div>
 		</a>
 		<a href="javascript:void(0)" v-on:click="toReport()">
	 		<div class="hospital-panel">
	 			<div class="hospital-inner">
	 				<div class="hospital-img">
	 					<img src="../../../../static/img/报告标.png" style="vertical-align: middle;width: 80%;"/>
	 				</div>
	 				<div class="hospital-title">
	 						<p style="color: #000000;font-size: 17px;position: absolute;top: 23px;">检查报告查询</p>
	 						<img src="../../../../static/images/报告1.png"  style="position: absolute;top: 56px;width: 51%;"/>
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
  			
  		}
  	},
  	methods:{
  		toReport(){
  			this.$router.push('/reportTab');
  		},
			toindex(){
  			if (process.env.NODE_ENV == 'dev') {
				  window.location='../../index.html'
				} else if (process.env.NODE_ENV == 'production') {
				  window.location='../../sechos/index.html'
				}
  		},
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
