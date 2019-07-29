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
          <span style="font-weight: 700;">科室简介</span>
        </div>
      </el-card>
    </div>

    <div class="flow" style="margin-top: 0px;">
      <div class="weui-cells"  style="margin-top: 4.176471em;">
        <a class="weui-cell weui-cell_access" href="javascript:;" v-on:click="xxgnk()">
          <div class="weui-cell__hd">
            <img src="../../../../static/images/心血管.png" />
          </div>
          <div class="weui-cell__bd">
            <p>心血管内科</p>
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

        <a class="weui-cell weui-cell_access" href="javascript:;" v-on:click="xhnk()">
          <div class="weui-cell__hd">
            <img src="../../../../static/images/消化.png" />
          </div>
          <div class="weui-cell__bd">
            <p>消化内科</p>
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

        <a class="weui-cell weui-cell_access" href="javascript:;" v-on:click="szwk()">
          <div class="weui-cell__hd">
            <img src="../../../../static/images/手足护理.png" />
          </div>
          <div class="weui-cell__bd">
            <p>手足外科</p>
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

        <a class="weui-cell weui-cell_access" href="javascript:;" v-on:click="sjwk()">
          <div class="weui-cell__hd">
            <img src="../../../../static/images/神经2.png" />
          </div>
          <div class="weui-cell__bd">
            <p>神经外科</p>
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

        <a class="weui-cell weui-cell_access" href="javascript:;" v-on:click="erg()">
          <div class="weui-cell__hd">
            <img src="../../../../static/images/儿科.png" />
          </div>
          <div class="weui-cell__bd">
            <p>儿科</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>

        <a class="weui-cell weui-cell_access" href="javascript:;" v-on:click="sjnk()">
          <div class="weui-cell__hd">
            <img src="../../../../static/images/神经.png" />
          </div>
          <div class="weui-cell__bd">
            <p>神经内科</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>

        <a class="weui-cell weui-cell_access" href="javascript:;" v-on:click="zyk()">
          <div class="weui-cell__hd">
            <img src="../../../../static/images/中医.png" />
          </div>
          <div class="weui-cell__bd">
            <p>中医科</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>

        <a class="weui-cell weui-cell_access" href="javascript:;" v-on:click="ssmzk()">
          <div class="weui-cell__hd">
            <img src="../../../../static/images/麻醉科.png" />
          </div>
          <div class="weui-cell__bd">
            <p>手术麻醉科</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>

        <a class="weui-cell weui-cell_access" href="javascript:;" v-on:click="fsk()">
          <div class="weui-cell__hd">
            <img src="../../../../static/images/放射卫生.png" />
          </div>
          <div class="weui-cell__bd">
            <p>放射科</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>

        <a class="weui-cell weui-cell_access" href="javascript:;" v-on:click="gnk()">
          <div class="weui-cell__hd">
            <img src="../../../../static/images/超声波.png" />
          </div>
          <div class="weui-cell__bd">
            <p>功能科</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>

        <a class="weui-cell weui-cell_access" href="javascript:;" v-on:click="jyk()">
          <div class="weui-cell__hd">
            <img src="../../../../static/images/检验科.png" />
          </div>
          <div class="weui-cell__bd">
            <p>检验科</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>
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
      xxgnk(){
          this.$router.push('/departmentDetail?ksmc='+'xxgnk');
      },
      hxnk(){
          this.$router.push('/departmentDetail?ksmc='+'hxnk');
      },
      xhnk(){
          this.$router.push('/departmentDetail?ksmc='+'xhnk');
      },
      gk(){
          this.$router.push('/departmentDetail?ksmc='+'gk');
      },
      szwk(){
          this.$router.push('/departmentDetail?ksmc='+'szwk');
      },
      pwk(){
          this.$router.push('/departmentDetail?ksmc='+'pwk');
      },
      sjwk(){
          this.$router.push('/departmentDetail?ksmc='+'sjwk');
      },
      fck(){
          this.$router.push('/departmentDetail?ksmc='+'fck');
      },
      erg(){
          this.$router.push('/departmentDetail?ksmc='+'erg');
      },
      sjnk(){
          this.$router.push('/departmentDetail?ksmc='+'sjnk');
      },
      zyk(){
          this.$router.push('/departmentDetail?ksmc='+'zyk');
      },
      ssmzk(){
          this.$router.push('/departmentDetail?ksmc='+'ssmzk');
      },
      fsk(){
          this.$router.push('/departmentDetail?ksmc='+'fsk');
      },
      gnk(){
          this.$router.push('/departmentDetail?ksmc='+'gnk');
      },
      jyk(){
          this.$router.push('/departmentDetail?ksmc='+'jyk');
      },

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
</style>
