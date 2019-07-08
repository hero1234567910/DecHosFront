<template>
  <div style="height: 100%;background-color: #EFF7FD;">
    <div class="re-header-select">
      <div class="select-left">
        <input type="text" class="select-input" data-toggle="date" id="ksrq" placeholder="开始日期" />
      </div>
      <div class="select-middle">
        <img src="../../../../static/img/横线.svg" width="100%" style="position: absolute;top: 16px;" />
      </div>
      <div class="select-right">
        <input type="text" class="select-input" data-toggle="date" id="jsrq" placeholder="结束日期" />
      </div>
      <div class="select-fin">
        <img src="../../../../static/img/搜索.png" width="100%" style="vertical-align: middle;" v-on:click="Report()"/>
      </div>
    </div>
    <div class="re-row" v-for="item in ReportList">
    	<a href="javascript:;" @click="toDetail(item)">
	      <div class="row-cen" >
	        <div class="re-img">
	          <img src="../../../../static/img/矩形 4 拷贝.png" width="68%" />
	        </div>
	        <div class="re-main">
	          <div class="re-content">
	            <p style="font-size: 17px;margin-top: 11px;">报告单号: {{item.bgdh}}</p>
	            <p style="color: #688795;">就诊类别: {{item.jzlb==1?'门诊患者':'住院患者'}}</p>
	            <p style="color: #688795;">科室名称: {{item.jcksmc}}</p>
	            <p style="color: #999999;">申请日期: {{item.sqsj}}</p>
	          </div>
	          <div class="re-main-ing">
	            <img
	              src="../../../../static/img/十字.png"
	              width="65%"
	              style="position: absolute;right: 10px;top: 5px;"
	            />
	          </div>
	        </div>
	      </div>
      </a>
    </div>
    <div style="margin-top: 30px;margin-bottom: 30px;">
				<div>
					<a href="javascript:;" class="weui-btn weui-btn_primary" v-on:click="tomainList()">返回主列表</a>
				</div>
		</div>
		 <el-dialog title="选择要查看的病历号" :visible.sync="isShow">
			<commonSelect v-bind:mzData='maData'></commonSelect>
		</el-dialog>
		
  </div>
</template>


<script>
import weui from "jquery-weui/dist/js/jquery-weui.min";
import model from "./model.js";
import util from "../utils/utils.js"
import commonSelect from './commonSelect.vue'

