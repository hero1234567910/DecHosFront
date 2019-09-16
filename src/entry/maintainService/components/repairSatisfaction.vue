<template>
  <div style="overflow: auto;height:100%;overflow-x: hidden;">
    <div class="image-style" style="height: 138px;">
      <img style="height:100%;height: 138px;width: 100%;" src="../../../../static/img-2/BXMYDPJ.png" />
    </div>
    <div class="ad-content">
      <div class="content-text">
        <p class="text-ev">报修速度评价</p>
        <el-rate v-model="val1"></el-rate>
      </div>

      <div class="content-text">
        <p class="text-ev">维修人员态度评价</p>
        <el-rate v-model="val2"></el-rate>
      </div>

      <div class="content-text">
        <p class="text-ev">维修人员技能水平评价</p>
        <el-rate v-model="val3"></el-rate>

        <div class="input-advice">
          <el-input
            type="textarea"
            :rows="4"
            placeholder="请输入您的意见(选填)"
            maxlength="500"
            v-model="textarea2"
          ></el-input>
        </div>

        <div style="margin-top: 30px;">
          <div>
            <a href="javascript:;" class="weui-btn weui-btn_primary" v-on:click="exit()">返回列表</a>
          </div>
        </div>
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
      val1: '',
      val2: '',
      val3: '',
      textarea2: ""
    };
  },
  mounted() {
    this.initSatDetail();
  },
  methods: {
    initSatDetail() {
      let self = this;
      let data = this.$route.query;
      self.val1 = data.repairSpeed;
      self.val2 = data.repairAttitude;
      self.val3 = data.skillLevels;
      self.textarea2 = data.repairAdvice
    },
    exit(){
      this.$router.push("/maintainSatisfactionList");
    }
  }
};
</script>

<style>
.el-rate__icon {
  font-size: 35px;
}
.el-dialog {
  width: calc(100vw - 20px);
}
</style>
<style scoped>
.el-button--primary {
  background-color: #4ccbdb;
}
.input-advice {
  margin-left: auto;
  margin-right: auto;
  width: calc(100vw - 30px);
  margin-top: 34px;
}
.text-ev {
  font-size: 21px;
  color: #909399;
}
.el-rate {
  height: 40px;
  line-height: 2;
}
.content-text {
  width: 100%;
  text-align: center;
  margin-top: 20px;
}
.ad-content {
  width: 100%;
  height: calc(100vh - 60px);
}
.weui-btn_primary {
  background-color: #4ccbdb;
}
.weui-btn {
  width: 230px;
}
.ad-fin {
  height: 60px;
  width: 60px;
  line-height: 60px;
  position: relative;
}
.ad-title {
  float: left;
  height: 60px;
  line-height: 60px;
}
.ad-headerImg {
  width: 80px;
  height: 60px;
  line-height: 60px;
  float: left;
  position: relative;
}
.ad-header {
  position: relative;
  width: 100%;
  height: 60px;
  background-color: #ffffff;
}
.ad-button {
  float: right;
  line-height: 60px;
  margin-right: 10px;
}
</style>
