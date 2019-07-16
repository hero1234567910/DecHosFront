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
          :key="item.pbxh"
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
            <h4 class="weui-media-box__title">科室名称: {{item.ksmc}}</h4>
            <div class="hero-button">
              <el-button type="primary" round @click="toSelect(item)">选择</el-button>
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
      doctorList: "",
      kghys:''
    };
  },
  created() {},
  props: ["patid"],
  mounted() {
    this.search();
  },
  methods: {
    search() {
      let self = this;
      let da = this.$route.query;
      this.model.getDoctorOnDuty(da).then(function(res) {
        if (res.data.code == "0") {
          self.doctorList = res.data.data;
        } else {
          $.toptip(res.data.msg, "error");
        }
      });
    },
    toSelect(ele){
      	var da = this.$route.query;
      	this.$router.push('/docTodaySource?ysdm='+ele.ysdm);
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