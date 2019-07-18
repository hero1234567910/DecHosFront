<template>
  <div style="height: 100%;background-color: #EFF7FD;">
    <div class="all" v-for="item in details">
    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__hd">
        <div class="hero-panel-img">
          <img src="../../../../static/img/单据.png" style="width: 100%;" />
        </div>
        <div class="hero-panel-title">
          <strong>门诊缴费明细</strong>
        </div>
      </div>
      <div class="weui-panel__bd">
        <div class="hero-list-item">
          <div class="hero-list-item-left">
            <p class="weui-media-box__desc wzl1">结账收据号 : {{item.jssjh}}</p>
          </div>
          <div class="hero-list-item-right">
            <h4 class="weui-media-box__title"></h4>
          </div>
        </div>
        <div class="hero-list-item">
          <div class="hero-list-item-left">
            <p class="weui-media-box__desc wzl1">处方类型 : {{init(item.cflx)}}</p>
          </div>
          <div class="hero-list-item-right">
            <h4 class="weui-media-box__title"></h4>
          </div>
        </div>
        <div class="hero-list-item">
          <div class="hero-list-item-left">
            <p class="weui-media-box__desc wzl1">处方序号 : {{item.cfxh}}</p>
          </div>
          <div class="hero-list-item-right">
            <h4 class="weui-media-box__title"></h4>
          </div>
        </div>
        <div class="hero-list-item">
          <div class="hero-list-item-left">
            <p class="weui-media-box__desc wzl1">药房名称 : {{item.yfmc}}</p>
          </div>
          <div class="hero-list-item-right">
            <h4 class="weui-media-box__title"></h4>
          </div>
        </div>
        <div class="hero-list-item" style="position: relative;margin-bottom: 10px;">
          <div class="hero-list-item-left">
            <p class="weui-media-box__desc wzl1">开方医生名称 : {{item.kfysmc}}</p>
          </div>
          <div class="hero-list-item-right">
            <h4 class="weui-media-box__title"></h4>
          </div>
        </div>
      </div>
    </div>
    <div class="r-content">
      <div class="r-content-item" >
        <div class="item-header">
          <div class="item-header-img">
            <img
              src="../../../../static/img/药品.png"
              width="75%"
              style="position: absolute;top: 4px;"
            />
          </div>
          <div class="item-header-title">药品 / 项目细则</div>
        </div>
        <div class="hero-list-item">
          <div class="hero-list-item-left">
            <p class="weui-media-box__desc wzl1">药品 / 项目名称 : {{item.xmmc}}</p>
          </div>
          <div class="hero-list-item-right">
            <h4 class="weui-media-box__title"></h4>
          </div>
        </div>
        <div class="hero-list-item">
          <div class="hero-list-item-left">
            <p class="weui-media-box__desc wzl1">临床项目名称 : {{item.lcxmmc}}</p>
          </div>
          <div class="hero-list-item-right">
            <h4 class="weui-media-box__title"></h4>
          </div>
        </div>
        <div class="hero-list-item">
          <div class="hero-list-item-left">
            <p class="weui-media-box__desc wzl1">药品规格 : {{item.ypgg}}</p>
          </div>
          <div class="hero-list-item-right" style="margin-left: 37px;">
            <h4 class="weui-media-box__title"></h4>
          </div>
        </div>
        <div class="hero-list-item">
          <div class="hero-list-item-left">
            <p class="weui-media-box__desc wzl1">药品数量 : {{item.ypsl}}</p>
          </div>
          <div class="hero-list-item-right" style="margin-left: 37px;">
            <h4 class="weui-media-box__title"></h4>
          </div>
        </div>
        <div class="hero-list-item">
          <div class="hero-list-item-left">
            <p class="weui-media-box__desc wzl1">药品单价 : {{item.ypdj}}</p>
          </div>
          <div class="hero-list-item-right" style="margin-left: 37px;">
            <h4 class="weui-media-box__title"></h4>
          </div>
        </div>
        <div class="hero-list-item">
          <div class="hero-list-item-left">
            <p class="weui-media-box__desc wzl1">药品单位 : {{item.ypdw}}</p>
          </div>
          <div class="hero-list-item-right" style="margin-left: 37px;">
            <h4 class="weui-media-box__title"></h4>
          </div>
        </div>
        <div class="hero-list-item">
          <div class="hero-list-item-left">
            <p class="weui-media-box__desc wzl1">发药窗口 : {{item.fyck}}</p>
          </div>
          <div class="hero-list-item-right" style="margin-left: 37px;">
            <h4 class="weui-media-box__title"></h4>
          </div>
        </div>

        <div class="hero-list-item">
          <div class="hero-list-item-left">
            <p class="weui-media-box__desc wzl1">金额 : ￥ {{item.fsje}}元</p>
          </div>
          <div class="hero-list-item-right" style="margin-left: 37px;">
            <h4 class="weui-media-box__title"></h4>
          </div>
        </div>
      </div>

      <div style="margin-top: 30px;margin-bottom: 30px;">
        <div>
          <a href="javascript:;" class="weui-btn weui-btn_primary" v-on:click="toList()">返回列表</a>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>


