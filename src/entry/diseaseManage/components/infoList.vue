<template>
  <div id="hero-infoList">
    <div class="wzl-head">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <div class="card-hero">
            <img
              src="../../../../static/images/专家信息.png"
              style="position: absolute; top: -7px; width: 80%"
            />
          </div>
          <span style="font-weight: 700">填报信息查看</span>
        </div>
        <div>
          <van-search
            v-model="nameVague"
            show-action
            label="填报人"
            placeholder="请输入填报人姓名"
            @search="onSearch"
          >
            <template #action>
              <div @click="onSearch">搜索</div>
            </template>
          </van-search>
        </div>
      </el-card>
    </div>

      

    <div style="overflow-y: auto; height: calc(100vh - 116px)">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          style="min-height:calc(100vh - 102px);"
        >
          <van-cell
            :title="item.date"
            is-link
            :value="item.name"
            v-for="item in list"
            :key="item.rowGuid"
            @click="cellClick(item)"
          />
        </van-list>
      </van-pull-refresh>

      <van-dialog
        v-model="show"
        :lockScroll="false"
        show-cancel-button
        :showConfirmButton="false"
        :closeOnClickOverlay="true"
      >
        <infoDetail :rowGuid="rowGuid"></infoDetail>
      </van-dialog>
    </div>


  </div>
</template>


<script>
import model from "./model.js";
import Vue from "vue";
import { List } from "vant";
import { Cell, CellGroup } from "vant";
import { PullRefresh } from "vant";
import { Search } from "vant";

Vue.use(Search);
Vue.use(PullRefresh);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(List);
export default {
  components: {
    infoDetail: () => import("./infoDetail.vue"),
  },
  data() {
    this.model = model(this.axios);
    return {
      list: [],
      loading: false,
      finished: false,
      show: false,
      params: {
        page: 1,
        limit: 10,
      },
      refreshing: false,
      rowGuid: "",
      nameVague: "",

      tableData: [],
    };
  },
  mounted() {},
  methods: {
    onSearch() {
      this.params.nameVague = this.nameVague;
      this.onRefresh();
      //   // 清空列表数据
      //   this.finished = false;
      //   this.params.page = 1;
      //   this.list = [];
      //   // 重新加载数据
      //   // 将 loading 设置为 true，表示处于加载状态
      //   this.loading = true;
      //   this.onLoad();
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;
      this.params.page = 1;
      this.list = [];
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    cellClick(val) {
      // this.show = true;
      // this.rowGuid = val;

      this.$router.push({
        path:'/userDetail',
        query:{
          name:val.name,
          sex:val.sex,
          height:val.height,
          age:val.age
        }
      })
    },
    onLoad() {
      this.params.nameGroup = "";
      // 异步更新数据
      this.model.listData(this.params).then((res) => {
        if (res.data.code == 0) {
          this.list = this.list.concat(res.data.data);
          this.loading = false;
          this.refreshing = false;
          this.params.page += 1;
          if (this.list.length >= res.data.count) {
            this.finished = true;
          }

          // this.finished = true;
        }
        // this.loading = false;
      });

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
#hero-infoList .el-card__body {
  padding: 0px;
}
#hero-infoList .el-radio-button {
  width: 50%;
}
#hero-infoList .el-radio-button__inner {
  width: 100%;
}
#hero-infoList .el-radio-group {
  width: 100%;
}
#hero-infoList .van-dialog {
  top: 50% !important;
  height: 80%;
  overflow-y: auto;
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
