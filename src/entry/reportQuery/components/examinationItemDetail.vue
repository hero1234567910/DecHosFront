<template>
  <div class="weui-panel weui-panel_access" style="height: 100%;background-color: #EFF7FD;overflow: auto;">
   <el-card class="box-card">
		  <div slot="header" class="clearfix">
		  	<div class="card-hero">
		  		<img src="../../../../static/img/项目大.png" style="position: absolute;top: -2px;width: 70%;"/>
		  	</div>
		    <span style="font-weight: 700;font-size: 16px;float: left;">{{groupname}}</span>
		    <div class="card-hero-t">
		  		<img src="../../../../static/img/无异常.png" v-show="groupconclusion=='正常'" style="position: absolute;top: 1px;width: 120%;"/>
		  	</div>
		  </div>
		  
		  <div>
		  	<span style="color: #999999;">检查医生 : {{doctors}}</span>
		  </div>
		  
	 </el-card>
	 
	  <div class="weui-panel weui-panel_access" style="margin-top: 0px;">
		  <!-- <div class="weui-panel__hd" style="background-color: #EFF7FD;line-height: 38px;">
		  	<div class="img-panel">
		  		<img src="../../../../static/img/疾病及处理建议.png" style="position: absolute;top: 8px;width: 45%;"/>
		  	</div>
		  	小结</div> -->
		  <!-- <div class="weui-panel__bd">
		    <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
		      <div class="weui-media-box__bd">
		        <el-input
						  type="textarea"
						  readonly
						  autosize
						  v-model="xresult">
						  </el-input>
		      </div>
		    </a>
		  </div> -->
		</div>
		
		<div class="weui-panel weui-panel_access" style="margin-top: 0px;">
		  <div class="weui-panel__hd" style="background-color: #EFF7FD;line-height: 38px;">
		  	<div class="img-panel">
		  		<img src="../../../../static/img/疾病及处理建议.png" style="position: absolute;top: 8px;width: 45%;"/>
		  	</div>
		  	检查项目</div>
		  <div class="weui-panel__bd">
		      <div class="weui-media-box__bd">
		        
		        <div class="weui-cell" v-for="item in ItemDetails">
						    <!--<div class="weui-cell__hd"><img src="../../../../static/img/项目小.png"></div>-->
						    <div class="weui-cell__bd">
						      <p>{{item.itemname}}</p>
						    </div>
						    <div class="weui-cell__ft">
						    	{{item.positive==0?'阳性':'阴性'}}  {{item.itemresult}}
						    </div>
						</div>
						
						<!-- <div class="weui-cell">
						    <div class="weui-cell__hd"><img src="../../../../static/img/项目小.png"></div>
						    <div class="weui-cell__bd">
						      <p>收缩压</p>
						    </div>
						    <div class="weui-cell__ft">
						    	80mmhg
						    </div>
						</div> -->
		        
		      </div>
		  </div>
		</div>
		
		<div style="margin-top: 30px;margin-bottom: 10px;">
				<div>
					<a href="javascript:;" class="weui-btn weui-btn_primary" v-on:click="toList()">返回体检总览</a>
				</div>
		</div>
		
		<div style="text-align: center;margin-bottom: 30px;font-size: 13px;">
			<p style="color: #F8BF7A;">温馨提示:</p>
			<p style="color: #50C3EF;">本次检验结果仅对本次体检负责</p>
			<p style="color: #50C3EF;">不能用于二次诊断或者其他医学判断目的的使用</p>
		</div>
		
  </div>
</template>
<script>
import weui from "jquery-weui/dist/js/jquery-weui.min";
import model from "./model.js";
import global1 from "./global1.vue"
export default {
  data() {
    this.model = model(this.axios);
    return {
			xresult:'正常',
			bhkconclusion:'',
			checkdoctors:'',
			ItemDetails:[],
			groupname:'',
			groupconclusion:'',
			doctors:''//医生姓名
		};
  },
  mounted() {
    this.showDetails();
  },
  methods: {
  	showDetails(){
		  let self = this;
		  let data = this.$route.query;
		  let doctorName;
		  self.ItemDetails = JSON.parse(this.$route.query.e3);  
		  self.groupname = JSON.parse(global1.groupname);
		  self.groupconclusion = JSON.parse(global1.groupconclusion);
		  console.log(self.ItemDetails);
		  for(var i=0;i<self.ItemDetails.length;i++){
			  doctorName = self.ItemDetails[0].checkdoctor;
		  }
		  self.doctors = doctorName;
	  },
	  toList(){
		  this.$router.push('/examinationDetail');
	  }
 }
};
</script>

<style>
.el-card__header{
		height: 67px;
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
	.card-hero-t{
		width: 40px;
    height: 30px;	
		line-height: 20px;
		position: relative;
		float: right;
	}
	.el-card{
		margin-bottom: 5px;
	}
	.card-hero{
		    width: 40px;
    height: 30px;	
		line-height: 20px;
		float: left;
		position: relative;
	}
</style>
 