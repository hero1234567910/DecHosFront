<template>
  <div style="overflow: auto;">
 		<div class="conlist-content">
 			<div class="weui-panel weui-panel_access" style="margin-top: 0px;">
			  <div class="weui-panel__hd">
			  	<div class="panel-img"><img src="../../../../static/img/问题(1).png" width="57%">
			  	</div>为什么运动会受伤
			  	</div>
			  <div class="weui-panel__bd">
			    <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
			      <div class="weui-media-box__bd">
			        <p class="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道图文组合列表图文组合列表图文组合列表图文组合列表图文组合列表图文组合列表图文组合列表图文组合列表图文组合列表。</p>
			      </div>
			    </a>
			  </div>
			</div>
			
			<div class="weui-panel weui-panel_access">
			  <div class="weui-panel__hd">
			  	<div class="panel-img"><img src="../../../../static/img/问题(2).png" width="77%">
			  	</div>医生回复区
			  	</div>
			  <div class="weui-panel__bd">
			    <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
			      <div class="weui-media-box__hd">
			        <img class="weui-media-box__thumb" src="../../../../static/img/400398144.png">
			      </div>
			      <div class="weui-media-box__bd">
			        <h4 class="weui-media-box__title"> 回复时间：   2019-6-12</h4>
			      </div>
			    </a>
			  </div>
			  <div>
			  	<el-input
					  type="textarea"
					  :autosize="{ minRows: 2, maxRows: 4}"
					  placeholder=""
					  v-model="textarea">
					</el-input>
			  </div>
			</div>
			<div style="margin-top: 30px;">
				<div>
					<a href="javascript:;" class="weui-btn weui-btn_primary" v-on:click="tolist()">返回列表</a>
				</div>
			</div>
 		</div>
  </div>
</template>


<script>
	import model from './model.js'
  export default {
  	data(){
  		this.model = model(this.axios);
  		return{
  			visible: true,
  			textarea:'这是一个错误的决定'
  		}
  	},
  	methods:{
  		tolist(){
  			this.$router.push('/')
  		}
  	}
  }
  </script>

<style>
	.el-input__inner{
		border-radius: 22px;
		border: 1px solid #52C5F1;
	}
</style>
<style scoped>
.weui-btn_primary{
		background-color: #4CCBDB;
	}
	.weui-btn{
		width: 230px;
	}
	.qipao{
		height: 50px;
	}
	.weui-panel__hd{
		font-size: 14px;
	}
.weui-media-box__desc{
	color: #000000;
	font-size: 15px;
  -webkit-box-orient: initial;
  -webkit-line-clamp: inherit;
}
	.weui-cell_link{
		color: #73CFF0;
	}
	.panel-img{
		height: 20px;
		float: left;
	}
	.weui-panel:first-child{
		margin-top: 10px;
	}
	.conlist-content{
		height: 100%;
		overflow-y: auto;
	}
	.conlist-header{
		height: 72px;
		background-color: #FFFFFF;
		width: 100%;
	}
	.header-img{
		height: 100%;
	}
	.header-button{
		height: 100%;
		line-height: 72px;
		padding-right: 20px;
	}
	.header-select{
		height: 100%;
		line-height: 72px;
	}
	.header-img-hero{
		height: 100%;
		line-height: 72px;
    text-align: center;
	}
	.el-button--primary{
		background-color: #45C5E2;
		    width: 100px;
	}
	.el-input{
		width: 90%;
	}
</style>
