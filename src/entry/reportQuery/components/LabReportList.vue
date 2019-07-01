<template>
  <div style="height: 100%;background-color: #EFF7FD;">
    <div class="re-header-select">
      <div class="select-left">
        <input type="text" class="select-input1" data-toggle="date" id="ksrq" placeholder="开始日期" />
      </div>
      <div class="select-middle">
        <img src="../../../../static/img/横线.svg" width="100%" style="position: absolute;top: 16px;" />
      </div>
      <div class="select-right">
        <input type="text" class="select-input1" data-toggle="date" id="jsrq" placeholder="结束日期" />
      </div>
      <div class="select-fin">
        <img src="../../../../static/img/搜索.png" width="100%" style="vertical-align: middle;" v-on:click="LabReport()"/>
      </div>
    </div>
    <!-- <div class="re-row">
      <div class="row-cen">
        <div class="re-img">
          <img src="../../../../static/img/矩形 4 拷贝.png" width="68%" />
        </div>
        <div class="re-main">
          <div class="re-content">
            <p style="font-size: 17px;margin-top: 11px;">报告单号: 123456789123</p>
            <p style="color: #688795;">就诊类别: 门诊</p>
            <p style="color: #688795;">科室名称: 骨科</p>
            <p style="color: #999999;">申请日期: 2019-01-23</p>
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
    </div> -->
    <div class="re-row" v-for="item in LabReportList"  :key="item" v-cloak>
      <div class="row-cen" >
        <div class="re-img">
          <img src="../../../../static/img/矩形 4 拷贝.png" width="68%" />
        </div>
        <div class="re-main">
          <div class="re-content" >
            <p style="font-size: 17px;margin-top: 11px;">报告单号: {{item.bgdh}}</p>
            <p style="color: #688795;">就诊类别: {{item.jzlb}}</p>
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
    </div>
  </div>
</template>


<script>
import weui from "jquery-weui/dist/js/jquery-weui.min";
import model from "./model.js";

export default {
  components: {},
  data() {
	this.model = model(this.axios);
    return {
      LabReportList:""
    };
  },
  created() {
	// this.LabReport();
  },
  mounted() {
    this.init2();
  },
  methods: {
    init2() {
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
    LabReport() {
		let self = this;
		let hzxm = localStorage.getItem('sec_patientName');
		let patid = localStorage.getItem('');
		let jzlb = localStorage.getItem('');
		let date1 = $('#ksrq').val();
		let ksrq = date1.replace(/\-/g, "");
		let date2 = $('#jsrq').val();
		let jsrq = date2.replace(/\-/g, "");
		let data = {
			'hzxm':hzxm,
			'patid':patid,
			'jzlb':jzlb,
			'ksrq':ksrq,
			'jsrq':jsrq
		};
		this.model.getLabReportList(data).then(function(res){
			if(res.data.code == "0"){
				let LabReportList = res.data.data;
				self.LabReportList = LabReportList;
			}else{
				$.toptip(res.data.msg,'error');
			}
		});
		
	}
  }
};
</script>

<style scoped>
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
