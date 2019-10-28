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
      <div class="weui-cells"  style="margin-top: 4.176471em;">
        <a class="weui-cell weui-cell_access" href="javascript:;" v-on:click="pfk()">
          <div class="weui-cell__hd">
            <img src="../../../../static/images/皮肤科.png" />
          </div>
          <div class="weui-cell__bd">
            <p>皮肤科</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>

        <a class="weui-cell weui-cell_access" href="javascript:;" v-on:click="nfmk()">
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

        <a class="weui-cell weui-cell_access" href="javascript:;" v-on:click="xxgnk()">
          <div class="weui-cell__hd">
            <img src="../../../../static/images/心血管.png" />
          </div>
          <div class="weui-cell__bd">
            <p>心血管内科</p>
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
export default {
  data() {
    // this.model = model(this.axios);
    return {};
  },
  methods:{
    tomainList() {
      if (process.env.NODE_ENV == "dev") {
        window.location = "../../index.html";
      } else if (process.env.NODE_ENV == "production") {
        window.location = "../../2ysechos/index.html";
      }
    },
      pfk(){
          this.$router.push('/professorList?ksmc='+'pfk');
      },
      nfmk(){
          this.$router.push('/professorList?ksmc='+'nfmk');
      },
      xxgnk(){
          this.$router.push('/professorList?ksmc='+'xxgnk');
      },
      hxnk(){
          this.$router.push('/professorList?ksmc='+'hxnk');
      },
      xhnk(){
          this.$router.push('/professorList?ksmc='+'xhnk');
      },
      gk(){
          this.$router.push('/professorList?ksmc='+'gk');
      },
      szwk(){
          this.$router.push('/professorList?ksmc='+'szwk');
      },
      pwk(){
          this.$router.push('/professorList?ksmc='+'pwk');
      },
      sjwk(){
          this.$router.push('/professorList?ksmc='+'sjwk');
      },
      fck(){
          this.$router.push('/professorList?ksmc='+'fck');
      },
      erk(){
          this.$router.push('/professorList?ksmc='+'erk');
      },
      erbhk(){
        this.$router.push('/professorList?ksmc='+'erbhk');
      },
      yk(){
        this.$router.push('/professorList?ksmc='+'yk');
      },
      xnk(){
        this.$router.push('/professorList?ksmc='+'xnk');
      },
      xlzxk(){
         this.$router.push('/professorList?ksmc='+'xlzxk');
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
.wzl-head{
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
</style>
