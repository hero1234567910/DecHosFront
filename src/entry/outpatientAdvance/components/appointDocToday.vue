<template>
  <div>
    <div class="hero-search">
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
    </div>

    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__bd">
        <a
          href="javascript:void(0);"
          class="weui-media-box weui-media-box_appmsg"
          v-for="item in doctorList"
        >
          <div class="weui-media-box__hd">
            <img class="weui-media-box__thumb" src="../../../../static/img/400398144.png" />
          </div>
          <div class="weui-media-box__bd">
            <h4 class="weui-media-box__title" style="float: left;">{{item.ysmc}}</h4>
            <div style="width: 50px;float: left;margin-left: 10px;width: 40px;line-height: 27px;">
              <img src="../../../../static/img/专家.png" style="width: 100%;" />
            </div>

            <h4 class="weui-media-box__title" style="clear: both;">职位: {{item.yszc}}</h4>
            <h4 class="weui-media-box__title">挂号费用: ¥{{item.zje}}元</h4>
            <h4 class="weui-media-box__title">时间: {{item.zzlxmc}}元</h4>
            <div class="hero-button">
              <el-button type="primary" round>预约</el-button>
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
      doctorList: ""
    };
  },
  created(){
	
  },
  mounted() {
    this.search();
  },
  methods: {
    GetQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = location.search.substr(1).match(reg); //search,查询？后面的参数，并匹配正则
      if (r != null) return decodeURI(r[2]);
      return null;
    },
    search() {
      let self = this;
      var ksdm1 = this.GetQueryString("ksdm");
      console.log(this.GetQueryString("ksdm"));
      let data = {
        ksdm:ksdm1
      };
      this.model.getDoctorOnDuty(data).then(function(res) {
        if (res.data.code == "0") {
          self.doctorList = res.data.data;
        } else {
          $.alert(res.data.msg, "error");
        }
      });
    }
  }
};
</script>

<style>
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
.weui-media-box_appmsg .weui-media-box__bd {
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