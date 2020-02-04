<template>
  <div style="height: 100%;background-color: #EFF7FD;overflow:auto;">
    <div style="position: absolute; width: 100%;z-index: 10;">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <div class="card-hero">
            <img
              src="../../../../static/img/记录_2.png"
              style="position: absolute;top: -7px;width: 80%;"
            />
          </div>
          <span style="font-weight: 700;">就诊人管理</span>
        </div>
      </el-card>

      <div v-for="item in patientList2" :key="item.index" v-loading="loading">
        <el-card class="box-card2" shadow="always" body-style="{height:'20px'}">
          <div slot="header" class="clearfix">
            <span style="font-size:24px;">{{item.patientName}}</span>
            <el-tag v-if="item.age >= 18" style="font-size: 16px;">成人</el-tag>
            <el-tag type="success" v-if="item.age < 18" style="font-size: 16px;">儿童</el-tag>
            <el-button style="float: right;" type="success" v-if="item.patientName==hzxm">已选中</el-button>
            <el-button
              style="float: right;"
              type="primary"
              v-if="item.patientName!=hzxm"
              v-on:click="patientSwitch(item)"
            >可选</el-button>
          </div>
          <div style="float:right;margin-top: 5px;  margin-bottom: 5px; margin-right: 5%;">
            <el-button type="info" plain v-on:click="patientDetail(item)">详情</el-button>
          </div>
        </el-card>
      </div>

      <el-dialog title="详细信息" :visible.sync="dialogFormVisible" append-to-body>
        <el-form
          ref="dataForm"
          :model="temp"
          label-position="left"
          label-width="80px"
          style="width: 290px; margin-left:50px;font-size: 15px;font-weight: 600;"
        >
          <el-row :gutter="30">
            <el-col :span="20">
              <div>
                <el-form-item label="用户姓名:">{{temp.patientName}}</el-form-item>
                <el-form-item label="性别:">{{temp.sex}}</el-form-item>
                <el-form-item label="身份证号:">{{temp.IDcard}}</el-form-item>
                <el-form-item label="年龄:">{{temp.age}}</el-form-item>
              </div>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="danger" @click="patientDelete(temp)">删除</el-button>
          <el-button @click="dialogFormVisible = false" type="primary">返回</el-button>
        </div>
      </el-dialog>

      <div
        style="position: fixed;
                  margin-bottom: 20px;
                  margin-left: 23%;
                  bottom: 0;"
      >
        <div>
          <a href="javascript:;" class="weui-btn weui-btn_primary" v-on:click="patientAdd()">添加就诊人</a>
        </div>
      </div>
    </div>

    <!--<el-dialog title="选择病历号" :visible.sync="isShow">
				<commonSelect v-bind:mzData='mzData' @handleCall="handleCall"></commonSelect>
    </el-dialog>-->
  </div>
</template>

<script>
import weui from "jquery-weui/dist/js/jquery-weui.min";
import model from "./model.js";
import moment from "moment";

