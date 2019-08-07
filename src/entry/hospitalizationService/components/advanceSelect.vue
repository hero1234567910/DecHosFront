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
		  			<h4 class="weui-media-box__title">{{info.yjjlj}}</h4>
		  		</div>
		  	</div>
		  	<div class="hero-list-item">
		  		<div class="hero-list-item-left">
		  			<p class="weui-media-box__desc">预交金余额</p>
		  		</div>
		  		<div class="hero-list-item-right" style="margin-left: 76px;">
		  			<h4 class="weui-media-box__title">{{info.yjjye}}</h4>
		  		</div>
		  	</div>
		  	<div class="hero-list-item">
		  		<div class="hero-list-item-left">
		  			<p class="weui-media-box__desc">费用总金额</p>
		  		</div>
		  		<div class="hero-list-item-right" style="margin-left: 76px;">
		  			<h4 class="weui-media-box__title">{{info.fyzje}}</h4>
		  		</div>
		  	</div>
		  	<div class="hero-list-item" style="position: relative;">
		  		<div class="hero-list-item-left">
		  			<p class="weui-media-box__desc">费用自付金额</p>
		  		</div>
		  		<div class="hero-list-item-right" style="margin-left: 63px;">
		  			<h4 class="weui-media-box__title">{{info.fyzfje}}</h4>
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
        	<el-card class="box-card" v-for="(item, idx) in detail"  :key="idx">
					  <div slot="header" class="clearfix">
					    <div class="card-hero">
					  		<img src="../../../../static/img/明细.svg" style="position: absolute;top: -4px;width: 80%;"/>
					  	</div>
					    <span>预交序号: {{item.yjxh}}</span>
					  </div>
					  <div class="text item">
					    <div class="hero-list-item">
					  		<div class="hero-list-item-left">
					  			<p class="weui-media-box__desc">操作类别</p>
					  		</div>
					  		<div class="hero-list-item-right" style="margin-left: 37px;">
					  			<h4 class="weui-media-box__title">{{item.czlb}}</h4>
					  		</div>
					  	</div>
					  	<div class="hero-list-item">
					  		<div class="hero-list-item-left">
					  			<p class="weui-media-box__desc">预交金额</p>
					  		</div>
					  		<div class="hero-list-item-right">
					  			<h4 class="weui-media-box__title">{{item.yjje}}</h4>
					  		</div>
					  	</div>
					  	<div class="hero-list-item">
					  		<div class="hero-list-item-left">
					  			<p class="weui-media-box__desc">发票号</p>
					  		</div>
					  		<div class="hero-list-item-right">
					  			<h4 class="weui-media-box__title" style="margin-left: 13px;">{{item.fph}}</h4>
					  		</div>
					  	</div>
					  	<div class="hero-list-item">
					  		<div class="hero-list-item-left">
					  			<p class="weui-media-box__desc">缴费日期</p>
					  		</div>
					  		<div class="hero-list-item-right">
					  			<h4 class="weui-media-box__title">{{item.jfrq}}</h4>
					  		</div>
					  	</div>
					  	<div class="hero-list-item">
					  		<div class="hero-list-item-left">
					  			<p class="weui-media-box__desc">支付方式</p>
					  		</div>
					  		<div class="hero-list-item-right">
					  			<h4 class="weui-media-box__title">{{item.zffs}}</h4>
					  		</div>
					  	</div>
					  	<div class="hero-list-item" style="position: relative;">
					  		<div class="hero-list-item-left">
					  			<p class="weui-media-box__desc">状态</p>
					  		</div>
					  		<div class="hero-list-item-right" style="margin-left: 63px;">
					  			<h4 class="weui-media-box__title">{{item.jlzt}}</h4>
					  		</div>
					  	</div>
					  </div>
					</el-card>
					
					
					<!--<el-card class="box-card">
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
					</el-card>-->
        </div>
      </transition>
    </div>
    
     <el-dialog title="选择要查看的病历号" :visible.sync="isShow">
			<commonSelect v-bind:mzData='mzData' @handleCall="handleCall"></commonSelect>
		 </el-dialog>
    
  </div>
</template>


<script>
	import model from './model.js'
	import commonSelect from './commonSelect.vue'
  export default {
  	components: {commonSelect},
  	data(){
  		this.model = model(this.axios);
  		return{
  			show: false,
  			blh:'',
  			zjh:localStorage.getItem('sec_patientIdcard'),
				hzxm:localStorage.getItem('sec_patientName'),
				patid:'',
				isShow:false,
				mzData:[],
				jzlsh:'',
				info:{},
				detail:[]
  		}
  	},
  	mounted(){
  		this.init();
  	},
  	methods:{
  		handleCall(res){
  			this.blh = res.blh;
  			this.patid = res.patid;
				this.isShow = false;
				//获取jzlsh并获取汇总信息
				this.getJzlsh();
				
				
			},
  		toIndex(){
  			this.$router.push('/');
  		},
  		init(){
  			//获取
  			 $.showLoading();
					let self = this;
					let data={
						hzxm:this.hzxm,
						zjh:this.zjh,
						action:'zy',
						openid:localStorage.getItem('sec_openId')
					}
					
					this.model.selectPatient(data).then(function(res){
						 $.hideLoading();
						if(res.data.code == '0'){
							self.mzData = res.data.data;
							self.isShow = true;
						}else{
							$.alert("未查询到您的住院信息", "提示", function() {
							});
						}
					})
  		},
  		getJzlsh(){
  			let self = this;
  			let data = {
  				hzxm:this.hzxm,
  				patid:this.patid
  			}
  			this.model.getJzlsh(data).then(function(res){
  				if(res.data.code == 0){
  					self.jzlsh = res.data.data.jzlsh;
  					self.getSummary();
  					self.getAdvanceDetail();
  				}else{
  					$.toptip(res.data.msg,'error');
  				}
  				
  			})
  		},
  		getSummary(){
  			let self = this;
  			let data = {
  				hzxm:this.hzxm,
  				jzlsh:this.jzlsh
  			}
  			this.model.getSummary(data).then(function(res){
  				if(res.data.code == 0){
  					self.info = res.data.data;
  				}else{
  					$.toptip(res.data.msg,'error');
  				}
  			})
  		},
  		getAdvanceDetail(){
  			let self = this;
  			let data = {
  				hzxm:this.hzxm,
  				jzlsh:this.jzlsh
  			}
  			this.model.getAdvanceDetail(data).then(function(res){
  				if(res.data.code == 0){
  					self.detail = res.data.data;
  				}else{
  					$.toptip(res.data.msg,'error');
  				}
  			})
  		}
  	}
  }
  </script>

<style>
	.el-dialog{
		width: calc(100vw - 20px);
	}
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
		margin-left: 38px;
    	float: left;
	}
	.hero-list-item{
		height: 20px;
		margin-top: 5px;
	}
</style>
