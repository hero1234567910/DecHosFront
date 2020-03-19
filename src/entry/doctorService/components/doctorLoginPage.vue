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
      	<div>
		        <div id="captcha1">
		            <p id="wait1" class="show">正在加载验证码......</p>
		        </div>
		    </div>
		    <br><p id="notice1" class="hide">请先完成验证</p>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:46%;" @click.native.prevent="Reset">重 置</el-button>
        <el-button 
          type="primary"
          style="width:46%;"
          :loading="logining"
          @click.native.prevent="Login('loginForm')"
        >登 录</el-button>
      </el-form-item>
    </el-form>
    <!--@click.native.prevent="Login"-->
    
  </div>
</template>
<script>
import model from "./model.js";
import CryptoJS from 'crypto-js';
import gtjs from '../../../../static/lib/geetest/gt.js'
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
      checked: true,
      checkCode:'',
      msg: '',
      text: '向右滑',
      captchaObj:{}
    };
  },
  mounted() {},
  created() {
    let self = this
    if(localStorage.getItem('m_doctorLoginFlag') == 'true'){
        self.$message({
        message: "登录成功",
        type: "success"
      });
    self.$router.push("/doctorMenu");
    }
  	
    this.getId();
  },
  methods: {
		getId() {
			let self = this;
			var handler1 = function (captchaObj) {
				self.captchaObj = captchaObj;
        // 将验证码加到id为captcha的元素里，同时会有三个input的值用于表单提交
        captchaObj.appendTo("#captcha1");
        captchaObj.onReady(function () {
            $("#wait1").hide();
        });
    };
		  this.model.getId().then(function(res){
					initGeetest({
                gt: res.data.gt,
                challenge: res.data.challenge,
                new_captcha: res.data.new_captcha, // 用于宕机时表示是新验证码的宕机
                offline: !res.data.success, // 表示用户后台检测极验服务器是否宕机，一般不需要关注
                product: "popup", // 产品形式，包括：float，popup
                width: "100%"
                // 更多配置参数请参见：http://www.geetest.com/install/sections/idx-client-sdk.html#config
            }, handler1);
		  })
		},
    Login(f) {
      let self = this;
      this.$refs[f].validate((valid)=>{
      	if(valid){
      		let userInfo = {
		        loginId: this.loginForm.loginId,
		        password: this.loginForm.password
		      };
		      var result = this.captchaObj.getValidate();
			    if (!result) {
			        $("#notice1").show();
			        setTimeout(function () {
			            $("#notice1").hide();
			        }, 2000);
			        return;
			    }
		      let data = userInfo;
		      this.model.Login(data).then(function(res) {
		        if (res.data.code == "0") {
		          //console.log(res.data.deptName);
		          window.sessionStorage.setItem("m_token", res.data.data.token);
		          window.sessionStorage.setItem(
		            "m_user_rowGuid",
		            res.data.data.userRowGuid
		          );
//		          
		          window.sessionStorage.setItem(
		            "m_user_userName",
		            res.data.data.userName
		          );
		          window.sessionStorage.setItem(
		            "m_mobile",
		            res.data.data.mobile
		          );
		          window.sessionStorage.setItem(
		            "m_deptGuid",
		            JSON.stringify(res.data.deptGuid)
		          );
		          window.sessionStorage.setItem(
		            "m_deptName",
		            res.data.data.deptName
		          );
		          window.sessionStorage.setItem(
		            "m_loginId",
		            res.data.data.loginId
		          );
		          window.sessionStorage.setItem(
		            "m_sex",
		            res.data.data.sex
		          );
		          localStorage.setItem('m_doctorLoginFlag','true')
		          localStorage.setItem('m_user_rowGuid',res.data.data.userRowGuid)
		          localStorage.setItem('m_user_userName',res.data.data.userName)
		          localStorage.setItem('m_loginId',res.data.data.loginId)
		          
		          
		          self.$message({
		            message: "登录成功",
		            type: "success"
		          });
		          self.$router.push("/doctorMenu");
		        } else {
		          self.$message.error(res.data.msg);
		        }
		      });
      	}else{
      		return;
      	}
      })
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
	/*.slide-verify{
		width: 100% !important;
	}*/
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
#captcha1 {
    width: 100%;
    display: inline-block;
}
.show {
    display: block;
}
.hide {
    display: none;
}
#notice1 {
    color: red;
}
label {
    vertical-align: top;
    display: inline-block;
    width: 80px;
    text-align: right;
}
#wait1 {
    text-align: left;
    color: #666;
    margin: 0;
}
</style>

