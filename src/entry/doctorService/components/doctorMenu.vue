<template>
  <div>
    <header class="demos-header">
      <img style="width:100%;" src="../../../../static/images/QUS{5J8J(UI9V82QY4Q$@N8.jpg" />
    </header>
    <div class="weui-grids">
      <a href="javascript:;" class="weui-grid js_grid" @click="toMyRepair()">
        <div class="weui-grid__icon">
          <img src="../../../../static/doctorImg/报修单@2x.png" alt />
        </div>
        <p class="weui-grid__label">我的报修</p>
      </a>
      <a href="javascript:;" class="weui-grid js_grid" @click="toRepairOnline()">
        <div class="weui-grid__icon">
          <img src="../../../../static/doctorImg/报修2.png" alt />
        </div>
        <p class="weui-grid__label">在线报修</p>
      </a>
      <a href="javascript:;" class="weui-grid js_grid" @click="toRepairSatisfaction()">
        <el-badge :value="satCounts" class="item">
          <div class="weui-grid__icon">
            <img src="../../../../static/doctorImg/报修.png" alt />
          </div>
        </el-badge>
        <p class="weui-grid__label">报修满意度评价</p>
      </a>
      <a href="javascript:;" class="weui-grid js_grid" @click="toPersonCenter()">
        <div class="weui-grid__icon">
          <img src="../../../../static/doctorImg/个人中心 选中.png" alt />
        </div>
        <p class="weui-grid__label">个人中心</p>
      </a>
      <a href="javascript:;" class="weui-grid js_grid" @click="toTX()">
        <div class="weui-grid__icon">
          <img src="../../../../static/img/通讯录.png" alt />
        </div>
        <p class="weui-grid__label">院内通讯录</p>
      </a>
      <a href="javascript:;" class="weui-grid js_grid" @click="showImg()">
        <div class="weui-grid__icon">
          <img src="images/icon_nav_cell.png" alt />
        </div>
        <p class="weui-grid__label">我的推广</p>
      </a>
    </div>
    
    <el-dialog title="二维码详情" :visible.sync="isShow" width="240px" :before-close="handleClose">
        <div id="qrCode" ref="qrCodeDiv">
        	<img :src="icon" width="100%"/> 
        </div>
     </el-dialog>
    
  </div>
</template>

