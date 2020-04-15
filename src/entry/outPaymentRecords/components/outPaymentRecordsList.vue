<template>
  <div style="height: 100%;overflow:auto;">
    <div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <div class="card-hero">
            <img
              src="../../../../static/img/记录_2.png"
              style="position: absolute;top: -7px;width: 80%;"
            />
          </div>
          <span style="font-weight: 700;	">门诊缴费记录</span>
        </div>

        <!--<div class="re-header-select">
          <div class="select-left">
            <input type="text" class="select-input" data-toggle="date" id="ksrq1" placeholder="开始日期" />
          </div>
          <div class="select-middle">
            <img
              src="../../../../static/img/横线.svg"
              width="100%"
              style="position: absolute;top: 16px;"
            />
          </div>
          <div class="select-right">
            <input type="text" class="select-input" data-toggle="date" id="jsrq1" placeholder="结束日期" />
          </div>
          <div class="select-fin">
            <img
              src="../../../../static/img/搜索.png"
              width="100%"
              style="vertical-align: middle;"
              v-on:click="selectMz()"
            />
          </div>
        </div>-->
      </el-card>
    </div>

    <div class="flow" style="margin-top: 0px;">
      <div class="re-row" v-for="item in PaymentList">
        <a href="javascript:;" @click="toDetail(item)">
          <div class="row-cen">
            <div class="re-img">
              <img src="../../../../static/img/矩形 4 拷贝.png" width="68%" />
            </div>
            <div class="re-main-ing">
              <img
                src="../../../../static/img/记录.png"
                width="65%"
                style="position: absolute;right: 24px;top: 32px;"
              />
            </div>
            <div class="re-main-wzl">
              <div class="re-content-wzl">
                <p style="font-size: 15px;margin-top: 11px;">科室名称: {{item.ksmc}}</p>
                <p style="color: #688795;font-size:14px;">结算时间: {{item.jssj | formatDate}}</p>
                <p style="color: #688795;font-size:14px;">支付金额: {{item.zje}} 元</p>
                <p style="color: #999999;font-size:14px;">
                  收费类型:
                  <span style="color:black;">{{item.sflx==1?'退费':'正常'}}</span>
                </p>
                <p style="color: #688795;font-size:14px;">就诊类型: {{item.jllx}}</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>

    <div style="margin-top: 30px;margin-bottom: 30px;">
      <div>
        <a href="javascript:;" class="weui-btn weui-btn_primary" v-on:click="tomainList()">返回主页面</a>
      </div>
    </div>

    <el-dialog title="选择要查看的病历" :visible.sync="isShow">
      <commonSelect v-bind:mzData="mzData" @handleCall="handleCall"></commonSelect>
    </el-dialog>
  </div>
</template>

<script>
import weui from "jquery-weui/dist/js/jquery-weui.min";
import model from "./model.js";
import commonSelect from "./commonSelect.vue";
import moment from "moment";

