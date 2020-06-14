<template>
  <div style="height: 100%;">
    <div class="hero-banner">
      <img src="../../../../static/images/bj1.png" class="hero-img" width="100%" />
    </div>
    <div
      class="hero-pane"
      v-if="show"
      style="position: relative;top: -71px;margin-left: 10px;margin-right: 10px;"
    >
      <div class="hero-panel2">
        <div style="margin-left: 5px;margin-right: 5px;width: calc(100% - 10px);">
          <div class="weui-row">
            <div class="weui-col-33">
              <img
                src="../../../../static/img/用户空白头像.png"
                style="margin-left: 10px;margin-top: 30px;width: 59%;margin-left: 119%;"
              />
            </div>
          </div>
          <div class="weui-msg__text-area" style="margin-top: 22px;">
            <p
              class="weui-msg__desc"
              style="margin-left: 24%;color:#000000;margin-top: 13%;"
            >您还没有绑定身份证信息</p>
          </div>
          <a
            href="javascript:;"
            class="weui-btn weui-btn_plain-primary"
            v-on:click="toSwitch()"
          >立即办理</a>
        </div>
      </div>
    </div>

    <div class="hero-panew" v-show="!show">
      <div class="hero-panel2">
        <div style="margin-left: 5px;margin-right: 5px;width: calc(100% - 10px);padding-top: 20px;">
          <div class="weui-panel weui-panel_access">
            <div class="weui-panel__bd">
              <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                <div class="weui-media-box__hd">
                  <img class="weui-media-box__thumb" :src="headImg" />
                </div>
                <div class="weui-media-box__bd">
                  <h4 class="weui-media-box__title" style="font-weight:600;margin-top:15px"></h4>
                  <h4
                    class="weui-media-box__title"
                    style="font-weight:600;margin-top:10px;width:50%"
                  >{{patientName}}</h4>
                  <h4 class="weui-media-box__title"  style="font-size:15px;margin-top:4px">门诊病历号:{{blh}}</h4>
                  <!-- <h4 class="weui-media-box__title" style="font-size:15px;margin-top:8px">{{sex}} / {{birth}}</h4> -->
                  <h4
                    class="weui-media-box__title"
                    style="font-size:15px;margin-top:8px"
                  >证件号:{{patientIdCard}}</h4>
                </div>
                <div class="weui-media-box__hd1">
                  <img class="weui-media-box__thumb1" src="../../../../static/images/医院-2.png" />
                  <!-- <h4 style="font-size: 8px;position: absolute;margin-left: -19%;margin-top: 3%;" >点击出示二维码</h4> -->
                </div>
              </a>
              
              <div style="height: 50px;text-align: center;">
								<el-button id="zf" @click="chooseWay('zf')">自费</el-button>
								<el-button id="cb" @click="chooseWay('cb')">参保</el-button>	
							</div>
              
            </div>
            
            
          </div>
          <div class="weui-panel weui-panel_access" style="height:20px;margin-top: 0px;">
            <div class="weui-panel__bd">
              <a
                href="javascript:void(0);"
                class="weui-media-box weui-media-box_appmsg"
                style="margin-top: 0px;"
                v-on:click="toSwitch()"
              >
                <img
                  style="margin-left: 30%;width: 3%;height: auto;"
                  class="weui-media-box__thumb"
                  src="../../../../static/img/切换.png"
                />

                <div class="weui-media-box__bd">
                  <h4
                    class="weui-media-box__title"
                    style="width: 50%;font-weight:400;margin-top:0px;font-size:10px;margin-bottom: 0px;text-align: center;color: cornflowerblue;text-decoration:underline"
                  >点击切换就诊人</h4>
                </div>
                <div class="weui-media-box__hd1" style="display: none;">
                  <img
                    style="position: fixed;z-index: 19;width: 112px;height: 110px;margin-left: -92px;margin-top: -88px;"
                    class="weui-media-box__thumb1"
                    src="../../../../static/img/电子就诊卡.png"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="position: relative;top: -66px;">
      <a href="javascript:;" v-on:click="toReserv()">
        <div style="margin-left: 13px;margin-right: 13px;width: calc(100% - 26px);">
          <div style="margin-left: 20px;margin-right: 20px;height: 70px;">
            <div class="weui-cells-wzl">
              <a class="weui-cell weui-cell_access-wzl" href="javascript:;">
                <div class="weui-cell__hd">
                  <img src="../../../../static/img/我的预约.png" />
                </div>
                <div class="weui-cell__bd">
                  <p style="margin-bottom: -10px;">我的预约</p>
                  <img style="width:45%" src="../../../../static/images/圆角矩形-1.png" />
                </div>
                <div class="weui-cell__ft"></div>
              </a>
            </div>
          </div>
        </div>
      </a>
      <div style="height: 4px;width: 100%;margin-top: 0px;background-color: #eff7fd;" ></div>

      <!-- <div style="margin-top: 0px;margin-left: 13px;margin-right: 13px;width: calc(100% - 26px);" v-if="showFlag">
        <div style="margin-left: 20px;margin-right: 20px;height: 70px;">
          <div class="weui-cells-wzl">
            <a class="weui-cell weui-cell_access-wzl" href="javascript:;" v-on:click="patientManage()">
              <div class="weui-cell__hd">
                <img src="../../../../static/img/就诊人管理.png" />
              </div>
              <div class="weui-cell__bd">
                <p style="margin-bottom: -10px;">就诊人管理</p>
                <img style="width:45%" src="../../../../static/images/圆角矩形-2.png" />
              </div>
              <div class="weui-cell__ft"></div>
            </a>
          </div>
        </div>
      </div>
      <div style="height: 4px;width: 100%;margin-top: 0px;background-color: #eff7fd;" v-if="showFlag"></div> -->

      <div style="margin-top: 0px;margin-left: 13px;margin-right: 13px;width: calc(100% - 26px);">
        <div style="margin-left: 20px;margin-right: 20px;height: 70px;">
          <div class="weui-cells-wzl">
            <a class="weui-cell weui-cell_access-wzl" href="javascript:;" v-on:click="toWait()">
              <div class="weui-cell__hd">
                <img src="../../../../static/img/报告.png" />
              </div>
              <div class="weui-cell__bd">
                <p style="margin-bottom: -10px;">门诊候诊信息</p>
                <img style="width:45%" src="../../../../static/images/圆角矩形-2.png" />
              </div>
              <div class="weui-cell__ft"></div>
            </a>
          </div>
        </div>
      </div>
      <div style="height: 4px;width: 100%;margin-top: 0px;background-color: #eff7fd;"></div>

      <div style="margin-top: 0px;margin-left: 13px;margin-right: 13px;width: calc(100% - 26px);">
        <div style="margin-left: 20px;margin-right: 20px;height: 70px;">
          <div class="weui-cells-wzl">
            <a
              class="weui-cell weui-cell_access-wzl"
              href="javascript:;"
              v-on:click="toPayRecord()"
            >
              <div class="weui-cell__hd">
                <img src="../../../../static/images/缴费记录.png" />
              </div>
              <div class="weui-cell__bd">
                <p style="margin-bottom: -10px;">门诊缴费记录</p>
                <img style="width:45%" src="../../../../static/images/圆角矩形-3.png" />
              </div>
              <div class="weui-cell__ft"></div>
            </a>
          </div>
        </div>
      </div>
      <div style="height: 4px;width: 100%;margin-top: 0px;background-color: #eff7fd;"></div>

      <div style="margin-top: 0px;margin-left: 13px;margin-right: 13px;width: calc(100% - 26px);">
        <div style="margin-left: 20px;margin-right: 20px;height: 70px;">
          <div class="weui-cells-wzl">
            <a class="weui-cell weui-cell_access-wzl" href="javascript:;" v-on:click="toTJRecord()">
              <div class="weui-cell__hd">
                <img src="../../../../static/img/体检标.png" />
              </div>
              <div class="weui-cell__bd">
                <p style="margin-bottom: -10px;">体检报告查询</p>
                <img style="width:45%" src="../../../../static/images/体检1.png" />
              </div>
              <div class="weui-cell__ft"></div>
            </a>
          </div>
        </div>
      </div>
      <div style="height: 4px;width: 100%;margin-top: 0px;background-color: #eff7fd;"></div>

      <div style="margin-top: 0px;margin-left: 13px;margin-right: 13px;width: calc(100% - 26px);">
        <div style="margin-left: 20px;margin-right: 20px;height: 70px;">
          <div class="weui-cells-wzl">
            <a class="weui-cell weui-cell_access-wzl" href="javascript:;" v-on:click="toJCRecord()">
              <div class="weui-cell__hd">
                <img src="../../../../static/img/报告标.png" />
              </div>
              <div class="weui-cell__bd">
                <p style="margin-bottom: -10px;">检查报告查询</p>
                <img style="width:45%" src="../../../../static/images/报告1.png" />
              </div>
              <div class="weui-cell__ft"></div>
            </a>
          </div>
        </div>
      </div>
      <div style="height: 4px;width: 100%;margin-top: 0px;background-color: #eff7fd;"></div>
    </div>
  </div>
