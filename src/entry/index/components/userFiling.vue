<template>
  <div style="background-color: #eff7fd;height: 100%;overflow-x: hidden;">
    <div class="tips-1">
      <h6>温馨提示:请您确认个人信息无误后再保存信息</h6>
    </div>
    <div class="weui-cells-wzl weui-cells_form">
      <div class="weui-cells__title wzl" style="font-size: 18px;margin-top:0.2em;margin-bottom: 0.2em;">姓名</div>
      <div class="weui-cell-wzl">
        <div class="weui-cell__bd">
          <input id="hzxm" class="weui-input-wzl" type="text" placeholder="请输入患者姓名">
        </div>
      </div>
      <div class="weui-cells__title wzl" style="font-size: 18px;margin-top:0.2em;margin-bottom: 0.2em;">性别</div>
      <div class="weui-cell-wzl" style="padding-top: 0px;">
        <div class="weui-cell__bd">
          <div class="weui-cells-wzl weui-cells_radio" >
            <label class="weui-cell weui-check__label" style="width: unset;background-color: white;border-top: outset;border-top-width: thin;border-top-color: lightskyblue;
                      border-bottom: inset;border-bottom-color: #d5ebf9;border-bottom-width: thin;padding-right:0px;padding-left:34px;" for="x11">
              <div class="weui-cell__bd">
                <p>男</p>
              </div>
              <div class="weui-cell__ft">
                <input type="radio" class="weui-check" name="radio1" id="x11" value="男">
                <span class="weui-icon-checked" style="margin-right:50px"></span>
              </div>
            </label>
            <label
              class="weui-cell weui-check__label"
              style="width: unset;background-color: white;
                      border-bottom: inset;border-bottom-color: lightskyblue;border-bottom-width: thin;padding-right:0px;padding-left:34px;" for="x12">
              <div class="weui-cell__bd">
                <p>女</p>
              </div>
              <div class="weui-cell__ft">
                <input type="radio" name="radio1" class="weui-check" id="x12" checked="checked" value="女">
                <span class="weui-icon-checked" style="margin-right:50px"></span>
              </div>
            </label>
          </div>
        </div>
      </div>
       <div class="weui-cells__title wzl" style="margin-top: 0.2em;font-size: 18px;margin-bottom: 0.2em;">出生日期</div>
      <div class="weui-cell-wzl" style="margin-top: 0px;">
        <div class="weui-cell__bd">
          <input type="text" data-toggle="date" id="my-input" placeholder="请输入出生年月" style="margin-top: 0px;">
        </div>
      </div>
      <div class="weui-cells__title wzl" style="margin-top: 0.2em;font-size: 18px;margin-bottom: 0.2em;">联系方式</div>
      <div class="weui-cell-wzl" style="margin-top: 0px;padding-bottom:0px;padding-top:0px;border-bottom-color:#d5ebf9">
        <div class="weui-cell__bd">
          <input id="lxdh" class="weui-input-wzl" style="border-bottom-color:#d5ebf9" type="number" placeholder="请输入电话">
        </div>
      </div>
      <div class="weui-cell-wzl" style="margin-top: 0px;padding-top:0px;">
        <div class="weui-cell__bd">
          <input id="lxdz" class="weui-input-wzl" style="border-top:none;" type="text" placeholder="请输入地址">
        </div>
      </div>
      <a href="javascript:;" class="weui-btn weui-btn_primary2" v-on:click="save">保存</a>
    </div>
  </div>
</template>

