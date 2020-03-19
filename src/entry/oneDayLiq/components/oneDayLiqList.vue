<template>
  <div style="height: 100%;background-color: #EFF7FD;overflow:auto;">
    <div style="position: absolute; width: 100%;z-index: 10;">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <div class="card-hero">
            <img
              src="../../../../static/img/记录_2.png"
              style="position: absolute;top: -7px;width: 80%;"
            />
          </div>
          <span style="font-weight: 700;">住院患者一日清查询</span>
          <!--<div class="ad-button">
		  			 <el-button type="primary" @click="getInfo">选择病历</el-button>
          </div>-->
        </div>

        <div class="re-header-select">
          <div class="select-left">
            <h4 style="font-size:15px;">总金额 : {{allPrice |moneyCut}}</h4>
          </div>
          <div class="select-right">
            <input type="text" class="select-input" data-toggle="date" id="cxrq" placeholder="查询日期" />
          </div>
          <div class="select-fin">
            <img
              src="../../../../static/img/搜索.png"
              width="100%"
              style="vertical-align: middle;"
              v-on:click="Search()"
            />
          </div>
        </div>
        <el-collapse>
          <el-collapse-item class="family-search" title="家属代查" name="3">
            <div style="margin-left:25px;">
              <el-input v-model="input_hzxm" placeholder="患者姓名"></el-input>
              <el-input v-model="input_blh" placeholder="病历号"></el-input>
              <div class="select-fin-2">
                <img
                  src="../../../../static/img/搜索.png"
                  width="100%"
                  style="vertical-align: middle;"
                  v-on:click="famSearch()"
                />
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-card>
    </div>

    <div style="margin-top:63%;">
      <div
        class="re-row"
        v-for="item in onDayLiqList"
        v-show="item.fysj != undefined || item.fysj != null"
      >
        <a href="javascript:;">
          <div class="row-cen">
            <div class="re-img">
              <img src="../../../../static/img/矩形 4 拷贝.png" width="68%" />
            </div>
            <div class="re-main">
              <div class="re-content">
                <p style="font-size: 17px;margin-top: 3px;">大项目名称 : {{item.dxmmc}}</p>
                <p style="color: #688795;font-size:14px;">详细项目名称 : {{item.xmmc}}</p>
                <p style="color: #688795;font-size:14px;">费用生成时间 : {{item.fysj | formatDate}}</p>
                <p style="color: #999999;font-size:14px;">总金额 : {{item.zje | moneyCut}}元</p>
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
    </div>
    <div style="margin-top: 30px;margin-bottom: 30px;">
      <div>
        <a href="javascript:;" class="weui-btn weui-btn_primary" v-on:click="toIndex()">返回主页</a>
      </div>
    </div>

    <!--<el-dialog title="选择病历号" :visible.sync="isShow">
				<commonSelect v-bind:mzData='mzData' @handleCall="handleCall"></commonSelect>
    </el-dialog>-->
  </div>
</template>

<script>
import weui from "jquery-weui/dist/js/jquery-weui.min";
import model from "./model.js";
import moment from "moment";
import Jzlsh from "../jzlsh.vue";
import Patid from "../jzlsh.vue";
import commonSelect from "./commonSelect.vue";

