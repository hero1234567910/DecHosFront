<template>
  <div style="height: 100%;background-color: #EFF7FD;">
		<div class="weui-tab">
		  <div class="weui-navbar">
		    <a class="weui-navbar__item weui-bar__item--on" href="#tab1">
		      普通检查报告
		    </a>
		    <a class="weui-navbar__item" href="#tab2">
		    实验室检查报告
		    </a>
		  </div>
		  <div class="weui-tab__bd">
		    <div id="tab1" class="weui-tab__bd-item weui-tab__bd-item--active">
		      <reportList></reportList>
		    </div>
		    <div id="tab2" class="weui-tab__bd-item">
		     <labReportList></labReportList>
		    </div>
		  </div>
		</div>
  </div>
</template>


<script>
	
import weui from 'jquery-weui/dist/js/jquery-weui.min'
import model from './model.js'
import reportList from './reportList'
import labReportList from './labReportList'

  export default {
	components:{reportList,labReportList},
	data() {
    	this.model = model(this.axios)
      return {
      }
    },
    mounted(){
    },
	methods:{
		//获取url中的参数
		 GetQueryString(name){
			     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
			     var r = window.location.search.substr(1).match(reg);//search,查询？后面的参数，并匹配正则
			     if(r!=null)return  decodeURI(r[2]); return null;
			},
			
		}
  }
  </script>

<style scoped>
	
</style>
