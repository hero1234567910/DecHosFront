<template style="background-color: #eff7fd;">
  <div style="background-color: #eff7fd;">
    <div class="weui-flex" style="height: 230px;">
      <div class="weui-flex__item-wzl">
        <img
          src="../../../../static/images/门诊患者.png"
          v-on:click="mzBotton"
          v-bind:class="shows==true?'magnify':''"
          style="margin-top: 30px;width: 55%;margin-left: 31px;"
        >
        <div class="wzl-col-dec" style="min-width: 70px;" v-bind:style="{color:color1}">我是门诊患者</div>
        <div class="v-underline" v-bind:style="{left:underlineMove+'%'}"></div>
      </div>
      <div class="weui-flex__item-wzl">
        <img
          src="../../../../static/images/住院患者.png"
          v-on:click="zyBotton"
          v-bind:class="shows==false?'magnify':''"
          style="margin-top: 30px;width: 55%;margin-left: 31px;"
        >
        <div class="wzl-col-dec" style="min-width: 70px;" v-bind:style="{color:color2}">我是住院患者</div>
      </div>
    </div>
    <div class="weui-cells__title wzl" style="font-size: 18px;">请输入身份证号</div>
    <div class="weui-cells-wzl weui-cells_form">
      <div class="weui-cell-wzl" style="margin-top: 0px;">
        <div class="weui-cell__bd">
          <input id="zjh" class="weui-input" type="number" placeholder>
        </div>
      </div>
    </div>

    <div style="width: 100%;
    height: 800px;">

    </div>

  </div>
</template>

<script>
import weui from "jquery-weui/dist/js/jquery-weui.min";
export default {
  name: "userBinding.vue",
  data() {
    return {
      shows: true,
      underlineMove: 10,
      color1:'#000000',
      color2:'#878787'
    };
  },
  methods: {
    mzBotton() {
      this.shows = true;
      this.underlineMove = 10;
      this.color1='#000000';
      this.color2='#878787';
    },
    zyBotton() {
      this.shows = false;
      this.underlineMove = 110;
      this.color2='#000000';
      this.color1='#878787';
    }
  }
};
</script>

<style>
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
.weui-cells-wzl {
  background-color: #eff7fd;
}
#zjh {
  background: white;
}

.weui-cell-wzl:before {
  position: fixed;
}
.weui-cells-wzl:before {
  position: fixed;
}
.weui-flex__item-wzl{
  height: 230px;
  background-color: white;
  border-top: outset;
  border-top-width: thin;
  border-top-color: lightskyblue;
  border-bottom: inset;
  border-bottom-color: lightskyblue;
  border-bottom-width: thin;
}
.wzl-col-dec {
  height: 20px;
  line-height: 27px;
  width: 100%;
  font-size: 16px;
  color: #100000;
  text-align: center;
  margin-left: -10px;
  font-weight: 600;
}
.maginfy {
  font-size: 30px;
}
.v-underline {
  width: 51%;
  height: 6px;
  background-color: rgb(86, 193, 235);
  position: relative;
  margin-left: 17px;
  margin-top: 2px;
  z-index: -1；;
}
</style>
