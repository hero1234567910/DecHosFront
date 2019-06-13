<template>
  <div>
    <div class="hero-banner">
      <img src="../../../images/bj1.png" class="hero-img" width="100%">
    </div>
    <div class="hero-panel">
      <div class="hero-panel2">
        <div style="margin-left: 5px;margin-right: 5px;width: calc(100% - 10px);">
          <div class="weui-row">
            <div class="weui-col-33">
              <img  src="../../../static/img/用户空白头像.png" style="width: 59%;margin-left: 119%;">
            </div>
          </div>
          <div class="weui-msg__text-area" style="margin-top: 22px;">
            <p class="weui-msg__desc" style="margin-left: 19%;color:#000000;margin-top: 13%;">
              您还没有绑定或申请电子就诊卡
            </p>
          </div>
          <a href="javascript:;" class="weui-btn weui-btn_plain-primary">立即办理</a>
        </div>
      </div>
    </div>

    <div style="margin-top: 160px;margin-left: 13px;margin-right: 13px;width: calc(100% - 26px);">
      <div style="margin-left: 20px;margin-right: 20px;height: 70px;">
        <div class="weui-cells">
          <a class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__hd">
              <img src="../../../static/img/我的预约.png">
            </div>
            <div class="weui-cell__bd">
              <p style="margin-bottom: -10px;">我的预约</p>
              <img style="width:45%" src="../../../images/圆角矩形-1.png">
            </div>
            <div class="weui-cell__ft"></div>
          </a>
        </div>
      </div>
    </div>

    <div style="height: 4px;width: 100%;margin-top: 10px;background-color: #eff7fd;"></div>
    <div style="margin-top: 0px;margin-left: 13px;margin-right: 13px;width: calc(100% - 26px);">
      <div style="margin-left: 20px;margin-right: 20px;height: 70px;">
        <div class="weui-cells">
          <a class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__hd">
              <img src="../../../static/img/报告.png">
            </div>
            <div class="weui-cell__bd">
              <p style="margin-bottom: -10px;">报告查询</p>
              <img style="width:45%" src="../../../images/圆角矩形-2.png">
            </div>
            <div class="weui-cell__ft"></div>
          </a>
        </div>
      </div>
    </div>
    <div style="height: 4px;width: 100%;margin-top: 10px;background-color: #eff7fd;"></div>

    <div style="margin-top: 0px;margin-left: 13px;margin-right: 13px;width: calc(100% - 26px);">
      <div style="margin-left: 20px;margin-right: 20px;height: 70px;">
        <div class="weui-cells">
          <a class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__hd">
              <img src="../../../static/img/体检预约.png">
            </div>
            <div class="weui-cell__bd">
              <p style="margin-bottom: -10px;">体检预约</p>
              <img style="width:45%" src="../../../images/圆角矩形-3.png">
            </div>
            <div class="weui-cell__ft"></div>
          </a>
        </div>
      </div>
    </div>
    <div style="height: 4px;width: 100%;margin-top: 10px;background-color: #eff7fd;"></div>

    <div style="margin-top: 0px;margin-left: 13px;margin-right: 13px;width: calc(100% - 26px);">
      <div style="margin-left: 20px;margin-right: 20px;height: 70px;">
        <div class="weui-cells">
          <a class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__hd">
              <img src="../../../static/img/复诊预约.png">
            </div>
            <div class="weui-cell__bd">
              <p style="margin-bottom: -10px;">复诊预约</p>
              <img style="width:45%" src="../../../images/圆角矩形-4.png">
            </div>
            <div class="weui-cell__ft"></div>
          </a>
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
