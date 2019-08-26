<template>
  <div style="height: 100%;background-color: #EFF7FD;">
    <!--<div class="re-header-select">
      <div class="select-left">
        <input type="text" class="select-input1" data-toggle="date" id="ksrq1" placeholder="开始日期" />
      </div>
      <div class="select-middle">
        <img src="../../../../static/img/横线.svg" width="100%" style="position: absolute;top: 16px;" />
      </div>
      <div class="select-right">
        <input type="text" class="select-input1" data-toggle="date" id="jsrq1" placeholder="结束日期" />
      </div>
      <div class="select-fin">
        <img
          src="../../../../static/img/搜索.png"
          width="100%"
          style="vertical-align: middle;"
          v-on:click="LabReport()"
        />
      </div>
    </div>-->
    <div class="re-row" v-for="item in LabReportList" >
      <a href="javascript:;" @click="toDetail(item)">
        <div class="row-cen">
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
    <div style="margin-top: 30px;">
				<div>
					<a href="javascript:;" class="weui-btn weui-btn_primary" v-on:click="LabReport()">选择就诊类别</a>
				</div>
		</div>
    <div style="margin-top: 5px;margin-bottom: 30px;">
				<div>
					<a href="javascript:;" class="weui-btn weui-btn_primary" v-on:click="tomainList()">返回主页</a>
				</div>
		</div>
     <!--<el-dialog title="选择要查看的病历" :visible.sync="isShow">
			<commonSelect v-bind:mzData='mzData' @handleCall="handleCall"></commonSelect>
		</el-dialog>-->
  </div>
</template>


<script>
import weui from "jquery-weui/dist/js/jquery-weui.min";
import model from "./model.js";
import commonSelect from './commonSelect.vue'

export default {
  components: {commonSelect},
  data() {
    this.model = model(this.axios);
    return {
		LabReportList:[],
		zjh:localStorage.getItem('sec_patientIdcard'),
		hzxm:localStorage.getItem('sec_patientName'),
		isShow:false,
		mzData:[],
		patid:'',
		jzlb:''
		};
  },
  created() {
    // this.LabReport();
  },
  mounted() {
//  this.init();
//		this.LabReport();
  },
  methods: {
    tomainList() {
      if (process.env.NODE_ENV == 'dev') {
					  window.location='../../index.html';
					} else if (process.env.NODE_ENV == 'production') {
					  window.location='../../2ysechos/index.html';
					}
    },
    toDetail(ele) {
      this.$router.push(
        "/LabReportDetail?bgdh=" +
          ele.bgdh +
          "&bglbdm=" +
          ele.bglbdm +
          "&sqsj=" +
          ele.sqsj +
          "&jzlb=" +
          ele.jzlb
      );
    },
    init() {
      $("#ksrq1").calendar({
        dateFormat: "yyyy-mm-dd"
      });
      $("#jsrq1").calendar({
        dateFormat: "yyyy-mm-dd"
      });
    },
    handleCall(res){
			this.isShow = false;
			this.patid = res.patid;
			this.reportFun();
		},
    //获取url中的参数
    GetQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg); //search,查询？后面的参数，并匹配正则
      if (r != null) return decodeURI(r[2]);
      return null;
    },
    selectMz(){
    	$.showLoading();
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
				
				let data={
					hzxm:this.hzxm,
					zjh:this.zjh,
					action:'mz',
					openid:localStorage.getItem('sec_openId')
				}
				
				this.model.selectPatient(data).then(function(res){
					if(res.data.code == '0'){
						//门诊模块 就取门诊自费并且病历号最大的
						let arr = [];
						let outArray = res.data.data;
						for(var i=0;i<outArray.length;i++){
								if(outArray[i].ybdm == '101'){
									let blh = outArray[i].blh;
									arr.push(parseInt(blh));
								}
						}
						if(arr.length == 0){
							$.hideLoading();
							$.toptip('未查找到相应数据');
							return;
						}
						arr.sort().reverse();
						let val = arr[0];
						for(var i=0;i<outArray.length;i++){
							if(val == outArray[i].blh){
								self.patid = outArray[i].patid;
								self.reportFun();
							}
						}
					}
					if(res.data.msg == '未查询到门诊患者'){
						$.hideLoading();
						$.alert("未查询到您的信息，请先建档", "提示", function() {
						  //点击确认后的回调函数
//						  self.$router.push('/userFiling?zjh='+self.zjh)
						  if (process.env.NODE_ENV == 'dev') {
								  window.location='../../index.html#/userFiling?zjh='+self.zjh+'&hzxm='+self.hzxm;
								} else if (process.env.NODE_ENV == 'production') {
								  window.location='../../2ysechos/index.html#/userFiling?zjh='+self.zjh+'&hzxm='+self.hzxm;
								}
						});
					}
				})
	},
	selectZy(){
		$.showLoading();
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
				
				let data={
					hzxm:this.hzxm,
					zjh:this.zjh,
					action:'zy',
					openid:localStorage.getItem('sec_openId')
				}
				
				this.model.selectPatient(data).then(function(res){
					if(res.data.code == '0'){
						//住院缴费模块 就取病历号最大的
						let arr = [];
						let hosArray = res.data.data;
						for(var i=0;i<hosArray.length;i++){
								let blh = hosArray[i].blh;
								arr.push(parseInt(blh));
						}
						if(arr.length == 0){
							$.hideLoading();
							$.toptip('未查找到相应数据');
							return;
						}
						arr.sort().reverse();
						let val = arr[0];
						for(var i=0;i<hosArray.length;i++){
							if(val == hosArray[i].blh){
								self.patid = hosArray[i].patid;
								self.blh = hosArray[i].blh;
//								self.zyzt = hosArray[i].zyzt;
								self.reportFun();
							}
						}
					}else{
						$.hideLoading();
						$.alert("未查询到您的住院信息", "提示", function() {
						});
					}
				})
	},
    LabReport() {
			let self = this;
			 $.modal({
			  title: "提示",
			  text: "请选择门诊报告还是住院报告",
			  buttons: [
			    { text: "门诊", onClick: function(){
			    	self.jzlb = 1;
			    	self.selectMz();
			    } },
			    { text: "住院", onClick: function(){
			    	self.jzlb = 2;
			    	self.selectZy();
			    } },
			    { text: "取消", className: "default", onClick: function(){} },
			  ]
			});    
    },
   	reportFun(){
      let self = this;
   		let hzxm = localStorage.getItem("sec_patientName");
      let patid = this.patid;
      let jzlb = this.jzlb;
      
//    let date1 = $("#ksrq1").val();
//    let ksrq = date1.replace(/\-/g, "");
//    let date2 = $("#jsrq1").val();
//    let jsrq = date2.replace(/\-/g, "");
      let data = {
        hzxm: hzxm,
        patid: patid,
        jzlb: jzlb,
//      ksrq: ksrq,
//      jsrq: jsrq
      };
      this.model.getLabReportList(data).then(function(res) {
      	$.hideLoading();
        if (res.data.code == "0") {
          let LabReportList = res.data.data;
          self.LabReportList = LabReportList;
//        self.isShow = false;
          //console.log(self.LabReportList);
        } else {
          $.toptip(res.data.msg, "error");
        }
      });
   	}
  }
};
</script>

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
