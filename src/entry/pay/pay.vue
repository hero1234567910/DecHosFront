<template>
  <div style="height: 100%;">
 		
  </div>
</template>


<script>
	
import weui from 'jquery-weui/dist/js/jquery-weui.min'
import model from './model.js'
  export default {
	data() {
    	this.model = model(this.axios)
      return {
      }
    },
    mounted(){
//  	this.getUserInfo();
			this.init();
    },
	methods:{
		init(){
			$.toptip('下单成功，请在5分钟内完成支付', 3600000, 'success');
				//吊起支付控件
				if (typeof WeixinJSBridge == "undefined"){
				   if( document.addEventListener ){
				       document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
				   }else if (document.attachEvent){
				       document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
				       document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
				   }
				}else{
				   onBridgeReady();
				}
		},
		
		onBridgeReady(){
					var appId = GetQueryString('appId');
					var nonceStr = GetQueryString('nonceStr');
					var pack = GetQueryString('pack');
					var paySign = GetQueryString('paySign');
					var timestamp = GetQueryString('timeStamp');
					console.log(dcrypt(appId)+"  "+timestamp+"   "+dcrypt(nonceStr)+"    "+dcrypt(pack)+"   "+dcrypt(paySign));
				   WeixinJSBridge.invoke(
				      'getBrandWCPayRequest', {
				         "appId":dcrypt(appId),     //公众号名称，由商户传入     
				         "timeStamp":dcrypt(timestamp),         //时间戳，自1970年以来的秒数     
				         "nonceStr":dcrypt(nonceStr), //随机串     
				         "package":dcrypt(pack),     
				         "signType":"MD5",         //微信签名方式：     
				         "paySign":dcrypt(paySign) //微信签名 
				      },
				      function(res){
				      if(res.err_msg == "get_brand_wcpay_request:ok" ){
				      		if (process.env.NODE_ENV == 'dev') {
								  window.location='../hospitalizationService.html/advancePay'
								} else if (process.env.NODE_ENV == 'production') {
								  window.location='../sechos/hospitalizationService.html/advancePay'
								}
				      	location.href="../../../WXOrderSystem/pages/notice/noticeSuccess.html"
				      } 
				      if(res.err_msg == "get_brand_wcpay_request:cancel" ){
				      	$.toast("取消支付", "forbidden");
				      	if (process.env.NODE_ENV == 'dev') {
								  window.location='../hospitalizationService.html/advancePay'
								} else if (process.env.NODE_ENV == 'production') {
								  window.location='../sechos/hospitalizationService.html/advancePay'
								}
				      } 
				      if(res.err_msg == "get_brand_wcpay_request:fail" ){
				      	$.toast("支付失败", "forbidden");
				      	if (process.env.NODE_ENV == 'dev') {
								  window.location='../hospitalizationService.html/advancePay'
								} else if (process.env.NODE_ENV == 'production') {
								  window.location='../sechos/hospitalizationService.html/advancePay'
								}
				      } 
				   }); 
				},
		//获取url中的参数
		 GetQueryString(name){
			     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
			     var r = window.location.search.substr(1).match(reg);//search,查询？后面的参数，并匹配正则
			     if(r!=null)return  decodeURI(r[2]); return null;
			},
			
		}
  }
  </script>

<style scoped>
	
</style>
