<template>
  <div style="height: 100%;background-color: #EFF7FD;">
    <div class="weui-panel weui-panel_access">
		  <div class="weui-panel__hd">
		  	<div class="hero-panel-img">
		  		<img src="../../../../static/img/报告.svg" style="width: 100%;"/>
		  	</div>
		  	<div class="hero-panel-title">
		  	<strong>检查报告</strong>
		  	</div>
		  </div>
		  <div class="weui-panel__bd">
		  	<div class="hero-list-item">
		  		<div class="hero-list-item-left">
		  			<p class="weui-media-box__desc">报告单号</p>
		  		</div>
		  		<div class="hero-list-item-right">
		  			<h4 class="weui-media-box__title">{{bgdh}}</h4>
		  		</div>
		  	</div>
		  	<div class="hero-list-item">
		  		<div class="hero-list-item-left">
		  			<p class="weui-media-box__desc">申请时间</p>
		  		</div>
		  		<div class="hero-list-item-right">
		  			<h4 class="weui-media-box__title">{{applyTime}}</h4>
		  		</div>
		  	</div>
		  	<div class="hero-list-item">
		  		<div class="hero-list-item-left">
		  			<p class="weui-media-box__desc">就诊类别</p>
		  		</div>
		  		<div class="hero-list-item-right">
		  			<h4 class="weui-media-box__title">{{jzlb}}</h4>
		  		</div>
		  	</div>
		  	<div class="hero-list-item" style="position: relative;margin-bottom: 10px;">
		  		<div class="hero-list-item-left">
		  			<p class="weui-media-box__desc">患者姓名</p>
		  		</div>
		  		<div class="hero-list-item-right">
		  			<h4 class="weui-media-box__title">{{patientName}}</h4>
		  		</div>
		  	</div>
		  </div>
		</div>
		<div class="r-content">
			<div class="r-content-item" v-for="item in detailr">
				<div class="item-header">
					<div class="item-header-img">
						<img src="../../../../static/img/医院.svg" width="75%" style="position: absolute;top: 4px;"/>
					</div>
					<div class="item-header-title">指标名称:{{item.zbxmmc}}</div>
				</div>
				<div class="item-content">
					<el-input
					  type="textarea"
					  autosize
					  v-model="item.zbjg">
					 </el-input>
				</div>
			</div>
			
			<div style="margin-top: 30px;margin-bottom: 30px;">
				<div>
					<a href="javascript:;" class="weui-btn weui-btn_primary" v-on:click="toList()">返回列表</a>
				</div>
			</div>
			
		</div>
  </div>
</template>


<script>
import weui from "jquery-weui/dist/js/jquery-weui.min";
import model from "./model.js";
import util from "../utils/utils.js"

export default {
  components: {},
  data() {
    this.model = model(this.axios);
    return {
			textarea:'',
			detailr:[],
			bgdh:'',
			patientName:localStorage.getItem('sec_patientName'),
			applyTime:'',
			jzlb:''
		};
  },
  created(){
		
  },
  mounted() {
    this.getDetail();
  },
  methods: {
  	getDetail(){
  		let self = this;
			this.bgdh = this.GetQueryString('bgdh');
			this.bglbdm = this.GetQueryString('bglbdm');
			this.jzlb = this.GetQueryString('jzlb');
			let time = this.GetQueryString('sqsj');
			this.applyTime = this.insertStr(this.insertStr(this.insertStr(this.insertStr(this.insertStr(time,4,"/"),7,"/"),10,"  "),14,":"),17,":");
			let data = {
				'bgdh':self.bgdh,
				'bglbdm':self.bglbdm
			}
			this.model.getDetail(data).then(function(res){
				if(res.data.code == "0"){
					self.detailr = res.data.data;
				}else{
					$.toptip(res.data.msg,'error');
				}
			})
  	},
    //获取url中的参数
    GetQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.hash.substr(15).match(reg); //search,查询？后面的参数，并匹配正则
      if (r != null) return decodeURI(r[2]);
      return null;
		},
		//插入字符
		insertStr(soure, start, newStr){   
		   return soure.slice(0, start) + newStr + soure.slice(start);
		},
		toList(){
			this.$router.push('/reportTab');
		}
  }
};
</script>
<style>
	.el-collapse-item__header{
		padding-left: 20px;
	}
</style>
<style scoped>
	.weui-btn_primary{
		background-color: #4CCBDB;
	}
	.weui-btn{
		width: 230px;
	}
	.item-header-title{
		float: left;
		height: 100%;
		line-height: 35px;
	}
	.item-header-img{
		width: 35px;
		margin-left: 10px;
		height: 100%;
		line-height: 35px;
		float: left;
		position: relative;
	}
	.item-content{
		width: 100%;
	}
	.item-header{
		height: 35px;
		width: 100%;
		line-height: 35px;
	}
	.r-content-item{
		border-radius: 5px;
		background-color: #FFFFFF;
		width: calc(100vw - 30px);
		margin-left: auto;
		margin-right: auto;
		margin-top: 10px;
	}
	.r-content{
		width: 100%;
		height: calc(100vh - 164px);
		overflow-y: auto
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
		height: 30px;
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
