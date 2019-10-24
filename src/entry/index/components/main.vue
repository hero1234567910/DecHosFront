<template>
  <div style="height: 100%;background-color: #FFFFFF;">
    <div class="weui-tab">
      <div class="weui-tab__bd" style="height: 92%;position: absolute;width: 100%;">
        <div
          id="tab1"
          class="weui-tab__bd-item weui-tab__bd-item--active weui-iframe"
          style="overflow: auto;height: calc(100vh - 53px);"
        >
          <home></home>
        </div>
        <div
          id="tab2"
          class="weui-tab__bd-item weui-iframe"
          style="overflow: auto;height: calc(100vh - 53px);"
        >
          <mycenter :patientName="patientName"></mycenter>
        </div>
        <div
          id="tab3"
          class="weui-tab__bd-item weui-iframe"
          style="overflow: auto;height: calc(100vh - 53px);"
        >
          <inhos></inhos>
        </div>
      </div>

      <div class="weui-tabbar">
        <a href="#tab1" class="weui-tabbar__item weui-bar__item--on" id="ind">
          <!--<span class="weui-badge" style="position: absolute;top: -.4em;right: 1em;">8</span>-->
          <div class="weui-tabbar__icon">
            <img src="../../../../static/img/医疗.png" alt />
          </div>
          <p class="weui-tabbar__label">门诊与体检服务</p>
        </a>
        <a href="#tab3" class="weui-tabbar__item" id="inh">
          <!--<span class="weui-badge" style="position: absolute;top: -.4em;right: 1em;">8</span>-->
          <div class="weui-tabbar__icon">
            <img src="../../../../static/img/住院.png" alt />
          </div>
          <p class="weui-tabbar__label">在院服务</p>
        </a>
        <a href="#tab2" class="weui-tabbar__item" id="cen">
          <div class="weui-tabbar__icon">
            <img src="../../../../static/img/icon_nav_cell.png" alt />
          </div>
          <p class="weui-tabbar__label">个人中心</p>
        </a>
      </div>
    </div>
  </div>
</template>


