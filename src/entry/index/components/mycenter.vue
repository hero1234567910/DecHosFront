<template>
  <div>
    <div class="hero-banner">
      <img src="../../../../static/images/bj1.png" class="hero-img" width="100%">
    </div>
    <div class="hero-pane" v-if="show" style="position: relative;top: -71px;margin-left: 10px;margin-right: 10px;">
      <div class="hero-panel2">
        <div style="margin-left: 5px;margin-right: 5px;width: calc(100% - 10px);">
          <div class="weui-row">
            <div class="weui-col-33">
              <img  src="../../../../static/img/用户空白头像.png" style="margin-left: 10px;margin-top: 30px;width: 59%;margin-left: 119%;">
            </div>
          </div>
          <div class="weui-msg__text-area" style="margin-top: 22px;">
            <p class="weui-msg__desc" style="margin-left: 19%;color:#000000;margin-top: 13%;">
              您还没有绑定或申请电子就诊卡
            </p>
          </div>
          <a href="javascript:;" class="weui-btn weui-btn_plain-primary" v-on:click="toSwitch()">立即办理</a>
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
                  <img class="weui-media-box__thumb" :src="headImg">
                </div>
                <div class="weui-media-box__bd">
                  <h4 class="weui-media-box__title" style="font-weight:600;margin-top:15px"></h4>
                  <h4
                    class="weui-media-box__title"
                    style="font-weight:600;margin-top:10px;width:50%"
                  >{{patientName}}</h4>
                  <!-- <h4 class="weui-media-box__title2">城镇医保</h4> -->
                  <!-- <h4 class="weui-media-box__title" style="font-size:15px;margin-top:8px">{{sex}} / {{birth}}</h4> -->
                  <h4
                    class="weui-media-box__title"
                    style="font-size:15px;margin-top:8px"
                  >证件号：{{patientIdCard}}</h4>
                </div>
                <div class="weui-media-box__hd1">
                  <img class="weui-media-box__thumb1" src="../../../../static/images/医院-2.png">
                  <!-- <h4 style="font-size: 8px;position: absolute;margin-left: -19%;margin-top: 3%;" >点击出示二维码</h4> -->
                </div> 
      
              </a>
            </div>
          </div>

          <div class="weui-panel weui-panel_access" style="height:20px;margin-top: 0px;">
            <div class="weui-panel__bd">
              <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg" style="margin-top: 0px;" v-on:click="toSwitch()">
                <img
                  style="margin-left: 30%;width: 3%;height: auto;"
                  class="weui-media-box__thumb"
                  src="../../../../static/img/切换.png"
                >

                <div class="weui-media-box__bd">
                  <h4
                    class="weui-media-box__title"
                    style="width: 50%;font-weight:400;margin-top:0px;font-size:10px;margin-bottom: 0px;text-align: center;color: cornflowerblue;text-decoration:underline"
                  >切换/添加就诊人</h4>
                </div>
                <div class="weui-media-box__hd1" style="display: none;">
                  <img
                    style="position: fixed;z-index: 19;width: 112px;height: 110px;margin-left: -92px;margin-top: -88px;"
                    class="weui-media-box__thumb1"
                    src="../../../../static/img/电子就诊卡.png"
                  >
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
	              <img src="../../../../static/img/我的预约.png">
	            </div>
	            <div class="weui-cell__bd">
	              <p style="margin-bottom: -10px;">我的预约</p>
	              <img style="width:45%" src="../../../../static/images/圆角矩形-1.png">
	            </div>
	            <div class="weui-cell__ft"></div>
	          </a>
	        </div>
	      </div>
	    </div>
		</a>
    <div style="height: 4px;width: 100%;margin-top: 10px;background-color: #eff7fd;"></div>
    <div style="margin-top: 0px;margin-left: 13px;margin-right: 13px;width: calc(100% - 26px);">
      <div style="margin-left: 20px;margin-right: 20px;height: 70px;">
        <div class="weui-cells-wzl">
          <a class="weui-cell weui-cell_access-wzl" href="javascript:;" v-on:click="toReport()">
            <div class="weui-cell__hd">
              <img src="../../../../static/img/报告.png">
            </div>
            <div class="weui-cell__bd">
              <p style="margin-bottom: -10px;">报告查询</p>
              <img style="width:45%" src="../../../../static/images/圆角矩形-2.png">
            </div>
            <div class="weui-cell__ft"></div>
          </a>
        </div>
      </div>
    </div>
    <div style="height: 4px;width: 100%;margin-top: 10px;background-color: #eff7fd;"></div>

    <div style="margin-top: 0px;margin-left: 13px;margin-right: 13px;width: calc(100% - 26px);">
      <div style="margin-left: 20px;margin-right: 20px;height: 70px;">
        <div class="weui-cells-wzl">
          <a class="weui-cell weui-cell_access-wzl" href="javascript:;" v-on:click="toPayRecord()">
            <div class="weui-cell__hd">
              <img src="../../../../static/images/缴费记录.png">
            </div>
            <div class="weui-cell__bd">
              <p style="margin-bottom: -10px;">门诊缴费记录</p>
              <img style="width:45%" src="../../../../static/images/圆角矩形-3.png">
            </div>
            <div class="weui-cell__ft"></div>
          </a>
        </div>
      </div>
    </div>
    <div style="height: 4px;width: 100%;margin-top: 10px;background-color: #eff7fd;"></div>

    <div style="margin-top: 0px;margin-left: 13px;margin-right: 13px;width: calc(100% - 26px);">
      <!-- <div style="margin-left: 20px;margin-right: 20px;height: 70px;">
        <div class="weui-cells-wzl">
          <a class="weui-cell weui-cell_access-wzl" href="javascript:;">
            <div class="weui-cell__hd">
              <img src="../../../../static/img/复诊预约.png">
            </div>
            <div class="weui-cell__bd">
              <p style="margin-bottom: -10px;">复诊预约</p>
              <img style="width:45%" src="../../../../static/images/圆角矩形-4.png">
            </div>
            <div class="weui-cell__ft"></div>
          </a>
        </div>
      </div> -->
    </div>
    </div>
  </div>
