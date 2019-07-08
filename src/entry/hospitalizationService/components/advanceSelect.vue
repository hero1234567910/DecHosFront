<template>
  <div style="overflow: auto;height: 100%;">
  	<el-card class="box-card">
		  <div slot="header" class="clearfix">
		  	<div class="card-hero">
		  		<img src="../../../../static/img/住院预交金.svg" style="position: absolute;top: -7px;width: 80%;"/>
		  	</div>
		    <span style="font-weight: 700;	">预交金信息汇总</span>
		    
		  </div>
		  <div>
		    <div class="hero-list-item">
		  		<div class="hero-list-item-left">
		  			<p class="weui-media-box__desc">预交金额累计充值</p>
		  		</div>
		  		<div class="hero-list-item-right" style="margin-left: 37px;">
		  			<h4 class="weui-media-box__title">xxx</h4>
		  		</div>
		  	</div>
		  	<div class="hero-list-item">
		  		<div class="hero-list-item-left">
		  			<p class="weui-media-box__desc">预交金余额</p>
		  		</div>
		  		<div class="hero-list-item-right">
		  			<h4 class="weui-media-box__title">xxxx</h4>
		  		</div>
		  	</div>
		  	<div class="hero-list-item">
		  		<div class="hero-list-item-left">
		  			<p class="weui-media-box__desc">费用总金额</p>
		  		</div>
		  		<div class="hero-list-item-right">
		  			<h4 class="weui-media-box__title">xxx</h4>
		  		</div>
		  	</div>
		  	<div class="hero-list-item" style="position: relative;">
		  		<div class="hero-list-item-left">
		  			<p class="weui-media-box__desc">费用自付金额</p>
		  		</div>
		  		<div class="hero-list-item-right" style="margin-left: 63px;">
		  			<h4 class="weui-media-box__title">xxx</h4>
		  		</div>
		  	</div>
		  </div>
		</el-card>
		<el-button-group>
		  <el-button type="primary" icon="el-icon-arrow-left"  @click="show = !show">查看明细</el-button>
		  <el-button type="primary" @click="toIndex()">返回主列表<i class="el-icon-arrow-right el-icon--right"></i></el-button>
		</el-button-group>
		
		<div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box" style="width: calc(100vw - 30px);margin-left: auto;margin-right: auto;">
        	<el-card class="box-card">
					  <div slot="header" class="clearfix">
					    <div class="card-hero">
					  		<img src="../../../../static/img/明细.svg" style="position: absolute;top: -4px;width: 80%;"/>
					  	</div>
					    <span>HIS收据号: XXXXXX</span>
					  </div>
					  <div class="text item">
					    <div class="hero-list-item">
					  		<div class="hero-list-item-left">
					  			<p class="weui-media-box__desc">预交金额累计充值</p>
					  		</div>
					  		<div class="hero-list-item-right" style="margin-left: 37px;">
					  			<h4 class="weui-media-box__title">xxx</h4>
					  		</div>
					  	</div>
					  	<div class="hero-list-item">
					  		<div class="hero-list-item-left">
					  			<p class="weui-media-box__desc">预交金余额</p>
					  		</div>
					  		<div class="hero-list-item-right">
					  			<h4 class="weui-media-box__title">xxxx</h4>
					  		</div>
					  	</div>
					  	<div class="hero-list-item">
					  		<div class="hero-list-item-left">
					  			<p class="weui-media-box__desc">费用总金额</p>
					  		</div>
					  		<div class="hero-list-item-right">
					  			<h4 class="weui-media-box__title">xxx</h4>
					  		</div>
					  	</div>
					  	<div class="hero-list-item" style="position: relative;">
					  		<div class="hero-list-item-left">
					  			<p class="weui-media-box__desc">费用自付金额</p>
					  		</div>
					  		<div class="hero-list-item-right" style="margin-left: 63px;">
					  			<h4 class="weui-media-box__title">xxx</h4>
					  		</div>
					  	</div>
					  </div>
					</el-card>
					
					
					<el-card class="box-card">
					  <div slot="header" class="clearfix">
					    <div class="card-hero">
					  		<img src="../../../../static/img/明细.svg" style="position: absolute;top: -4px;width: 80%;"/>
					  	</div>
					    <span>HIS收据号: XXXXXX</span>
					  </div>
					  <div class="text item">
					    <div class="hero-list-item">
					  		<div class="hero-list-item-left">
					  			<p class="weui-media-box__desc">预交金额累计充值</p>
					  		</div>
					  		<div class="hero-list-item-right" style="margin-left: 37px;">
					  			<h4 class="weui-media-box__title">xxx</h4>
					  		</div>
					  	</div>
					  	<div class="hero-list-item">
					  		<div class="hero-list-item-left">
					  			<p class="weui-media-box__desc">预交金余额</p>
					  		</div>
					  		<div class="hero-list-item-right">
					  			<h4 class="weui-media-box__title">xxxx</h4>
					  		</div>
					  	</div>
					  	<div class="hero-list-item">
					  		<div class="hero-list-item-left">
					  			<p class="weui-media-box__desc">费用总金额</p>
					  		</div>
					  		<div class="hero-list-item-right">
					  			<h4 class="weui-media-box__title">xxx</h4>
					  		</div>
					  	</div>
					  	<div class="hero-list-item" style="position: relative;">
					  		<div class="hero-list-item-left">
					  			<p class="weui-media-box__desc">费用自付金额</p>
					  		</div>
					  		<div class="hero-list-item-right" style="margin-left: 63px;">
					  			<h4 class="weui-media-box__title">xxx</h4>
					  		</div>
					  	</div>
					  </div>
					</el-card>
        </div>
      </transition>
    </div>
  </div>
</template>


<script>
	import model from './model.js'
  export default {
  	data(){
  		this.model = model(this.axios);
  		return{
  			show: false
  		}
  	},
  	methods:{
  		toIndex(){
  			this.$router.push('/');
  		}
  	}
  }
  </script>

<style>
	
</style>
<style scoped>
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
