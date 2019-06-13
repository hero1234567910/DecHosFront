<template>
  <div>
    <div class="weui-cells weui-cells_form">
      <div class="weui-cell" style="margin-top: 16px;">
        <div class="weui-cell__hd">
          <label class="weui-label">身份证号码:</label>
        </div>
        <div class="weui-cell__bd">
          <input id="zjh" class="weui-input" type="number" placeholder="请输入">
        </div>
      </div>
    </div>
    <a href="javascript:;" class="weui-btn weui-btn_primary">我是门诊患者</a>
    <a href="javascript:;" class="weui-btn weui-btn_primary1">我是住院患者</a>
  </div>
  
</template>

<script>
import weui from "jquery-weui/dist/js/jquery-weui.min";
export default {
  name: "userBinding.vue",
  methods: {}
};
</script>

<style>
.weui-input {
    border-radius: 9px;
    border-style: solid;
    width: 100%;
    border: groove;
    outline: 0;
    -webkit-appearance: none;
    background-color: transparent;
    font-size: inherit;
    color: inherit;
    height: 32px;
    line-height: 1.47058824;
}
.weui-cells{
    background-color: #eff7fd;
}
#zjh{
    background: white;
}
.weui-btn_primary {
    width: 52%;
    line-height: 80px;
    background-color: #1AAD19;
    margin-top: 30px;
    margin-bottom: 40px;
}
.weui-btn_primary1 {
    width: 52%;
    line-height: 80px;
    background-color: #1986ad;
    margin-top: 90px;
}
</style>
