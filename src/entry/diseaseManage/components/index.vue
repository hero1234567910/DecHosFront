<template>
    <div id="hero">
      <div class="wzl-head">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <div class="card-hero">
              <img
                src="../../../../static/images/专家信息.png"
                style="position: absolute;top: -7px;width: 80%;"
              />
            </div>
            <span style="font-weight: 700;">慢病管理</span>
          </div>
        </el-card>
      </div>

      <!-- <el-radio-group v-model="tabChoose">
        <el-radio-button label="/saveInfo">信息填报</el-radio-button>
        <el-radio-button label="/historyInfo">历史填报</el-radio-button>
      </el-radio-group> -->

      <van-tabs   @click="onClick">
        <van-tab title="信息填报">
          <saveInfo></saveInfo>
        </van-tab>
        <van-tab title="历史填报">
          <historylist></historylist>
        </van-tab>
      </van-tabs>

      <!-- <div style="overflow-y: auto;height: calc(100vh - 102px);"> 
        <router-view></router-view>
      </div> -->

    </div>
</template>


<script>
import Vue from 'vue';
import model from "./model.js";
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);
import saveInfo from "./saveInfo.vue";
import historylist from "./historylist.vue";
export default {
  components:{saveInfo,historylist},
  data() {
    this.model = model(this.axios);
    return {
      // tabChoose:'/saveInfo'
    };
  },
  watch:{
    // tabChoose:{
    //   async handler(val){
    //     console.log(val)
    //     this.$router.push({
    //       path:val
    //     })
    //   }
    // }
  },
  mounted() {

    
    
  },
  methods: {
    onClick(name){
      // this.$nextTick(()=>{
      //     this.$router.push({
      //         path:name
      //     })
      // })
      
    }
  },
};
</script>

<style>
#hero .el-card__body {
  padding: 0px;
}
#hero .el-radio-button{
  width: 50%;
}
#hero .el-radio-button__inner{
  width: 100%;
}
#hero .el-radio-group{
  width: 100%;
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
</style>
