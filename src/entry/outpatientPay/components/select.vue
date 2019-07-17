<template>
  <div style="height: 100%;background-color: #EFF7FD;">
		  <el-table :data="seData">
		    <el-table-column property="ghrq" label="挂号日期"></el-table-column>
		     <el-table-column
			      fixed="right"
			      label="操作"
			      width="100">
		      <template slot-scope="scope">
		        <el-button @click="handleClick(scope.row)" type="text" size="small">选择</el-button>
		      </template>
		    </el-table-column>
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
  props:['seData'],
  mounted() {
  	this.init()
  },
  methods: {
  	init(){
			let self = this;
			

		},
		handleClick(row) {
        this.$emit('seCall',row);
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
