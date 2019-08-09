<template>
  <div class="weui-panel weui-panel_access" style="height: 100%;background-color: #EFF7FD;overflow: auto;">
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
							  		<img src="../../../../static/img/注意.png" v-if="checkShow(item.groupconclusion)" style="position: absolute;top: 4px;width: 63%;right: 10px;"/>
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
		
		<div style="margin-top: 30px;margin-bottom: 10px;">
				<div>
					<a href="javascript:;" class="weui-btn weui-btn_primary" v-on:click="toReport()">返回体检查询</a>
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
//  this.getExaminatinoDetail();
  },
  beforeRouteEnter(to, from, next) {
      // 路由导航钩子，此时还不能获取组件实例 `this`，所以无法在data中定义变量（利用vm除外）
      // 参考 https://router.vuejs.org/zh-cn/advanced/navigation-guards.html
      // 所以，利用路由元信息中的meta字段设置变量，方便在各个位置获取。这就是为什么在meta中定义isBack
      // 参考 https://router.vuejs.org/zh-cn/advanced/meta.html
      if(from.name=='examinationItemDetail'){
          to.meta.isBack=true;
          //判断是从哪个路由过来的，
          //如果是page2过来的，表明当前页面不需要刷新获取新数据，直接用之前缓存的数据即可
      }
      console.log(to.meta.isBack);
      next();
    },
    activated() {
		  if(!this.$route.meta.isBack){
		    // 如果isBack是false，表明需要获取新数据，否则就不再请求，直接使用缓存的数据
					this.getExaminatinoDetail();
		  }
		  // 恢复成默认的false，避免isBack一直是true，导致下次无法获取数据
		  this.$route.meta.isBack=false
		 
		},
  methods: {
  	checkShow(ele){
  		console.log(ele == '未见异常。');
  		return ele == '未见异常。';
  	},
  	 toReport(){
  	 	this.$router.push('/examinationList');
  	 },
  	toItemDetail(e1,e2,e3){
		global1.groupconclusion = JSON.stringify(e1);
		global1.groupname = JSON.stringify(e2);
  		this.$router.push('/examinationItemDetail?e3='+JSON.stringify(e3));
	  },
	getExaminatinoDetail(){
		$.showLoading();
		let self = this;
		let da = self.$route.query.bhkcode;
		let data = {
			bhkcode:da
		}
		this.model.getMedicalReportInfo(data).then(function(res){
			$.hideLoading();
			if(res.data.code == 0){
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
	.weui-btn_primary{
		background-color: #4CCBDB;
	}
	.weui-btn{
		width: 230px;
	}
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
	.weui-panel:after{
		position: fixed;
	}
</style>
 