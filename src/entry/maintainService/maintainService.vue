<template>
  <div style="height: 100%;background-color: #FFFFFF;">
  	<router-view :key="$route.fullPath"></router-view>
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
  export default {
  components:{doctorLoginPage,doctorMenu,myRepairList,repairOnline,repairDetail,repairSatisfaction},
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