</template>


<script>
import weui from "jquery-weui/dist/js/jquery-weui.min";
import model from './model.js'
export default {
	data() {
    	this.model = model(this.axios)
      return {
      	show:true,
      	patientName:'',
      	headImg:'',
      	birth:'',
        sex:'',
        patientIdCard:''
      }
    },
    mounted(){
    	this.checkShow();
    },
  methods: {
  	toSwitch(){
  		//切换患者
  		let self = this;
			this.$router.push('/userBinding');
  	},
  	//判断是否展示
  	checkShow(){
      console.log('未复用')
      console.log(this.show)
  		let self = this;
  		let cs = localStorage.getItem('sec_patientName');
  		let img = localStorage.getItem('sec_headImg');
  		let birth = localStorage.getItem('sec_birth');
      let sex = localStorage.getItem('sec_sex');
      let patientIdCard = localStorage.getItem('sec_patientIdcard');
      console.log(cs);
  		if(cs == null || cs == ''){
  			//说明用户未绑定
  			
  		}else{
  			self.patientName = cs;
  			self.headImg = img;
  			self.birth = birth;
  			self.sex = sex;
        self.show = false;
        self.patientIdCard = patientIdCard;
  		}
  	},
  	toReserv(){
  		if (process.env.NODE_ENV == 'dev') {
				  window.location='../../reservation.html'
				} else if (process.env.NODE_ENV == 'production') {
				  window.location='../../sechos/reservation.html'
				}
  	},
  	toReport(){
  		if (process.env.NODE_ENV == 'dev') {
				  window.location='../../reportQuery.html'
				} else if (process.env.NODE_ENV == 'production') {
				  window.location='../../sechos/reportQuery.html'
				}
    },
    toPayRecord(){
      if (process.env.NODE_ENV == 'dev') {
				  window.location='../../outPaymentRecords.html'
				} else if (process.env.NODE_ENV == 'production') {
				  window.location='../../sechos/outPaymentRecords.html'
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
  height: 200px;
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
</style>
