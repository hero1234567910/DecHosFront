<template style="background-color: #eff7fd;">
  <div style="background-color: #eff7fd;overflow-x: hidden;height: 100%;">
    <div class="weui-flex" style="height: 230px;">
      <div class="weui-flex__item-wzl">
        <img
          src="../../../../static/images/门诊患者.png"
          v-on:click="mzBotton"
          v-bind:class="shows==true?'magnify':''"
          style="margin-top: 30px;width: 55%;margin-left: 31px;"
        >
        <!--<div class="wzl-col-dec" style="min-width: 70px;" v-bind:style="{color:color1}">请输入正确的证件号</div>-->
        <!--<div class="v-underline" v-bind:style="{left:underlineMove+'%'}"></div>-->
      </div>
      <div class="weui-flex__item-wzl">
        <img
          src="../../../../static/images/住院患者.png"
          v-on:click="zyBotton"
          v-bind:class="shows==false?'magnify':''"
          style="margin-top: 30px;width: 55%;margin-left: 31px;"
        >
        <!--<div class="wzl-col-dec" style="min-width: 70px;" v-bind:style="{color:color2}">请输入</div>-->
      </div>
    </div>
    <div class="weui-cells__title wzl" style="font-size: 18px;">
    	<div class="panel-img">
    		<img src="../../../../static/img/姓名 (1).svg" width="80%" style="position: absolute;top: 2px;"/>
    	</div>
    	姓名</div>
    <div class="weui-cells-wzl weui-cells_form">
      <div class="weui-cell-wzl" style="margin-top: 0px;">
        <div class="weui-cell__bd">
          <input id="hzxm" class="weui-input" placeholder="请输入患者姓名">
        </div>
      </div>
    </div>
    <div class="weui-cells__title wzl" style="font-size: 18px;">
    	<div class="panel-img">
    		<img src="../../../../static/img/身份证 (1).svg" width="100%" style="position: absolute;top: 4px;"/>
    	</div>
    	身份证号</div>
    <div class="weui-cells-wzl weui-cells_form">
      <div class="weui-cell-wzl" style="margin-top: 0px;">
        <div class="weui-cell__bd">
          <input id="zjh" class="weui-input" placeholder="请输入身份证号">
        </div>
      </div>
    </div>
		
    <div style="width: 100%;height:;">
        <a href="javascript:;" class="weui-btn weui-btn_primary1"  v-on:click="bindingUser">绑定</a>
    </div>
  </div>
</template>

<script>
import weui from "jquery-weui/dist/js/jquery-weui.min";
import model from './model.js'
export default {
  name: "userBinding.vue",
  data() {
  	this.model = model(this.axios)
    return {
      shows: true,
      underlineMove: 10,
      color1:'#000000',
      color2:'#878787',
      action:'',
      sex:'',
      birth:'',
      patientId:'',
    };
  },
  mounted(){
  },
  methods: {
  	bindingUser(){
		let self = this;
		let action = '';
		let hzxm = $('#hzxm').val();
		let zjh = $('#zjh').val();
		let openid = localStorage.getItem('sec_openId');
		let data = {
			'hzxm':hzxm,
			'zjh':zjh,
			'openid':openid
		};
		this.model.bindUser(data).then(function(res){
				if(res.data.code == '0'){
					$.toast('绑定成功', function() {
							if (process.env.NODE_ENV == 'dev') {
							  window.location='../../index.html'
							} else if (process.env.NODE_ENV == 'production') {
							  window.location='../../sechos/index.html'
							}
						});
    			}else{
    				$.toptip(res.data.msg, 'error');
    			}
    	})
  	},
    mzBotton() {
    	let self = this;
      this.shows = true;
      this.underlineMove = 10;
      this.color1='#000000';
      this.color2='#878787';
    },
    zyBotton() {
    	let self = this;
      this.shows = false;
      this.underlineMove = 110;
      this.color2='#000000';
      this.color1='#878787';
    }
  }
};
</script>

<style scoped>
.panel-img{
	position: relative;
    float: left;
    width: 30px;
    height: 30px;
    margin-right: 5px;
}
.weui-input {
  height: 40px;
  width: -webkit-fill-available;
  border-top: outset;
  border-top-width: thin;
  border-top-color: lightskyblue;
  border-bottom: inset;
  border-bottom-color: lightskyblue;
  border-bottom-width: thin;
  margin-left: -15px;
  padding-left: 28px;
  border-right: none;
}
.weui-cells-wzl {
  background-color: #FFFFFF;
}
#zjh {
  background: white;
}

.weui-cell-wzl:before {
  position: fixed;
}
.weui-cells-wzl:before {
  position: fixed;
}
.weui-flex__item-wzl{
  height: 230px;
  background-color: white;
  border-top: outset;
  border-top-width: thin;
  border-top-color: lightskyblue;
  border-bottom: inset;
  border-bottom-color: lightskyblue;
  border-bottom-width: thin;
}
.wzl-col-dec {
  height: 20px;
  line-height: 27px;
  width: 100%;
  font-size: 16px;
  color: #100000;
  text-align: center;
  margin-left: -10px;
  font-weight: 600;
}
.maginfy {
  font-size: 30px;
}
.v-underline {
  width: 51%;
  height: 6px;
  background-color: rgb(86, 193, 235);
  position: relative;
  margin-left: 17px;
  margin-top: 2px;
  z-index: -1；;
}
.weui-btn {
  margin-top: 7%;
  width: 86%;
}
.weui-btn_primary1{
  position: absolute;
  margin-left: 7%;
  background-color: #05b500;
}
</style>
