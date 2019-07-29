<template>
  <div style="height: 100%;background-color: #EFF7FD;">
 		<router-view :key="$route.fullPath"></router-view>
  </div>
</template>


<script>
	
import weui from 'jquery-weui/dist/js/jquery-weui.min'
import model from './model.js'
  export default {
	data() {
    	this.model = model(this.axios)
      return {
      	zjh:localStorage.getItem('sec_patientIdcard'),
      	hzxm:localStorage.getItem('sec_patientName'),
      	patid:''
      }
    },
    mounted(){
    },
		methods:{
			
		}
  }
  </script>

<style scoped>
	
</style>
