<template>
  <div style="height: 100%;background-color: #EFF7FD;overflow:auto;">
    <div class="wzl-panel-title">
          <strong>门诊缴费记录</strong>
    </div>
    <div class="re-header-select">
      <div class="select-left">
        <input type="text" class="select-input1" data-toggle="date" id="ksrq1" placeholder="开始日期" />
      </div>
      <div class="select-middle">
        <img src="../../../../static/img/横线.svg" width="100%" style="position: absolute;top: 16px;" />
      </div>
      <div class="select-right">
        <input type="text" class="select-input1" data-toggle="date" id="jsrq1" placeholder="结束日期" />
      </div>
      <div class="select-fin">
        <img
          src="../../../../static/img/搜索.png"
          width="100%"
          style="vertical-align: middle;"
          v-on:click="selectMz()"
        />
      </div>
    </div>

    <div class="re-row" v-for="item in PaymentList">
      <a href="javascript:;" @click="toDetail(item)">
        <div class="row-cen">
          <div class="re-img">
            <img src="../../../../static/img/矩形 4 拷贝.png" width="68%" />
          </div>
          <div class="re-main-ing">
              <img
                src="../../../../static/img/记录.png"
                width="65%"
                style="position: absolute;right: 24px;top: 32px;"
              />
          </div>
          <div class="re-main-wzl">
            <div class="re-content-wzl">
              <p style="font-size: 17px;margin-top: 11px;">科室名称: {{item.ksmc}}</p>
              <p style="color: #688795;">结算时间: {{item.jssj}}</p>
              <p style="color: #688795;">支付金额: {{item.zje}}</p>
              <p style="color: #999999;">收费类型: <span style="color:black;">{{item.sflx==1?'退费':'正常'}}</span></p>
            </div>
            
          </div>
        </div>
      </a>
    </div>

    <div style="margin-top: 30px;margin-bottom: 30px;">
      <div>
        <a href="javascript:;" class="weui-btn weui-btn_primary" v-on:click="tomainList()">返回主页面</a>
      </div>
    </div>
    <el-dialog title="选择要查看的病历" :visible.sync="isShow">
      <commonSelect v-bind:mzData="mzData" @handleCall="handleCall"></commonSelect>
    </el-dialog>
  </div>

</template>

<script>
import weui from "jquery-weui/dist/js/jquery-weui.min";
import model from "./model.js";
import commonSelect from './commonSelect.vue'

export default {
  components: {commonSelect},
  data() {
    this.model = model(this.axios);
    return {
        PaymentList:[],
        zjh:localStorage.getItem('sec_patientIdcard'),
        hzxm:localStorage.getItem('sec_patientName'),
        mzData:[],
        patid:'',
        isShow:false
    };
  },
  //props: ["patid"],
  mounted() {
    this.init();
  },
  methods: {
    tomainList() {
      this.$router.push("/");
    },
    init() {
      $("#ksrq1").calendar({
        dateFormat: "yyyy-mm-dd"
      });
      $("#jsrq1").calendar({
        dateFormat: "yyyy-mm-dd"
      });
    },
    toDetail(ele) {
      this.$router.push(
        "/outPaymentRecordsDetail?jssjh=" +
          ele.jssjh
      );
    },
    handleCall(res){
		this.isShow = false;
        this.patid = res.patid;
        this.payList();
    },
    selectMz(){
    	$.showLoading();
			let self = this;
			let data={
				hzxm:this.hzxm,
				zjh:this.zjh,
				action:'mz',
				openid:localStorage.getItem('sec_openId')
			}
			
			this.model.selectPatient(data).then(function(res){
				$.hideLoading();
				if(res.data.code == '0'){
					self.isShow = true;
					self.mzData = res.data.data;
				}
				if(res.data.msg == '未查询到门诊患者'){
					$.alert("未查询到您的信息，请先建档", "提示", function() {
					  //点击确认后的回调函数
					  self.$router.push('/userFiling?zjh='+self.zjh)
					});
				}
			})
	},
    payList(){
        let self = this;
        let hzxm = localStorage.getItem("sec_patientName");
        let patid = this.patid;
        //let patid = "349246";
        let date1 = $("#ksrq1").val();
        let ksrq = date1.replace(/\-/g, "");
        let date2 = $("#jsrq1").val();
        let jsrq = date2.replace(/\-/g, "");
        let data = {
            hzxm:hzxm,
            patid:patid,
            ksrq: ksrq,
            jsrq: jsrq
        };
        this.model.getOutpatientFeeSettlementInfo(data).then(function(res){
            if(res.data.code=="0"){
                let paymentList = res.data.data;
                self.PaymentList = paymentList;
                self.isShow = false;
            }else{
                $.toptip(res.data.msg, "error");
            }
        });
    }
  }
};
</script>

<style>
	.el-dialog{
		width: calc(100vw - 20px);
	}
</style>
<style scoped>
.weui-btn_primary {
  background-color: #4ccbdb;
}
.weui-btn {
  width: 230px;
}
input::-webkit-input-placeholder {
  /* placeholder颜色  */
  color: #b2b2b2;
  /* placeholder字体大小  */
  font-size: 12px;
  /* placeholder位置  */
  text-align: center;
}
.select-input1 {
  width: 100px;
  height: 40px;
  border-radius: 30px;
  border-style: solid;
  border-color: #9bdff0;
  text-align: center;
  font-size: medium;
}
.select-fin {
  width: 50px;
  height: 100%;
  float: left;
  line-height: 60px;
}
.select-middle {
  width: 30px;
  height: 100%;
  float: left;
  position: relative;
}
.select-right {
  float: left;
  height: 100%;
  width: 130px;
  line-height: 60px;
  text-align: center;
}
.select-left {
  width: 130px;
  float: left;
  height: 100%;
  line-height: 60px;
  text-align: center;
}
.re-header-select {
  width: 100%;
  height: 60px;
  background-color: #ffffff;
}
.re-content-wzl {
  padding-left: 0px;
  height: 100%;
  width: calc(100vw - 155px);
  float: left;
}
.re-main-ing {
  position: relative;
  height: 100%;
  float: left;
  width: 85px;
}
.row-cen {
  width: calc(100vw - 50px);
  margin-left: auto;
  margin-right: auto;
  height: 100%;
}
.re-img {
  height: 100%;
  width: 5px;
  float: left;
}
.re-main-wzl {
  border: crimson;
  border-radius: 10px;
  height: 100%;
  background-color: #ffffff;
}
.re-row {
  width: 100%;
  height: 125px;
  margin-top: 20px;
}
.wzl-panel-title{
  text-align: center;
  background-color: #f1f1f1;
  height: 35px;
  padding-top: 7px;
}
</style>
