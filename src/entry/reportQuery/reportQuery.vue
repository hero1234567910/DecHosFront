<template>
  <div style="height: 100%;background-color: #EFF7FD;">
 		<router-view :key="$route.fullPath"></router-view>
  </div>
</template>


<script>
	
import weui from 'jquery-weui/dist/js/jquery-weui.min'
import model from './model.js'
import reportMainList from './components/reportMainList'
import reportTab from './components/reportTab'

  export default {
	components:{reportMainList,reportTab},
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
