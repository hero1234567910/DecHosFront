<template>
  <div style="height: 100%;background-color: #EFF7FD;overflow:auto;">
    <div>
      <el-card class="box-card">
	  		<div slot="header" class="clearfix">
			  	<div class="card-hero">
			  		<img src="../../../../static/img/记录_2.png" style="position: absolute;top: -7px;width: 80%;"/>
			  	</div>
			    <span style="font-weight: 700;	">门诊预约记录</span>
			  </div>
			</el-card>
    </div>

    <div class="flow" style="margin-top: 80px;">
      <div class="re-row" v-for="item in AppointList">
        <a href="javascript:;" @click="toDetail(item)">
          <div class="row-cen">
            <div class="re-img">
              <img src="../../../../static/img/矩形 4 拷贝.png" width="68%" />
            </div>
            <div class="re-main-ing">
              <img
                src="../../../../static/img/mz预约.png"
                width="65%"
                style="position: absolute;right: 24px;top: 32px;"
              />
            </div>
            <div class="re-main-wzl">
              <div class="re-content-wzl">
                <p style="font-size: 17px;margin-top: 11px;">科室名称: {{item.ksmc}}</p>
                <p style="color: #688795;font-size:14px;">结算时间: {{item.yyrq | formatDate}}</p>
                <p style="color: #688795;font-size:14px;">支付金额: {{item.zlf}} 元</p>
                <p style="color: #999999;font-size:14px;">
                  收费类型:
                  <span style="color:black;">{{item.zfzt==1?'已支付':'未支付'}}</span>
                </p>
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
      AppointList: [],
      zjh: localStorage.getItem("sec_patientIdcard"),
      hzxm: localStorage.getItem("sec_patientName"),
      mzData: [],
      patid: "",
      isShow: false
    };
  },
  //props: ["patid"],
  mounted() {
    this.init();
    this.selectMz();
  },
  methods: {
    tomainList() {
      if (process.env.NODE_ENV == "dev") {
        window.location = "../../index.html";
      } else if (process.env.NODE_ENV == "production") {
        window.location = "../../sechos/index.html";
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
      var mc = ele.ksmc;
      var hzxm = localStorage.getItem("sec_patientName");
      if (ele.ysdm == "") {
        var mzlx = "普通门诊";
      } else {
        var ysmc = ele.ysmc;
        var mzlx = "专家门诊" + ysmc;
      }
      this.$router.push(
        "/reservationDetail?ksmc=" +
          mc +
          "&ghrq=" +
          ele.ghrq +
          "&mzlx=" +
          mzlx +
          "&zje=" +
          ele.zje +
          "&jzdz=" +
          ele.jzdz +
          "&memo=" +
          ele.memo +
          "&yyzt=" +
          ele.yyzt +
          "&yyxh=" +
          ele.yyxh +
          "&yysd=" +
          ele.yysd +
          "&hzxm=" +
          hzxm +
          "&zjhm=" +
          ele.zjhm +
          "&bxh=" +
          ele.bxh +
          "&lxdh=" +
          ele.lxdh +
          "&zfzt=" +
          ele.zfzt +
          "&yyhx=" +
          ele.yyhx
      );
    },
    handleCall(res) {
      this.isShow = false;
      this.patid = res.patid;
      this.appointList();
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
    appointList() {
      let self = this;
      let hzxm = localStorage.getItem("sec_patientName");
      let patid = this.patid;
      //let patid = "349246";
      let data = {
        hzxm: hzxm,
        patid: patid
      };
      this.model.getPatientAppointInfo(data).then(function(res) {
        if (res.data.code == "0") {
          let appointList = res.data.data;
          self.AppointList = appointList;
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
    padding: 0px;
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
.card-hero{
		width: 50px;
		height: 40px;
		line-height: 20px;
		float: left;
		position: relative;
	}
.el-card__body {
    padding: 0px;
}
</style>