<script>
import model from "./model.js";
import CryptoJS from "crypto-js";
import QRCode from 'qrcodejs2';
export default {
  data() {
    this.model = model(this.axios);
    return {
      docName: "",
      satCounts: "",
      isShow:false,
      icon:''
    };
  },
  mounted() {
//  this.countSats();
  },
  created() {
    //this.getDocInfo();
  },
  methods: {
  	//展示二维码
  	showImg(){
  		this.$nextTick(function(){
  			let rg = sessionStorage.getItem('m_user_rowGuid');
  			let un = sessionStorage.getItem('m_user_userName');
  			let loginId = sessionStorage.getItem('m_loginId');
  			let self = this;
  			let data = {
  				"popuPersonGuid":rg
  			}
  			
				this.model.getUserPic(data).then((res)=>{
					console.log(res.data.data)
					if(res.data.code == 0){
						self.$nextTick(function(){
							self.icon = res.data.data;
							self.isShow = true;
						})
						
					}else{
						$.toptip(res.data.msg, "error");
					}
					
					
					
				})
				
				
//				self.model.getImg('gQET7zwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAySjgzQndlZ3RjVDExeGg5NHh1Y3cAAgRRfFxeAwQAjScA').then((r)=>{
//							console.log(r)
//				})
  			
//			new QRCode(this.$refs.qrCodeDiv, {
//        text: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx24cc308d188d08e2&redirect_uri=https%3a%2f%2fp.zjgwsjk.com%2f2ysechos%2findex.html?rg='+rg+'&un='+un+'&loginId='+loginId+'%23%2f&response_type=code&scope=snsapi_userinfo&state=STATE&connect_redirect=1#wechat_redirect',
//        width: 200,
//        height: 200,
//        colorDark: "#333333", //二维码颜色
//        colorLight: "#ffffff", //二维码背景色
//        correctLevel: QRCode.CorrectLevel.L//容错率，L/M/H
        })
  	},
  	handleClose(done){
  		$('#qrCode').html('');
  		done();
  	},
  	
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
      let guid = sessionStorage.getItem("m_user_rowGuid");
      let data = {
        code: code,
        rowGuid: guid
      };
      let to = sessionStorage.getItem("sec_acessToken");
      let re = sessionStorage.getItem("sec_refreshToken");
      if (
        to == null ||
        to == "" ||
        to == "null" ||
        this.getDAesString(to) == "null"
      ) {
        this.model.getDocInfo(data).then(function(res) {
          if (res.data.code == "0") {
            sessionStorage.setItem("sec_openId", res.data.data.openid);
            sessionStorage.setItem("sec_docName", res.data.data.userName);
            sessionStorage.setItem("sec_docGuid", res.data.data.rowGuid);
            sessionStorage.setItem(
              "sec_acessToken",
              self.getAesString(res.data.data.accessToken)
            );
            sessionStorage.setItem(
              "sec_refreshToken",
              self.getAesString(res.data.data.refreshToken)
            );
            self.docName = res.data.data.userName;
          } else if (res.data.data == "42001") {
            //token过期 刷新
            let data = {
              refresh_token: self.getDAesString(
                sessionStorage.getItem("sec_refreshToken")
              )
            };
            self.model.refreshToken(data).then(function(res) {
              if (res.data.code == 0) {
                sessionStorage.setItem(
                  "sec_acessToken",
                  self.getAesString(res.data.data.access_token)
                );
                sessionStorage.setItem(
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
          openid: sessionStorage.getItem("sec_openId"),
          access_token: this.getDAesString(to),
          refresh_token: this.getDAesString(re),
          rowGuid: sessionStorage.getItem("m_user_rowGuid")
        };
        this.model.getDocByToken(data).then(function(res) {
          if (res.data.code == "0") {
            sessionStorage.setItem("sec_openId", res.data.data.openid);
            sessionStorage.setItem("sec_docName", res.data.data.userName);
            sessionStorage.setItem("sec_patientGuid", res.data.data.rowGuid);
            sessionStorage.setItem(
              "sec_acessToken",
              self.getAesString(res.data.data.accessToken)
            );
            sessionStorage.setItem(
              "sec_refreshToken",
              self.getAesString(res.data.data.refreshToken)
            );
            self.docName = res.data.data.userName;
          } else if (res.data.data == "42001") {
            //token过期 刷新
            let data = {
              refresh_token: self.getDAesString(
                sessionStorage.getItem("sec_refreshToken")
              )
            };
            self.model.refreshToken(data).then(function(res) {
              if (res.data.code == 0) {
                sessionStorage.setItem(
                  "sec_acessToken",
                  self.getAesString(res.data.data.access_token)
                );
                sessionStorage.setItem(
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
    toMyRepair() {
      this.$router.push("/myRepairList");
    },
    toRepairOnline() {
      this.$router.push("/repairOnline");
    },
    toRepairSatisfaction() {
      this.$router.push("/repairSatisfactionList");
    },
    toTX(){
    	this.$router.push("/txl")
    },
    toPersonCenter(){
      this.$router.push("/personCenter");
    },
    countSats() {
      let self = this;
      let val = sessionStorage.getItem("m_user_rowGuid");
      let data = val;
      this.model.countSats(data).then(function(res) {
        if (res.data.code == 0) {
          self.satCounts = res.data.data;
          //console.log(res.data.data);
        } else {
          $.toptip(res.data.msg, "error");
        }
      });
    }
  }
};
</script>

<style scoped>
.item {
  margin-top: 5px;
  margin-right: 40px;
  margin-left: 37%;
}
</style>