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
        <span style="font-weight: 700;">{{userName}}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>推广次数 :</span>
        <span style="color: green;font-size: 17px;font-weight: 700;">{{ count }}</span>
      </div>
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
      promotersGuid: this.$route.query.promotersGuid,
      userName: this.$route.query.userName,
      loading: false,
      page: 1,
      count: this.$route.query.count,
      cardStyle: { padding: "0px" }
    };
  },
  created() {},
  mounted() {
    this.getList(this.promotersGuid, "0", "20"), this.init();
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
      let self = this
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