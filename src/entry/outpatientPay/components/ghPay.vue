<template>
  <div style="overflow: auto;height: 100%;">
  	<el-card class="box-card">
		  <div slot="header" class="clearfix">
		  	<div class="card-hero">
		  		<img src="../../../../static/img/挂号.svg" style="position: absolute;top: -7px;width: 80%;"/>
		  	</div>
		    <span style="font-weight: 700;	">挂号预结算信息</span>
		  </div>
		  <div>
		    <div class="hero-list-item">
		  		<div class="hero-list-item-left">
		  			<p class="weui-media-box__desc" style="font-size: 17px;">收据号</p>
		  		</div>
		  		<div class="hero-list-item-right" style="margin-left: 37px;">
		  			<h4 class="weui-media-box__title">{{info.sjh}}</h4>
		  		</div>
		  	</div>
		  	<div class="hero-list-item">
		  		<div class="hero-list-item-left">
		  			<p class="weui-media-box__desc" style="font-size: 17px;">应付金额</p>
		  		</div>
		  		<div class="hero-list-item-right">
		  			<h4 class="weui-media-box__title">¥{{info.yfje}}</h4>
		  		</div>
		  	</div>
		  </div>
		</el-card>
		<!--<el-button-group>
		  <el-button type="primary" icon="el-icon-arrow-left"  @click="show = !show">查看明细</el-button>
		  <el-button type="primary" @click="toIndex()">返回主列表<i class="el-icon-arrow-right el-icon--right"></i></el-button>
		</el-button-group>-->
		
		<div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-fade-in-linear">
        <div class="transition-box" style="width: calc(100vw - 30px);margin-left: auto;margin-right: auto;">
        	<el-card class="box-card">
					  <div slot="header" class="clearfix">
					    <div class="card-hero">
					  		<img src="../../../../static/img/明细.svg" style="position: absolute;top: -4px;width: 80%;"/>
					  	</div>
					    <span>总金额: ¥{{info.zje}}</span>
					  </div>
					  <div class="text item">
					    <div class="hero-list-item">
					  		<div class="hero-list-item-left">
					  			<p class="weui-media-box__desc">自负金额</p>
					  		</div>
					  		<div class="hero-list-item-right" style="margin-left: 63px;">
					  			<h4 class="weui-media-box__title">¥{{info.zfje}}</h4>
					  		</div>
					  	</div>
					  	<div class="hero-list-item">
					  		<div class="hero-list-item-left">
					  			<p class="weui-media-box__desc">挂号费</p>
					  		</div>
					  		<div class="hero-list-item-right">
					  			<h4 class="weui-media-box__title">¥{{info.ghf}}</h4>
					  		</div>
					  	</div>
					  	<div class="hero-list-item">
					  		<div class="hero-list-item-left">
					  			<p class="weui-media-box__desc">优惠金额</p>
					  		</div>
					  		<div class="hero-list-item-right" style="margin-left: 63px;">
					  			<h4 class="weui-media-box__title">¥{{info.yhje}}</h4>
					  		</div>
					  	</div>
					  	<div class="hero-list-item">
					  		<div class="hero-list-item-left">
					  			<p class="weui-media-box__desc">挂号序号</p>
					  		</div>
					  		<div class="hero-list-item-right" style="margin-left: 63px;">
					  			<h4 class="weui-media-box__title">{{info.ghxh}}</h4>
					  		</div>
					  	</div>
					  	<div class="hero-list-item">
					  		<div class="hero-list-item-left">
					  			<p class="weui-media-box__desc">备注</p>
					  		</div>
					  		<div class="hero-list-item-right">
					  			<h4 class="weui-media-box__title">{{info.memo}}</h4>
					  		</div>
					  	</div>
					  </div>
					</el-card>
					<div style="margin-top: 10px;margin-bottom: 30px;">
						<div>
							<a href="javascript:;" class="weui-btn weui-btn_primary" @click="toPay()">立即支付</a>
						</div>
					</div>
        </div>
      </transition>
    </div>
  </div>
</template>


