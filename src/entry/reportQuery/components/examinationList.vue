<template>
  <div class="weui-panel weui-panel_access" style="height: 100%;">
    <div id="bac" style="height:100%;width:100%">
      <div class="weui-panel__hd">
      	体检报告列表
      </div>
      <div class="weui-panel__bd">
        <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg" @click="toExaminationDetail">
          <div class="weui-media-box__hd1">
            <img
              class="weui-media-box__thumb1"
              style="width:80%;display: block;"
              src="../../../../static/images/bk1.png"
            >
          </div>
          <div class="weui-media-box__hd">
            <img class="weui-media-box__thumb" src="../../../../static/images/xb1.png">
          </div>
          <div class="weui-media-box__bd">
            <h4 class="weui-media-box__title" style="margin-top: -5px;">张三 12345678912</h4>
            <p class="weui-media-box__desc" style="color:#0f82b0;margin-top: 2px;">血液常规检查</p>
            <p class="weui-media-box__desc" style="margin-top: 9px;">2018-6-11 8:20出结果</p>
          </div>
          <div class="weui-media-box__hd1">
            <img class="weui-media-box__thumb" src="../../../../static/images/yytb1.png">
          </div>
        </a>

        <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg" @click="toExaminationDetail">
          <div class="weui-media-box__hd1">
            <img
              class="weui-media-box__thumb1"
              style="width:80%;display: block;"
              src="../../../../static/images/bk1.png"
            >
          </div>
          <div class="weui-media-box__hd">
            <img class="weui-media-box__thumb" src="../../../../static/images/xb1.png">
          </div>
          <div class="weui-media-box__bd">
            <h4 class="weui-media-box__title" style="margin-top: -5px;">张三 12345678912</h4>
            <p class="weui-media-box__desc" style="color:#0f82b0;margin-top: 2px;">血液常规检查</p>
            <p class="weui-media-box__desc" style="margin-top: 9px;">2018-6-11 8:20出结果</p>
          </div>
          <div class="weui-media-box__hd1">
            <img class="weui-media-box__thumb" src="../../../../static/images/yytb1.png">
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import weui from "jquery-weui/dist/js/jquery-weui.min";
import model from "./model.js";
export default {
  data() {
    this.model = model(this.axios);
    return {
		
		};
  },
  mounted() {
    
  },
  methods: {
  	toExaminationDetail(){
  		this.$router.push('/examinationDetail');
  	}
 }
};
</script>

<style scoped>
	.weui-cells {
	height: 5px;
	background-color: #F5F5F5;
	margin-top: 0;
}

.weui-media-box__title{
	font-size: 13px;
	font-weight: 600;
}
html{
	overflow: auto;
}
.weui-media-box {
    padding: 15px;
    position: relative;
    border: groove;
}
html,
body {
  margin: 0;
  height: 100%;
}
#bac {
  background-color: #eff7fd;
}

.weui-panel__hd {
  font-size: 16px;;
  font-weight: 500;
}

.weui-media-box {
  background-color: white;
  padding: 7px;
  position: relative;
  padding-left: 0px;
  padding-bottom: 0px;
  padding-top: 0px;
  border: none;
  margin: 15px;
  box-shadow: #d5f0f6 1px 1px 1px 0.1px;
}

.weui-media-box_appmsg .weui-media-box__hd {
  margin-right: 0.8em;
  width: 35px;
  height: 35px;
  line-height: 60px;
  text-align: center;
  margin-right: auto;
}
.weui-media-box_appmsg .weui-media-box__thumb {
  width: 90%;
  max-height: 90%;
  vertical-align: top;
}
.page {
  position: absolute;
  width: 100%;
  bottom: 0;
  line-height: 60px;
}
</style>
 