<template>
  <div>
    <div class="weui-cells-wzl weui-cells_form">
      <div class="weui-cell" style="margin-top: 16px;">
        <div class="weui-cell__bd">
          <input id="zjh" class="weui-input" type="text" placeholder="请输入患者姓名">
        </div>
      </div>
      <div class="weui-cells__title wzl" style="font-size: 18px;">性别</div>
      <div class="weui-cell-wzl" style="padding-top: 0px;">
        <div class="weui-cell__bd">
          <div class="weui-cells-wzl weui-cells_radio" >
            <label class="weui-cell weui-check__label" style="width: unset;background-color: white;border-top: outset;border-top-width: thin;border-top-color: lightskyblue;
                      border-bottom: inset;border-bottom-color: #d5ebf9;border-bottom-width: thin;padding-right:0px;padding-left:34px;" for="x11">
              <div class="weui-cell__bd">
                <p>男</p>
              </div>
              <div class="weui-cell__ft">
                <input type="radio" class="weui-check" name="radio1" id="x11">
                <span class="weui-icon-checked" style="margin-right:50px"></span>
              </div>
            </label>
            <label
              class="weui-cell weui-check__label"
              style="width: unset;background-color: white;
                      border-bottom: inset;border-bottom-color: lightskyblue;border-bottom-width: thin;padding-right:0px;padding-left:34px;" for="x12">
              <div class="weui-cell__bd">
                <p>女</p>
              </div>
              <div class="weui-cell__ft">
                <input type="radio" name="radio1" class="weui-check" id="x12" checked="checked">
                <span class="weui-icon-checked" style="margin-right:50px"></span>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="weui-cell-wzl" style="margin-top: 0px;">
        <div class="weui-cell__bd">
          <input type="text" data-toggle="date" id="my-input" placeholder="请输入出生年月" style="margin-top: 27px;">
        </div>
      </div>
      <div class="weui-cells__title wzl" style="margin-top: 0px;font-size: 18px;">联系方式</div>
      <div class="weui-cell-wzl" style="margin-top: 0px;padding-bottom:0px;padding-top:0px;border-bottom-color:#d5ebf9">
        <div class="weui-cell__bd">
          <input id="zjh" class="weui-input" style="border-bottom-color:#d5ebf9" type="number" placeholder="电话">
        </div>
      </div>
      <div class="weui-cell-wzl" style="margin-top: 0px;padding-top:0px;">
        <div class="weui-cell__bd">
          <input id="zjh" class="weui-input" style="border-top:none;" type="text" placeholder="地址">
        </div>
      </div>
      <a href="javascript:;" class="weui-btn weui-btn_primary">保存</a>
    </div>
  </div>
</template>

<script>
import weui from "jquery-weui/dist/js/jquery-weui.min";
export default {
  name: "userFiling.vue",
  methods: {}
};

$("#my-input").calendar();
</script>

<style scoped>
.weui-cells-wzl {
  margin-top: 0px;
  background-color: #eff7fd;
}
#zjh {
  background: white;
}
.weui-input {
  height: 40px;
  width: 110%;
  border-top: outset;
  border-top-width: thin;
  border-top-color: lightskyblue;
  border-bottom: inset;
  border-bottom-color: lightskyblue;
  border-bottom-width: thin;
  margin-left: -15px;
  padding-left: 35px;
}
#my-input {
  font-size: 17px;
  height: 40px;
  width: 110%;
  margin-left: -18px;
  border-top: outset;
  border-top-width: thin;
  border-top-color: lightskyblue;
  border-bottom: inset;
  border-bottom-color: lightskyblue;
  border-bottom-width: thin;
  padding-left: 35px;
}
.weui-cells-wzl::before {
  position: fixed;
}
.weui-cell-wzl:before {
  position: fixed;
}
.weui-btn {
  margin-top: 78px;
  width: 86%;
}
weui-cell-wzl weui-check__label {
  width: unset;
  background-color: white;
  border-top: outset;
  border-top-width: thin;
  border-top-color: lightskyblue;
  border-bottom: inset;
  border-bottom-color: lightskyblue;
  border-bottom-width: thin;
}
.weui-cell-wzl{
  padding-right: 0px;
  padding-left: 0px;
}
</style>
