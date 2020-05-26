<template>
  <div style="height: 100%;background-color: #EFF7FD;overflow:auto;">
    <div class="wzl-head">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <div class="card-hero">
            <img
              src="../../../../static/images/专家信息.png"
              style="position: absolute;top: -7px;width: 80%;"
            />
          </div>
          <span style="font-weight: 700;">专家简介</span>
        </div>
      </el-card>
    </div>

    <div class="flow" style="margin-top: 0px;">
      <div class="weui-cells" style="margin-top: 4.176471em;">
        <div v-for="item in departmentList" :key="item.rowGuid">
          <a
            class="weui-cell weui-cell_access"
            href="javascript:;"
            @click="toProfessor(item.rowGuid)"
          >
            <div class="weui-cell__hd">
              <img class="iconStyle" :src="item.imgUrl | picFilter" />
            </div>
            <div class="weui-cell__bd">
              <p>{{item.departmentName}}</p>
            </div>
            <div class="weui-cell__ft"></div>
          </a>
        </div>

        <!-- <a class="weui-cell weui-cell_access" href="javascript:;" v-on:click="nfmk()">
          <div class="weui-cell__hd">
            <img src="../../../../static/images/内分泌科.png" />
          </div>
          <div class="weui-cell__bd">
            <p>内分泌科</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>

        <a class="weui-cell weui-cell_access" href="javascript:;" v-on:click="xhnk()">
          <div class="weui-cell__hd">
            <img src="../../../../static/images/消化.png" />
          </div>
          <div class="weui-cell__bd">
            <p>消化内科</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>

        <a class="weui-cell weui-cell_access" href="javascript:;" v-on:click="pwk()">
          <div class="weui-cell__hd">
            <img src="../../../../static/images/外科.png" />
          </div>
          <div class="weui-cell__bd">
            <p>普外科</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>

        <a class="weui-cell weui-cell_access" href="javascript:;" v-on:click="fck()">
          <div class="weui-cell__hd">
            <img src="../../../../static/images/妇产科.png" />
          </div>
          <div class="weui-cell__bd">
            <p>妇产科</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>

        <a class="weui-cell weui-cell_access" href="javascript:;" v-on:click="gk()">
          <div class="weui-cell__hd">
            <img src="../../../../static/images/骨.png" />
          </div>
          <div class="weui-cell__bd">
            <p>骨科</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>

        <a class="weui-cell weui-cell_access" href="javascript:;" v-on:click="xnk()">
          <div class="weui-cell__hd">
            <img src="../../../../static/images/心血管.png" />
          </div>
          <div class="weui-cell__bd">
            <p>心内科</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>

        <a class="weui-cell weui-cell_access" href="javascript:;" v-on:click="hxnk()">
          <div class="weui-cell__hd">
            <img src="../../../../static/images/呼吸.png" />
          </div>
          <div class="weui-cell__bd">
            <p>呼吸内科</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>

        <a class="weui-cell weui-cell_access" href="javascript:;" v-on:click="sjwk()">
          <div class="weui-cell__hd">
            <img src="../../../../static/images/神经2.png" />
          </div>
          <div class="weui-cell__bd">
            <p>神经外科</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>

        <a class="weui-cell weui-cell_access" href="javascript:;" v-on:click="erk()">
          <div class="weui-cell__hd">
            <img src="../../../../static/images/儿科.png" />
          </div>
          <div class="weui-cell__bd">
            <p>儿科</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>

        <a class="weui-cell weui-cell_access" href="javascript:;" v-on:click="erbhk()">
          <div class="weui-cell__hd">
            <img src="../../../../static/images/耳鼻喉.png" />
          </div>
          <div class="weui-cell__bd">
            <p>耳鼻喉科</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>

        <a class="weui-cell weui-cell_access" href="javascript:;" v-on:click="yk()">
          <div class="weui-cell__hd">
            <img src="../../../../static/images/眼科.png" />
          </div>
          <div class="weui-cell__bd">
            <p>眼科</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>

        <a class="weui-cell weui-cell_access" href="javascript:;" v-on:click="xlzxk()">
          <div class="weui-cell__hd">
            <img src="../../../../static/images/心理.png" />
          </div>
          <div class="weui-cell__bd">
            <p>心理咨询科</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>
        <a class="weui-cell weui-cell_access" href="javascript:;" v-on:click="gdwk()">
          <div class="weui-cell__hd">
            <img src="../../../../static/images/肝.png" />
          </div>
          <div class="weui-cell__bd">
            <p>肝胆外科</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>
        <a class="weui-cell weui-cell_access" href="javascript:;" v-on:click="jzk()">
          <div class="weui-cell__hd">
            <img src="../../../../static/images/急诊科.png" />
          </div>
          <div class="weui-cell__bd">
            <p>急诊科</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>
        <a class="weui-cell weui-cell_access" href="javascript:;" v-on:click="snk()">
          <div class="weui-cell__hd">
            <img src="../../../../static/images/肾.png" />
          </div>
          <div class="weui-cell__bd">
            <p>肾内科</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>
        <a class="weui-cell weui-cell_access" href="javascript:;" v-on:click="gcwk()">
          <div class="weui-cell__hd">
            <img src="../../../../static/images/肛肠外科.png" />
          </div>
          <div class="weui-cell__bd">
            <p>肛肠科</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>
        <a class="weui-cell weui-cell_access" href="javascript:;" v-on:click="xxwk()">
          <div class="weui-cell__hd">
            <img src="../../../../static/images/胸外科.png" />
          </div>
          <div class="weui-cell__bd">
            <p>胸心外科</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>
        <a class="weui-cell weui-cell_access" href="javascript:;" v-on:click="mnwk()">
          <div class="weui-cell__hd">
            <img src="../../../../static/images/泌尿.png" />
          </div>
          <div class="weui-cell__bd">
            <p>泌尿外科</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>
        <a class="weui-cell weui-cell_access" href="javascript:;" v-on:click="csk()">
          <div class="weui-cell__hd">
            <img src="../../../../static/images/超声波.png" />
          </div>
          <div class="weui-cell__bd">
            <p>超声科</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>-->

        <div style="margin-top: 10px;margin-bottom: 10px;">
          <div>
            <a href="javascript:;" class="weui-btn weui-btn_primary" v-on:click="tomainList()">返回主页面</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import model from "./model.js";