</template>


<script>
import weui from "jquery-weui/dist/js/jquery-weui.min";
import model from "./model.js";
import CryptoJS from "crypto-js";
export default {
  data() {
    this.model = model(this.axios);
    return {
      show: true,
      headImg: "",
      birth: "",
      sex: "",
      patientIdCard: "",
      zjh: "",
      hzxm: "",
      blh: "",
      showFlag:localStorage.getItem('sec_patientIdcard')!=null,
      zfblh:'',
      cbblh:''
    };
  },
  props: ["patientName"],
  watch: {
    patientName(val, oldVal) {
      //普通的watch监听
      console.log(val);
      if (val == null || val == "" || val == "null") {
      } else {
        let img = localStorage.getItem("sec_headImg");
        let birth = localStorage.getItem("sec_birth");
        let sex = localStorage.getItem("sec_sex");
        let patientIdCard = localStorage.getItem("sec_patientIdcard");
        this.headImg = img;
        this.birth = birth;
        this.sex = sex;
        this.show = false;
        this.patientIdCard = patientIdCard;
      }
    }
  },
  mounted() {
    
  },
  updated(){
  	let self = this;
	this.getblh()
  },
  methods: {
	chooseWay(str){
		let self = this;
		//选择付款方式
		if(str == 'zf'){
			//切换自费方式
			if(localStorage.getItem('zfblh')){
				localStorage.setItem('sec_flag','zf');
				this.blh = this.zfblh;
				$('#zf').css({'background-color':'rgb(103,194,58)','color':'white'});
				$('#cb').css({'background-color':'white','color':'black'})
			}else{
				this.zjh = localStorage.getItem("sec_patientIdcard");
      	this.hzxm = localStorage.getItem("sec_patientName");
				//注册信息
				let self = this;
    		$.alert("未查询到您的信息，请先建档", "提示", function() {
    						console.log(self.zjh+"   "+this.zjh)
						  	if (process.env.NODE_ENV == 'dev') {
								  window.location='../index.html#/userFiling?zjh='+self.zjh+'&hzxm='+self.hzxm;
								} else if (process.env.NODE_ENV == 'production') {
								  window.location='../2ysechos/index.html#/userFiling?zjh='+self.zjh+'&hzxm='+self.hzxm;
								}
						});
			}
		}else{
			//切换参保方式
			if(localStorage.getItem('cbblh')){
				localStorage.setItem('sec_flag','cb');
				this.blh = this.cbblh;
				$('#cb').css({'background-color':'rgb(103,194,58)','color':'white'});
				$('#zf').css({'background-color':'white','color':'black'})
			}else{
				$.toptip('暂无参保账户','error')
			}
		}
	},
    toWait() {
      this.$router.push("/waitPatient");
    },
    toTJRecord() {
      if (process.env.NODE_ENV == "dev") {
        window.location = "../../reportQuery.html#/examinationList";
      } else if (process.env.NODE_ENV == "production") {
        window.location = "../../2ysechos/reportQuery.html#/examinationList";
      }
    },
    toJCRecord() {
      if (process.env.NODE_ENV == "dev") {
        window.location = "../../reportQuery.html#/reportTab";
      } else if (process.env.NODE_ENV == "production") {
        window.location = "../../2ysechos/reportQuery.html#/reportTab";
      }
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
    //获取url中的参数
    GetQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg); //search,查询？后面的参数，并匹配正则
      if (r != null) return decodeURI(r[2]);
      return null;
    },
    toSwitch() {
      //切换患者
      let self = this;
      this.$router.push("/userBinding");
    },
    //判断是否展示
    checkShow() {
      let self = this;

      let cs = localStorage.getItem("sec_patientName");
      let img = localStorage.getItem("sec_headImg");
      let birth = localStorage.getItem("sec_birth");
      let sex = localStorage.getItem("sec_sex");
      let patientIdCard = localStorage.getItem("sec_patientIdcard");
      $.alert(cs);
      if (cs == null || cs == "" || cs == "null") {
        //说明用户未绑定
      } else {
        self.patientName = cs;
        self.headImg = img;
        self.birth = birth;
        self.sex = sex;
        self.show = false;
        self.patientIdCard = patientIdCard;
      }
    },
    toReserv() {
      if (process.env.NODE_ENV == "dev") {
        window.location = "../../reservation.html";
      } else if (process.env.NODE_ENV == "production") {
        window.location = "../../2ysechos/reservation.html";
      }
    },
    toReport() {
      if (process.env.NODE_ENV == "dev") {
        window.location = "../../reportQuery.html";
      } else if (process.env.NODE_ENV == "production") {
        window.location = "../../2ysechos/reportQuery.html";
      }
    },
    toPayRecord() {
      if (process.env.NODE_ENV == "dev") {
        window.location = "../../outPaymentRecords.html";
      } else if (process.env.NODE_ENV == "production") {
        window.location = "../../2ysechos/outPaymentRecords.html";
      }
    },
    patientManage(){
      if (process.env.NODE_ENV == "dev") {
        window.location = "../../patientManage.html";
      } else if (process.env.NODE_ENV == "production") {
        window.location = "../../2ysechos/patientManage.html";
      }
    },
    getblh() {
      let self = this;
      this.zjh = localStorage.getItem("sec_patientIdcard");
      this.hzxm = localStorage.getItem("sec_patientName");
      if (this.zjh == "null" || this.zjh == "" || this.zjh == null || this.zjh == undefined) {
        return;
      } else {
        let data = {
          hzxm: this.hzxm,
          zjh: this.zjh,
          action: "mz",
          openid: localStorage.getItem("sec_openId")
        };
        this.model.getInfo(data).then(function(res) {
          if (res.data.code == "0") {
            //门诊模块 就取门诊自费并且病历号最大的
            let outArray = res.data.data;
            let arr = [];
            for (var i = 0; i < outArray.length; i++) {
              if (outArray[i].ybdm == "101") {
                self.zfblh = outArray[i].blh;
                let d = {
                	blh:outArray[i].blh,
                	patid:outArray[i].patid
                }
                arr.push(d)
              }
              //门诊医保病人
              if (outArray[i].ybdm == "701") {
                self.cbblh = outArray[i].blh;
                self.cbpatid = outArray[i].patid;
              }
            }
            if(arr.length !=0 && arr[0].blh){
            	localStorage.setItem('zfblh',arr[0].blh);
            	localStorage.setItem('zfpatid',arr[0].patid);
            }else{
            	localStorage.removeItem('zfblh');
            	localStorage.removeItem('zfpatid');
            }
            if(self.cbblh){
            	localStorage.setItem('cbblh',self.cbblh);
            	localStorage.setItem('cbpatid',self.cbpatid);
            }else{
            	localStorage.removeItem('cbblh');
            	localStorage.removeItem('cbpatid');
            }
            //若参保存在 则默认取参保
            if(localStorage.getItem('sec_flag') == undefined || localStorage.getItem('sec_flag') == ''){
            	
            	if(self.cbblh){
	//          	localStorage.setItem('sec_flag','cb');
								//保存用户就诊方式
								let d = {
									rowGuid:localStorage.getItem('sec_patientGuid'),
									patientJztype:2
								}
								self.model.updatePatient(d).then(function(res){})
								
	            	localStorage.setItem('sec_yb',true);
	            	self.chooseWay('cb');
	            }else{
	            	if(self.zfblh){
	//          		localStorage.setItem('sec_flag','zf');
									//保存用户就诊方式
									let d = {
										rowGuid:localStorage.getItem('sec_patientGuid'),
										patientJztype:1
									}
									self.model.updatePatient(d).then(function(res){})
	            		self.chooseWay('zf');
	            	}else{
	            		//注册信息
	            		$.alert("未查询到您的信息，请先建档", "提示", function() {
									  	if (process.env.NODE_ENV == 'dev') {
											  window.location='../index.html#/userFiling?zjh='+self.zjh+'&hzxm='+self.hzxm;
											} else if (process.env.NODE_ENV == 'production') {
											  window.location='../2ysechos/index.html#/userFiling?zjh='+self.zjh+'&hzxm='+self.hzxm;
											}
									});
	            	}
            	}
            
            }else if(localStorage.getItem('sec_flag') == 'zf'){
	//          		localStorage.setItem('sec_flag','zf');
									//保存用户就诊方式
									let d = {
										rowGuid:localStorage.getItem('sec_patientGuid'),
										patientJztype:1
									}
									self.model.updatePatient(d).then(function(res){})
	            		self.chooseWay('zf');
            }else if(localStorage.getItem('sec_flag') == 'cb'){
            	let d = {
									rowGuid:localStorage.getItem('sec_patientGuid'),
									patientJztype:2
								}
								self.model.updatePatient(d).then(function(res){})
								
	            	localStorage.setItem('sec_yb',true);
	            	self.chooseWay('cb');
            }
          }
        });
      }
    }
  }
};
</script>

