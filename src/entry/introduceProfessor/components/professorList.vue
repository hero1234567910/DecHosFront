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
          :key="item.rowGuid"
        >
          <div class="weui-media-box__hd">
            <img class="weui-media-box__thumb" :src="item.imgUrl | picFilter" style="border-radius: 50%;"/>
          </div>
          <div class="weui-media-box__bd">
            <h4 class="weui-media-box__title" style="float: left;">{{item.professorName}}</h4>

            <h4 class="weui-media-box__title" style="clear: both;">职称: {{item.professorTitle}}</h4>
            <h4 class="weui-media-box__title">{{item.professorHos}}</h4>
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
import model from "./model.js";
import env from "../utils/evn"
export default {
  data() {
    this.model = model(this.axios);
    return {
      tabPosition: "left",
      InfoList: [],
      dialogVisible: false,
      zw: "",
      zjxm: "",
      ysms: "",
      departmentGuid: ''
    };
  },
  
  activated() {
    if (!this.$route.meta.isBack) {
      // 如果isBack是false，表明需要获取新数据，否则就不再请求，直接使用缓存的数据
      this.showList();
    }
    // 恢复成默认的false，避免isBack一直是true，导致下次无法获取数据
    this.$route.meta.isBack = false;
  },
  filters: {
    picFilter: function(value) {
      let imgUrl = "";
      let netlocal = env.SEC_HOSAPI + "/file/";
      if (value == "" || value == null) {
        imgUrl = require("../../../../static/dochead/400398144.png");
      } else {
        imgUrl = netlocal + value;
      }
      return imgUrl;
    }
  },
  mounted() {
    this.showList();
  },
  methods: {
    tomainList() {
      // if (process.env.NODE_ENV == "dev") {
      //   window.location = "../../introduceProfessor.html";
      // } else if (process.env.NODE_ENV == "production") {
      //   window.location = "../../2ysechos/introduceProfessor.html";
      // }
      this.$router.push('/')
    },
    dialogShow(item) {
      let self = this;
      self.zw = item.professorTitle;
      self.zjxm = item.professorName;
      self.ysms = item.professorContent;
      self.dialogVisible = true;
    },
    handleClose(done) {
      this.dialogVisible = false;
    },
    showList() {
      $.showLoading();
      let self = this;
      self.departmentGuid = this.$route.query.departmentGuid;
      this.model.getListByGuid(self.departmentGuid).then(function(res) {
        $.hideLoading();
        if (res.data.code == "0") {
          self.InfoList = res.data.data;
        } else {
          $.toptip(res.data.msg, "error");
        }
      });
      // if (self.ksmc == "csk") {
      //   self.InfoList = Csk.jsonnfmk;
      //   for (var i = 0; i < self.InfoList.length; i++) {
      //     self.InfoList[i].imageurl = require("../../../../static/dochead/" + self.InfoList[i].imageurl);
      //   }
      // }
    }
  }
};
</script>

<style>

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
.weui-panel:after {
  position: fixed;
}
.weui-btn_primary {
  background-color: #4ccbdb;
}
.weui-btn {
  width: 230px;
}
</style>