<script>
import weui from "jquery-weui/dist/js/jquery-weui.min";
import model from "./model.js";

export default {
  components: {},
  data() {
    this.model = model(this.axios);
    return {
      details: [],
      patientName: localStorage.getItem("sec_patientName"),
      
    };
  },
  mounted() {
    this.getPayDetail();
    this.init();
  },
  methods: {
    init(ele){
        switch(ele){
            case "1":
                return '西药处方';
                break;
            case "2":
                return '中药处方';
                break;
           
             case "3":
                return '草药处方';
                break;
            
             case "4":
                return '治疗处方';
                break;
            
             case "5":
                return '医技模块增加';
                break;
            
            case "6":
                return '体检处方';
                break;

            case "7":
                return '自动挂号产生挂号收费信息';
                break;
        }

    },
    toList() {
      this.$router.push("/");
    },
    getPayDetail() {
      let self = this;
      let da = this.$route.query.jssjh;
      let data = {
          hzxm:localStorage.getItem('sec_patientName'),
          jssjh:da
      }
      this.model.getOutpatientFeeSettlementDetail(data).then(function(res){
          if(res.data.code == "0"){
              self.details = res.data.data;
          }else{
              $.toptip(res.data.msg, "error");
          }
      })
    },
    
  }
};
</script>
<style>
.el-collapse-item__header {
  padding-left: 20px;
}
</style>
<style scoped>
.weui-btn_primary {
  background-color: #4ccbdb;
}
.weui-btn {
  width: 230px;
}
.item-header-title {
  float: left;
  height: 100%;
  line-height: 35px;
}
.item-header-img {
  width: 35px;
  margin-left: 10px;
  height: 100%;
  line-height: 35px;
  float: left;
  position: relative;
}
.item-content {
  width: 100%;
}
.item-header {
  height: 35px;
  width: 100%;
  line-height: 35px;
}
.r-content-item {
  border-radius: 5px;
  background-color: #ffffff;
  width: calc(100vw - 30px);
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
}
.r-content {
  width: 100%;
  height: calc(100vh - 164px);
  overflow-y: auto;
}
.weui-media-box__title {
  font-size: 13px;
}
.hero-list-item-left {
  float: left;
  height: 20px;
  line-height: 20px;
  margin-left: 20px;
}
.hero-list-item-right {
  height: 20px;
  line-height: 20px;
  margin-left: 76px;
  float: left;
}
.hero-list-item {
  height: 20px;
  margin-top: 5px;
}
.weui-panel__hd {
  height: 30px;
  font-size: 18px;
}
.hero-panel-img {
  float: left;
  width: 35px;
  height: 35px;
}
.hero-panel-title {
  margin-top: 5px;
  margin-left: 10px;
  float: left;
}
.weui-media-box__desc {
  font-size: 14px;
}
</style>

