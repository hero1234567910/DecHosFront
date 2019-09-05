<template>
  <div style="overflow: auto;overflow-x: hidden;height:100%;">
    <div class="list-head">
      <div class="image-style" style="height: 138px;">
        <img style="height:100%;height: 138px;" src="../../../../static/img-2/wdbx.png" />
      </div>
      <div class="weui-cells__title-wzl">报修记录</div>
    </div>
    <div class="list-body" style="margin-top: 180px;">
      <div class="weui-cells" style="margin-top:0px;" v-for="item in RepairList" :key="item.rowGuid">
        <a class="weui-cell weui-cell_access" href="javascript:;" @click="toRepairDetail(item)">
          <div class="weui-cell__bd">
            <p>{{item.deviceName}}</p>
          </div>
          <div class="weui-cell__ft">
            <div id="repairStatus">{{statusCheck(item.repairStatus)}}</div>
            {{item.createTime}}
          </div>
        </a>
      </div>
    </div>
    <div style="margin-top: 30px;">
      <div>
        <a href="javascript:;" class="weui-btn weui-btn_primary" v-on:click="toindex()">返回主页</a>
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
      RepairList: []
    };
  },
  mounted() {
    this.getListByGuid();
  },
  methods: {
    toindex() {
      let self = this;
      self.$router.push("/doctorMenu");
    },
    getListByGuid() {
      $.showLoading();
      let self = this;
      let data = localStorage.getItem("m_user_rowGuid");
      this.model.getListByGuid(data).then(function(res) {
        $.hideLoading();
        if (res.data.code == "0") {
          self.RepairList = res.data.data;
        } else {
          $.toptip(res.data.msg, "error");
        }
      });
    },
    toRepairDetail(ele) {
      this.$router.push(
        "/repairDetail?repairName=" +
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