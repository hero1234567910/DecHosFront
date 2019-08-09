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
	
import weui from 'jquery-weui/dist/js/jquery-weui.min'
import model from './model.js'
import reportMainList from './components/reportMainList'
import reportTab from './components/reportTab'
import reportDetail from './components/reportDetail'
import labReportDetail from './components/labReportDetail'
import userFiling from './components/userFiling'
import examinationList from './components/examinationList'
import examinationDetail from './components/examinationDetail'


  export default {
	components:{reportMainList,reportTab,reportDetail,labReportDetail,userFiling,examinationList,examinationDetail},
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
