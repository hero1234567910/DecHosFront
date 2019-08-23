<template>
  <div>
    <div class="weui-tab" id="page-infinite-navbar">
      <div class="weui-tab__bd" id="#app">
        <div id="tab1" class="weui-tab__bd-item weui-tab__bd-item--active">
          <h2 class="doc-head">{{title}}</h2>
          <h4 class="doc-info">发布时间:{{infoDate}}</h4>
          <h6></h6>
          <div class="hos-content" v-html="content">{{content}}</div>
          <!-- <div class="hos-attach">
            <span class="attach-font">
              附件下载:
              <span id="attachList"></span>
            </span>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import weui from "jquery-weui/dist/js/jquery-weui.min";
import evn from "../index/utils/evn.js";
import model from "./model.js";
import Guid from "./Guid.vue";
export default {
  name: "hosProfile.vue",
  data() {
    this.model = model(this.axios);

    return {
      title: "",
      infoDate: "",
      createUserName: "",
      content: "",
      guid: ""
    };
  },
  created() {
    this.judge();
    //this.GetQueryString();
  },
  mounted() {
    this.getAttachList();
  },
  methods: {
    //修改过的
    GetQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = location.search.substr(1).match(reg); //search,查询？后面的参数，并匹配正则
      if (r != null) return decodeURI(r[2]);
      return null;
    },

    judge() {
      let self = this;
      var infoType = this.GetQueryString("infoType");
      var url1;

      if (process.env.NODE_ENV == "dev") {
        url1 = "http://localhost:9091";
      } else if (process.env.NODE_ENV == "production") {
        url1 = "";
      }

      //医院简介
      if (infoType == "HosIntroduction") {
        let data = this;
        this.model.getHosIntroduction(data).then(function(res) {
          if (res.data.code == "0") {
            let title = res.data.data.title;
            let infoDate = res.data.data.infoDate;
            let createUserName = res.data.data.createUserName;
            let content = res.data.data.content;
            let attachGuid = res.data.data.attachGuid;
            self.guid = attachGuid;
            Guid.guid = attachGuid;
            self.title = title;
            self.infoDate = infoDate;
            self.createUserName = createUserName;
            self.guid = attachGuid;
            var _str = res.data.data.content.replace(
              /<img src="/g,
              '<img class="hos-img" src='
            );
            self.content = _str;
          } else {
            $.alert(res.data.msg);
          }
        });
      }

      //门诊流程
      if (infoType == "OutpatientProcess") {
        let data = this;
        this.model.getOutpatientProcess(data).then(function(res) {
          if (res.data.code == "0") {
            let title = res.data.data.title;
            let infoDate = res.data.data.infoDate;
            let createUserName = res.data.data.createUserName;
            let content = res.data.data.content;
            let attachGuid = res.data.data.attachGuid;
            self.guid = attachGuid;
            Guid.guid = attachGuid;
            self.title = title;
            self.infoDate = infoDate;
            self.createUserName = createUserName;
            var _str = res.data.data.content.replace(
              /<img src="/g,
              '<img class="hos-img" src='
            );
            self.content = _str;
          } else {
            $.alert(res.data.msg);
          }
        });
      }

      //楼层分布
      if (infoType == "FloorDistribution") {
        let data = this;
        this.model.getFloorDistribution(data).then(function(res) {
          if (res.data.code == "0") {
            let title = res.data.data.title;
            let infoDate = res.data.data.infoDate;
            let createUserName = res.data.data.createUserName;
            let content = res.data.data.content;
            let attachGuid = res.data.data.attachGuid;
            self.guid = attachGuid;
            Guid.guid = attachGuid;
            self.title = title;
            self.infoDate = infoDate;
            self.createUserName = createUserName;
            var _str = res.data.data.content.replace(
              /<img src="/g,
              '<img class="hos-img" src='
            );
            self.content = _str;
          } else {
            $.alert(res.data.msg);
          }
        });
      }

      //就诊须知
      if (infoType == "PatientNeedtoKnow") {
        let data = this;
        this.model.getPatientNeedtoKnow(data).then(function(res) {
          if (res.data.code == "0") {
            let title = res.data.data.title;
            let infoDate = res.data.data.infoDate;
            let createUserName = res.data.data.createUserName;
            let content = res.data.data.content;
            let attachGuid = res.data.data.attachGuid;
            self.guid = attachGuid;
            Guid.guid = attachGuid;
            self.title = title;
            self.infoDate = infoDate;
            self.createUserName = createUserName;
            var _str = res.data.data.content.replace(
              /<img src="/g,
              '<img class="hos-img" src="'
            );
            self.content = _str;
          } else {
            $.alert(res.data.msg);
          }
        });
      }

      //入院引导
      if (infoType == "DirectAdmission") {
        let data = this;
        this.model.getDirectAdmission(data).then(function(res) {
          if (res.data.code == "0") {
            let title = res.data.data.title;
            let infoDate = res.data.data.infoDate;
            let createUserName = res.data.data.createUserName;
            let content = res.data.data.content;
            let attachGuid = res.data.data.attachGuid;
            self.guid = attachGuid;
            Guid.guid = attachGuid;
            self.title = title;
            self.infoDate = infoDate;
            self.createUserName = createUserName;
            var _str = res.data.data.content.replace(
              /<img src="/g,
              '<img class="hos-img" src="'
            );
            self.content = _str;
          } else {
            $.alert(res.data.msg);
          }
        });
      }

      //住院须知
      if (infoType == "Hospitalisation") {
        let data = this;
        this.model.getHospitalisation(data).then(function(res) {
          if (res.data.code == "0") {
            let title = res.data.data.title;
            let infoDate = res.data.data.infoDate;
            let createUserName = res.data.data.createUserName;
            let content = res.data.data.content;
            let attachGuid = res.data.data.attachGuid;
            self.guid = attachGuid;
            Guid.guid = attachGuid;
            self.title = title;
            self.infoDate = infoDate;
            self.createUserName = createUserName;
            var _str = res.data.data.content.replace(
              /<img src="/g,
              '<img class="hos-img" src="'
            );
            self.content = _str;
          } else {
            $.alert(res.data.msg);
          }
        });
      }

      //出院导引
      if (infoType == "OutHospitalInfo") {
        let data = this;
        this.model.getOutHospitalInfo(data).then(function(res) {
          if (res.data.code == "0") {
            let title = res.data.data.title;
            let infoDate = res.data.data.infoDate;
            let createUserName = res.data.data.createUserName;
            let content = res.data.data.content;
            let attachGuid = res.data.data.attachGuid;
            self.guid = attachGuid;
            Guid.guid = attachGuid;
            self.title = title;
            self.infoDate = infoDate;
            self.createUserName = createUserName;
            var _str = res.data.data.content.replace(
              /<img src="/g,
              '<img class="hos-img" src="'
            );

            self.content = _str;
          } else {
            $.alert(res.data.msg);
          }
        });
      }

      //出院须知
      if (infoType == "OutNeedKnow") {
        let data = this;
        this.model.getOutNeedKnow(data).then(function(res) {
          if (res.data.code == "0") {
            let title = res.data.data.title;
            let infoDate = res.data.data.infoDate;
            let createUserName = res.data.data.createUserName;
            let content = res.data.data.content;
            let attachGuid = res.data.data.attachGuid;
            self.guid = attachGuid;
            Guid.guid = attachGuid;
            self.title = title;
            self.infoDate = infoDate;
            self.createUserName = createUserName;
            var _str = res.data.data.content.replace(
              /<img src="/g,
              '<img class="hos-img" src="'
            );
            self.content = _str;
          } else {
            $.alert(res.data.msg);
          }
        });
      }

      //科室简介
      if (infoType == "DepartmentsIntroduction") {
        let data = this;
        this.model.getDepartmentsIntroduction(data).then(function(res) {
          if (res.data.code == "0") {
            let title = res.data.data.title;
            let infoDate = res.data.data.infoDate;
            let createUserName = res.data.data.createUserName;
            let content = res.data.data.content;
            let attachGuid = res.data.data.attachGuid;
            self.guid = attachGuid;
            Guid.guid = attachGuid;
            self.title = title;
            self.infoDate = infoDate;
            self.createUserName = createUserName;
            var _str = res.data.data.content.replace(
              /<img src="/g,
              '<img class="hos-img" src="'
            );
            self.content = _str;
          } else {
            $.alert(res.data.msg);
          }
        });
      }

      //健康教育
      if (infoType == "HealthEducation") {
        let data = this;
        this.model.getHealthEducation(data).then(function(res) {
          if (res.data.code == "0") {
            let title = res.data.data.title;
            let infoDate = res.data.data.infoDate;
            let createUserName = res.data.data.createUserName;
            let content = res.data.data.content;
            let attachGuid = res.data.data.attachGuid;
            self.guid = attachGuid;
            Guid.guid = attachGuid;
            self.title = title;
            self.infoDate = infoDate;
            self.createUserName = createUserName;
            var _str = res.data.data.content.replace(
              /<img src="/g,
              '<img class="hos-img" src="'
            );
            self.content = _str;
          } else {
            $.alert(res.data.msg);
          }
        });
      }

      //健康教育
      if (infoType == "HospitalGuide") {
        let data = this;
        this.model.getHospitalGuide(data).then(function(res) {
          if (res.data.code == "0") {
            let title = res.data.data.title;
            let infoDate = res.data.data.infoDate;
            let createUserName = res.data.data.createUserName;
            let content = res.data.data.content;
            let attachGuid = res.data.data.attachGuid;
            self.guid = attachGuid;
            Guid.guid = attachGuid;
            self.title = title;
            self.infoDate = infoDate;
            self.createUserName = createUserName;
            var _str = res.data.data.content.replace(
              /<img src="/g,
              '<img class="hos-img" src="'
            );
            self.content = _str;
          } else {
            $.alert(res.data.msg);
          }
        });
      }

      //出院引导
      if (infoType == "OutHospital") {
        let data = this;
        this.model.getOutHospitalGuide(data).then(function(res) {
          if (res.data.code == "0") {
            let title = res.data.data.title;
            let infoDate = res.data.data.infoDate;
            let createUserName = res.data.data.createUserName;
            let content = res.data.data.content;
            let attachGuid = res.data.data.attachGuid;
            self.guid = attachGuid;
            Guid.guid = attachGuid;
            self.title = title;
            self.infoDate = infoDate;
            self.createUserName = createUserName;
            var _str = res.data.data.content.replace(
              /<img src="/g,
              '<img class="hos-img" src="'
            );
            self.content = _str;
          } else {
            $.alert(res.data.msg);
          }
        });
      }

      //复诊预约
      if (infoType == "FollowAppointment") {
        let data = this;
        this.model.getFollowAppointment(data).then(function(res) {
          if (res.data.code == "0") {
            let title = res.data.data.title;
            let infoDate = res.data.data.infoDate;
            let createUserName = res.data.data.createUserName;
            let content = res.data.data.content;
            let attachGuid = res.data.data.attachGuid;
            self.guid = attachGuid;
            Guid.guid = attachGuid;
            self.title = title;
            self.infoDate = infoDate;
            self.createUserName = createUserName;
            var _str = res.data.data.content.replace(
              /<img src="/g,
              '<img class="hos-img" src="'
            );
            self.content = _str;
          } else {
            $.alert(res.data.msg);
          }
        });
      }

      //体检预约
      if (infoType == "MedicalAppointment") {
        let data = this;
        this.model.getMedicalAppointment(data).then(function(res) {
          if (res.data.code == "0") {
            let title = res.data.data.title;
            let infoDate = res.data.data.infoDate;
            let createUserName = res.data.data.createUserName;
            let content = res.data.data.content;
            let attachGuid = res.data.data.attachGuid;
            self.guid = attachGuid;
            Guid.guid = attachGuid;
            self.title = title;
            self.infoDate = infoDate;
            self.createUserName = createUserName;
            var _str = res.data.data.content.replace(
              /<img src="/g,
              '<img class="hos-img" src="'
            );
            self.content = _str;
          } else {
            $.alert(res.data.msg);
          }
        });
      }
    },

    getAttachList() {
      let self = this;
      //console.log(localStorage.getItem('attachGuid'));
      setTimeout(function() {
        let guid = Guid.guid;
        let data = {
          guid: guid
        };
        self.model.getAttachList(data).then(function(res) {
          if (res.data.code == "0" && res.data.data.length > 0) {
            for (let i = 0; i < res.data.data.length; i++) {
              let mdata = res.data.data;
              let last = mdata[i].contentType.substr(
                "1",
                mdata[i].contentType.length
              );
              $("#attachList").append(
                "<span><a href=" +
                  mdata[i].url +
                  " download=" +
                  mdata[i].attachName +
                  "><em></em>" +
                  mdata[i].attachName +
                  "</a></span>"
              );
            }
          } else {
            $.toptip(res.data.msg, "error");
          }
        });
      },1500);
    }
  }
};
</script>

<style>
.doc-head {
  text-align: center;
}
.doc-info {
  text-align: center;
}
.p-style {
  margin-left: 20px;
  margin-right: 20px;
  text-indent: 2em;
}
body {
  overflow: auto;
}
.hos-content {
  margin-top: 0px;
  margin-right: 12px;
  margin-left: 12px;
}
.hos-img {
  display: inline-block;
  height: auto;
  max-width: 100%;
}
.hos-attach {
  margin-top: 0px;
  margin-right: 12px;
  margin-left: 12px;
}
.attach-font {
  font-size: medium;
  font-weight: 600;
}
</style>
