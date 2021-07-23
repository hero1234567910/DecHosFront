<template>
  <div id="hero-historyList" style="overflow-y: auto;height: calc(100vh - 102px);">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh" style="min-height: 100%;">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      style="min-height:calc(100vh - 102px);"
    >
      <van-cell :title="item.date" is-link :value="item.name" v-for="item in list" :key="item.rowGuid" @click="cellClick(item.rowGuid)"/>
    </van-list>
    </van-pull-refresh>

    <van-dialog v-model="show" :lockScroll="false" show-cancel-button :showConfirmButton="false" :closeOnClickOverlay="true">
      <infoDetail :rowGuid="rowGuid"></infoDetail>
    </van-dialog>
  </div>
</template>


<script>
import model from "./model.js";
import Vue from 'vue';
import { List } from 'vant';
import { Cell, CellGroup } from 'vant';
import { PullRefresh } from 'vant';

Vue.use(PullRefresh);

Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(List);
export default {
  components:{
    infoDetail:()=>import("./infoDetail.vue")
  },
  data() {
    this.model = model(this.axios);
    return {
      list: [],
      loading: false,
      finished: false,
      show:false,
      page:1,
      limit:10,
      refreshing: false,
      rowGuid:''
    };
  },
  mounted() {},
  methods: {
    onRefresh() {
      // 清空列表数据
      this.finished = false;
      this.page = 1;
      this.list = [];
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    cellClick(val){
        this.show = true;
        this.rowGuid = val
    },
    onLoad() {
      // 异步更新数据
      let param = {
        page:this.page,
        limit:this.limit,
        openId:localStorage.getItem("sec_openId")
      }

      if(!param.openId){
        return false;
      }

      this.model.listData(param).then(res => {
        if(res.data.code == 0){
          
          this.list = this.list.concat(res.data.data)
          this.loading = false; 
          this.refreshing = false;
          this.page += 1;
          if(this.list.length >= res.data.count){
            this.finished = true;
          }

          // this.finished = true;
        }
        // this.loading = false;
      })

      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      // setTimeout(() => {
      //   for (let i = 0; i < 10; i++) {
      //     this.list.push(this.list.length + 1);
      //   }

      //   // 加载状态结束
      //   this.loading = false;

      //   // 数据全部加载完成
      //   if (this.list.length >= 40) {
      //     this.finished = true;
      //   }
      // }, 1000);
    },
  },
};
</script>

<style>
#hero-historyList .van-dialog{
  top:50% !important;
  height: 80%;
  overflow-y: auto;
}
</style>
<style scoped>
</style>