export default {
  components: {},
  data() {
    this.model = model(this.axios);
    return {
      patientList2: JSON.parse(localStorage.getItem("patientList")),
      zjh: localStorage.getItem("sec_patientIdcard"),
      hzxm: localStorage.getItem("sec_patientName"),
      personChoice: false,
      sex: "",
      loading: false,
      dialogFormVisible: false,
      temp: {
        patientName: "",
        mobile: "",
        sex: "",
        IDcard: "",
        age: ""
      }
    };
  },
  created() {
    this.pageInit();
    // let patientList2 = this.patientList;
    // localStorage.setItem("patientList", JSON.stringify(patientList2));
  },
  mounted() {},
  methods: {
    pageInit() {
      let self = this;
      let flag = localStorage.getItem("patientList");
      if (flag == null) {
        let age = self.getAge(self.zjh);
        let sex = self.getSex(self.zjh);
        let patientList = [
          { patientName: self.hzxm, age: age, sex: sex, IDCard: self.zjh }
        ];
        localStorage.setItem("patientList", JSON.stringify(patientList));
      } else {
        self.patientList2 = JSON.parse(localStorage.getItem("patientList"));
      }
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
    getyyyymmdd(IDCard) {
      let userCard = IDCard;
      console.log(userCard);

      let yearBirth = userCard.substring(6, 10);
      let monthBirth = userCard.substring(10, 12);
      let dayBirth = userCard.substring(12, 14);
      //获取当前年月日并计算年龄
      //得到年龄;
      return yearBirth + "-" + monthBirth + "-" + dayBirth;
    },
    patientSwitch(item) {
      let self = this;
      $.confirm({
        title: "确认切换",
        text: "您确认要切换就诊人吗？",
        onOK: function() {
          //点击确认
          self.loading = true;
          localStorage.setItem("sec_patientName", item.patientName);
          localStorage.setItem("sec_patientIdcard", item.IDCard);
          localStorage.setItem("sec_cardno", item.IDCard);
          localStorage.setItem("sec_birth", self.getyyyymmdd(item.IDCard));
          let sex = self.getSex(item.IDCard);
          let flag;
          if (sex == "男") {
            flag = 1;
          } else {
            flag = 2;
          }
          localStorage.setItem("sec_sex", flag);
          self.hzxm = item.patientName;
          //localStorage.setItem()
          self.$forceUpdate();
          self.loading = false;
        }
      });
    },
    patientAdd() {
      let self = this;
      if (self.patientList2.length >= 3) {
        $.toast("抱歉，可添加就诊人已达上限", "forbidden");
      } else {
        self.$router.push("/userBinding");
      }
    },
    patientDetail(item) {
      let self = this;
      self.dialogFormVisible = true;
      self.temp.patientName = item.patientName;
      self.temp.sex = item.sex;
      self.temp.IDcard = item.IDCard;
      self.temp.age = item.age;
    },
    patientDelete(temp) {
      let self = this;
      let index = 0;
      for (let item of self.patientList2) {
        //console.log(item.IDCard, temp.IDcard);
        if (item.IDCard == temp.IDcard) {
          self.patientList2.splice(index, 1);
        }
        index++;
      }
      localStorage.setItem("patientList", JSON.stringify(self.patientList2));
      self.dialogFormVisible = false;
      $.toast("删除成功！");
      //console.log(self.patientList2);
    }
  },
  filters: {
    formatDate: function(value) {
      let time;
      if (value != undefined) {
        var y = value.substr(0, 4);
        var M = value.substr(4, 2);
        var D = value.substr(6, 2);
        time = y + "-" + M + "-" + D;
      } else {
        time = "";
      }

      //console.log(time);
      return time;
    },
    moneyCut: function(value) {
      let money;
      if (value != undefined) {
        money = value.substr(0, value.length - 2);
      } else {
        money = "";
      }
      //console.log(money);
      return money;
    }
  }
};
</script>

<style>
.el-dialog {
  width: calc(100vw - 20px);
}
.el-card__body {
  padding: 0px;
}
.el-collapse-item__header {
  font-size: 14px;
  font-weight: 600;
  margin-left: 26px;
}
.el-input {
  position: relative;
  font-size: 17px;
  display: inline-block;
  width: 33%;
}
.el-collapse-item__content {
  padding-bottom: 3px;
}
</style>

<style scoped>
.el-button--primary {
  background-color: #4ccbdb;
  border-color: #4ccbdb;
}
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
.select-input {
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
.re-content {
  padding-left: 15px;
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
.re-main {
  height: 100%;
  background-color: #ffffff;
}
.re-row {
  width: 100%;
  height: 125px;
  margin-top: 20px;
}
.card-hero {
  width: 50px;
  height: 40px;
  line-height: 20px;
  float: left;
  position: relative;
}
.ad-button {
  float: right;
  margin-right: 10px;
  position: relative;
  top: -7px;
}
.select-fin-2 {
  width: 50px;
  height: 100%;
  float: right;
  line-height: 41px;
  margin-right: 39px;
}
.text {
  font-size: 20px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
}
.box-card2 {
  width: 90%;
  margin-left: 5%;
  margin-top: 15px;
}
.el-dialog__body {
  padding: 0px 0px;
}
</style>