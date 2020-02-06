<template style="background-color: #eff7fd;">
  <div style="background-color: #eff7fd;overflow-x: hidden;height: 100%;">
    <div class="weui-flex" style="height: 230px;">
      <div class="weui-flex__item-wzl">
        <img
          src="../../../../static/images/门诊患者.png"
          v-on:click="mzBotton"
          v-bind:class="shows==true?'magnify':''"
          style="margin-top: 30px;width: 55%;margin-left: 31px;"
        />
        <!--<div class="wzl-col-dec" style="min-width: 70px;" v-bind:style="{color:color1}">请输入正确的证件号</div>-->
        <!--<div class="v-underline" v-bind:style="{left:underlineMove+'%'}"></div>-->
      </div>
      <div class="weui-flex__item-wzl">
        <img
          src="../../../../static/images/住院患者.png"
          v-on:click="zyBotton"
          v-bind:class="shows==false?'magnify':''"
          style="margin-top: 30px;width: 55%;margin-left: 31px;"
        />
        <!--<div class="wzl-col-dec" style="min-width: 70px;" v-bind:style="{color:color2}">请输入</div>-->
      </div>
    </div>
    <div class="weui-cells__title wzl" style="font-size: 18px;">
      <div class="panel-img">
        <img
          src="../../../../static/img/姓名 (1).svg"
          width="80%"
          style="position: absolute;top: 2px;"
        />
      </div>姓名
    </div>
    <div class="weui-cells-wzl weui-cells_form">
      <div class="weui-cell-wzl" style="margin-top: 0px;">
        <div class="weui-cell__bd">
          <input id="hzxm" class="weui-input" placeholder="请输入患者姓名" />
        </div>
      </div>
    </div>
    <div class="weui-cells__title wzl" style="font-size: 18px;">
      <div class="panel-img">
        <img
          src="../../../../static/img/身份证 (1).svg"
          width="100%"
          style="position: absolute;top: 4px;"
        />
      </div>身份证号
    </div>
    <div class="weui-cells-wzl weui-cells_form">
      <div class="weui-cell-wzl" style="margin-top: 0px;">
        <div class="weui-cell__bd">
          <input id="zjh" class="weui-input" placeholder="请输入身份证号" />
        </div>
      </div>
    </div>

    <div style="width: 100%;height:;">
      <a href="javascript:;" class="weui-btn weui-btn_primary1" v-on:click="bindingUser">保存</a>
    </div>
  </div>
</template>

