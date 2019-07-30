<template>
  <div style="height: 100%;background-color: #EFF7FD;overflow:auto;">
    <div class="wzl-head">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <div class="card-hero">
            <img
              src="../../../../static/images/科室工作量.png"
              style="position: absolute;top: -7px;width: 80%;"
            />
          </div>
          <span style="font-weight: 700;">专家详情</span>
        </div>
      </el-card>
    </div>

    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__bd">
        <a
          href="javascript:void(0);"
          class="weui-media-box weui-media-box_appmsg"
          v-for="item in InfoList"
          v-on:click="dialogShow(item)"
        >
          <div class="weui-media-box__hd">
            <img class="weui-media-box__thumb" src="../../../../static/img/400398144.png" />
          </div>
          <div class="weui-media-box__bd">
            <h4 class="weui-media-box__title" style="float: left;">{{item.zjxm}}</h4>

            <h4 class="weui-media-box__title" style="clear: both;">职位: 主治医师</h4>
            <h4 class="weui-media-box__title">挂号时间: {{item.mzsj==''?'未定':item.mzsj}}</h4>
          </div>
        </a>
      </div>
      <div style="margin-top: 10px;margin-bottom: 10px;">
      <div>
        <a href="javascript:;" class="weui-btn weui-btn_primary" v-on:click="tomainList()">返回列表</a>
      </div>
    </div>
    </div>

    <el-dialog
      title="专家详情"
      :visible.sync="dialogVisible"
      width="85%"
      :before-close="handleClose"
      :close-on-click-modal="false"
    >
      <span style="font-size:18px;font-weight:600;">
        {{zjxm}}
        <br />
      </span>
      <span style="font-size:18px;font-weight:500;">
        {{zw}}
        <br />
      </span>
      <p style="text-indent: 2em;">{{ysms}}</p>
      <span slot="footer" class="dialog-footer"></span>
    </el-dialog>

    
  </div>
</template>

<script>
import weui from "jquery-weui/dist/js/jquery-weui.min";
import Nfmk from "../staticvalue/nfmk.vue";
import Pfk from "../staticvalue/pfk.vue";
import Xhnk from "../staticvalue/xhnk.vue";
import Pwk from "../staticvalue/pwk.vue";
import Fck from "../staticvalue/fck.vue";
import Gk from "../staticvalue/gk.vue";
import Xnk from "../staticvalue/xnk.vue";
import Hxnk from "../staticvalue/hxnk.vue";
import Erbhk from "../staticvalue/erbhk.vue";
import Yk from "../staticvalue/yk.vue";
import Erk from "../staticvalue/erk.vue";
import Sjwk from "../staticvalue/sjwk.vue";
import Xxgnk from "../staticvalue/xxgnk.vue";
export default {
  data() {
    return {
      tabPosition: "left",
      InfoList: [],
      dialogVisible: false,
      zw: "",
      zjxm: "",
      ysms: ""
    };
  },
  mounted() {
    this.showList();
  },
  methods: {

    tomainList() {
      if (process.env.NODE_ENV == "dev") {
        window.location = "../../introduceProfessor.html";
      } else if (process.env.NODE_ENV == "production") {
        window.location = "../../sechos/introduceProfessor.html";
      }
    },
    dialogShow(item) {
      let self = this;
      self.zw = item.zw;
      self.zjxm = item.zjxm;
      self.ysms = item.ysms;
      self.dialogVisible = true;
    },
    handleClose(done) {
      this.$confirm("确认离开？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    showList() {
      let self = this;
      self.ksmc = this.$route.query.ksmc;
      if (self.ksmc == "nfmk") {
        self.InfoList = Nfmk.jsonnfmk;
      }
      if (self.ksmc == "pfk") {
        self.InfoList = Pfk.jsonnfmk;
      }
      if (self.ksmc == "xhnk") {
        self.InfoList = Xhnk.jsonnfmk;
      }
      if (self.ksmc == "pwk") {
        self.InfoList = Pwk.jsonnfmk;
      }
      if (self.ksmc == "fck") {
        self.InfoList = Fck.jsonnfmk;
      }
      if (self.ksmc == "gk") {
        self.InfoList = Gk.jsonnfmk;
      }
      if (self.ksmc == "xnk") {
        self.InfoList = Xnk.jsonnfmk;
      }
      if (self.ksmc == "hxnk") {
        self.InfoList = Hxnk.jsonnfmk;
      }
      if (self.ksmc == "erbhk") {
        self.InfoList = Erbhk.jsonnfmk;
      }
      if (self.ksmc == "yk") {
        self.InfoList = Yk.jsonnfmk;
      }
      if (self.ksmc == "erk") {
        self.InfoList = Erk.jsonnfmk;
      }
      if (self.ksmc == "sjwk") {
        self.InfoList = Sjwk.jsonnfmk;
      }
      if (self.ksmc == "xxgnk") {
        self.InfoList = Xxgnk.jsonnfmk;
      }
    }
  }
};
</script>

<style>
.el-dialog {
}
.el-dialog {
  width: calc(100vw - 20px);
}
.el-card__body {
  padding: 0px;
}
.el-message-box {
  width: 50%;
}
</style>


<style scoped>
.weui-panel {
  overflow: auto;
  top: 44px;
  height: calc(100vh - 44px);
}
.el-button.is-round {
  width: 70px;
  height: 30px;
  font-size: 14px;
  line-height: 5px;
}
.weui-media-box__bd {
  position: relative;
}
.hero-button {
  position: absolute;
  right: 0px;
  top: 20px;
}
.weui-media-box__title {
  color: #4b5c7d;
}

.weui-media-box_appmsg .weui-media-box__hd {
  height: 70px;
}
.weui-panel {
  margin-top: 0px;
}
.el-tabs__nav-scroll {
  overflow-y: auto;
}
.el-tabs--left,
.el-tabs--right {
  height: calc(100vh - 46px);
}
.hero-main {
  height: calc(100vh - 44px);
}
.hero-search-head {
  height: 28px;
  bottom: -2px;
  width: 30px;
  position: relative;
}
.hero-search {
  height: 44px;
  position: absolute;
  width: 100%;
}
.weui-search-bar__form {
  border: 0px solid #e6e6ea;
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 15px;
}
.wzl-title {
  font-size: 30px;
  font-weight: 600;
  text-align: center;
}
.de-body {
  padding: 15px;
}
.card-hero {
  width: 50px;
  height: 40px;
  line-height: 20px;
  float: left;
  position: relative;
}
.el-card__body {
  padding: 0px;
}
.el-tabs__nav-scroll {
  overflow-y: auto;
}
.el-tabs--left,
.el-tabs--right {
  height: calc(100vh - 137px);
}
.wzl-head {
  position: absolute;
  width: 100%;
  z-index: 99;
}
.weui-panel {
  margin-top: 10px;
}
.weui-panel:after{
  position: fixed;
}
.weui-btn_primary {
  background-color: #4ccbdb;
}
.weui-btn {
  width: 230px;
}
</style>