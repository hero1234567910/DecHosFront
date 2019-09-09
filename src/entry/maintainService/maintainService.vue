<template>
  <div style="height: 100%;background-color: #FFFFFF;">
  	<router-view :key="$route.fullPath"></router-view>
  </div>
</template>


<script>
	
 
import weui from 'jquery-weui/dist/js/jquery-weui.min'
import maintainLoginPage from "./components/maintainLoginPage.vue";
import maintainMenu from "./components/maintainMenu.vue";
import myMaintainList from './components/myMaintainList.vue'
import maintainDetail from './components/maintainDetail.vue'
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
