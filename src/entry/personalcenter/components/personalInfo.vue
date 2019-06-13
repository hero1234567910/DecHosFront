<template>
    <div class="hero-panel">
      <div class="hero-panel2">
        <div style="margin-left: 5px;margin-right: 5px;width: calc(100% - 10px);">
          <div class="weui-panel weui-panel_access">
            <div class="weui-panel__bd">
              <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                <div class="weui-media-box__hd">
                  <img class="weui-media-box__thumb" src="../../../static/img/用户默认头像.png">
                </div>
                <div class="weui-media-box__bd">
                  <h4 class="weui-media-box__title" style="font-weight:600;margin-top:15px"></h4>
                  <h4
                    class="weui-media-box__title"
                    style="font-weight:600;margin-top:10px;width:40%"
                  >张三</h4>
                  <h4 class="weui-media-box__title2">城镇医保</h4>
                  <h4 class="weui-media-box__title" style="font-size:15px;margin-top:8px">女 / 25岁</h4>
                  <h4
                    class="weui-media-box__title"
                    style="font-size:15px;margin-top:8px"
                  >卡号：12345678999</h4>
                </div>
                <div class="weui-media-box__hd1">
                  <img class="weui-media-box__thumb1" src="../../../static/img/二维码.png">
                </div>
                <h4
                  style="font-size: 8px;position: absolute;margin-left: 71%;margin-top: 16px;"
                >点击出示二维码</h4>
              </a>
            </div>
          </div>

          <div class="weui-panel weui-panel_access" style="height:20px">
            <div class="weui-panel__bd">
              <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                <img
                  style="margin-left: 30%;width: 3%;height: auto;"
                  class="weui-media-box__thumb"
                  src="../../../static/img/切换.png"
                >

                <div class="weui-media-box__bd">
                  <h4
                    class="weui-media-box__title"
                    style="width: 38%;font-weight:400;margin-top:0px;font-size:10px;margin-bottom: 0px;text-align: center;color: cornflowerblue;text-decoration:underline"
                  >切换/添加就诊人</h4>
                </div>
                <div class="weui-media-box__hd1">
                  <img
                    style="position: fixed;z-index: 19;width: 112px;height: 110px;margin-left: -92px;margin-top: -88px;"
                    class="weui-media-box__thumb1"
                    src="../../../static/img/电子就诊卡.png"
                  >
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import weui from "jquery-weui/dist/js/jquery-weui.min";
export default {
  name: "personalCenter.vue",
  methods: {}
};
</script>

<style>
#bac {
  background-color: aqua;
}
.weui-cells {
  margin-top: auto;
}
.weui-cells:before {
  position: fixed;
}
.weui-cell {
  padding: 20px 1px;
}
.weui-cell_access .weui-cell__ft:after {
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
  margin-left: 10px;
  margin-top: 30px;
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
  box-shadow: 1px 2px 6px #888888;
}
.hero-panel {
  height: 200px;
  width: 100%;
  position: absolute;
  top: 30px;
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
  margin-left: -60px;
  margin-top: -50px;
  width: 19%;
  height: 45%;
  position: absolute;
}
.weui-media-box_appmsg .weui-media-box__thumb2 {
  margin-left: -60px;
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
  margin-left: 13%;
  font-size: 12px;
  margin-top: -6.5%;
  position: absolute;
  background-color: rgb(106, 208, 249);
  padding-right: 4px;
  padding-left: 4px;
}
.weui-btn_plain-primary {
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
</style>