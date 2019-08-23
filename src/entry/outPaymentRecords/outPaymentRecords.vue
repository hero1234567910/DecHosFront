<template>
  <div style="height: 100%;background-color: #EFF7FD;">
    <keep-alive>
		    <router-view v-if="$route.meta.keepAlive">
		        <!-- 这里是会被缓存的视图组件，比如 page1,page2 -->
		    </router-view>
		</keep-alive>
 		<router-view  v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import weui from "jquery-weui/dist/js/jquery-weui.min";
import model from "./model.js";
import outPaymentRecordsDetail from "./components/outPaymentRecordsDetail";
import outPaymentRecordsList from "./components/outPaymentRecordsList";
import userFiling from "./components/userFiling"
export default {
  components: { outPaymentRecordsDetail, outPaymentRecordsDetail },
  data() {
    this.model = model(this.axios);
    return {
      zjh: localStorage.getItem("sec_patientIdcard"),
      hzxm: localStorage.getItem("sec_patientName"),
      patid: ""
    };
  },
  mounted() {
//    this.getInfo();
  },
  methods: {
    //获取url中的参数
    GetQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg); //search,查询？后面的参数，并匹配正则
      if (r != null) return decodeURI(r[2]);
      return null;
    },
  }
};
</script>
