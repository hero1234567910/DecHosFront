<template>
  <div style="overflow: auto;">
    <div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <div class="card-hero">
            <img
              src="../../../../static/img/门诊预约.svg"
              style="position: absolute;top: -7px;width: 80%;"
            />
          </div>
          <span style="font-weight: 700;	">门诊预约</span>
        </div>

        <div class="re-header-select">
          <div class="select-left">
            <input type="text" class="select-input" data-toggle="date" id="ksrq" placeholder="开始日期" />
          </div>
          <div class="select-middle">
            <img
              src="../../../../static/img/横线.svg"
              width="100%"
              style="position: absolute;top: 16px;"
            />
          </div>
          <div class="select-right">
            <input type="text" class="select-input" data-toggle="date" id="jsrq" placeholder="结束日期" />
          </div>
          <div class="select-fin">
            <img
              src="../../../../static/img/搜索.png"
              width="100%"
              style="vertical-align: middle;"
              v-on:click="Report()"
            />
          </div>
        </div>
      </el-card>

      <div class="hero-main">
        <el-tabs type="border-card" :tab-position="tabPosition">
          <el-tab-pane :label="item.ksmc" v-for="item in arrItem" :key="item.rowGuid">
            <div style>
              <div class="weui-panel__hd">
                <div class="hero-panel-img">
                  <img src="../../../../static/img/科室.png" style="width: 80%;" />
                </div>
                <div class="hero-panel-title">
                  <strong>{{item.ksmc}}</strong>
                </div>
              </div>
              <div class="row">
                <a
                  href="javascript:;"
                  @click="toChoseDoc(it)"
                  style="color: #999999;"
                  v-for="it in item.children"
                >
                  <div class="row-item">
                    <p>{{it.ksmc}}</p>
                    <div
                      style="position: absolute;top: -13px;right: -21px;height: 50px;width: 50px;"
                    >
                      <img
                        src="../../../../static/img/专家 (1).svg"
                        v-show="it.czlx == 1"
                        style="width: 42%;"
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>


<script>
import model from "./model.js";
export default {
  data() {
    this.model = model(this.axios);
    return {
      patientId: "",
      tabPosition: "left",
      arrItem: [],
      ksrq: "",
      jsrq: ""
    };
  },
  props: ["patid"],
  watch: {
    patientId: function(val) {
      this.patientId = val;
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    Report() {
      $.showLoading();
      let self = this;
      let date1 = $("#ksrq").val();
      let date2 = $("#jsrq").val();

      let data = {
        ksrq: date1.replace(/\-/g, ""),
        jsrq: date2.replace(/\-/g, "")
      };
      this.ksrq = data.ksrq;
      this.jsrq = data.jsrq;
      this.model.getAppointRoomInfo(data).then(function(res) {
        $.hideLoading();
        if (res.data.code == 0) {
          self.arrItem = res.data.data;
        } else {
          $.toptip(res.data.msg, "error");
        }
      });
    },
    init() {
      let date = new Date();
      let date2 = new Date();
      date.setDate(date.getDate());
      date2.setDate(date2.getDate());
      //console.log(date);
      //console.log(date2);
      $("#ksrq").calendar({
        dateFormat: "yyyy-mm-dd",
        value: date,
        minDate: date
      });
      $("#jsrq").calendar({
        dateFormat: "yyyy-mm-dd",
        value: date2,
        minDate: date2
      });
    },
    toChoseDoc(ele) {
      if (ele.czlx == 0) {
        this.$router.push(
          "/selectDepartment?ksdm=" +
            ele.ksdm +
            "&ksrq=" +
            this.ksrq +
            "&jsrq=" +
            this.jsrq
        );
      }
      if (ele.czlx == 1) {
        this.$router.push(
          "/appointDoc?ksdm=" +
            ele.ksdm +
            "&ksrq=" +
            this.ksrq +
            "&jsrq=" +
            this.jsrq
        );
      }
    }
  }
};
</script>

<style>
.el-card__body {
  padding: 0px;
}
</style>
<style scoped>
.row-item {
  background-color: #f7f7f7;
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
.el-card {
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
.weui-panel__hd {
  height: 30px;
  font-size: 18px;
  color: #000000;
}
.hero-panel-img {
  float: left;
  width: 35px;
  height: 35px;
}
.weui-row {
  height: 50px;
  margin-top: 10px;
}
.weui-col-33 {
  background-color: #f7f7f7;
  height: 50px;
  font-size: 13px;
  line-height: 50px;
  text-align: center;
  color: #999999;
}
.el-tabs__nav-scroll {
  overflow-y: auto;
}
.el-tabs--left,
.el-tabs--right {
  height: calc(100vh - 137px);
}
.hero-main {
  height: calc(100vh - 135px);
}
.hero-search-head {
  height: 28px;
  bottom: -2px;
  width: 30px;
  position: relative;
}
.hero-search {
  height: 44px;
}
.weui-search-bar__form {
  border: 0px solid #e6e6ea;
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 15px;
}
.weui-btn_primary {
  background-color: #4ccbdb;
}
.weui-btn {
  width: 230px;
}
.hospital-arrow {
  position: relative;
  height: 85px;
  line-height: 85px;
  width: 35px;
  float: left;
}
.hospital-title {
  height: 85px;
  width: 200px;
  position: relative;
  float: left;
}
.hospital-img {
  width: 65px;
  height: 85px;
  line-height: 85px;
  float: left;
}
.hospital-inner {
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  height: 85px;
}
.hospital-panel {
  margin-top: 5px;
  width: 100%;
  height: 85px;
  background-color: #ffffff;
}
.card-hero {
  width: 50px;
  height: 40px;
  line-height: 20px;
  float: left;
  position: relative;
}
</style>
