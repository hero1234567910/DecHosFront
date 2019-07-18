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