export default {
  components: { commonSelect },
  data() {
    this.model = model(this.axios);
    return {
      onDayLiqList: [],
      zjh: localStorage.getItem("sec_patientIdcard"),
      hzxm: localStorage.getItem("sec_patientName"),
      jzlsh: "",
      allPrice: "",
      isShow: false,
      mzData: [],
      patid: "",
      blh: "",
      input_hzxm: "",
      input_blh: "",
      cxrq: ""
    };
  },

  mounted() {
    this.init();
    this.getInfo();
  },
  methods: {
    //获取病历号
    //		getInfo(){
    //				let self = this;
    //				$.showLoading();
    //				let data={
    //					hzxm:this.hzxm,
    //					zjh:this.zjh,
    //					action:'zy',
    //					openid:localStorage.getItem('sec_openId')
    //				}
    //
    //				this.model.getInfo(data).then(function(res){
    //					$.hideLoading();
    //					if(res.data.code == '0'){
    //						self.mzData = res.data.data;
    //						self.isShow = true;
    //					}else{
    //						$.toptip(res.data.msg,'error');
    //					}
    //				})
    //			},
    //检查是否有绑定并查询患者住院信息
    getInfo() {
      let self = this;
      this.zjh = localStorage.getItem("sec_patientIdcard");
      this.hzxm = localStorage.getItem("sec_patientName");
      if (this.zjh == "null" || this.zjh == "" || this.zjh == null) {
        $.confirm(
          "您并未绑定身份证，请先绑定",
          "提示",
          function() {
            if (process.env.NODE_ENV == "dev") {
              window.location = "../index.html#/userBinding";
            } else if (process.env.NODE_ENV == "production") {
              window.location = "../2ysechos/index.html#/userBinding";
            }
          },
          function() {
            if (process.env.NODE_ENV == "dev") {
              window.location = "../index.html";
            } else if (process.env.NODE_ENV == "production") {
              window.location = "../2ysechos/index.html";
            }
          }
        );
        return;
      }

      let data = {
        hzxm: this.hzxm,
        zjh: this.zjh,
        action: "zy",
        openid: localStorage.getItem("sec_openId")
      };

      this.model.getInfo(data).then(function(res) {
        if (res.data.code == "0") {
          //住院缴费模块 就取病历号最大的
          let arr = [];
          let hosArray = res.data.data;
          for (var i = 0; i < hosArray.length; i++) {
            let blh = hosArray[i].blh;
            arr.push(parseInt(blh));
          }
          arr.sort().reverse();
          let val = arr[0];
          for (var i = 0; i < hosArray.length; i++) {
            if (val == hosArray[i].blh) {
              self.patid = hosArray[i].patid;
              self.blh = hosArray[i].blh;
              self.getInPatientInfoByPatid();
            }
          }
        } else {
          $.alert("未查询到您的住院信息", "提示", function() {});
        }
      });
    },
    handleCall(res) {
      this.isShow = false;
      this.blh = res.blh;
      this.patid = res.patid;
      this.getInPatientInfoByPatid();
    },
    init() {
      $("#cxrq").calendar({
        dateFormat: "yyyy-mm-dd"
      });
    },
    toIndex() {
      if (process.env.NODE_ENV == "dev") {
        window.location = "../../index.html";
      } else if (process.env.NODE_ENV == "production") {
        window.location = "../../2ysechos/index.html";
      }
    },
    Search() {
      $.showLoading();
      let self = this;
      let date1 = $("#cxrq").val();
      let cxrq = date1.replace(/\-/g, "");
      if (cxrq == "") {
        $.alert("请输入日期", "提示", function() {});
        $.hideLoading();
        return;
      }
      let data = {
        hzxm: self.hzxm,
        jzlsh: self.jzlsh,
        cxrq: cxrq,
        aslhz: "1"
      };
      this.model.getInpatientOneDayLiquidation(data).then(function(res) {
        $.hideLoading();
        if (res.data.code == "0") {
          self.onDayLiqList = res.data.data;
          let i = res.data.data.length;
          //console.log(i);
          //console.log(res.data.data[i - 1].zje);
          self.allPrice = res.data.data[i - 1].zje;
          //        self.isShow = false;
        } else {
          $.toptip(res.data.msg, "error");
        }
      });
    },
    getInPatientInfoByPatid() {
      //console.log(this.$route.query.patid);
      let self = this;
      let data = {
        hzxm: self.hzxm,
        patid: self.patid,
        zyzt: "0"
      };
      this.model.getInPatientInfoByPatid(data).then(function(res) {
        if (res.data.code == "0") {
         const temp = [];
          for (let i = 0; i < res.data.data.length; i++) {
            temp.push(parseInt(res.data.data[i].jzlsh));
          }
          temp.reverse();
          Jzlsh.jzlsh = temp[0];
          self.jzlsh = temp[0];
        } else {
          $.toptip(res.data.msg, "error");
        }
      });
    },
    //通过病历号获取patid
    getInPatientInfoByBlh() {
      let self = this;
      let data = {
        hzxm: self.input_hzxm,
        blh: self.input_blh
      };
      this.model.getInPatientInfoByBlh(data).then(function(res) {
        if (res.data.code == "0") {
          self.patid = res.data.data[0].patid;
          self.getInPatientInfoByPatid_2();
        } else {
          $.toptip(res.data.msg, "error");
        }
      });
    },
    getInPatientInfoByPatid_2() {
      let self = this;
      let data = {
        hzxm: self.input_hzxm,
        patid: self.patid,
        zyzt: "0"
      };
      this.model.getInPatientInfoByPatid(data).then(function(res) {
        if (res.data.code == "0") {
          const temp = [];
          for (let i = 0; i < res.data.data.length; i++) {
            temp.push(parseInt(res.data.data[i].jzlsh));
          }
          temp.reverse();
          Jzlsh.jzlsh = temp[0];
          self.jzlsh = temp[0];
          self.getInpatientOneDayLiquidation2();
        } else {
          $.toptip(res.data.msg, "error");
        }
      });
    },

    getInpatientOneDayLiquidation2() {
      let self = this;
      let data = {
        hzxm: self.input_hzxm,
        jzlsh: self.jzlsh,
        cxrq: self.cxrq,
        aslhz: "1"
      };
      //console.log(1)
      this.model.getInpatientOneDayLiquidation(data).then(function(res) {
        $.hideLoading();
        if (res.data.code == "0") {
          self.onDayLiqList = res.data.data;
          let i = res.data.data.length;
          //console.log(i);
          //console.log(res.data.data[i - 1].zje);
          self.allPrice = res.data.data[i - 1].zje;
          //        self.isShow = false;
        } else {
          $.toptip(res.data.msg, "error");
        }
      });
    },
    famSearch() {
      $.showLoading();
      let self = this;
      let date1 = $("#cxrq").val();
      self.cxrq = date1.replace(/\-/g, "");
      if (cxrq == "") {
        $.alert("请输入日期", "提示", function() {});
        $.hideLoading();
        return;
      } else if (self.input_hzxm == "") {
        $.alert("请输入患者姓名", "提示", function() {});
        $.hideLoading();
        return;
      } else if (self.input_blh == "") {
        $.alert("请输入病历号", "提示", function() {});
        $.hideLoading();
        return;
      }
      this.getInPatientInfoByBlh();
    }
  },
  filters: {
    formatDate: function(value) {
      let time;
      if (value != undefined) {
        var y = value.substr(0, 4);
        var M = value.substr(4, 2);
        var D = value.substr(6, 2);
        time = y + "-" + M + "-" + D;
      } else {
        time = "";
      }

      //console.log(time);
      return time;
    },
    moneyCut: function(value) {
      let money;
      if (value != undefined) {
        money = value.substr(0, value.length - 2);
      } else {
        money = "";
      }
      //console.log(money);
      return money;
    }
  }
};
</script>

<style>
.el-dialog {
  width: calc(100vw - 20px);
}
.el-card__body {
  padding: 2px;
}
.el-collapse-item__header {
  font-size: 14px;
  font-weight: 600;
  margin-left: 26px;
}
.el-input {
  position: relative;
  font-size: 17px;
  display: inline-block;
  width: 33%;
}
.el-collapse-item__content {
  padding-bottom: 3px;
}
</style>

<style scoped>
.el-button--primary {
  background-color: #4ccbdb;
  border-color: #4ccbdb;
}
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
.card-hero {
  width: 50px;
  height: 40px;
  line-height: 20px;
  float: left;
  position: relative;
}
.ad-button {
  float: right;
  margin-right: 10px;
  position: relative;
  top: -7px;
}
.select-fin-2 {
  width: 50px;
  height: 100%;
  float: right;
  line-height: 41px;
  margin-right: 39px;
}
</style>