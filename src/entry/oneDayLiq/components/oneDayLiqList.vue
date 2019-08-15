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
      </el-card>
    </div>

    <div style="margin-top:38%;">
      <div class="re-row" v-for="item in onDayLiqList">
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
  </div>
</template>

<script>
import weui from "jquery-weui/dist/js/jquery-weui.min";
import model from "./model.js";
import moment from "moment";
import Jzlsh from '../jzlsh.vue'

export default {
  data() {
    this.model = model(this.axios);
    return {
      onDayLiqList: [],
      zjh: localStorage.getItem("sec_patientIdcard"),
      hzxm: localStorage.getItem("sec_patientName"),
      isShow: false,
      jzlsh: "",
      allPrice: ""
    };
  },
  mounted() {
    this.init();
    this.getInPatientInfoByPatid();
  },
  methods: {
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
          self.isShow = false;
        } else {
          $.toptip(res.data.msg, "error");
        }
      });
    },
    getInPatientInfoByPatid(){
      //console.log(this.$route.query.patid);
      let self = this;
      let data={
        hzxm:self.hzxm,
        patid:this.$route.query.patid,
        zyzt:'0'
      }
      this.model.getInPatientInfoByPatid(data).then(function(res){
        if(res.data.code == "0"){
            Jzlsh.jzlsh = res.data.data[0].jzlsh;
            //console.log(res.data.data[0].jzlsh)
            self.jzlsh = res.data.data[0].jzlsh;
            //console.log(self.jzlsh);
        }else {
          $.toptip(res.data.msg, "error");
        }
      });
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
</style>