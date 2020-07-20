<template>
  <div>
    <!--<div class="hero-search">
      <div class="weui-search-bar" id="searchBar">
        <form class="weui-search-bar__form">
          <div class="weui-search-bar__box">
            <i class="weui-icon-search"></i>
            <input
              type="search"
              class="weui-search-bar__input"
              id="searchInput"
              placeholder="搜索"
              required
            />
            <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
          </div>
          <label class="weui-search-bar__label" id="searchText">
            <i class="weui-icon-search"></i>
            <span>搜索</span>
          </label>
        </form>
        <a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">专家</a>
      </div>
    </div>-->

    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__bd">
        <a
          href="javascript:void(0);"
          class="weui-media-box weui-media-box_appmsg"
          v-for="(item,index) in arr" 
          :key="index"
        >
          <div class="weui-media-box__hd">
            <img class="weui-media-box__thumb" src="../../../../static/img/科室.png" />
          </div>
          <div class="weui-media-box__bd">
            <h4 class="weui-media-box__title" style="float: left;">剩余挂号数：{{item.kghys}}</h4>
            <h4 class="weui-media-box__title" style="clear: both;">医生：{{item.pbmc}}</h4>
            <h4 class="weui-media-box__title">费用：¥{{item.zje}} 排班：{{item.zzlxmc}}</h4>
            <div class="hero-button">
              <el-button type="primary" round @click="toSubmit(item)">预约</el-button>
            </div>
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
      tabPosition: "left",
      arr: []
    };
  },
  props: ["patid"],
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let self = this;
      var da = this.$route.query;
      this.model.getDoctorOnDutyYNo(da).then(function(res) {
        if (res.data.code == 0) {
          self.arr = res.data.data;
        } else {
          $.toptip(res.data.msg, "error");
        }
      });
    },
    toSubmit(ele) {
      let self = this;
      if (ele.kghys == 0) {
        $.alert("已无可预约号码", "error");
      } else {
        $.confirm(
          "您确定要预约吗？",
          "提示",
          function() {
            self.sub(ele);
          },
          function() {
            return;
          }
        );
      }
    },
    sub(ele) {
      let self = this;
      let pbmxxh = ele.pbxh;
      let hzxm = localStorage.getItem("sec_patientName");
      let bxh = localStorage.getItem("sec_patientIdcard");
      let data = {
        patid: this.patid,
        pbxh: pbmxxh,
        yyhx: 0
      };
      this.model.getOutpatientAppointmentReg(data).then(function(res) {
        if (res.data.code == 0) {
          if (localStorage.getItem("sec_yb") == "true") {
            $.alert("请您使用医保到相应柜台完成缴费", "预约成功", function() {
              //点击确认后的回调函数
              if (process.env.NODE_ENV == "dev") {
                window.location = "../../reservation.html";
              } else if (process.env.NODE_ENV == "production") {
                window.location = "../../2ysechos/reservation.html";
              }
            });
          } else {
            $.modal({
              title: "提示",
              text: "预约成功",
              buttons: [
                {
                  text: "去缴费",
                  onClick: function() {
                    if (process.env.NODE_ENV == "dev") {
                      window.location =
                        "../../outpatientPay.html#/ghPay?pbxh=" +
                        pbmxxh +
                        "&patid=" +
                        self.patid;
                    } else if (process.env.NODE_ENV == "production") {
                      window.location =
                        "../../2ysechos/outpatientPay.html#/ghPay?pbxh=" +
                        pbmxxh +
                        "&patid=" +
                        self.patid;
                    }
                  }
                },
                { text: "取消", className: "default", onClick: function() {} }
              ]
            });
          }
        } else {
          $.toptip(res.data.msg, "error");
        }
      });
    }
  }
};
</script>

<style scoped>
.weui-panel:after {
  border-bottom: 0px solid #e5e5e5;
}
.weui-panel {
  overflow: auto;
  /*top: 44px;
  height: calc(100vh - 44px);*/
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
</style>