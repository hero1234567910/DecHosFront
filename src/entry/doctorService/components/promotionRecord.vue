<template>
  <div style="overflow: auto;height:100%;overflow-x: hidden;background-color: #ecf5ff;" id="th">
    <el-card class="box-card" :body-style="cardStyle">
      <div slot="header" class="clearfix">
        <div class="card-hero">
          <img
            src="../../../../static/images/推广记录.png"
            style="position: absolute;top: -7px;width: 80%;"
          />
        </div>
        <span style="font-weight: 700;">推广记录</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>推广次数 :  </span>
        <span style="color: green;font-size: 17px;font-weight: 700;">{{ count }}</span>
      </div>

      <!-- <div>
        <div style="float: left;width: 80%;">
          <div class="weui-search-bar" id="searchBar">
            <form class="weui-search-bar__form">
              <div class="weui-search-bar__box">
                <i class="weui-icon-search"></i>
                <input
                  type="search"
                  v-model="search"
                  class="weui-search-bar__input"
                  id="searchInput"
                  @keyup.enter="Search()"
                  placeholder="搜索姓名"
                />
                <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
              </div>
              <label class="weui-search-bar__label" id="searchText">
                <i class="weui-icon-search"></i>
                <span>搜索</span>
              </label>
            </form>
            <a
              href="javascript:"
              class="weui-search-bar__cancel-btn"
              id="searchCancel"
              @click="getList('','1','30')"
            >取消</a>
          </div>
        </div>
        <div style="float: right;width: 20%;">
          <a href="javascript:;" class="weui-btn weui-btn_primary" @click="Search()">搜索</a>
        </div>
      </div>-->
    </el-card>
    <div class="weui-cells" style="background-color: #f8fcff;margin-top: 10px;">
      <div
        class="weui-cell weui-cell_swiped"
        v-for="item in users"
      >
        <div class="weui-cell__bd" v-if="item != null && item.patientName != null">
          <div class="weui-cell">
            <div class="weui-cell__bd">{{item.patientName}}</div>
            <div class="weui-cell__ft">
              <!--<p>{{item.patientMobile}}</p>-->
            </div>
          </div>
        </div>
        <!-- <div class="weui-cell__ft" v-show="item.mobile != null">
          <a
            class="weui-swiped-btn weui-swiped-btn_default delete-swipeout"
            href="javascript:"
          >{{item.mobile}}</a>
          <a
            class="weui-swiped-btn weui-swiped-btn_warn close-swipeout"
            :href="'tel:' + item.mobile"
          >拨号</a>
        </div>

        <div class="weui-cell__ft" v-show="item.mobile == null || item.mobile == ''">
          <a class="weui-swiped-btn weui-swiped-btn_default close-swipeout" href="javaScript:;">暂无</a>
        </div> -->
      </div>

      <div v-if="isshow()" class="weui-loadmore" id="onloading">
        <i class="weui-loading"></i>
        <span class="weui-loadmore__tips">正在加载</span>
      </div>
    </div>
  </div>
</template>

<script>
import model from "./model.js";
export default {
  data() {
    this.model = model(this.axios);
    return {
      users: [],
      promotersGuid: localStorage.getItem("m_user_rowGuid"),
      loading: false,
      page: 1,
      count: "",
      cardStyle: {padding: '0px'}
    };
  },
  created() {},
  mounted() {
    this.getList(this.promotersGuid, "0", "20"), this.init();
    this.getMyPopuCount();
  },
  methods: {
    init() {
      let self = this;
      var loading = false; //状态标记
      $("#th").infinite();
      $("#th").on("infinite", function() {
        if (loading) return;
        loading = true;
        setTimeout(function() {
          var params = new URLSearchParams();
          params.append("offset", self.page);
          params.append("limit", "20");
          params.append("promotersGuid", self.promotersGuid);
          console.log(self.page);
          self.model.getPatientListByOpenId(params).then(function(res) {
            if (res.data.code == "0") {
              if (res.data.data.length == 0) {
                $("#th").destroyInfinite();
                $("#onloading").css("display", "none");
                self.page = 1;
              }

              self.page++;
              for (var i = 0; i < res.data.data.length; i++) {
                self.users.push(res.data.data[i]);
                self.$nextTick(function() {
                  $(".weui-cell_swiped").swipeout();
                });
              }
            } else {
              $.toptip(res.data.msg, "error");
            }
          });
          loading = false;
        }, 1500); //模拟延迟
      });
    },
    isshow() {
      if (this.users.length >= 20) {
        return true;
      } else {
        return false;
      }
    },
    getList(searchaVal, page, limit) {
      let self = this;
      var params = new URLSearchParams();
      params.append("offset", "0");
      params.append("limit", limit);
      params.append("promotersGuid", searchaVal);
      $.showLoading();
      this.model.getPatientListByOpenId(params).then(function(res) {
        $.hideLoading();
        if (res.data.code == 0) {
          self.users = res.data.data;
          self.$nextTick(function() {
            $(".weui-cell_swiped").swipeout();
          });
        } else {
          $.toptip(res.data.msg, "error");
        }
      });
    },
    getMyPopuCount() {
      let self = this;
      const params = new URLSearchParams();
      params.append("promotersGuid", self.promotersGuid);
      this.model.getMyPopuCount(params).then(function(res) {
        if (res.data.code == 0) {
          console.log(res.data);
          self.count = res.data.data;
        } else {
          $.toptip(res.data.msg, "error");
        }
      });
    }
  }
};
</script>
<style>
.el-card__body {
  padding: 5px;
}
</style>
<style scoped>
.weui-btn {
  width: 100% !important;
  margin-bottom: 5px !important;
  padding-left: 5px !important;
  padding-right: 5px !important;
}
.weui-cells__title-wzl {
  background-color: whitesmoke;
  margin-top: 0px;
  padding-left: 15px;
  padding-right: 15px;
  color: #999999;
  font-size: 14px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.weui-btn_primary {
  background-color: #4ccbdb;
}
.content_Down_photo img {
  width: 70px;
  height: 70px;
  margin: 15px;
}
.hero-button {
  background-color: #44c5e3;
  width: 80%;
  height: 38px;
  line-height: 38px;
}
.weui-row .weui-col-50 {
  height: 50px;
}
.weui-row {
  margin-top: 20px;
  height: 50px;
}
.card-hero {
  width: 50px;
  height: 40px;
  line-height: 20px;
  float: left;
  position: relative;
}
</style>