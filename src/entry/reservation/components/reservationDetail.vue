<template>
  <div>
    <div class="all">
      <div class="weui-panel weui-panel_access">
        <div class="weui-panel__hd">
          <div class="hero-panel-img">
            <img src="../../../../static/img/400398144.png" style="width: 100%;" />
          </div>
          <div class="hero-panel-title">
            <strong>{{ksmc}}</strong>
          </div>
        </div>
        <div class="weui-panel__bd">
          <div class="hero-list-item">
            <div class="hero-list-item-left">
              <p class="weui-media-box__desc">就诊科室</p>
            </div>
            <div class="hero-list-item-right">
              <h4 class="weui-media-box__title">{{ksmc}}</h4>
            </div>
          </div>
          <div class="hero-list-item">
            <div class="hero-list-item-left">
              <p class="weui-media-box__desc">就诊时间</p>
            </div>
            <div class="hero-list-item-right">
              <h4 class="weui-media-box__title">{{ghrq |dateForm}}</h4>
            </div>
          </div>
          <div class="hero-list-item">
            <div class="hero-list-item-left">
              <p class="weui-media-box__desc">门诊类型</p>
            </div>
            <div class="hero-list-item-right">
              <h4 class="weui-media-box__title">{{mzlx}}</h4>
            </div>
          </div>
          <div class="hero-list-item">
            <div class="hero-list-item-left">
              <p class="weui-media-box__desc">支付状态</p>
            </div>
            <div class="hero-list-item-right">
              <h4 class="weui-media-box__title">{{zfzt=="1"?"已支付":"未支付"}}</h4>
            </div>
          </div>
          <div class="hero-list-item" style="position: relative;">
            <div class="hero-list-item-left">
              <p class="weui-media-box__desc">挂号费用</p>
            </div>
            <div class="hero-list-item-right">
              <h4 class="weui-media-box__title">{{zje}} 元</h4>
            </div>
          </div>

          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="更多" name="1">
              <div class="hero-list-item">
                <div class="hero-list-item-left">
                  <p class="weui-media-box__desc">就诊地址</p>
                </div>
                <div class="hero-list-item-right">
                  <h4 class="weui-media-box__title">{{jzdz}}</h4>
                </div>
              </div>
              <div class="hero-list-item">
                <div class="hero-list-item-left">
                  <p class="weui-media-box__desc">预约来源</p>
                </div>
                <div class="hero-list-item-right">
                  <h4 class="weui-media-box__title">{{memo}}</h4>
                </div>
              </div>
              <div class="hero-list-item">
                <div class="hero-list-item-left">
                  <p class="weui-media-box__desc">预约状态</p>
                </div>
                <div class="hero-list-item-right">
                  <h4 class="weui-media-box__title">{{statusCheck(yyzt)}}</h4>
                </div>
              </div>
              <div class="hero-list-item">
                <div class="hero-list-item-left">
                  <p class="weui-media-box__desc">预约号序</p>
                </div>
                <div class="hero-list-item-right">
                  <h4 class="weui-media-box__title">{{yyhx}} 号</h4>
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
      <div class="weui-panel weui-panel_access" style="margin-top: 0px;">
        <div class="weui-panel__hd" style="background-color: #EFF7FD;line-height: 38px;">预约时间段</div>
        <div class="weui-panel__bd">
          <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
            <div class="weui-media-box__bd">
              <p class="weui-media-box__desc" style="color: red;">{{yysd}}</p>
            </div>
          </a>
        </div>
      </div>
      <!--<div class="weui-panel weui-panel_access" style="margin-top: 0px;">
	  <div class="weui-panel__hd" style="background-color: #EFF7FD;line-height: 38px;;position: relative;">就诊人
	  	<a><div style="    width: 80px;
		    position: absolute;
		    font-size: 16px;
		    right: 10px;
		    top: 17px;color: #7ad3fd;">就诊人管理</div></a>
	  </div>
	  <div class="weui-panel__bd">
	    <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
	      <div class="weui-media-box__bd">
	      	<img src="../../../../static/img/头像.png" style="width: 20px;display: inline-block;box-sizing: border-box;vertical-align: middle;"/>
	        <p class="weui-media-box__desc" style="display: inline-block;box-sizing: border-box;vertical-align: middle;color: black">【医保卡】 张三</p>
	      </div>
	    </a> 
	  </div>
      </div>-->
      <div class="hero-back">
        <div class="weui-cells weui-cells_form">
          <div
            class="weui-panel__hd"
            style="background-color: #EFF7FD;line-height: 38px;padding-top:0px;"
          >就诊信息</div>
          <div class="weui-cell">
            <div class="weui-cell__hd">
              <label class="weui-label">就诊人</label>
            </div>
            <div class="weui-cell__bd">
              <input
                class="weui-input"
                type="text"
                disabled="true"
                v-bind:value="hzxm"
                style="text-align: right;color: #999999"
              />
            </div>
          </div>
          <div class="weui-cell">
            <div class="weui-cell__hd">
              <label class="weui-label">证件号</label>
            </div>
            <div class="weui-cell__bd">
              <input
                class="weui-input"
                type="text"
                disabled="true"
                v-bind:value="zjhm"
                style="text-align: right;color: #999999"
              />
            </div>
          </div>
          <div class="weui-cell">
            <div class="weui-cell__hd">
              <label class="weui-label">预约卡号</label>
            </div>
            <div class="weui-cell__bd">
              <input
                class="weui-input"
                type="text"
                disabled="true"
                v-bind:value="bxh"
                style="text-align: right;color: #999999"
              />
            </div>
          </div>
          <div class="weui-cell">
            <div class="weui-cell__hd">
              <label class="weui-label">联系电话</label>
            </div>
            <div class="weui-cell__bd">
              <input
                class="weui-input"
                type="text"
                disabled="true"
                v-bind:value="lxdh"
                style="text-align: right;color: #999999"
              />
            </div>
          </div>
        </div>

        <div class="weui-row">
          <div class="weui-col-50">
            <a v-show="zfzt != 1 && yyzt == 0"
              href="javascript:;"
              class="weui-btn weui-btn_primary hero-button"
              @click="cancelAppoint(yyxh,yyzt,patid)"
            >取消挂号预约</a>
          </div>
          <div class="weui-col-50">
            <!--<div class="hero-button-left">
	  			
            </div>-->
            <a v-show="zfzt != 1 && yyzt == 0"
              href="javascript:;"
              class="weui-btn weui-btn_primary hero-button"
              @click="returnList()"
            >挂号结算</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import weui from "jquery-weui/dist/js/jquery-weui.min";
