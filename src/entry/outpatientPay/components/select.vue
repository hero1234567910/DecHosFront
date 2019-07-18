<template>
  <div style="height: 100%;background-color: #EFF7FD;">
		  <el-table :data="seData">
		    <el-table-column property="ghrq" label="挂号日期"></el-table-column>
		    <el-table-column property="ksmc" label="预约科室"></el-table-column>
		     <el-table-column
			      fixed="right"
			      label="操作"
			      width="100">
		      <template slot-scope="scope">
		        <el-button @click="selectClick(scope.row)" type="text" size="small">选择</el-button>
		        <div style="float: right;width: 32px;height: 32px;position: relative;" v-show="scope.row.zfzt == 1">
		        	<img src="../../../../static/img/已支付.svg" width="100%" style="position: absolute;width: 125%;top: -4px;left: -9px;"/>
		        </div>
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
    	
    };
  },
  props:['seData'],
  mounted() {
  	
  },
  methods: {
		selectClick(row) {
        this.$emit('seCall',row);
    },		
  }
};
</script>

<style scoped>
</style>
