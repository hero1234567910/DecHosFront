<template>
	<div style="">
		<div class="weui-panel__hd">
		  	<div class="hero-panel-img">
		  		<img src="../../../../static/img/科室.png" style="width: 80%;"/>
		  	</div>
		  	<div class="hero-panel-title">
		  	<strong>皮肤科</strong>
		  	</div>
		  </div>
		<div class="weui-row">
		  <div class="weui-col-33">
		  	<a>
		  		<p>呼吸内科</p>
		  	</a>
			  </div>
		  <div class="weui-col-33">
		  	<p>呼吸内科</p>
		  </div>
		  <div class="weui-col-33">
		  	<p>呼吸内科</p>
		  </div>
		</div>
		<div class="weui-row">
		  <div class="weui-col-33">
	  		<p>呼吸内科</p>
		  </div>
		  <div class="weui-col-33">
		  	<p>呼吸内科</p>
		  </div>
		</div>
		<!--<div class="weui-row">
		  <div class="weui-col-33">
	  		
		  </div>
		  <div class="weui-col-33">
		  </div>
		  <div class="weui-col-33">
		  </div>
		</div>-->
	</div>
</template>

<script>
	import weui from 'jquery-weui/dist/js/jquery-weui.min'
  export default {
  	  data() {
      return {
        
      };
    },
    methods: {
      
    }
  }
</script>

<style>
	.weui-panel__hd{
		height: 30px;
		font-size: 18px;
		color: #000000;
	}
	.hero-panel-img{
		float: left;
		width: 35px;
		height: 35px;
	}
	.weui-row{
		height: 50px;
    margin-top: 10px;
	}
	.weui-col-33{
		background-color: #F7F7F7;
		height: 50px;
		font-size: 13px;
	    line-height: 50px;
	    text-align: center;
	    color: #999999;
	}
</style>