import env from "../utils/evn.js";
export default {
  data() {
    this.model = model(this.axios);
    return {
      departmentList: []
    };
  },
  beforeRouteEnter(to, from, next) {
    // 路由导航钩子，此时还不能获取组件实例 `this`，所以无法在data中定义变量（利用vm除外）
    // 参考 https://router.vuejs.org/zh-cn/advanced/navigation-guards.html
    // 所以，利用路由元信息中的meta字段设置变量，方便在各个位置获取。这就是为什么在meta中定义isBack
    // 参考 https://router.vuejs.org/zh-cn/advanced/meta.html
    if (from.name == "professorList") {
      to.meta.isBack = true;
      //判断是从哪个路由过来的，
      //如果是page2过来的，表明当前页面不需要刷新获取新数据，直接用之前缓存的数据即可
    }
    // console.log(from.name);
    // console.log(to.meta.isBack);
    next();
  },
  activated() {
    if (!this.$route.meta.isBack) {
      // 如果isBack是false，表明需要获取新数据，否则就不再请求，直接使用缓存的数据
      this.initDepartmentList();
    }
    // 恢复成默认的false，避免isBack一直是true，导致下次无法获取数据
    this.$route.meta.isBack = false;
  },
  created() {
    this.initDepartmentList();
  },
  filters: {
    picFilter: function(value) {
      let imgUrl = "";
      let netlocal = env.SEC_HOSAPI + "/file/";
      if (value == "" || value == null) {
        imgUrl = require("../../../../static/dochead/400398144.png");
      } else {
        imgUrl = netlocal + value;
      }
      return imgUrl;
    }
  },
  methods: {
    tomainList() {
      if (process.env.NODE_ENV == "dev") {
        window.location = "../../index.html";
      } else if (process.env.NODE_ENV == "production") {
        window.location = "../../2ysechos/index.html";
      }
    },
    initDepartmentList() {
      $.showLoading();
      let self = this;
      this.model.getDepartmentListToWx().then(function(res) {
        $.hideLoading();
        if (res.data.code == "0") {
          self.departmentList = res.data.data;
        } else {
          $.toptip(res.data.msg, "error");
        }
      });
    },
    toProfessor(data) {
      this.$router.push("/professorList?departmentGuid=" + data);
    }
    // pfk() {
    //   this.$router.push("/professorList?ksmc=" + "pfk");
    // },
    // nfmk() {
    //   this.$router.push("/professorList?ksmc=" + "nfmk");
    // },
    // xxgnk() {
    //   this.$router.push("/professorList?ksmc=" + "xxgnk");
    // },
    // hxnk() {
    //   this.$router.push("/professorList?ksmc=" + "hxnk");
    // },
    // xhnk() {
    //   this.$router.push("/professorList?ksmc=" + "xhnk");
    // },
    // gk() {
    //   this.$router.push("/professorList?ksmc=" + "gk");
    // },
    // szwk() {
    //   this.$router.push("/professorList?ksmc=" + "szwk");
    // },
    // pwk() {
    //   this.$router.push("/professorList?ksmc=" + "pwk");
    // },
    // sjwk() {
    //   this.$router.push("/professorList?ksmc=" + "sjwk");
    // },
    // fck() {
    //   this.$router.push("/professorList?ksmc=" + "fck");
    // },
    // erk() {
    //   this.$router.push("/professorList?ksmc=" + "erk");
    // },
    // erbhk() {
    //   this.$router.push("/professorList?ksmc=" + "erbhk");
    // },
    // yk() {
    //   this.$router.push("/professorList?ksmc=" + "yk");
    // },
    // xnk() {
    //   this.$router.push("/professorList?ksmc=" + "xnk");
    // },
    // xlzxk() {
    //   this.$router.push("/professorList?ksmc=" + "xlzxk");
    // },
    // gdwk() {
    //   this.$router.push("/professorList?ksmc=" + "gdwk");
    // },
    // jzk() {
    //   this.$router.push("/professorList?ksmc=" + "jzk");
    // },
    // snk() {
    //   this.$router.push("/professorList?ksmc=" + "snk");
    // },
    // gcwk() {
    //   this.$router.push("/professorList?ksmc=" + "gcwk");
    // },
    // xxwk() {
    //   this.$router.push("/professorList?ksmc=" + "xxwk");
    // },
    // mnwk() {
    //   this.$router.push("/professorList?ksmc=" + "mnwk");
    // },
    // csk() {
    //   this.$router.push("/professorList?ksmc=" + "csk");
    // }
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
</style>

<style scoped>
.card-hero {
  width: 50px;
  height: 40px;
  line-height: 20px;
  float: left;
  position: relative;
}
.el-card__body {
  padding: 0px;
}
.el-tabs__nav-scroll {
  overflow-y: auto;
}
.el-tabs--left,
.el-tabs--right {
  height: calc(100vh - 137px);
}
.wzl-head {
  position: absolute;
  width: 100%;
  z-index: 99;
}
.weui-btn_primary {
  background-color: #4ccbdb;
}
.weui-btn {
  width: 230px;
}
.iconStyle {
  height: 32px;
  width: 32px;
}
</style>