<script>
import weui from "jquery-weui/dist/js/jquery-weui.min";
import home from "./home.vue";
import mycenter from "./mycenter";
import inhos from "./inhos";
import userBinding from "./userBinding";
import model from "./model.js";
import CryptoJS from "crypto-js";
export default {
  components: { home, mycenter, userBinding, inhos },
  data() {
    this.model = model(this.axios);
    return {
      patientName: ""
    };
  },
  mounted() {
    //  	this.getUserInfo();
  },
  created() {
    this.getUserInfo();
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
    getUserInfo() {
      let self = this;
      localStorage.removeItem("sec_yb");
      let data = this.GetQueryString("code");
      var code = this.GetQueryString("code");
      let to = localStorage.getItem("sec_acessToken");
      let re = localStorage.getItem("sec_refreshToken");
      if (
        to == null ||
        to == "" ||
        to == "null" ||
        this.getDAesString(to) == "null"
      ) {
        this.model.getUserInfo(data).then(function(res) {
          if (res.data.code == "0") {
            localStorage.setItem("sec_openId", res.data.data.openid);
            localStorage.setItem("sec_patientName", res.data.data.patientName);
            localStorage.setItem("sec_headImg", res.data.data.headImgUrl);
            localStorage.setItem("sec_sex", res.data.data.patientSex);
            localStorage.setItem("sec_birth", res.data.data.patientBirth);
            localStorage.setItem(
              "sec_patientIdcard",
              res.data.data.patientIdcard
            );
            localStorage.setItem("sec_patientGuid", res.data.data.rowGuid);
            localStorage.setItem("sec_cardno", res.data.data.patientIdcard);
            localStorage.setItem("sec_lxdh", res.data.data.patientMobile);
            localStorage.setItem(
              "sec_acessToken",
              self.getAesString(res.data.data.accessToken)
            );
            localStorage.setItem(
              "sec_refreshToken",
              self.getAesString(res.data.data.refreshToken)
            );
            self.patientName = res.data.data.patientName;
          } else if (res.data.data == "42001") {
            //token过期 刷新
            let data = {
              refresh_token: self.getDAesString(
                localStorage.getItem("sec_refreshToken")
              ),
              code:code
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
          refresh_token: this.getDAesString(re)
        };
        this.model.getUserByToken(data).then(function(res) {
          if (res.data.code == "0") {
            localStorage.setItem("sec_openId", res.data.data.openid);
            localStorage.setItem("sec_patientName", res.data.data.patientName);
            localStorage.setItem("sec_headImg", res.data.data.headImgUrl);
            localStorage.setItem("sec_sex", res.data.data.patientSex);
            localStorage.setItem("sec_birth", res.data.data.patientBirth);
            localStorage.setItem(
              "sec_patientIdcard",
              res.data.data.patientIdcard
            );
            localStorage.setItem("sec_patientGuid", res.data.data.rowGuid);
            localStorage.setItem("sec_cardno", res.data.data.patientIdcard);
            localStorage.setItem("sec_lxdh", res.data.data.patientMobile);
            localStorage.setItem(
              "sec_acessToken",
              self.getAesString(res.data.data.accessToken)
            );
            localStorage.setItem(
              "sec_refreshToken",
              self.getAesString(res.data.data.refreshToken)
            );
            self.patientName = res.data.data.patientName;
          } else if (res.data.data == "42001") {
            //token过期 刷新
            let data = {
              refresh_token: self.getDAesString(
                localStorage.getItem("sec_refreshToken")
              ),
              code:code
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
    }
  }
};
</script>

<style scoped>
.hero-mButton {
  position: absolute;
  top: 77px;
  width: 35px;
}
.hero-item-img {
  width: 100%;
  height: 100%;
  position: relative;
}
.weui-flex {
  height: 100px;
}
.hero-panel3 {
  margin-left: 13px;
  margin-right: 13px;
  width: calc(100% - 26px);
  height: 100px;
}
.hero-col-dec {
  height: 20px;
  line-height: 20px;
  width: 100%;
  font-size: 6px;
  color: #b2b2b2;
  text-align: center;
}
.hero-col-img {
  height: 55px;
  width: 50px;
  /*margin-left: 5px;*/
  margin: 0 auto;
}
.weui-row .weui-col-25 {
  height: 100%;
}
.weui-row .weui-col-33 {
  width: calc((100% - 8px * 2) / 3);
}
.weui-col-33 {
  height: 100%;
}
.weui-row {
  height: 70px;
}
.hero-panel2_header {
  width: 100%;
  height: 25px;
  line-height: 25px;
  font-size: 15px;
  padding-left: 10px;
  font-weight: 500;
}
.hero-panel2 {
  border: 0px solid #e6e6ea;
  border-radius: 5px;
  background-color: white;
  height: 100%;
  width: 100%;
  box-shadow: 1px 2px 6px #888888;
}
.hero-panel {
  height: 190px;
  width: 100%;
  position: absolute;
  top: 53px;
  padding-left: 13px;
  padding-right: 13px;
  width: calc(100% - 26px);
  max-width: 400px;
}
.hero-banner {
  height: 100px;
  width: 100%;
}
.hero-search {
  position: absolute;
  width: 100%;
  top: 5px;
}
.weui-search-bar:before {
  border-top: 0px solid #d7d6dc;
}
.weui-search-bar:after {
  border-bottom: 0px solid #d7d6dc;
}
.weui-search-bar {
  position: relative;
  padding: 8px 20px;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  box-sizing: border-box;
  background-color: transparent;
  -webkit-text-size-adjust: 100%;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
/*.weui-search-bar__form {
		background-color: transparent;
	}
	.weui-search-bar__box{
		background-color: #5dbff1;
		    z-index: 3;
	}
	.weui-icon-search{
		color: #f9f9f9
	}
	 input::-webkit-input-placeholder {
        color: #f9f9f9;
     }*/
.weui-search-bar__form {
  border: 0px solid #e6e6ea;
  border-radius: 10px;
}
.weui-search-bar__cancel-btn {
  color: rgba(255, 255, 255, 0.95);
}
</style>
