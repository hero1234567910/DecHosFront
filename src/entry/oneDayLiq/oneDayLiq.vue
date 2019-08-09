<template>
  <div style="height: 100%;background-color: #EFF7FD;">
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>


<script>
import weui from "jquery-weui/dist/js/jquery-weui.min";
import oneDayLiq from "./components/oneDayLiqList";
import model from './model.js'
import Jzlsh from './jzlsh.vue'
export default {
  components: { oneDayLiq },
  data() {
    this.model = model(this.axios);
    return {
      zjh: localStorage.getItem("sec_patientIdcard"),
      hzxm: localStorage.getItem("sec_patientName"),
      patientId: "",
      blh: "",
      jzlsh:''
    };
  },
  created(){
    this.getInfo();
  },
  mounted() {
    
  },
  methods: {
    //获取url中的参数
    GetQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg); //search,查询？后面的参数，并匹配正则
      if (r != null) return decodeURI(r[2]);
      return null;
    },
    getInfo() {
      let self = this;
      if (self.zjh == null || self.zjh == "") {
        $.alert("您并未绑定身份证，清先绑定", "提示", function() {
          if (process.env.NODE_ENV == "dev") {
            window.location = "../index.html";
          } else if (process.env.NODE_ENV == "production") {
            window.location = "../sechos/index.html";
          }
        });
      }

      let data = {
        hzxm: this.hzxm,
        zjh: this.zjh,
        action: "zy",
        openid: localStorage.getItem("sec_openId")
      };

      this.model.getInfo(data).then(function(res) {
        if (res.data.code == "0") {
          //住院缴费模块 就取病历号最大的
          let arr = [];
          let hosArray = res.data.data;
          for (var i = 0; i < hosArray.length; i++) {
            let blh = hosArray[i].blh;
            arr.push(parseInt(blh));
          }
          arr.sort().reverse();
          let val = arr[0];
          for (var i = 0; i < hosArray.length; i++) {
            if (val == hosArray[i].blh) {
              self.patientId = hosArray[i].patid;
              self.blh = hosArray[i].blh;
              Jzlsh.patid = self.patientId;
              //console.log(Jzlsh.patid);
              self.$router.push('/?patid='+Jzlsh.patid);
            }
          }
        } else {
          $.alert("未查询到您的住院信息", "提示", function() {});
        }
      });
    },
    
  }
};
</script>

<style scoped>
</style>
