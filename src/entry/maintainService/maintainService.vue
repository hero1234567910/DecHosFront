<template>
  <div style="height: 100%;background-color: #FFFFFF;">
  	<keep-alive>
		    <router-view v-if="$route.meta.keepAlive">
		        <!-- 这里是会被缓存的视图组件，比如 page1,page2 -->
		    </router-view>
		</keep-alive>
 		<router-view  v-if="!$route.meta.keepAlive"></router-view>
    <lg-preview></lg-preview>
  </div>
</template>


<script>
	
 
import weui from 'jquery-weui/dist/js/jquery-weui.min'
import maintainLoginPage from "./components/maintainLoginPage.vue";
import maintainMenu from "./components/maintainMenu.vue";
import myMaintainList from './components/myMaintainList.vue'
import maintainDetail from './components/maintainDetail.vue'
import maintainSatisfactionList from './components/maintainSatisfactionList.vue'
import repairSatisfaction from './components/repairSatisfaction.vue'
  export default {
  components:{},
	data() {
      return {
      	
      }
    },
   
	methods:{
		
	}
		
  }
  </script>

<style scoped>
	
</style>
