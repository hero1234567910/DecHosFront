export function jsSDK (params) {
  if (typeof window.WeixinJSBridge === 'undefined') {
    if (document.addEventListener) {
      document.addEventListener('WeixinJSBridgeReady', function () { onBridgeReady(params) }, false)
    } else if (document.attachEvent) {
      document.attachEvent('WeixinJSBridgeReady', function () { onBridgeReady(params) })
      document.attachEvent('onWeixinJSBridgeReady', function () { onBridgeReady(params) })
    }
  } else {
    onBridgeReady(params)
  }
}

function onBridgeReady (params) {
  window.WeixinJSBridge.invoke(
    'getBrandWCPayRequest', {
      'appId': params.appId, // 公众号名称，由商户传入
      'timeStamp': params.timeStamp, // 时间戳，自1970年以来的秒数
      'nonceStr': params.nonceStr, // 随机串
      'package': params.package,
      'signType': 'MD5', // 微信签名方式：
      'paySign': params.paySign // 微信签名
    },
    function (res) {
//    location.href = params.Url
		if(res.err_msg == "get_brand_wcpay_request:ok" ){
	      	self.$router.push('/noticeSuccess?action='+self.action)
	      } 				      	
  		if(res.err_msg == "get_brand_wcpay_request:cancel" ){
	      	$.toast("取消支付", "forbidden");
	      	if (process.env.NODE_ENV == 'dev') {
				  window.location='../index.html'
				} else if (process.env.NODE_ENV == 'production') {
				  window.location='../sechos/index.html'
				}
	      } 
	      if(res.err_msg == "get_brand_wcpay_request:fail" ){
	      	$.toast("支付失败", "forbidden");
	      	if (process.env.NODE_ENV == 'dev') {
				  window.location='../index.html'
				} else if (process.env.NODE_ENV == 'production') {
				  window.location='../sechos/index.html'
				}
	      } 
    }
  )
}