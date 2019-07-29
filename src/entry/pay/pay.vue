<template>
  <div style="height: 100%;">
 		<router-view></router-view>
  </div>
</template>


<script>
	
import weui from 'jquery-weui/dist/js/jquery-weui.min'
import model from './model.js'
import CryptoJS from 'crypto-js'
import {jsSDK} from './wx.js'
  export default {
	data() {
    	this.model = model(this.axios)
      return {
      }
    },
    mounted(){
			this.init();
    },
	methods:{
		init(){
			let self = this;
			$.toptip('下单成功，请在5分钟内完成支付', 3600000, 'success');
				//吊起支付控件
//				if (typeof WeixinJSBridge == "undefined"){
//				   if( document.addEventListener ){
//				       document.addEventListener('WeixinJSBridgeReady', self.onBridgeReady(), false);
//				   }else if (document.attachEvent){
//				       document.attachEvent('WeixinJSBridgeReady', self.onBridgeReady()); 
//				       document.attachEvent('onWeixinJSBridgeReady', self.onBridgeReady());
//				   }
//				}else{
//				   self.onBridgeReady();
//				}
			this.onBridgeReady();
		},
		
		onBridgeReady(){
					let self = this;
					let key = 'expsoft123'; //密钥  
					let iv = 'expsoft123';//向量，只能是16位
					let action = this.GetQueryString('action');
					var appId = this.GetQueryString('appId');
					var nonceStr = this.GetQueryString('nonceStr');
					var pack = this.GetQueryString('pack');
					var paySign = this.GetQueryString('paySign');
					var timestamp = this.GetQueryString('timeStamp');
					
					console.log(appId+' '+nonceStr+'  '+pack);
					
					console.log(self.getDAesString(appId)+'  '+self.getDAesString(timestamp)+'   '+self.getDAesString(nonceStr)+'   '+self.getDAesString(pack)+'   '+self.getDAesString(paySign));
					let data = {
						'appId':self.getDAesString(appId),
						'nonceStr':self.getDAesString(nonceStr),
						'timeStamp':self.getDAesString(timestamp),
						'package':self.getDAesString(pack),
						'paySign':self.getDAesString(paySign)
					}
					jsSDK(data);
//				  WeixinJSBridge.invoke(
//				      'getBrandWCPayRequest', {
//				         "appId":self.getDAesString(appId),     //公众号名称，由商户传入     
//				         "timeStamp":self.getDAesString(timestamp),         //时间戳，自1970年以来的秒数     
//				         "nonceStr":self.getDAesString(nonceStr),//随机串     
//				         "package":self.getDAesString(pack),     
//				         "signType":"MD5",         //微信签名方式：     
//				         "paySign":self.getDAesString(paySign), //微信签名 
//				      },
//				      function(res){
//				      	
//				      	alert(res.err_msg);
//								if(res.err_msg == "get_brand_wcpay_request:ok" ){
//						      	self.$router.push('/noticeSuccess?action='+self.action)
//						      } 				      	
//				      	if(res.err_msg == "get_brand_wcpay_request:cancel" ){
//						      	$.toast("取消支付", "forbidden");
//						      	if (process.env.NODE_ENV == 'dev') {
//										  window.location='../index.html'
//										} else if (process.env.NODE_ENV == 'production') {
//										  window.location='../sechos/index.html'
//										}
//						      } 
//						      if(res.err_msg == "get_brand_wcpay_request:fail" ){
//						      	$.toast("支付失败", "forbidden");
//						      	if (process.env.NODE_ENV == 'dev') {
//										  window.location='../index.html'
//										} else if (process.env.NODE_ENV == 'production') {
//										  window.location='../sechos/index.html'
//										}
//						      } 
				      	//
				     //
//				   }); 
				},
				
		//获取url中的参数
		 GetQueryString(name){
			     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
			     var r = window.location.search.substr(1).match(reg);//search,查询？后面的参数，并匹配正则
			     if(r!=null)return  decodeURI(r[2]); return null;
			},

		/*
			* 对加密之后的密文在页面上进行解密，以便用户进行修改
			* @param {String}   word  需要加密的密码
			* @param {String}   keyStr  对密码加密的秘钥
			* @return {String}   解密的明文
			* */
			getDAesString(word, keyStr) { // 解密
			  keyStr = keyStr ? keyStr : 'expsofthero12345';
			  let key = CryptoJS.enc.Utf8.parse(keyStr);
			  let decrypt = CryptoJS.AES.decrypt(word, key, {
			    mode: CryptoJS.mode.ECB,
			    padding: CryptoJS.pad.Pkcs7
			  });
			  return CryptoJS.enc.Utf8.stringify(decrypt).toString();
			},
			
		}
  }
  </script>

<style scoped>
	
</style>
