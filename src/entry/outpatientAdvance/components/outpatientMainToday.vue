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

        <!-- <div class="re-header-select">
          <div class="select-fin">
            <img
              src="../../../../static/img/搜索.png"
              width="100%"
              style="vertical-align: middle;"
              v-on:click="Report()"
            />
          </div>
        </div> -->
      </el-card>
      <!--<div class="hero-search">
		 		<div class="weui-search-bar" id="searchBar">
			 		<div class="hero-search-head">
						<img src="../../../../static/img/圆角矩形-576.png" style="width: 100%;position: absolute;bottom: 0px;" />
					</div>
				  <form class="weui-search-bar__form">
				    <div class="weui-search-bar__box">
				      <i class="weui-icon-search"></i>
				      <input type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="">
				      <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
				    </div>
				    <label class="weui-search-bar__label" id="searchText">
				      <i class="weui-icon-search"></i>
				      <span>搜索</span>
				    </label>
				  </form>
				  <a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
				</div>
      </div>-->

      <div class="hero-main">
        <el-tabs type="border-card" :tab-position="tabPosition">
          <el-tab-pane label="用户管理">
            <div style>
              <div class="weui-panel__hd">
                <div class="hero-panel-img">
                  <img src="../../../../static/img/科室.png" style="width: 80%;" />
                </div>
                <div class="hero-panel-title">
                  <strong>皮肤科</strong>
                </div>
              </div>
              <div class="weui-row">
                <div class="weui-col-33">
                  <a href="javascript:;" @click="toChoseDoc()" style="color: #999999;">
                    <p>呼吸内科</p>
                  </a>
                </div>
                <div class="weui-col-33">
                  <p>呼吸内科</p>
                </div>
                <div class="weui-col-33">
                  <p>呼吸内科</p>
                </div>
              </div>
              <div class="weui-row">
                <div class="weui-col-33">
                  <p>呼吸内科</p>
                </div>
                <div class="weui-col-33">
                  <p>呼吸内科</p>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="配置管理">
            <div style>
              <div class="weui-panel__hd">
                <div class="hero-panel-img">
                  <img src="../../../../static/img/科室.png" style="width: 80%;" />
                </div>
                <div class="hero-panel-title">
                  <strong>皮肤科</strong>
                </div>
              </div>
              <div class="weui-row">
                <div class="weui-col-33">
                  <a>
                    <p>呼吸内科</p>
                  </a>
                </div>
                <div class="weui-col-33">
                  <p>呼吸内科</p>
                </div>
                <div class="weui-col-33">
                  <p>呼吸内科</p>
                </div>
              </div>
              <div class="weui-row">
                <div class="weui-col-33">
                  <p>呼吸内科</p>
                </div>
                <div class="weui-col-33">
                  <p>呼吸内科</p>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="角色管理">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
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
      tabPosition: "left"
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
    init() {
      $("#ksrq").calendar({
        dateFormat: "yyyy-mm-dd"
      });
      $("#jsrq").calendar({
        dateFormat: "yyyy-mm-dd"
      });
    },
    toChoseDoc() {
      this.$router.push("/appointDoc");
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
