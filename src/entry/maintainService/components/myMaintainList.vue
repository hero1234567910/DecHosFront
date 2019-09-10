<template>
  <div style="overflow: auto;overflow-x: hidden;height:100%;">
    <div class="list-head">
      <div class="image-style" style="height: 138px;">
        <img style="height:100%;height: 138px;" src="../../../../static/doctorImg/wdwx.png" />
      </div>
      <div class="weui-cells__title-wzl">待维修列表</div>
    </div>
    <div class="list-body" id="th">
      <div
        class="weui-cells"
        style="margin-top:0px;"
        v-for="item in MaintainList"
        :key="item.rowGuid"
        id="top"
      >
        <a class="weui-cell weui-cell_access" href="javascript:;" @click="toMaintainDetail(item)">
          <div class="weui-cell__bd">
            <p>{{item.deviceName}}</p>
          </div>
          <div class="weui-cell__ft">
            <div id="repairStatus">{{statusCheck(item.repairStatus)}}</div>
            {{item.createTime}}
          </div>
        </a>
      </div>
      <div v-if="isshow()" class="weui-loadmore" id="onloading">
        <i class="weui-loading"></i>
        <span class="weui-loadmore__tips">正在加载</span>
      </div>
      <div style="margin-top: 30px;">
        <div>
          <a href="javascript:;" class="weui-btn weui-btn_primary" v-on:click="toindex()">返回主页</a>
        </div>
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
      isShow: false,
      MaintainList: [],
      page: 2,
      loading: false
    };
  },
  mounted() {
    this.getMaintainList();
    this.initList();
  },
  methods: {
    isshow() {
      if (this.MaintainList.length >= 6) {
        return true;
      } else {
        return false;
      }
    },
    toindex() {
      let self = this;
      self.$router.push("/maintainMenu");
    },
    getMaintainList() {
      $.showLoading();
      let self = this;
      let data = {
        page: "1",
        limit: "10",
        repairStatus: 0
      };
      this.model.getMaintainList(data).then(function(res) {
        $.hideLoading();
        if (res.data.code == "0") {
          self.MaintainList = res.data.data;
        } else {
          $.toptip(res.data.msg, "error");
        }
      });
    },
    initList() {
      let self = this;
      let loading = false;
      $("#th").infinite(150);
      $("#th").on("infinite", function() {
        if (loading) return;
        //console.log(loading);
        loading = true;
        setTimeout(function() {
          let data = {
            limit: "10",
            page: self.page,
            repairStatus: 0
          };

          self.model.getMaintainList(data).then(function(res) {
            if (res.data.code == "0") {
              console.log(res.data);
              if (res.data.data.length == 0) {
                $("#th").destroyInfinite();
                $("#onloading").css("display", "none");
                self.page = 2;
              }

              self.page++;
              for (var i = 0; i < res.data.data.length; i++) {
                self.MaintainList.push(res.data.data[i]);
                //console.log(self.MaintainList);
              }
            } else {
              $.toptip(res.data.msg, "error");
            }
          });
          loading = false;
        }, 1000); //模拟延迟
      });
    },
    toMaintainDetail(ele) {
      this.$router.push(
        "/maintainDetail?repairName=" +
          ele.repairName +
          "&repairGuid=" +
          ele.repairGuid +
          "&repairPhone=" +
          ele.repairPhone +
          "&deviceName=" +
          ele.deviceName +
          "&devicePlace=" +
          ele.devicePlace +
          "&damagedParts=" +
          ele.damagedParts +
          "&reportContent=" +
          ele.reportContent +
          "&repairStatus=" +
          ele.repairStatus +
          "&picGuid=" +
          ele.picGuid +
          "&rowGuid=" +
          ele.rowGuid
      );
    },
    statusCheck(ele) {
      let def;
      switch (ele) {
        case 0:
          def = "报修中";
          break;
        case 1:
          def = "报修取消";
          break;
        case 2:
          def = "报修完成";
          break;
        default:
          break;
      }
      return def;
    }
  }
};
</script>

<style scoped>
.list-body {
  position: absolute;
  height: calc(100vh - 181px);
  top: 180px;
  width: 100%;
  overflow-y: auto;
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
.weui-btn {
  width: 230px;
}
.list-head {
  position: absolute;
  z-index: 100;
}
</style>