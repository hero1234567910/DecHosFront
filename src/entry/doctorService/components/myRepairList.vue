<template>
  <div style="overflow: auto;overflow-x: hidden;height:100%;">
    <div class="image-style" style="height: 138px;">
      <img style="height:100%;height: 138px;" src="../../../../static/img-2/wdbx.png" />
    </div>
    <div class="weui-cells__title-wzl">报修记录</div>
    <div class="weui-cells" style="margin-top:0px;">
      <a class="weui-cell weui-cell_access" href="javascript:;">
        <div class="weui-cell__bd">
          <p>XXX损坏</p>
        </div>
        <div class="weui-cell__ft">2019-8-27</div>
      </a>
      <a class="weui-cell weui-cell_access" href="javascript:;">
        <div class="weui-cell__bd">
          <p>XXX损坏</p>
        </div>
        <div class="weui-cell__ft">2019-8-26</div>
      </a>
    </div>
    <div style="margin-top: 30px;">
      <div>
        <a href="javascript:;" class="weui-btn weui-btn_primary" v-on:click="toindex()">返回主页</a>
      </div>
    </div>
  </div>
</template>

<script>
import model from './model.js'
export default {
  data() {
      return{}
  },
  mounted() {},
  methods: {
    toindex() {
      let self = this;
      self.$router.push("/doctorMenu");
    }
  }
};
</script>

<style scoped>
.weui-cells__title-wzl{
  background-color: whitesmoke;
  margin-top: 0px;
  padding-left: 15px;
  padding-right: 15px;
  color: #999999;
  font-size: 14px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.weui-btn_primary {
  background-color: #4ccbdb;
}
.weui-btn {
  width: 230px;
}
</style>