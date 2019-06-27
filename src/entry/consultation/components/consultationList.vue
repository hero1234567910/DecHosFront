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
 						 @keyup.enter.native="searchKey()"
				    placeholder="请输入咨询人姓名" 
				    suffix-icon="el-icon-search"
				    v-model="search"
				    >
				  </el-input>
 				</div>
 			</div>
 		</div>
 		
 		<div class="conlist-content" id="th">
 			<div id="list">
	 			<div class="weui-panel weui-panel_access" v-for="item in consulList">
				  <div class="weui-panel__hd">
				  	<div class="panel-img"><img src="../../../../static/img/问题(1).png" width="57%">
				  	</div>{{item.consultationTitle}}
				  	</div>
				  <div class="weui-panel__bd">
				    <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
				      <div class="weui-media-box__bd">
				        <p class="weui-media-box__desc">{{item.consultationContent}}</p>
				      </div>
				    </a>
				  </div>
				  <div class="weui-panel__ft">
				    <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link" v-on:click="todetail(item.rowGuid)">
				      <div class="weui-cell__bd">【查看详情】</div>
				      <span class="weui-cell__ft"></span>
				    </a>    
				  </div>
				</div>
			</div>
			<div v-if="isshow()" class="weui-loadmore" id="onloading">
			  <i class="weui-loading"></i>
			  <span class="weui-loadmore__tips">正在加载</span>
			</div>
			
			<div style="margin-top: 30px;margin-bottom: 30px;">
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
  			search:'',
  			consulList:[],
  			loading:false,
  			page:2
  		}
  	},
  	mounted(){
  		this.getConsultationList();
  		this.init()
  	},
  	watch:{

  	},
  	methods:{
  		isshow(){
				if(this.consulList.length >= 5){
					return true;
				}else{
					return false;
				}
  		},
  		searchKey(e){
  			$.showLoading();
  			let self = this;
  			$('#th').destroyInfinite();
  			$('#th').infinite();
				let data = {
					'page':'1',
					'limit':'10',
					'consultationName':this.search
				}
				this.model.getList(data).then(function(res){
					if(res.data.code == '0'){
						$.hideLoading();
          	self.consulList = res.data.data;
						self.page = 2;
						$('#onloading').css('display','');
					}else{
						$.toptip(res.data.msg, 'error');
					}
			  					
				})
				

  		},
  		init(){
  			let self = this;
  			var loading = false;  //状态标记
				$('#th').infinite();
  			$('#th').on("infinite", function() {
				 	 if(loading) return;
					  loading = true;
					  setTimeout(function() {
					  	let data = {};
					  	if(self.search != ''){
					  		data = {
					  			'limit':'10',
					  			'page':self.page,
					  			'consultationName':self.search
					  		}
					  	}else{
					  		data = {
						  		'limit':'10',
						  		'page':self.page
						  	};
					  	}
					  	
					  	self.model.getList(data).then(function(res){
			  				if(res.data.code == '0'){
			  					if(res.data.data.length == 0){
			  						$('#th').destroyInfinite();
			  						$('#onloading').css('display','none');
			  						self.page = 2;
			  					}
			  					
			  					self.page++;
			  					for(var i=0;i<res.data.data.length;i++){
			  						self.consulList.push(res.data.data[i])
			  					}
			  				}else{
			  					$.toptip(res.data.msg, 'error');
			  				}
			  			})
					    loading = false;
					  }, 1500);   //模拟延迟
				});
  		},
  		//获取列表
  		getConsultationList(){
  			let self =this;
  			let data = {
  				'page':'1',
  				'limit':'10'
  			};
  			this.model.getList(data).then(function(res){
  				if(res.data.code == '0'){
  					self.consulList = res.data.data;
  				}else{
  					$.toptip(res.data.msg, 'error');
  				}
  			})
  		},
  		toindex(){
  			if (process.env.NODE_ENV == 'dev') {
				  window.location='../../index.html'
				} else if (process.env.NODE_ENV == 'production') {
				  window.location='../../sechos/index.html'
				}
  		},
  		todetail(ele){
				this.$router.push('/consultationDetails?rowGuid='+ele);
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
