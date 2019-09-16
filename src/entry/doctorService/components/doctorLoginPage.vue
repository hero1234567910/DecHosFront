<template>
  <div class="doctorLogin">
    <el-form
      :model="loginForm"
      :rules="fieldRules"
      ref="loginForm"
      label-position="left"
      label-width="0px"
      class="demo-ruleForm login-container"
    >
      <h3 class="title">医生登录</h3>
      <el-form-item prop="loginId">
        <el-input type="text" v-model="loginForm.loginId" auto-complete="off" placeholder="登录名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <!-- <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox> -->
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:46%;" @click.native.prevent="Reset">重 置</el-button>
        <el-button
          type="primary"
          style="width:46%;"
          @click.native.prevent="Login"
          :loading="logining"
        >登 录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import model from "./model.js";
import CryptoJS from 'crypto-js';
export default {
  data() {
    this.model = model(this.axios);

    return {
      logining: false,
      loginForm: {
        loginId: "",
        password: ""
      },
      fieldRules: {
        loginId: [{ required: true, message: "请输入登录名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      checked: true
    };
  },
  mounted() {},
  created() {
      //this.getDocInfo();
  },
  methods: {
    Login() {
      let self = this;
      let userInfo = {
        loginId: this.loginForm.loginId,
        password: this.loginForm.password
      };
      let data = userInfo;
      this.model.Login(data).then(function(res) {
        if (res.data.code == "0") {
          //console.log(res.data.deptName);
          window.localStorage.setItem("m_token", res.data.data.token);
          window.localStorage.setItem(
            "m_user_rowGuid",
            res.data.data.userRowGuid
          );
          window.localStorage.setItem(
            "m_user_userName",
            res.data.data.userName
          );
          window.localStorage.setItem(
            "m_mobile",
            res.data.data.mobile
          );
          window.localStorage.setItem(
            "m_deptGuid",
            JSON.stringify(res.data.deptGuid)
          );
          window.localStorage.setItem(
            "m_deptName",
            res.data.data.deptName
          );
          window.localStorage.setItem(
            "m_loginId",
            res.data.data.loginId
          );
          window.localStorage.setItem(
            "m_sex",
            res.data.data.sex
          );
          self.$message({
            message: "登录成功",
            type: "success"
          });
          self.$router.push("/doctorMenu");
        } else {
          self.$message.error(res.data.msg);
        }
      });
    },
    Reset() {
      this.$refs.loginForm.resetFields();
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
    GetQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg); //search,查询？后面的参数，并匹配正则
      if (r != null) return decodeURI(r[2]);
      return null;
    }
  }
}
</script>
<style scoped>
.login-container {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 70%;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.remember {
  margin: 0px 0px 35px 0px;
}
.title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
</style>

