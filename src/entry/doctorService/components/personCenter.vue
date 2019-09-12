<template>
  <div>
    <div class="hero-banner">
      <img src="../../../../static/images/bj1.png" class="hero-img" width="100%" />
    </div>
    <div
      class="hero-pane"
      v-if="show"
      style="position: relative;top: -71px;margin-left: 10px;margin-right: 10px;"
    >
      <div class="hero-panel2">
        <div style="margin-left: 5px;margin-right: 5px;width: calc(100% - 10px);">
          <div class="weui-row">
            <div class="weui-col-33">
              <img
                :src="headimg"
                style="margin-left: 10px;margin-top: 30px;width: 59%;margin-left: 119%;"
              />
            </div>
          </div>
          <div class="weui-msg__text-area" style="margin-top: 22px;">
            <p
              class="weui-msg__desc"
              style="margin-left: 28%;color:#000000;margin-top: 13%;font-weight: 700;"
            >用户姓名: {{Name}}</p>
            <p
              class="weui-msg__desc"
              style="margin-left: 28%;color:#000000;margin-top: 10px;font-weight: 700;"
            >所属部门: {{Deptname}}</p>
          </div>
          <a href="javascript:;" class="weui-btn weui-btn_plain-primary" v-on:click="toExit()">退出登录</a>
        </div>
      </div>
    </div>

    <div style="margin-top: 30px;">
      <div>
        <a
          href="javascript:;"
          class="weui-btn weui-btn_primary"
          style="width:230px;"
          v-on:click="toindex()"
        >返回主页</a>
      </div>
    </div>
  </div>
</template>


<script>
import weui from "jquery-weui/dist/js/jquery-weui.min";
import model from "./model.js";
import CryptoJS from "crypto-js";
export default {
  data() {
    this.model = model(this.axios);
    return {
      show: true,
      Name: localStorage.getItem("m_user_userName"),
      Deptname: localStorage.getItem("m_deptName"),
      headimg: ""
    };
  },

  watch: {},
  mounted() {
    this.headimgCheck();
  },
  methods: {
    toExit() {
      $.confirm({
        title: "提示",
        text: "确认退出吗!",
        onOK: function() {
          localStorage.clear();
          this.$router.push("/");
        },
        onCancel: function() {}
      });
    },
    headimgCheck() {
      let self = this;
      if (localStorage.getItem("m_sex") == "男") {
        self.headimg = "../../../../static/doctorImg/医生.png";
      }else if (localStorage.getItem("m_sex") == "女") {
        self.headimg = "../../../../static/doctorImg/女医生.png";
      }else{
        self.headimg = "../../../../static/doctorImg/医生.png";
      }
    },
    toindex() {
      this.$router.push("/doctorMenu");
    }
  }
};
</script>

<style scoped>
/*.wzl{
		position: fixed;
	}*/
#bac {
  background-color: aqua;
}
.weui-cells {
  margin-top: auto;
}
.weui-cells-wzl:before {
  position: fixed;
}
.weui-cell {
  /*position: fixed;*/
  background-color: white;
  padding: 20px 1px;
}
.weui-cell_access-wzl .weui-cell__ft:after {
  height: 8px;
  width: 8px;
}
.hero-item-img {
  width: 100%;
  height: 100%;
  position: relative;
}
.weui-flex {
  height: 100px;
}
.hero-panel3 {
  margin-left: 13px;
  margin-right: 13px;
  width: calc(100% - 26px);
  height: 100px;
}
.hero-col-dec {
  height: 20px;
  line-height: 20px;
  width: 100%;
  font-size: 6px;
  color: #b2b2b2;
  text-align: center;
}
.weui-cell__hd img {
  display: block;
  margin-right: 5px;
  height: 40px;
  margin-right: 15px;
}
.weui-row .weui-col-25 {
  height: 100%;
}
.weui-row .weui-col-33 {
  width: calc((100% - 8px * 2) / 3);
}
.weui-col-33 {
  height: 100%;
}
.weui-row {
  height: 70px;
}
.hero-panel2_header {
  width: 100%;
  height: 25px;
  line-height: 25px;
  font-size: 15px;
  padding-left: 10px;
  font-weight: 500;
}
.hero-panel2 {
  border: 0px solid #e6e6ea;
  border-radius: 5px;
  background-color: white;
  height: 100%;
  width: 100%;
  box-shadow: 1px 1px 6px #888888;
}
.hero-panew {
  height: 200px;
  width: 100%;
  position: relative;
  top: -70px;
  padding-left: 13px;
  padding-right: 13px;
  width: calc(100% - 26px);
  max-width: 400px;
}
.hero-banner {
  height: 100px;
  width: 100%;
}
a.weui-media-box {
  margin-bottom: 20px;
  padding-top: 5px;
  margin-top: 0px;
  color: #000000;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.weui-panel:after {
  position: fixed;
}
.weui-media-box_appmsg .weui-media-box__thumb1 {
  margin-left: -17%;
  margin-top: -47px;
  width: 19%;
  height: 55%;
  position: absolute;
}
.weui-media-box_appmsg .weui-media-box__thumb2 {
  margin-left: -17%;
  margin-top: -50px;
  width: 20%;
  height: 46%;
  position: absolute;
}
.weui-panel:before {
  position: fixed;
}
.weui-media-box__title2 {
  color: white;
  border-style: solid;
  border-radius: 5px;
  border-color: white;
  margin-left: 24%;
  font-size: 12px;
  margin-top: -7.5%;
  position: absolute;
  background-color: rgb(106, 208, 249);
  padding-right: 4px;
  padding-left: 4px;
}
.weui-btn_plain-primary {
  position: relative;
  top: -10px;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 23px;
  padding-right: 23px;
  line-height: inherit;
  width: fit-content;
  color: #05c8f3;
  border: 1px solid #05c8f3;
  font-size: small;
}
.weui-btn_primary {
  background-color: #4ccbdb;
}
</style>