export default {
  components: { commonSelect },
  data() {
    this.model = model(this.axios);
    return {
      PaymentList: [],
      zjh: localStorage.getItem("sec_patientIdcard"),
      hzxm: localStorage.getItem("sec_patientName"),
      mzData: [],
      patid: "",
      isShow: false
    };
  },
//  props: ["patid"],
//  watch:{
//  	'patid':function(newVal){
//  		this.init();
//  		this.payList();
//  	},
//  },
  beforeRouteEnter(to, from, next) {
      // 路由导航钩子，此时还不能获取组件实例 `this`，所以无法在data中定义变量（利用vm除外）
      // 参考 https://router.vuejs.org/zh-cn/advanced/navigation-guards.html
      // 所以，利用路由元信息中的meta字段设置变量，方便在各个位置获取。这就是为什么在meta中定义isBack
      // 参考 https://router.vuejs.org/zh-cn/advanced/meta.html
      if(from.name=='outPaymentRecordsDetail'){
          to.meta.isBack=true;
          //判断是从哪个路由过来的，
          //如果是page2过来的，表明当前页面不需要刷新获取新数据，直接用之前缓存的数据即可
      }
      console.log(to.meta.isBack);
      next();
    },
    activated() {
    	console.log(this.$route.meta.isBack);
		  if(!this.$route.meta.isBack){
		    // 如果isBack是false，表明需要获取新数据，否则就不再请求，直接使用缓存的数据
					this.getInfo();
		  }
		  // 恢复成默认的false，避免isBack一直是true，导致下次无法获取数据
		  this.$route.meta.isBack=false
		 
		},
		mounted() {
	    this.init();
	  },
  methods: {
  	//检查是否有绑定并查询患者门诊信息
			getInfo(){
				let self = this;
				this.zjh = localStorage.getItem('sec_patientIdcard');
				this.hzxm = localStorage.getItem('sec_patientName');
				if(this.zjh == 'null' || this.zjh == '' || this.zjh == null){
					$.confirm("您并未绑定身份证，请先绑定","提示",function() {
							if (process.env.NODE_ENV == 'dev') {
							  window.location='../index.html#/userBinding'
							} else if (process.env.NODE_ENV == 'production') {
							  window.location='../2ysechos/index.html#/userBinding'
							}
						}, function() {
					  	if (process.env.NODE_ENV == 'dev') {
							  window.location='../index.html'
							} else if (process.env.NODE_ENV == 'production') {
							  window.location='../2ysechos/index.html'
							}
					  });
					  return;
				}
				
				if(localStorage.getItem('sec_flag') == 'zf'){
					self.patid = localStorage.getItem('zfpatid');
					self.payList();
				}
				if(localStorage.getItem('sec_flag') == 'cb'){
					self.patid = localStorage.getItem('cbpatid');
					self.payList();
				}
				if(localStorage.getItem('sec_flag') == ''){
					$.alert("未查询到您的信息，请先建档", "提示", function() {
						  //点击确认后的回调函数
					  self.$router.push('/userFiling?zjh='+self.zjh+'&hzxm='+self.hzxm);
					});
				}
				
				
//				let data={
//					hzxm:this.hzxm,
//					zjh:this.zjh,
//					action:'mz',
//					openid:localStorage.getItem('sec_openId')
//				}
//				
//				this.model.getInfo(data).then(function(res){
//					if(res.data.code == '0'){
//						//门诊模块 就取门诊自费并且病历号最大的
//						let blh = '';
//						let outArray = res.data.data;
//						for(var i=0;i<outArray.length;i++){
//								if(outArray[i].ybdm == '101'){
//									blh = outArray[i].blh;
//									self.patid = outArray[i].patid;
//									break;
//								}
//								//门诊医保病人
//								if(outArray[i].ybdm == '701'){
//									blh = outArray[i].blh;
//									self.patid = outArray[i].patid;
//									localStorage.setItem('sec_yb',true);								
//								}
//						}
//						if(blh == ''){
//							$.alert("未查询到您的信息，请先建档", "提示", function() {
//						  //点击确认后的回调函数
////						  if (process.env.NODE_ENV == 'dev') {
////								  window.location='../../index.html#/userFiling?zjh='+self.zjh+'&hzxm='+self.hzxm;
////								} else if (process.env.NODE_ENV == 'production') {
////								  window.location='../../2ysechos/index.html#/userFiling?zjh='+self.zjh+'&hzxm='+self.hzxm;
////								}
//									self.$router.push('/userFiling?zjh='+self.zjh+'&hzxm='+self.hzxm);
//							});
//							return;
//						}
//						self.payList();
////						arr.sort().reverse();
////						let val = arr[0];
////						for(var i=0;i<outArray.length;i++){
////							if(val == outArray[i].blh){
////								self.patid = outArray[i].patid;
////							}
////						}
//					}
//					if(res.data.msg == '未查询到门诊患者'){
//						$.alert("未查询到您的信息，请先建档", "提示", function() {
//						  //点击确认后的回调函数
////						  self.$router.push('/userFiling?zjh='+self.zjh)
////						  if (process.env.NODE_ENV == 'dev') {
////								  window.location='../../index.html#/userFiling?zjh='+self.zjh+'&hzxm='+self.hzxm;
////								} else if (process.env.NODE_ENV == 'production') {
////								  window.location='../../2ysechos/index.html#/userFiling?zjh='+self.zjh+'&hzxm='+self.hzxm;
////								}
//									self.$router.push('/userFiling?zjh='+self.zjh+'&hzxm='+self.hzxm);
//						});
//					}
//				})
			},
    tomainList() {
      if (process.env.NODE_ENV == "dev") {
        window.location = "../../index.html";
      } else if (process.env.NODE_ENV == "production") {
        window.location = "../../2ysechos/index.html";
      }
    },
    init() {
      $("#ksrq1").calendar({
        dateFormat: "yyyy-mm-dd"
      });
      $("#jsrq1").calendar({
        dateFormat: "yyyy-mm-dd"
      });
    },
    toDetail(ele) {
      this.$router.push("/outPaymentRecordsDetail?jssjh=" + ele.jssjh);
    },
    handleCall(res) {
      this.isShow = false;
      this.patid = res.patid;
      this.payList();
    },
    selectMz() {
      $.showLoading();
      let self = this;
      let data = {
        hzxm: this.hzxm,
        zjh: this.zjh,
        action: "mz",
        openid: localStorage.getItem("sec_openId")
      };

      this.model.selectPatient(data).then(function(res) {
        $.hideLoading();
        if (res.data.code == "0") {
          self.isShow = true;
          self.mzData = res.data.data;
        }
        if (res.data.msg == "未查询到门诊患者") {
          $.alert("未查询到您的信息，请先建档", "提示", function() {
            //点击确认后的回调函数
            self.$router.push("/userFiling?zjh=" + self.zjh);
          });
        }
      });
    },
    payList() {
      let self = this;
      let hzxm = localStorage.getItem("sec_patientName");
      let patid = this.patid;
      //let patid = "349246";
//    let date1 = $("#ksrq1").val();
//    let ksrq = date1.replace(/\-/g, "");
//    let date2 = $("#jsrq1").val();
//    let jsrq = date2.replace(/\-/g, "");
      let data = {
        hzxm: hzxm,
        patid: patid
//      ksrq: ksrq,
//      jsrq: jsrq
      };
      this.model.getOutpatientFeeSettlementInfo(data).then(function(res) {
        if (res.data.code == "0") {
          let paymentList = res.data.data;
          self.PaymentList = paymentList;
          self.PaymentList.reverse();
          self.isShow = false;
        } else {
          $.toptip(res.data.msg, "error");
        }
      });
    }
  },
  filters: {
    formatDate: function(value) {
      var y = value.substr(0, 4);
      var M = value.substr(4, 2);
      var D = value.substr(6, 2);
      var H = value.substr(8, 2);
      var m = value.substr(10, 2);
      var s = value.substr(12, 2);
      var time = y + "-" + M + "-" + D + " " + H + ":" + m + ":" + s;
      //console.log(time);
      return time;
    }
  }
};
</script>

