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

          <div style="float:right;position: relative;top: -10px;">
            <van-button icon="plus" type="primary" @click="exportThis()">点我导出</van-button>
          </div>
        </div>
        <!-- <div>
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
        </div> -->

        <div>
          <el-row>
            <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
              <van-field
                readonly
                clickable
                name="datetimePicker"
                :value="value"
                label="日期选择"
                placeholder="点击选择时间"
                @click="showPicker = true"
              />
              <van-popup v-model="showPicker" position="bottom">
                <van-datetime-picker
                  type="year-month"
                  :formatter="formatter"
                  @confirm="onConfirm"
                  @cancel="showPicker = false"
                  :min-date="minDate"
                />
              </van-popup>
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
              <div @click="onSearch" style="line-height:44px">搜索</div>
            </el-col>
          </el-row>
          
        </div>
      </el-card>
    </div> 
    <div>

      <!-- <el-table-column
        prop="age"
        label="年龄"
        width="180">
      </el-table-column>
      <el-table-column
        prop="height"
        label="身高"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别">
      </el-table-column> -->

      
      <el-row :gutter="5" style="text-align: center;">
        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
          <div class="userDetail">{{name}}</div>
        </el-col>
        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
          <div class="userDetail">身高:{{height}}</div>
        </el-col>
        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
          <div class="userDetail">年龄:{{age}}</div>
        </el-col>
        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
          <div class="userDetail">性别:{{sex}}</div>
        </el-col>
      </el-row>

      <el-table
        :data="list"
        border
        style="width: 100%;height:calc(100vh - 200px)"
        height="100%">
        <el-table-column
          :formatter="dateFormatter"
          prop="date"
          min-width="65"
          align="center"
          label="填报日期">
        </el-table-column>
        <el-table-column
          prop="weight"
          align="center"
          min-width="49"
          label="体重">
        </el-table-column>
        <el-table-column
          prop="bloodPressure"
          align="center"
          min-width="60"
          label="血压">
        </el-table-column>
        <el-table-column
          prop="heartRate"
          align="center"
          min-width="49"
          label="心率">
        </el-table-column>
        <el-table-column
          prop="fastingBloodGlucose"
          align="center"
          min-width="50"
          label="空腹血糖">
        </el-table-column>
        <el-table-column
          prop="postprandialBloodGlucose"
          align="center"
          min-width="50"
          label="餐后血糖">
        </el-table-column>
      </el-table>

      <div style="text-align:center;margin-top:10px">
        <el-pagination
          background
          layout="total,prev, pager, next"
          @current-change="currentChange"
          :total="total">
        </el-pagination>
      </div>
      
    </div>

    <!-- <div
      
      style="overflow-y: auto; height: calc(100vh - 116px)"
    >
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
            @click="cellClick(item.rowGuid)"
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
    </div> -->


  </div>
</template>


<script>
import model from "./model.js";
import Vue from "vue";
import { List } from "vant";
import { Cell, CellGroup } from "vant";
import { PullRefresh } from "vant";
import { Search } from "vant";
import evn from '../utils/evn.js'

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
      value:this.timeFormat(new Date()),
      minDate: new Date(2021, 6),
      showPicker: false,
      tableData: [],
      name:this.$route.query.name,
      sex:this.$route.query.sex,
      height:this.$route.query.height,
      age:this.$route.query.age,
      total:0
    };
  },
  mounted() {
    this.params.name = this.$route.query.name;
    this.params.date = this.value;
    this.onRefresh();
  },
  methods: {
    dateFormatter(row, column, cellValue, index){
      console.log(cellValue)
      return cellValue.substring(5);
    },
    exportThis(){
      location.href=evn.SEC_HOSAPI+'/sys/sechosHealthy/exportInfo?name='+this.$route.query.name
      // this.model.exportInfo(this.$route.query.name).then(res => {
      //   location.href()
      //   console.log(res)
      // })
    },
    timeFormat(time) { // 时间格式化 2019-09-08
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      if(month < 10){
        month = "0"+month;
      }
      // let day = time.getDate();
      return year + '-' + month;
    },
    formatter(type, val) {
      if (type === 'year') {
        return `${val}年`;
      } else if (type === 'month') {
        return `${val}月`;
      } 
      return val;
    },
    onConfirm(time) {
      this.value = this.timeFormat(time);
      this.params.date = this.value;
      this.showPicker = false;
    },
    currentChange(val){
      console.log(val)
      this.params.page = val;
      this.onLoad();
    },
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
      this.show = true;
      this.rowGuid = val;
    },
    onLoad() {
      // 异步更新数据
      this.model.listData(this.params).then((res) => {
        if (res.data.code == 0) {
          this.list = res.data.data;
          this.total = res.data.count;
          // this.loading = false;
          // this.refreshing = false;
          // this.params.page += 1;
          // if (this.list.length >= res.data.count) {
          //   this.finished = true;
          // }

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
.el-table{
  height: calc(100vh - 190px) !important;
}
.el-table th>.cell{
  font-size: 12px;
}
.el-table .cell{
  padding: 5px;
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
.userDetail{
  background-color: white;
  height: 30px;
  line-height: 30px;
}
</style>
