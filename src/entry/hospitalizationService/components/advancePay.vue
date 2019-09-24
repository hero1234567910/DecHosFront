<template>
  <div style="overflow: auto;height: 100%;">
  	<div class="ad-header">
  		<div class="ad-headerImg">
  			<img src="../../../../static/img/头像1.png" style="width: 6%;position: absolute;top: 18px;
    left: 17px;"/>
  		</div>
  		<div class="ad-title">
  			<p style="font-size: 20px;font-weight: 700;">{{hzxm}}</p>
  		</div>
  		<div class="ad-fin">
  			<img src="../../../../static/img/在院.png" style="position: absolute;width: 73%;
    top: 20px;
    left: 5px;"/>
  		</div>
  	</div>
  	
  	<div class="page-panel">
 			<div class="page-content">
 				<p style="position: absolute;bottom: 0px;left: 18px;">当前病历号</p>
 			</div>
 		</div>
 		<div class="page-input">
			<div class="weui-cells">
			  <div class="weui-cell">
			    <div class="weui-cell__bd">
			      <input class="weui-input" type="text" readonly="readonly" v-model="blh">
			    </div>
			  </div>
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
			      <input class="weui-input" type="text" v-model="money" readonly="readonly">
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
			      <input class="weui-input" type="number" placeholder="请选择下列缴费金额" v-model="yjMoney" readonly>
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
					<a href="javascript:;" class="weui-btn weui-btn_primary">500</a>
				</div>
				<div class="weui-col-25">
					<a href="javascript:;" class="weui-btn weui-btn_primary">1000</a>
				</div>
				<div class="weui-col-25">
					<a href="javascript:;" class="weui-btn weui-btn_primary">1500</a>
				</div>
				<div class="weui-col-25">
					<a href="javascript:;" class="weui-btn weui-btn_primary">2000</a>
				</div>
			</div>
			
			<div class="ad-sub">
				  <el-button type="primary" v-on:click="toList()">立即缴纳</el-button>
				  <div class="ad-desc">
				  	<p class="desc">1.请住院患者确认信息无误后再缴费</p>
				  </div>
			</div>
 		</div>
 		
 		 <!--<el-dialog title="选择要缴费的病历号" :visible.sync="isShow">
			<commonSelect v-bind:mzData='mzData' @handleCall="handleCall"></commonSelect>
		</el-dialog>-->
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
  			money:0,
			blh:'',
			hzxm:localStorage.getItem('sec_patientName'),  
  			zjh:localStorage.getItem('sec_patientIdcard'),
				hzxm:localStorage.getItem('sec_patientName'),
				patid:'',
				isShow:false,
				mzData:[],
				yjMoney:'',
				jzlsh:''
  		}
  	},
  	mounted(){
  		this.init();
  		this.getJzlsh()
  	},
  	methods:{
  		chooseMoney(){
  			
  		},
  		handleCall(res){
  			this.blh = res.blh;
  			this.patid = res.patid;
  			console.log(this.patid);
  			this.getJzlsh();
				this.isShow = false;
			},
  		selectBlh(){
  			if(this.mzData.length != 0){
  				this.isShow = true;
  			}else{
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
  			}
  		},
  		getJzlsh(){
  			let self = this;
  			let data = {
  				hzxm:this.hzxm,
  				patid:this.patid
  			}
  			this.model.getJzlsh(data).then(function(res){
  				if(res.data.code == 0){
  					self.jzlsh = res.data.data.jzlsh;
  					self.getSummary();
  				}else{
  					$.toptip(res.data.msg,'error');
  				}
  				
  			})
  		},
  		getSummary(){
  			let self = this;
  			let data = {
  				hzxm:this.hzxm,
  				jzlsh:this.jzlsh
  			}
  			this.model.getSummary(data).then(function(res){
  				if(res.data.code == 0){
//					self.info = res.data.data;
  					self.money = res.data.data.yjjye;
  				}else{
  					$.toptip(res.data.msg,'error');
  				}
  			})
  		},
  		init(){
  			let self = this;
  			var lista = $('.weui-btn');
  			lista.focus(function(ele){
  				self.yjMoney = ele.target.text;
  			})
  			this.patid = this.$route.query.patid;
  			this.blh = this.$route.query.blh;
  		},
  		toList(){
  			//发起支付
  			let self = this;
  			var yjMoney = this.yjMoney;
  			var reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
  			if(!reg.test(yjMoney)){
  				 $.alert("金额输入格式错误", "警告");
  				 return;
  			}
  			if(yjMoney == '' || yjMoney == 0){
  				 $.alert("金额必须大于0", "警告");
  				 return;
  			}
  			if(this.blh == '' || this.blh == null){
  				$.alert("病历号不能为空", "警告");
  				return;
  			}
  			let self = this;
  			//调取预结算接口
  			let dat = {
  				hzxm:this.hzxm,
  				patid:this.patid
  			}
  			this.model.beforePay(dat).then(function(res){
					if(res.data.code == 0){
						//调用下单接口
						let data = {
							sjh:res.data.sjh,
							hisddh:res.data.hisddh,
							yjlsh:res.data.yjlsh,
							'action':'yj',
							'openid':localStorage.getItem('sec_openId'),
							'yjMoney':self.yjMoney,
							'patientGuid':localStorage.getItem('sec_patientGuid'),
							'patientName':self.hzxm,
							patid:self.patid,
							cardno:localStorage.getItem('sec_cardno'),
							sex:localStorage.getItem('sec_sex'),
							lxdh:localStorage.getItem('sec_lxdh'),
							zjhm:self.zjh,
							blh:self.blh
						}
						self.model.placeOrderByWN(data).then(function(res){
							if(res.data.code == 0){
								if (process.env.NODE_ENV == 'dev') {
									  window.location='../pay.html?appId='+self.getAesString(res.data.data.appId)+'&timeStamp='+self.getAesString(res.data.data.timeStamp)+'&nonceStr='+self.getAesString(res.data.data.nonceStr)+'&pack='+self.getAesString(res.data.data.package)+'&paySign='+self.getAesString(res.data.data.paySign)+'&action=gh';
									} else if (process.env.NODE_ENV == 'production') {
//									  window.location='../2ysechos/pay.html?appId='+self.getAesString(res.data.data.appId)+'&timeStamp='+self.getAesString(res.data.data.timeStamp)+'&nonceStr='+self.getAesString(res.data.data.nonceStr)+'&pack='+self.getAesString(res.data.data.package)+'&paySign='+self.getAesString(res.data.data.paySign)+'&action=gh';
											window.location=res.data.qrCode;
									}
							}else{
								$.toptip(res.data.msg,'error');
							}
						})
						
					}else{
						$.toptip(res.data.msg,'error');
					}
				})
  		},
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
  	}
  }
  </script>

<style>
	.el-dialog{
		width: calc(100vw - 20px);
	}
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
		float: left;
	}
	.ad-title{
		float:left;
		/*width: 50px;*/
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
