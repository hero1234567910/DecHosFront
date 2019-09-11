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
            <div>{{statusCheck(item.repairStatus)}}</div>
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
  beforeRouteEnter(to, from, next) {
    // 路由导航钩子，此时还不能获取组件实例 `this`，所以无法在data中定义变量（利用vm除外）
    // 参考 https://router.vuejs.org/zh-cn/advanced/navigation-guards.html
    // 所以，利用路由元信息中的meta字段设置变量，方便在各个位置获取。这就是为什么在meta中定义isBack
    // 参考 https://router.vuejs.org/zh-cn/advanced/meta.html
    if (from.name == "repairDetail") {
      to.meta.isBack = true;
      //判断是从哪个路由过来的，
      //如果是page2过来的，表明当前页面不需要刷新获取新数据，直接用之前缓存的数据即可
    }
    console.log(to.meta.isBack);
    next();
  },
  activated() {
    if (!this.$route.meta.isBack) {
      // 如果isBack是false，表明需要获取新数据，否则就不再请求，直接使用缓存的数据
      this.getListByGuid();
    }
    // 恢复成默认的false，避免isBack一直是true，导致下次无法获取数据
    this.$route.meta.isBack = false;
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