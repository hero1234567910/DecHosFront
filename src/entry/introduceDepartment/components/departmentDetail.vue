<template>
  <div style="height: 100%;background-color: #EFF7FD;overflow:auto;">
    <div class="wzl-head">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <div class="card-hero">
            <img
              src="../../../../static/images/科室工作量.png"
              style="position: absolute;top: -7px;width: 80%;"
            />
          </div>
          <span style="font-weight: 700;">科室详情</span>
        </div>
      </el-card>
    </div>
    <div class="all" style="margin-top: 70px;">
      <div class="de-head">
        <p class="wzl-title">{{ksmczw}}</p>
      </div>
      <div class="de-body">
        <p class="wzl-font" v-html="kscontent">{{kscontent}}</p>
      </div>
    </div>
  </div>
</template>


<script>
import Content from "./content.vue";
export default {
  data() {
    return {
      ksmc: "",
      ksmczw: "",
      kscontent: ""
    };
  },
  mounted() {
    this.showDetails();
  },
  methods: {
    showDetails() {
      let self = this;
      self.ksmc = this.$route.query.ksmc;
      if (self.ksmc == "xxgnk") {
        self.ksmczw = Content.xxgnk;
        self.kscontent = Content.xxgnknr;
      }
      if (self.ksmc == "hxnk") {
        self.ksmczw = Content.hxnk;
        self.kscontent = Content.hxnknr;
      }
      if (self.ksmc == "xhnk") {
        self.ksmczw = Content.xhnk;
        self.kscontent = Content.xhnknr;
      }
      if (self.ksmc == "gk") {
        self.ksmczw = Content.gk;
        self.kscontent = Content.gknr;
      }
      if (self.ksmc == "szwk") {
        self.ksmczw = Content.szwk;
        self.kscontent = Content.szwknr;
      }
      if (self.ksmc == "pwk") {
        self.ksmczw = Content.pwk;
        self.kscontent = Content.pwknr;
      }
      if (self.ksmc == "sjwk") {
        self.ksmczw = Content.sjwk;
        self.kscontent = Content.sjwknr;
      }
      if (self.ksmc == "fck") {
        self.ksmczw = Content.fck;
        self.kscontent = Content.fcknr;
      }
      if (self.ksmc == "erg") {
        self.ksmczw = Content.erg;
        self.kscontent = Content.ergnr;
      }
      if (self.ksmc == "sjnk") {
        self.ksmczw = Content.sjnk;
        self.kscontent = Content.sjnknr;
      }
      if (self.ksmc == "zyk") {
        self.ksmczw = Content.zyk;
        self.kscontent = Content.zyknr;
      }
      if (self.ksmc == "ssmzk") {
        self.ksmczw = Content.ssmzk;
        self.kscontent = Content.ssmzknr;
      }
      if (self.ksmc == "fsk") {
        self.ksmczw = Content.fsk;
        self.kscontent = Content.fsknr;
      }
      if (self.ksmc == "gnk") {
        self.ksmczw = Content.gnk;
        self.kscontent = Content.gnknr;
      }
      if (self.ksmc == "jyk") {
        self.ksmczw = Content.jyk;
        self.kscontent = Content.jyknr;
      }
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
</style>

<style scoped>
.wzl-font {
  text-indent: 2em;
}
.wzl-title {
  font-size: 30px;
  font-weight: 600;
  text-align: center;
}
.de-body {
  padding: 15px;
}
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
</style>

