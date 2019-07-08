<template>
  <div style="height: 100%;background-color: #EFF7FD;">
		  <el-table :data="gridData">
		    <el-table-column property="blh" label="病历号"></el-table-column>
		  </el-table>
  </div>
</template>


<script>
import weui from "jquery-weui/dist/js/jquery-weui.min";
import model from "./model.js";

export default {
  data() {
    this.model = model(this.axios);
    return {
    	gridData: [],
    };
  },
  props:['mzData'],
  mounted() {
  	this.init()
  },
  watch: {
      mzData: function (val) {       
      	this.gridData = val;
      }
    },
  methods: {
  	init(){
			let self = this;
			

		},
    //获取url中的参数
    GetQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg); //search,查询？后面的参数，并匹配正则
      if (r != null) return decodeURI(r[2]);
      return null;
    }
  }
};
</script>

<style scoped>
</style>