<script>
import weui from "jquery-weui/dist/js/jquery-weui.min";
import model from './model.js';
export default {
  name: "userFiling.vue",
   data() {
  	this.model = model(this.axios)
    return {
     
    };
  },
  mounted(){
  	this.initY();
  },

  methods: {
  	initY(){
  		$('#my-input').calendar({
  			dateFormat:'yyyymmdd'
  		});
  	},
  	save(){
		//获取提交参数
		let self = this;
		var hzxm = $('#hzxm').val();
		var sex = $("input[name='radio1']:checked").val();
		var birth = $('#my-input').val();
		var lxdh = $('#lxdh').val();
		var lxdz = $('#lxdz').val();
		var zjh = self.GetQueryString('zjh');
		var openid = localStorage.getItem('sec_openId');
		
		
		if (
			this.panNull(hzxm, "患者姓名不能为空") ||
		    this.panNull(zjh, "证件号不能为空") ||
		    this.panNull(sex, "性别不能为空") ||
		    this.panNull(birth, "出生日期不能为空") ||
		    this.panNull(lxdh, "联系电话不能为空") ||
		    this.panNull(lxdz, "联系地址不能为空") ||
		    this.panNull(openid,"openidb不能为空")
		  ) {
		    return;
		  };
		  let data = {
		  	'hzxm':hzxm,
		  	'sex':sex,
		  	'birth':birth,
		  	'lxdh':lxdh,
		  	'lxdz':lxdz,
		  	'zjh':zjh,
		  	'openid':openid
		  }
		  this.model.savePatient(data).then(function(res){
		  	if(res.data.code == '0'){
		  		$.toast('建档成功', function() {
						  localStorage.setItem('sec_sex',res.data.data.patientSex);
    					localStorage.setItem('sec_birth',res.data.data.patientBirth);
    					localStorage.setItem('sec_patientName',res.data.data.patientName);
    					let arr = [];
    						let outArray = res.data.data.outpatients;
    						for(var i=0;i<outArray.length;i++){
									let blh = outArray[i].medicalNumberMZ;
									arr.push(parseInt(blh));
    						}
    						arr.sort().reverse();
    						let val = arr[0];
    						for(var i=0;i<outArray.length;i++){
    							if(val == outArray[i].medicalNumberMZ){
    								self.patientId = outArray[i].patidMZ;
    								localStorage.setItem('sec_patientIdmz',self.patientId);
    							}
    						}
    					
    					self.$router.push('/');
						});
		  	}else{
		  		$.toptip(res.data.msg, 'error');
		  	}
		  })
  	},
  	panNull(ele, str) {
		  if (ele == null || ele == "") {
		    $.alert(str, "警告");
		    return true;
		  } else {
		    return false;
		  }
		},
		//获取url中的参数(获取锚点的url)
		 GetQueryString(name){
			     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
			     var r = window.location.hash.substr(13).match(reg);//search,查询？后面的参数，并匹配正则
			     if(r!=null)return  decodeURI(r[2]); return null;
			},
  	
  }
};
</script>

<style scoped>
.weui-cells-wzl {
  margin-top: 0px;
  background-color: #eff7fd;
}
#zjh {
  background: white;
}
.weui-input-wzl {
  font-size: 17px;
	background-color: #FFFF;
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
#my-input {
  font-size: 17px;
  height: 40px;
  width: -webkit-fill-available;
  margin-left: -18px;
  border-top: outset;
  border-top-width: thin;
  border-top-color: lightskyblue;
  border-bottom: inset;
  border-bottom-color: lightskyblue;
  border-bottom-width: thin;
  padding-left: 28px;
  border-right: none;
}
.weui-cells-wzl::before {
  position: fixed;
}
.weui-cell-wzl:before {
  position: fixed;
}
.weui-btn {
  margin-top: 7%;
  width: 86%;
}
weui-cell-wzl weui-check__label {
  width: unset;
  background-color: white;
  border-top: outset;
  border-top-width: thin;
  border-top-color: lightskyblue;
  border-bottom: inset;
  border-bottom-color: lightskyblue;
  border-bottom-width: thin;
}
.weui-cell-wzl{
  padding-right: 0px;
  padding-left: 0px;
}
.tips-1{
  background-color: white;
    text-align: center;
    border-bottom: solid;
    /* border-top: solid; */
    border-width: thin;
    border-color: lightskyblue;
}
.weui-btn_primary2{
  background-color: #05b500;
  margin-left: 7%;
  position: absolute;
}
.weui-cells__title .wzl{
  margin-bottom: 0em;
}
</style>
