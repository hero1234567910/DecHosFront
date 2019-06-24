<template>
  <div style="overflow: auto;">
 		<div class="conlist-header">
 			<div class="weui-row" style="height: 100%;">
 				<div class="header-img weui-col-20">
 					<div class="header-img-hero">
 						<img src="../../../../static/img/咨询.png" width="50%" style="vertical-align: middle;"/>
 					</div>
 				</div>
	 			<div class="header-button weui-col-30">
	 				<el-button type="primary" v-on:click="topage()">免费咨询</el-button>
	 			</div>
 				<div class="header-select weui-col-50">
 					<el-input
				    placeholder="请输入内容" 
				    suffix-icon="el-icon-search"
				    v-model="search"
				    >
				  </el-input>
 				</div>
 			</div>
 		</div>
 		
 		<div class="conlist-content">
 			<div class="weui-panel weui-panel_access">
			  <div class="weui-panel__hd">
			  	<div class="panel-img"><img src="../../../../static/img/问题(1).png" width="57%">
			  	</div>图文组合列表
			  	</div>
			  <div class="weui-panel__bd">
			    <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
			      <div class="weui-media-box__bd">
			        <p class="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道图文组合列表图文组合列表图文组合列表图文组合列表图文组合列表图文组合列表图文组合列表图文组合列表图文组合列表。</p>
			      </div>
			    </a>
			  </div>
			  <div class="weui-panel__ft">
			    <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link" v-on:click="todetail()">
			      <div class="weui-cell__bd">【查看详情】</div>
			      <span class="weui-cell__ft"></span>
			    </a>    
			  </div>
			</div>
			
			<div style="margin-top: 30px;">
				<div>
					<a href="javascript:;" class="weui-btn weui-btn_primary" v-on:click="toindex()">返回主页</a>
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
  			search:''
  		}
  	},
  	methods:{
  		toindex(){
  			if (process.env.NODE_ENV == 'dev') {
				  window.location='../../index.html'
				} else if (process.env.NODE_ENV == 'production') {
				  window.location='../../sechos/index.html'
				}
  		},
  		todetail(){
  			this.$router.push('/consultationDetails');
  		},
  		topage(){
  			this.$router.push('/consultationPage')
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
	.weui-panel__hd{
		font-size: 14px;
	}
.weui-media-box__desc{
	color: #000000;
	font-size: 15px;
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
		height: calc(100vh - 72px);
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
