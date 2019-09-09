<template>
  <div>
    <header class="demos-header">
      <img style="width:100%;" src="../../../../static/images/QUS{5J8J(UI9V82QY4Q$@N8.jpg" />
    </header>
    <div class="weui-grids">
      <a href="javascript:;" class="weui-grid js_grid" @click="toMyMaintainList()">
        <div class="weui-grid__icon">
          <img src="../../../../static/doctorImg/报修单@2x.png" alt />
        </div>
        <p class="weui-grid__label">待维修列表</p>
      </a>
      <a href="javascript:;" class="weui-grid js_grid" @click="toMaintainRecord()">
        <div class="weui-grid__icon" >
          <img src="../../../../static/doctorImg/报修2.png" alt />
        </div>
        <p class="weui-grid__label">我的维修记录</p>
      </a>
      <a href="javascript:;" class="weui-grid js_grid" @click="toMaintainSatisfaction()">
        <div class="weui-grid__icon" >
          <img src="../../../../static/doctorImg/报修.png" alt />
        </div>
        <p class="weui-grid__label">维修满意度反馈</p>
      </a>
      <a href="javascript:;" class="weui-grid js_grid">
        <div class="weui-grid__icon">
          <img src="images/icon_nav_cell.png" alt />
        </div>
        <p class="weui-grid__label">List</p>
      </a>
      <a href="javascript:;" class="weui-grid js_grid">
        <div class="weui-grid__icon">
          <img src="images/icon_nav_cell.png" alt />
        </div>
        <p class="weui-grid__label">List</p>
      </a>
    </div>
  </div>
</template>

<script>
import model from "./model.js";
import CryptoJS from 'crypto-js';
export default {
  data() {
    this.model = model(this.axios);
    return {
      docName: ""
    };
  },
  mounted() {},
  created() {
    //this.getDocInfo();
  },
  methods: {
    getAesString(word, keyStr) {
      // 加密
      keyStr = keyStr ? keyStr : "expsofthero12345";
      let key = CryptoJS.enc.Utf8.parse(keyStr);
      let srcs = CryptoJS.enc.Utf8.parse(word);
      let encrypted = CryptoJS.AES.encrypt(srcs, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      });
      return encrypted.toString();
    },
    /*
     * 对加密之后的密文在页面上进行解密，以便用户进行修改
     * @param {String}   word  需要加密的密码
     * @param {String}   keyStr  对密码加密的秘钥
     * @return {String}   解密的明文
     * */
    getDAesString(word, keyStr) {
      // 解密
      keyStr = keyStr ? keyStr : "expsofthero12345";
      let key = CryptoJS.enc.Utf8.parse(keyStr);
      let decrypt = CryptoJS.AES.decrypt(word, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      });
      return CryptoJS.enc.Utf8.stringify(decrypt).toString();
    },
    getDocInfo() {
      let self = this;
      let code = this.GetQueryString("code");
      let guid = localStorage.getItem("m_user_rowGuid");
      let data = {
        code: code,
        rowGuid: guid
      };
      let to = localStorage.getItem("sec_acessToken");
      let re = localStorage.getItem("sec_refreshToken");
      if (
        to == null ||
        to == "" ||
        to == "null" ||
        this.getDAesString(to) == "null"
      ) {
        this.model.getDocInfo(data).then(function(res) {
          if (res.data.code == "0") {
            localStorage.setItem("sec_openId", res.data.data.openid);
            localStorage.setItem("sec_docName", res.data.data.userName);
            localStorage.setItem("sec_docGuid", res.data.data.rowGuid);
            localStorage.setItem(
              "sec_acessToken",
              self.getAesString(res.data.data.accessToken)
            );
            localStorage.setItem(
              "sec_refreshToken",
              self.getAesString(res.data.data.refreshToken)
            );
            self.docName = res.data.data.userName;
          } else if (res.data.data == "42001") {
            //token过期 刷新
            let data = {
              refresh_token: self.getDAesString(
                localStorage.getItem("sec_refreshToken")
              )
            };
            self.model.refreshToken(data).then(function(res) {
              if (res.data.code == 0) {
                localStorage.setItem(
                  "sec_acessToken",
                  self.getAesString(res.data.data.access_token)
                );
                localStorage.setItem(
                  "sec_refreshToken",
                  self.getAesString(res.data.data.refresh_token)
                );
              } else {
                $.toptip(res.data.msg, "error");
              }
            });
          } else {
            $.toptip(res.data.msg, "error");
          }
        });
      } else {
        let data = {
          openid: localStorage.getItem("sec_openId"),
          access_token: this.getDAesString(to),
          refresh_token: this.getDAesString(re),
          rowGuid: localStorage.getItem("m_user_rowGuid")
        };
        this.model.getDocByToken(data).then(function(res) {
          if (res.data.code == "0") {
            localStorage.setItem("sec_openId", res.data.data.openid);
            localStorage.setItem("sec_docName", res.data.data.userName);
            localStorage.setItem("sec_patientGuid", res.data.data.rowGuid);
            localStorage.setItem(
              "sec_acessToken",
              self.getAesString(res.data.data.accessToken)
            );
            localStorage.setItem(
              "sec_refreshToken",
              self.getAesString(res.data.data.refreshToken)
            );
            self.docName = res.data.data.userName;
          } else if (res.data.data == "42001") {
            //token过期 刷新
            let data = {
              refresh_token: self.getDAesString(
                localStorage.getItem("sec_refreshToken")
              )
            };
            self.model.refreshToken(data).then(function(res) {
              if (res.data.code == 0) {
                localStorage.setItem(
                  "sec_acessToken",
                  self.getAesString(res.data.data.access_token)
                );
                localStorage.setItem(
                  "sec_refreshToken",
                  self.getAesString(res.data.data.refresh_token)
                );
              } else {
                $.toptip(res.data.msg, "error");
              }
            });
          } else {
            $.toptip(res.data.msg, "error");
          }
        });
      }
    },
    //获取url中的参数
    GetQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg); //search,查询？后面的参数，并匹配正则
      if (r != null) return decodeURI(r[2]);
      return null;
    },
    toMyMaintainList(){
      this.$router.push('/myMaintainList');
    },
    toMaintainRecord(){
      this.$router.push("/maintainRecordList");
    },
    toMaintainSatisfaction(){
      this.$router.push("/maintainSatisfactionList");
    }
  }
};
</script>