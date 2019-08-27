<template>
  <div style="height: 100%;background-color: #EFF7FD;">
		  <div class="weui-msg">
			  <div class="weui-msg__icon-area"><i class="weui-icon-success weui-icon_msg"></i></div>
			  <div class="weui-msg__text-area">
			    <h2 class="weui-msg__title">操作成功</h2>
			    <!--<p class="weui-msg__desc">支付成功<a href="javascript:void(0);">文字链接</a></p>-->
			  </div>
			  <div class="weui-msg__opr-area">
			    <p class="weui-btn-area">
			      <a href="javascript:;" class="weui-btn weui-btn_primary" @click="toindex()">返回主页</a>
			    </p>
			  </div>
			  <div class="weui-msg__extra-area">
			    <div class="weui-footer">
			      <!--<p class="weui-footer__links">
			        <a href="javascript:void(0);" class="weui-footer__link">底部链接文本</a>
			      </p>
			      <p class="weui-footer__text">Copyright © 2008-2016 weui.io</p>-->
			    </div>
			  </div>
			</div>
  </div>
</template>


<script>
import weui from "jquery-weui/dist/js/jquery-weui.min";

export default {
  data() {
    return {
    	action:''
    };
  },
  mounted() {
//	this.init()
  },
  methods: {
//	init(){
//			let self = this;
//			let da = this.$route.query;
//			self.action = da.action;
//
//		},
		toindex(){
			if (process.env.NODE_ENV == 'dev') {
				  window.location='../../index.html'
				} else if (process.env.NODE_ENV == 'production') {
				  window.location='../../2ysechos/index.html'
				}
		},
  }
};
</script>

<style scoped>
</style>
