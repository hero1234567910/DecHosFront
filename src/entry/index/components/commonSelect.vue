<template>
  <div style="height: 100%;background-color: #EFF7FD;">
		  <!--<el-table :data="mzData">
		    <el-table-column property="blh" label="病历号"></el-table-column>
		     <el-table-column
			      fixed="right"
			      label="操作"
			      width="100">
		      <template slot-scope="scope">
		        <el-button @click="handleClick(scope.row)" type="text" size="small">选择</el-button>
		      </template>
		    </el-table-column>
		  </el-table>-->
		  <div class="weui-tab" id="page-infinite-navbar">
	      <div class="weui-tab__bd" id="#app">
	        <div id="tab1" class="weui-tab__bd-item weui-tab__bd-item--active">
	          <h2 class="doc-head">{{mzData.title}}</h2>
	          <h4 class="doc-info">发布时间:{{mzData.infoDate}}</h4>	
	          <h6></h6>
	          <div class="hos-content" v-html="mzData.content">{{mzData.content}}</div>
	        </div>
	      </div>
	    </div>
  </div>
</template>


<script>
import weui from "jquery-weui/dist/js/jquery-weui.min";
import model from "./model.js";
import evn from '../utils/evn.js'

export default {
  data() {
    this.model = model(this.axios);
    return {
    	
    };
  },
  props:['mzData'],
  mounted() {
  },
  watch:{
  	
  },
  methods: {
  	
  }
};
</script>

<style scoped>
	.doc-head {
  text-align: center;
}
.doc-info {
  text-align: center;
}
.p-style {
  margin-left: 20px;
  margin-right: 20px;
  text-indent: 2em;
}
body {
  overflow: auto;
}
.hos-content {
  margin-top: 0px;
  margin-right: 12px;
  margin-left: 12px;
}
.hos-img {
  display: inline-block;
  height: auto;
  max-width: 100%;
}
.hos-attach {
  margin-top: 0px;
  margin-right: 12px;
  margin-left: 12px;
}
.attach-font {
  font-size: medium;
  font-weight: 600;
}
</style>