import model from "./model.js";
import moment from "moment";
export default {
  data() {
    this.model = model(this.axios);
    return {
      activeNames: [],
      ReDetails: [],
      ksmc: "",
      ghrq: "",
      mzlx: "",
      zje: "",
      jzdz: "",
      memo: "",
      yyzt: "",
      yyxh: "",
      yysd: "",
      hzxm: "",
      zjhm: "",
      bxh: "",
      lxdh: "",
      yyhx: "",
      zfzt: "",
      patid:"",
      pbxh:""
    };
  },
  props:['patid'],
  mounted() {
    this.showDetail();
  },
  filters: {
    dateForm: function(ele) {
      return moment(ele).format("YYYY-MM-DD");
    }
  },
  methods: {
    handleChange(val) {},
    showDetail() {
      let self = this;
      let data = this.$route.query;
      self.ReDetails = data;
      self.ksmc = this.$route.query.ksmc;
      self.ghrq = this.$route.query.ghrq;
      self.mzlx = this.$route.query.mzlx;
      self.zje = this.$route.query.zje;
      self.jzdz = this.$route.query.jzdz;
      self.memo = this.$route.query.memo;
      self.yyzt = this.$route.query.yyzt;
      self.yyxh = this.$route.query.yyxh;
      self.yysd = this.$route.query.yysd;
      self.hzxm = this.$route.query.hzxm;
      self.zjhm = this.$route.query.zjhm;
      self.bxh = this.$route.query.bxh;
      self.lxdh = this.$route.query.lxdh;
      self.yyhx = this.$route.query.yyhx;
      self.patid = this.$route.query.patid;
      self.pbxh = this.$route.query.pbxh;
      //console.log(data);
    },
    statusCheck(ele) {
      switch (ele) {
        case "0":
          return "录入";
          break;
        case "1":
          return "确认";
          break;
        case "2":
          return "作废";
          break;
        case "3":
          return "取消";
          break;
        case "8":
          return "爽约";
          break;
      }
    },
    returnList() {
      if (process.env.NODE_ENV == "dev") {
        window.location = "../../outpatientPay.html#/ghPay?pbxh="+this.pbxh+"&patid="+this.patid;
      } else if (process.env.NODE_ENV == "production") {
        window.location = "../../2ysechos/outpatientPay.html#/ghPay?pbxh="+this.pbxh+"&patid="+this.patid;
      }
    },
    cancelAppoint(yyxh,yyzt,patid) {
      //console.log(yyxh+" "+yyzt)
      let self = this;
      if (yyzt == "2"||yyzt=="3"||yyzt=="8") {
        $.alert("预约已取消", "温馨提示");
      } else {
        $.confirm(
          "您确定要取消吗？",
          "提示",
          function() {
            self.sub(yyxh,patid);
          },
          function() {
            return;
          }
        );
      }
    },
    sub(yyxh,patid){
        let self = this;
        let hzxm = localStorage.getItem("sec_patientName");
        let data = {
            yyxh:yyxh,
            patid:patid
        };
        this.model.cancelSubmit(data).then(function(res){
            if(res.data.code == '0'){
            $.modal({
            title: "提示",
            text: "取消成功",
            buttons: [
              {
                text: "返回预约列表",
                onClick: function() {
                  if (process.env.NODE_ENV == "dev") {
                    window.location = "../../reservation.html";
                  } else if (process.env.NODE_ENV == "production") {
                    window.location = "../../2ysechos/reservation.html";
                  }
                }
              }
            ]
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
.hero-button {
  background-color: #44c5e3;
  width: 170px;
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
.weui-label {
  color: #999999;
}
.weui-cells {
  margin-top: 10px;
  font-size: 15px;
}
.hero-back {
  background-color: #eff7fd;
}
.el-collapse-item__header {
  padding-left: 20px;
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
</style>