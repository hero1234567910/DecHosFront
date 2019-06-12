<template>
<div>
	<div class="weui-panel weui-panel_access">
	  <div class="weui-panel__hd">
	  	<div class="hero-panel-img">
	  		<img src="../../../static/img/400398144.png" style="width: 100%;"/>
	  	</div>
	  	<div class="hero-panel-title">
	  	<strong>皮肤科</strong>
	  	</div>
	  </div>
	  <div class="weui-panel__bd">
	  	<div class="hero-list-item">
	  		<div class="hero-list-item-left">
	  			<p class="weui-media-box__desc">就诊科室</p>
	  		</div>
	  		<div class="hero-list-item-right">
	  			<h4 class="weui-media-box__title">皮肤科</h4>
	  		</div>
	  	</div>
	  	<div class="hero-list-item">
	  		<div class="hero-list-item-left">
	  			<p class="weui-media-box__desc">就诊时间</p>
	  		</div>
	  		<div class="hero-list-item-right">
	  			<h4 class="weui-media-box__title">2018/10/20</h4>
	  		</div>
	  	</div>
	  	<div class="hero-list-item">
	  		<div class="hero-list-item-left">
	  			<p class="weui-media-box__desc">门诊类型</p>
	  		</div>
	  		<div class="hero-list-item-right">
	  			<h4 class="weui-media-box__title">普通门诊</h4>
	  		</div>
	  	</div>
	  	<div class="hero-list-item" style="position: relative;">
	  		<div class="hero-list-item-left">
	  			<p class="weui-media-box__desc">挂号费用</p>
	  		</div>
	  		<div class="hero-list-item-right">
	  			<h4 class="weui-media-box__title">25元(供参考)</h4>
	  		</div>
	  		<!--<div style="position: absolute;width: 50px;right: 0px;">
	  			<el-collapse v-model="activeNames" @change="handleChange">
				  <el-collapse-item title="更多" name="1">
				    
				  </el-collapse-item>
				</el-collapse>
	  		</div>-->
	  	</div>
	    
	    <el-collapse v-model="activeNames" @change="handleChange">
		  <el-collapse-item title="更多" name="1">
		    <div class="hero-list-item">
		  		<div class="hero-list-item-left">
		  			<p class="weui-media-box__desc">挂号费用</p>
		  		</div>
		  		<div class="hero-list-item-right">
		  			<h4 class="weui-media-box__title">25元(供参考)</h4>
		  		</div>
		  	</div>
		  	<div class="hero-list-item">
		  		<div class="hero-list-item-left">
		  			<p class="weui-media-box__desc">就诊科室</p>
		  		</div>
		  		<div class="hero-list-item-right">
		  			<h4 class="weui-media-box__title">皮肤科</h4>
		  		</div>
		  	</div>
		  	<div class="hero-list-item">
		  		<div class="hero-list-item-left">
		  			<p class="weui-media-box__desc">就诊时间</p>
		  		</div>
		  		<div class="hero-list-item-right">
		  			<h4 class="weui-media-box__title">2018/10/20</h4>
		  		</div>
		  	</div>
		  	<div class="hero-list-item">
		  		<div class="hero-list-item-left">
		  			<p class="weui-media-box__desc">门诊类型</p>
		  		</div>
		  		<div class="hero-list-item-right">
		  			<h4 class="weui-media-box__title">普通门诊</h4>
		  		</div>
		  	</div>
		  </el-collapse-item>
		</el-collapse>
	  </div>
	</div>
	<div class="weui-panel weui-panel_access" style="margin-top: 0px;">
	  <div class="weui-panel__hd" style="background-color: #EFF7FD;line-height: 38px;">挂号时间段</div>
	  <div class="weui-panel__bd">
	    <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
	      <div class="weui-media-box__bd">
	        <p class="weui-media-box__desc" style="color: red;">09:30-10:00</p>
	      </div>
	    </a>
	  </div>
	</div>
	<div class="weui-panel weui-panel_access" style="margin-top: 0px;">
	  <div class="weui-panel__hd" style="background-color: #EFF7FD;line-height: 38px;;position: relative;">就诊人
	  	<a><div style="    width: 80px;
		    position: absolute;
		    font-size: 16px;
		    right: 10px;
		    top: 17px;color: #7ad3fd;">就诊人管理</div></a>
	  </div>
	  <div class="weui-panel__bd">
	    <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
	      <div class="weui-media-box__bd">
	      	<img src="../../../static/img/头像.png" style="width: 20px;display: inline-block;box-sizing: border-box;vertical-align: middle;"/>
	        <p class="weui-media-box__desc" style="display: inline-block;box-sizing: border-box;vertical-align: middle;color: black">【医保卡】 张三</p>
	      </div>
	    </a>
	  </div>
	</div>
	<div class="hero-back">
		<div class="weui-cells weui-cells_form">
		  <div class="weui-cell">
		    <div class="weui-cell__hd"><label class="weui-label">就诊人</label></div>
			    <div class="weui-cell__bd">
			      <input class="weui-input" type="text" disabled="true" value="张三/女/25岁" style="text-align: right;color: #999999">
			    </div>
			  </div>
			  <div class="weui-cell">
		    <div class="weui-cell__hd"><label class="weui-label">证件号</label></div>
			    <div class="weui-cell__bd">
			      <input class="weui-input" type="text" disabled="true" value="XXXXXXXXXXXX" style="text-align: right;color: #999999">
			    </div>
			  </div>
			  <div class="weui-cell">
		    <div class="weui-cell__hd"><label class="weui-label">就诊卡号</label></div>
			    <div class="weui-cell__bd">
			      <input class="weui-input" type="text" disabled="true" value="XXXXXXXXXXXXXXXX" style="text-align: right;color: #999999">
			    </div>
			  </div>
			  <div class="weui-cell">
		    <div class="weui-cell__hd"><label class="weui-label">联系电话</label></div>
			    <div class="weui-cell__bd">
			      <input class="weui-input" type="text" disabled="true" value="88888888" style="text-align: right;color: #999999">
			    </div>
			  </div>
		</div>
		
		<div class="weui-row">
		  <div class="weui-col-50">
	  		<a href="javascript:;" class="weui-btn weui-btn_primary hero-button">修改挂号信息</a>
		  </div>
		  <div class="weui-col-50">
	  		<!--<div class="hero-button-left">
	  			
	  		</div>-->
	  		<a href="javascript:;" class="weui-btn weui-btn_primary hero-button">取消挂号预约</a>
		  </div>
		</div>
	</div>
	
</div>
</template>

<script>
	import weui from 'jquery-weui/dist/js/jquery-weui.min'
  export default {
  	  data() {
      return {
        activeNames: []
      };
    },
    methods: {
      handleChange(val) {
      }
    }
  }
</script>

<style>
	.hero-button{
		background-color: #44C5E3;
		width: 170px;
	    height: 38px;
	    line-height: 38px;
	}
	..weui-row .weui-col-50{
		height: 50px;
	}
	.weui-row{
		margin-top: 20px;
    		height: 50px;
	}
	.weui-label{
		color: #999999
	}
	.weui-cells{
		margin-top: 10px;
		font-size: 15px;
	}
	.hero-back{
		background-color: #EFF7FD;
	}
	.el-collapse-item__header{
		padding-left: 20px;
	}
	.weui-media-box__title{
		font-size: 13px;
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
	.weui-panel__hd{
		height: 23px;
		font-size: 18px;
	}
	.hero-panel-img{
		float: left;
		width: 35px;
		height: 35px;
	}
	.hero-panel-title{
		margin-top: 5px;
	    margin-left: 10px;
	    float: left;
	}
</style>