<style scoped>
/*.wzl{
		position: fixed;
	}*/
#bac {
  background-color: aqua;
}
.weui-cells {
  margin-top: auto;
}
.weui-cells-wzl:before {
  position: fixed;
}
.weui-cell {
  /*position: fixed;*/
  background-color: white;
  padding: 20px 1px;
}
.weui-cell_access-wzl .weui-cell__ft:after {
  height: 8px;
  width: 8px;
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
.weui-cell__hd img {
  display: block;
  margin-right: 5px;
  height: 40px;
  margin-right: 15px;
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
  box-shadow: 1px 1px 6px #888888;
}
.hero-panew {
  height: 255px;
  width: 100%;
  position: relative;
  top: -70px;
  padding-left: 13px;
  padding-right: 13px;
  width: calc(100% - 26px);
  max-width: 400px;
}
.hero-banner {
  height: 100px;
  width: 100%;
}
a.weui-media-box {
  margin-bottom: 20px;
  padding-top: 5px;
  margin-top: 0px;
  color: #000000;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.weui-panel:after {
  position: fixed;
}
.weui-media-box_appmsg .weui-media-box__thumb1 {
  margin-left: -17%;
  margin-top: -47px;
  width: 19%;
  height: 55%;
  position: absolute;
}
.weui-media-box_appmsg .weui-media-box__thumb2 {
  margin-left: -17%;
  margin-top: -50px;
  width: 20%;
  height: 46%;
  position: absolute;
}
.weui-panel:before {
  position: fixed;
}
.weui-media-box__title2 {
  color: white;
  border-style: solid;
  border-radius: 5px;
  border-color: white;
  margin-left: 24%;
  font-size: 12px;
  margin-top: -7.5%;
  position: absolute;
  background-color: rgb(106, 208, 249);
  padding-right: 4px;
  padding-left: 4px;
}
.weui-btn_plain-primary {
  position: relative;
  top: -10px;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 23px;
  padding-right: 23px;
  line-height: inherit;
  width: fit-content;
  color: #05c8f3;
  border: 1px solid #05c8f3;
  font-size: small;
}
.weui-cell{
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>