<style>
.el-dialog {
  width: calc(100vw - 20px);
}
 .el-card__body {
    /*padding: 2px;*/
   display: none;
}
</style>
<style scoped>
.weui-btn_primary {
  background-color: #4ccbdb;
}
.weui-btn {
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
.select-input1 {
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
.re-content-wzl {
  padding-left: 0px;
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
.re-main-wzl {
  border: crimson;
  border-radius: 10px;
  height: 100%;
  background-color: #ffffff;
}
.re-row {
  width: 100%;
  height: 125px;
  margin-top: 20px;
}
.wzl-panel-title {
  text-align: -webkit-left;
  background-color: #f1f1f1;
  height: 50px;
  padding-top: 12px;
  font-size: 20px;
  color: #4e4e4e;
}
.guding {
  /* margin-top: -19px; */
  position: absolute;
  z-index: 99;
  width: 100%;
}
.row-item{
		background-color: #F7F7F7;
		height: 50px;
		font-size: 13px;
	    line-height: 50px;
	    text-align: center;
	    color: #999999;
	        /*width: 80px;*/
    float: left;
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 5px;
        padding-left: 8px;
    padding-right: 8px;
    position: relative;
	}
	.el-card{
		margin-bottom: 10px;
	}
	.select-input {
  width: 100px;
  height: 30px;
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
	.weui-panel__hd{
		height: 30px;
		font-size: 18px;
		color: #000000;
	}
	.hero-panel-img{
		float: left;
		width: 35px;
		height: 35px;
	}
	.weui-row{
		height: 50px;
    margin-top: 10px;
	}
	.weui-col-33{
		background-color: #F7F7F7;
		height: 50px;
		font-size: 13px;
	    line-height: 50px;
	    text-align: center;
	    color: #999999;
	}
	.el-tabs__nav-scroll{
		overflow-y: auto;
	}
	.el-tabs--left, .el-tabs--right{
		height: calc(100vh - 137px);
	}
	.hero-main{
		height: calc(100vh - 135px);
	}
	.hero-search-head{
		height: 28px;
    	bottom: -2px;
		width: 30px;
		position: relative;
	}
	.hero-search{
    	height: 44px;
	}
	.weui-search-bar__form{
    	border: 0px solid #E6E6EA;
      border-radius: 10px;
      margin-left: 10px;
      margin-right: 15px;
    }
	.weui-btn_primary{
		background-color: #4CCBDB;
	}
	.weui-btn{
		width: 230px;
	}
	.hospital-arrow{
		position: relative;
		height: 85px;
		line-height: 85px;
		width: 35px;
		float: left;
	}
	.hospital-title{
		height: 85px;
		width: 200px;
		position: relative;
		float: left;
	}
	.hospital-img{
		width: 65px;
		height: 85px;
		line-height: 85px;
		float: left;
	}
	.hospital-inner{
		margin-left: auto;
		margin-right: auto;
		width: 300px;
		height: 85px;
	}
	.hospital-panel{
		margin-top: 5px;
		width: 100%;
		height: 85px;
		background-color: #FFFFFF;
	}
	.card-hero{
		width: 50px;
		height: 40px;
		line-height: 20px;
		float: left;
		position: relative;
	}
 
</style>