<script>
import weui from "jquery-weui/dist/js/jquery-weui.min";
import model from "./model.js";
export default {
  name: "userBinding.vue",
  data() {
    this.model = model(this.axios);
    return {
      shows: true,
      underlineMove: 10,
      color1: "#000000",
      color2: "#878787",
      action: "",
      sex: "",
      birth: "",
      patientId: ""
    };
  },
  mounted() {},
  methods: {
    //身份证验证
    checkIdcard(idcard) {
      var Errors = new Array(
        "验证通过!",
        "身份证号码位数不对!",
        "身份证号码出生日期超出范围或含有非法字符!",
        "身份证号码校验错误!",
        "身份证地区非法!"
      );
      var area = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙古",
        21: "辽宁",
        22: "吉林",
        23: "黑龙江",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门",
        91: "国外"
      };
      var Y, JYM;
      var S, M;
      var ereg;
      var idcard_array = new Array();
      idcard_array = idcard.split("");
      //地区检验
      if (area[parseInt(idcard.substr(0, 2))] == null) return Errors[4];
      //身份号码位数及格式检验
      switch (idcard.length) {
        case 15:
          if (
            (parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0 ||
            ((parseInt(idcard.substr(6, 2)) + 1900) % 100 == 0 &&
              (parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0)
          ) {
            ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/; //测试出生日期的合法性
          } else {
            ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/; //测试出生日期的合法性
          }
          if (ereg.test(idcard)) return Errors[0];
          else return Errors[2];
          break;
        case 18:
          //18位身份号码检测
          //出生日期的合法性检查
          //闰年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))
          //平年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))
          if (
            parseInt(idcard.substr(6, 4)) % 4 == 0 ||
            (parseInt(idcard.substr(6, 4)) % 100 == 0 &&
              parseInt(idcard.substr(6, 4)) % 4 == 0)
          ) {
            ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/; //闰年出生日期的合法性正则表达式
          } else {
            ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/; //平年出生日期的合法性正则表达式
          }
          if (ereg.test(idcard)) {
            //测试出生日期的合法性
            //计算校验位
            S =
              (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7 +
              (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9 +
              (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10 +
              (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5 +
              (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8 +
              (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4 +
              (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2 +
              parseInt(idcard_array[7]) * 1 +
              parseInt(idcard_array[8]) * 6 +
              parseInt(idcard_array[9]) * 3;
            Y = S % 11;
            M = "F";
            JYM = "10X98765432";
            M = JYM.substr(Y, 1); //判断校验位
            if (M == idcard_array[17]) return true;
            //检测ID的校验位
            else return Errors[3];
          } else return Errors[2];
          break;
        default:
          return Errors[1];
          break;
      }
    },
    bindingUser() {
      let self = this;
      let action = "";
      let hzxm = $("#hzxm").val();
      let zjh = $("#zjh").val();
      let a = this.checkIdcard(zjh);
      console.log(a);
      if (a != true) {
        $.toptip(a, "error");
        return;
      }
      
      let openid = localStorage.getItem("sec_openId");
      let data = {
        hzxm: hzxm,
        zjh: zjh,
        openid: openid
      };

      this.model.bindUser(data).then(function(res) {
        if (res.data.code == "0") {
          let patientList = JSON.parse(localStorage.getItem("patientList"));
          let age = self.getAge(zjh);
          let sex = self.getSex(zjh);
          patientList.push({
            patientName: hzxm,
            age: age,
            sex: sex,
            IDCard: zjh
          });
          localStorage.setItem("patientList", JSON.stringify(patientList));
          $.toast("保存成功", function() {
            data.action = "mz";
            console.log(data);
            self.model.getInfo(data).then(function(res) {
              if (res.data.msg == "未查询到门诊患者") {
                $.alert(
                  "未查询到您在医院的预留信息，请先完善信息",
                  "提示",
                  function() {
                    //点击确认后的回调函数
                    self.$router.push(
                      "/userFiling?zjh=" + zjh + "&hzxm=" + hzxm
                    );
                  }
                );
                return;
              }

              if (process.env.NODE_ENV == "dev") {
                window.location = "../../patientList.html";
              } else if (process.env.NODE_ENV == "production") {
                window.location = "../../2ysechos/patientList.html";
              }
            });
          });
        } else {
          $.toptip(res.data.msg, "error");
        }
      });
    },
    mzBotton() {
      let self = this;
      this.shows = true;
      this.underlineMove = 10;
      this.color1 = "#000000";
      this.color2 = "#878787";
    },
    zyBotton() {
      let self = this;
      this.shows = false;
      this.underlineMove = 110;
      this.color2 = "#000000";
      this.color1 = "#878787";
    },
    getAge(IDCard) {
      let userCard = IDCard;
      let yearBirth = userCard.substring(6, 10);
      let monthBirth = userCard.substring(10, 12);
      let dayBirth = userCard.substring(12, 14);
      //获取当前年月日并计算年龄
      let myDate = new Date();
      let monthNow = myDate.getMonth() + 1;
      let dayNow = myDate.getDay();
      let age = myDate.getFullYear() - yearBirth;
      if (
        monthNow < monthBirth ||
        (monthNow == monthBirth && dayNow < dayBirth)
      ) {
        age--;
      }
      //得到年龄;
      return age;
    },
    getSex(IDCard) {
      //获取用户身份证号码
      let userCard = IDCard;
      let sex = "";
      //如果身份证号码为undefind则返回空
      if (!userCard) {
        return sexAndAge;
      }
      //获取性别
      if (parseInt(userCard.substr(16, 1)) % 2 == 1) {
        sex = "男";
      } else {
        sex = "女";
      }
      return sex;
    }
  }
};
</script>

<style scoped>
.panel-img {
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
  background-color: #ffffff;
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
.weui-flex__item-wzl {
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
.weui-btn_primary1 {
  position: absolute;
  margin-left: 7%;
  background-color: #05b500;
}
</style>
