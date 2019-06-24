<template>
  <div style="overflow: auto;">
  	<a href="javascript:void(0)" v-on:click="toPay()">
	 		<div class="hospital-panel" style="margin-top: 15px;">
	 			<div class="hospital-inner">
	 				<div class="hospital-img">
	 					<img src="../../../../static/img/查询结算.png" style="vertical-align: middle;width: 80%;"/>
	 				</div>
	 				<div class="hospital-title">
	 						<p style="color: #000000;font-size: 17px;position: absolute;top: 23px;">预交金查询与结算服务</p>
	 						<img src="../../../../static/images/圆角矩形-1.png"  style="position: absolute;top: 56px;width: 51%;"/>
	 				</div>
	 				<div class="hospital-arrow">
	 					<img src="../../../../static/img/ARROW.svg" style="position: absolute;top: 29px;width: 85%;left: 30px;"/>
	 				</div>
	 			</div>
	 		</div>
 		</a>
 		<a href="javascript:void(0)" v-on:click="toOrder()">
	 		<div class="hospital-panel">
	 			<div class="hospital-inner">
	 				<div class="hospital-img">
	 					<img src="../../../../static/img/食堂点餐.png" style="vertical-align: middle;width: 80%;"/>
	 				</div>
	 				<div class="hospital-title">
	 						<p style="color: #000000;font-size: 17px;position: absolute;top: 23px;">食堂点餐服务</p>
	 						<img src="../../../../static/images/圆角矩形-2.png"  style="position: absolute;top: 56px;width: 51%;"/>
	 				</div>
	 				<div class="hospital-arrow">
	 					<img src="../../../../static/img/ARROW.svg" style="position: absolute;top: 29px;width: 85%;left: 30px;"/>
	 				</div>
	 			</div>
	 		</div>
 		</a>
 		<a href="javascript:void(0)">
	 		<div class="hospital-panel">
	 			<div class="hospital-inner">
	 				<div class="hospital-img">
	 					<img src="../../../../static/img/充值记录.png" style="vertical-align: middle;width: 80%;"/>
	 				</div>
	 				<div class="hospital-title">
	 						<p style="color: #000000;font-size: 17px;position: absolute;top: 23px;">预交金充值记录查询</p>
	 						<img src="../../../../static/images/圆角矩形-3.png"  style="position: absolute;top: 56px;width: 51%;"/>
	 				</div>
	 				<div class="hospital-arrow">
	 					<img src="../../../../static/img/ARROW.svg" style="position: absolute;top: 29px;width: 85%;left: 30px;"/>
	 				</div>
	 			</div>
	 		</div>
 		</a>
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
  		toPay(){
  			this.$router.push('/advancePay')
  		},
  		toOrder(){
  			window.location='https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc87dca29cc03656f&redirect_uri=http%3a%2f%2fey.nxjnjc.com%2fWXOrderSystem%2findex.html&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect';
  		}
  	}
  }
  </script>

<style>
	
</style>
<style scoped>
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