export default {
  components: {commonSelect},
  data() {
    this.model = model(this.axios);
    return {
		ReportList:"",
		zjh:localStorage.getItem('sec_patientIdcard'),
		hzxm:localStorage.getItem('sec_patientName'),
		patientId:'',
		isShow:false,
		mzData:[]
	};
  },
  created(){
	// this.Report();
  },
  mounted() {
    this.init();
  },
  methods: {
  	tomainList(){
  		this.$router.push('/');
  	},
  	toDetail(ele){
			this.$router.push('/reportDetail?bgdh='+ele.bgdh+'&bglbdm='+ele.bglbdm+'&sqsj='+ele.sqsj+"&jzlb="+ele.jzlb);
  	},
    init() {
      $("#ksrq").calendar({
		  dateFormat:'yyyy-mm-dd'
	  });
      $("#jsrq").calendar({
		  dateFormat:'yyyy-mm-dd'
	  });
    },
    //获取url中的参数
    GetQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg); //search,查询？后面的参数，并匹配正则
      if (r != null) return decodeURI(r[2]);
      return null;
	},
	selectMz(){
		let self = this;
		let data={
			hzxm:this.hzxm,
			zjh:this.zjh,
			action:'mz',
			openid:localStorage.getItem('sec_openId')
		}
		
		this.model.bindUser(data).then(function(res){
			if(res.data.code == '0'){
				self.isShow = true;
				self.mzData = res.data.data;
			}
			if(res.data.msg == '未查询到门诊患者'){
				$.alert("未查询到您的信息，清先建档", "提示", function() {
				  //点击确认后的回调函数
				  self.$router.push('/userFiling?zjh='+zjh)
				});
			}
		})
	},
	selectZy(){
		let self = this;
		let data={
			hzxm:this.hzxm,
			zjh:this.zjh,
			action:'zy',
			openid:localStorage.getItem('sec_openId')
		}
		
		this.model.bindUser(data).then(function(res){
			if(res.data.code == '0'){
				
			}else{
				$.alert("未查询到您的住院信息", "提示", function() {
				});
			}
		})
	},
	Report() {
		let self = this;
		$.modal({
		  title: "提示",
		  text: "请选择门诊报告还是住院报告",
		  buttons: [
		    { text: "门诊", onClick: function(){
		    	console.log('aaaa')
		    	self.selectMz();
		    } },
		    { text: "住院", onClick: function(){
		    	
		    } },
		    { text: "取消", className: "default", onClick: function(){} },
		  ]
		});
//  let hzxm = localStorage.getItem('sec_patientName');
//  let patid = '';
//  let jzlb = '';
//  if(localStorage.getItem('patientStatus')==1){
//      patid = localStorage.getItem('sec_patientIdmz');
//      jzlb = localStorage.getItem('patientStatus');
//  }
//  if(localStorage.getItem('patientStatus')==2){
////      patid = localStorage.getItem('sec_patientIdzy');
//      jzlb = localStorage.getItem('patientStatus');
//  }
//		patid = "67147";
//		let date1 = $('#ksrq').val();
//		let ksrq = date1.replace(/\-/g, "");
//		let date2 = $('#jsrq').val();
//		let jsrq = date2.replace(/\-/g, "");
//		let data = {
//			'hzxm':hzxm,
//			'patid':patid,
//			'jzlb':jzlb,
//			'ksrq':ksrq,
//			'jsrq':jsrq
//		};
//		this.model.getReportList(data).then(function(res){
//			if(res.data.code == "0"){
//				let ReportList = res.data.data;
//				self.ReportList = ReportList;
//			}else{
//				$.toptip(res.data.msg,'error');
//			}
//		});
		
	}
 }
};
</script>
<style>
	.el-dialog{
		width: calc(100vw - 20px);
	}
</style>
<style scoped>
	.weui-btn_primary{
		background-color: #4CCBDB;
	}
	.weui-btn{
		width: 230px;
	}
input::-webkit-input-placeholder {
  /* placeholder颜色  */
  color: #b2b2b2;
  /* placeholder字体大小  */
  font-size: 12px;
  /* placeholder位置  */
  text-align: center;
}
.select-input {
  width: 100px;
  height: 40px;
  border-radius: 30px;
  border-style: solid;
  border-color: #9bdff0;
  text-align: center;
  font-size: medium;
}
.select-fin {
  width: 50px;
  height: 100%;
  float: left;
  line-height: 60px;
}
.select-middle {
  width: 30px;
  height: 100%;
  float: left;
  position: relative;
}
.select-right {
  float: left;
  height: 100%;
  width: 130px;
  line-height: 60px;
  text-align: center;
}
.select-left {
  width: 130px;
  float: left;
  height: 100%;
  line-height: 60px;
  text-align: center;
}
.re-header-select {
  width: 100%;
  height: 60px;
  background-color: #ffffff;
}
.re-content {
  padding-left: 15px;
  height: 100%;
  width: calc(100vw - 155px);
  float: left;
}
.re-main-ing {
  position: relative;
  height: 100%;
  float: left;
  width: 85px;
}
.row-cen {
  width: calc(100vw - 50px);
  margin-left: auto;
  margin-right: auto;
  height: 100%;
}
.re-img {
  height: 100%;
  width: 5px;
  float: left;
}
.re-main {
  height: 100%;
  background-color: #ffffff;
}
.re-row {
  width: 100%;
  height: 125px;
  margin-top: 20px;
}
</style>
