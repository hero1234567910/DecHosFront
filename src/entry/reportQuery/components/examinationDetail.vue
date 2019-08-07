<template>
  <div class="weui-panel weui-panel_access" style="height: 100%;background-color: #EFF7FD;">
   <el-card class="box-card">
		  <div slot="header" class="clearfix">
		  	<div class="card-hero">
		  		<img src="../../../../static/img/baogao.png" style="position: absolute;top: -9px;width: 70%;"/>
		  	</div>
		    <span style="font-weight: 700;font-size: 18px;">{{name}}</span>
		  </div>
		  <div>
		    <div class="hero-list-item">
		  		<div class="hero-list-item-left">
		  			<p class="weui-media-box__desc">体检编号</p>
		  		</div>
		  		<div class="hero-list-item-right" style="margin-left: 37px;">
		  			<h4 class="weui-media-box__title">{{bhkcode}}</h4>
		  		</div>
		  	</div>
		  	<div class="hero-list-item">
		  		<div class="hero-list-item-left">
		  			<p class="weui-media-box__desc">体检日期</p>
		  		</div>
		  		<div class="hero-list-item-right" style="margin-left: 37px;">
		  			<h4 class="weui-media-box__title">{{bhkdate}}</h4>
		  		</div>
		  	</div>
		  </div>
		</el-card>
		
		<div class="weui-panel weui-panel_access" style="margin-top: 0px;">
		  <div class="weui-panel__hd" style="background-color: #EFF7FD;line-height: 38px;">
		  	<div class="img-panel">
		  		<img src="../../../../static/img/项目检查结果.png" style="position: absolute;top: 8px;width: 45%;"/>
		  	</div>
		  	项目检查结果</div>
		  <div class="weui-panel__bd" v-for="item in ExaminationDetails">
		      <div class="weui-media-box__bd">
		      	<a href="javascript:;" @click="toItemDetail(item.groupconclusion,item.groupname,item.itemlist)" style="color:#909399;">
						  <div class="weui-cell">
						    <div class="weui-cell__hd"><img src="../../../../static/img/项目小.png"></div>
						    <div class="weui-cell__bd">
						      <p>{{item.groupname}}</p>
						    </div>
						    <div class="weui-cell__ft">
						    	<div class="bd-img">
							  		<img src="../../../../static/img/注意.png" v-show="!item.groupconclusion == '正常' " style="position: absolute;top: 4px;width: 63%;right: 10px;"/>
							  	</div>
						    </div>
						  </div>
						</a>
		      </div>
		  </div>
		</div>
		
		<div class="weui-panel weui-panel_access" style="margin-top: 0px;">
		  <div class="weui-panel__hd" style="background-color: #EFF7FD;line-height: 38px;">
		  	<div class="img-panel">
		  		<img src="../../../../static/img/疾病及处理建议.png" style="position: absolute;top: 8px;width: 45%;"/>
		  	</div>
		  	体检结论</div>
		  <div class="weui-panel__bd">
		    <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
		      <div class="weui-media-box__bd">
		        <el-input
						  type="textarea"
						  readonly
						  autosize
						  v-model="bhkconclusion">
						  </el-input>
		      </div>
		    </a>
		  </div>
		</div>
		
		<div class="weui-panel weui-panel_access" style="margin-top: 0px;">
		  <div class="weui-panel__hd" style="background-color: #EFF7FD;line-height: 38px;">
		  	<div class="img-panel">
		  		<img src="../../../../static/img/疾病及处理建议.png" style="position: absolute;top: 8px;width: 45%;"/>
		  	</div>
		  	体检结果</div>
		  <div class="weui-panel__bd">
		    <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
		      <div class="weui-media-box__bd">
		        <el-input
						  type="textarea"
						  readonly
						  autosize
						  v-model="bhkresult">
						  </el-input>
		      </div>
		    </a>
		  </div>
		</div>
		
  </div>
</template>
<script>
import weui from "jquery-weui/dist/js/jquery-weui.min";
import model from "./model.js";
import global1 from "./global1.vue";//全局变量
export default {
  data() {
    this.model = model(this.axios);
    return {
			duelWay:'本次检验未见异常',
			result:'正常',
			ExaminationDetails:[],
			name:'',
			bhkcode:'',
			bhkdate:'',
			bhkconclusion:'',
			bhkresult:'',
			groupname:'',
			groupconclusion:''
		};
  },
  mounted() {
    this.getExaminatinoDetail();
  },
  methods: {
  	toItemDetail(e1,e2,e3){
		global1.groupconclusion = e1;
		global1.groupname = e2;
  		this.$router.push('/examinationItemDetail'+ele);
	  },
	getExaminatinoDetail(){
		$.showLoading();
		let self = this;
		let da = this.$route.query;
		this.model.getMedicalReportInfo(da).then(function(res){
			$.hideLoading();
			if(res.data.code == 1){
				console.log(res.data.data);
				self.ExaminationDetails = res.data.data.grouplist;
				self.name = res.data.data.name;
				self.bhkcode = res.data.data.bhkcode;
				self.bhkdate = res.data.data.bhkdate;
				self.bhkconclusion = res.data.data.bhkconclusion;
				self.bhkresult = res.data.data.bhkresult;
			}else{
				$.toptip(res.data.msg, "error");
			}
		})
	}
 }
};
</script>

<style>
	.el-card__body{
		padding-bottom: 20px;
    padding-top: 20px;
    padding-left: 5px;
    padding-right: 20px;
	}
</style>
<style scoped>
	.bd-img{
		width: 30px;
		height: 25px;
		line-height: 20px;
		float: left;
		position: relative;
	}
	.weui-cell{
		padding: 15px 15px;
	}
	.weui-cell__hd img{
		width: 60%;
	}
	.img-panel{
		width: 18px;
		height: 30px;
		line-height: 20px;
		float: left;
		position: relative;
	}
	.weui-panel__hd{
		padding: 14px 15px 0px;
	}
	.weui-panel__hd:after{
		left: 0px;
	}
	.el-card{
		margin-bottom: 5px;
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
	.weui-media-box__title{
		font-size: 13px;
	}
</style>
 