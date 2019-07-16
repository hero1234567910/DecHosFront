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
          <span style="font-weight: 700;	">当天门诊</span>
        </div>
      </el-card>
      <div class="hero-main">
        <el-tabs type="border-card" :tab-position="tabPosition">
          <el-tab-pane :label="item.ksmc" v-for="item in outpatientList" :key="item.rowGuid">
            <div style>
              <div class="weui-panel__hd">
                <div class="hero-panel-img">
                  <img src="../../../../static/img/科室.png" style="width: 80%;" />
                </div>
                <div class="hero-panel-title">
                  <strong>{{item.ksmc}}</strong>
                </div>
              </div>
              <div class="row" v-for="it in item.children">
                <a href="javascript:;" @click="toChoseDoc(it.ksdm,it.czlx)" style="color: #999999;">
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
      outpatientList: [],
      faRoom: [],
      chRoom: []
    };
  },
  props: ["patid"],
  watch: {
    patientId: function(val) {
      this.patientId = val;
    }
  },
  props: ["patid"],
  watch: {
    patientId: function(val) {
      this.patientId = val;
    }
  },
  mounted() {
    this.init();
    this.getDepartmentOnDuty();
  },
  methods: {
    init() {
      $("#ksrq").calendar({
        dateFormat: "yyyy-mm-dd"
      });
      $("#jsrq").calendar({
        dateFormat: "yyyy-mm-dd"
      });
    },
    toChoseDoc(e1, e2) {
      let self = this;
      //console.log(e1, e2);
      if (e2 == "1") {
        self.$router.push("/appointDocToday?ksdm=" + e1);
      } else {
        self.$router.push("/appointSourceToday?ksdm=" + e1);
      }
    },
    getDepartmentOnDuty() {
      $.showLoading();
      let self = this;
      let data = {};
      this.model.getDepartmentOnDuty(data).then(function(res) {
        $.hideLoading();
        if (res.data.code == "0") {
          let arr = res.data.data;
          self.outpatientList = res.data.data;
          //console.log(self.outpatientList);
        } else {
          $.toptip(res.data.msg, "error");
        }
      });
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
