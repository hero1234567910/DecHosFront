<template>
  <div style="height: 100%;background-color: #FFFFFF;position: absolute;height: 100%;width: 100%;">
  	<keep-alive>
		    <router-view v-if="$route.meta.keepAlive">
		        <!-- 这里是会被缓存的视图组件，比如 page1,page2 -->
		    </router-view>
		</keep-alive>
 		<router-view  v-if="!$route.meta.keepAlive"></router-view>
    <!-- <lg-preview></lg-preview> -->
  </div>
</template>


<script>
	
 
import weui from 'jquery-weui/dist/js/jquery-weui.min'
import doctorLoginPage from "./components/doctorLoginPage.vue";
import doctorMenu from "./components/doctorMenu.vue";
import myRepairList from './components/myRepairList.vue'
import repairOnline from './components/repairOnline.vue'
import repairDetail from './components/repairDetail.vue'
import repairSatisfaction from './components/repairSatisfaction.vue'
import model from "./model.js"
  export default {
  components:{doctorLoginPage,doctorMenu,myRepairList,repairOnline,repairDetail,repairSatisfaction},
	data() {
		this.model = model(this.axios);
      return {
      	
      }
    },
   mounted() {
//	   	let code = this.GetQueryString('code')
//	   	//换取code
//	   	this.codeToToken(code);
	   	
  	},
	methods:{
		GetQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg); //search,查询？后面的参数，并匹配正则
      if (r != null) return decodeURI(r[2]);
      return null;
   }
// codeToToken(code){
// 		this.model.code2TokenDoctor(code).then(function(res){
// 			console.log(res)
// 			sessionStorage.setItem('doctor_token',res.data.data);
// 			
// 		})
// }
   
   
   
	}
		
  }
  </script>

<style scoped>
	
</style>