<script>
	import model from './model.js'
	import commonSelect from './commonSelect.vue'
	import CryptoJS from 'crypto-js'
  export default {
  	components: {commonSelect},
  	data(){
  		this.model = model(this.axios);
  		return{
  			show: false,
  			blh:'',
  			zjh:localStorage.getItem('sec_patientIdcard'),
				hzxm:localStorage.getItem('sec_patientName'),
				openid:localStorage.getItem('sec_openId'),
				patid:'',
				pbxh:'',
				info:{},
				patientGuid:localStorage.getItem('sec_patientGuid')
  		}
  	},
  	mounted(){
  		this.init();
  	},
  	methods:{
  		getAesString(word, keyStr) { // 加密
			  keyStr = keyStr ? keyStr : 'expsofthero12345';
			  let key = CryptoJS.enc.Utf8.parse(keyStr);
			  let srcs = CryptoJS.enc.Utf8.parse(word);
			  let encrypted = CryptoJS.AES.encrypt(srcs, key, {
			    mode: CryptoJS.mode.ECB,
			    padding: CryptoJS.pad.Pkcs7
			  });
			  return encrypted.toString();
			},

  		toPay(){
  			let self = this;
  			
  			let data = {
  				action:'gh',
  				ghMoney:this.info.yfje,
  				patientGuid:this.patientGuid,
  				patid:this.patid,
  				patientName:this.hzxm,
  				ghxh:this.info.ghxh,
  				sjh:this.info.sjh,
  				zje:this.info.zje,
  				yfje:this.info.yfje,
  				zfje:this.info.zfje,
  				openid:this.openid
  			}
			this.model.placeOrder(data).then(function(res){
				console.log(res.data);
				if(res.data.code == 0){
					if (process.env.NODE_ENV == 'dev') {
						  window.location='../pay.html?appId='+self.getAesString(res.data.data.appId)+'&timeStamp='+self.getAesString(res.data.data.timeStamp)+'&nonceStr='+self.getAesString(res.data.data.nonceStr)+'&pack='+self.getAesString(res.data.data.package)+'&paySign='+self.getAesString(res.data.data.paySign)+'&action=gh';
						} else if (process.env.NODE_ENV == 'production') {
						  window.location='../2ysechos/pay.html?appId='+self.getAesString(res.data.data.appId)+'&timeStamp='+self.getAesString(res.data.data.timeStamp)+'&nonceStr='+self.getAesString(res.data.data.nonceStr)+'&pack='+self.getAesString(res.data.data.package)+'&paySign='+self.getAesString(res.data.data.paySign)+'&action=gh';
						}
				}else{
					$.toptip(res.data.msg,'error');
				}
			})
  		},
  		init(){
  			let self = this;
  			let da = this.$route.query;
  			console.log(da);
  			this.patid = da.patid;
  			this.pbxh = da.pbxh;
  			
  			
  			let data = {
  				patid:this.patid,
  				bxh:this.zjh,
  				hzxm:this.hzxm,
  				pbmxxh:this.pbxh,
  				isynzh:0,
  				iszfjs:1
  			}
  			this.model.RegisteredBudget(data).then(function(res){
  				console.log(res)
  				if(res.data.code == 0){
  					self.info = res.data.data;
  				}else{
  					$.toptip(res.data.msg,'error');
  				}
  			})
  		},
  		toIndex(){
  			this.$router.push('/');
  		},
  		
  		
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
	.el-card{
		margin-bottom: 10px;
	}
	.el-button--primary{
		color: #409eff;
    background-color: #ffffff;
	}
	.el-button-group{
		width: 100%;
	}
	.el-button{
		width:50%
	}
	.weui-media-box__title{
		font-size: 13px;
	}
	.card-hero{
		width: 50px;
		height: 40px;
		line-height: 20px;
		float: left;
		position: relative;
	}
	.hero-list-item-left{
		float: left;
		height: 20px;
		line-height: 20px;
		margin-left: 20px;
	}
	.hero-list-item-right{
		height: 20px;
		line-height: 20px;
		margin-left: 76px;
    	float: left;
	}
	.hero-list-item{
		height: 20px;
		margin-top: 5px;
	}
</style>
