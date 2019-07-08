<template>
  <div style="overflow: auto;">
  	{{patientId}}
  </div>
</template>


<script>
	import model from './model.js'
  export default {
  	data(){
  		this.model = model(this.axios);
  		return{
  			patientId:''
  		}
  	},
  	props:['patientId'],
  	watch: {
      patientId: function (val) {       
      	this.patientId = val;
      }
    },
  	mounted(){
  	},
  	methods:{
  		
  	}
  }
  </script>

<style>
	
</style>
<style scoped>
	.weui-btn_primary{
		background-color: #4CCBDB;
	}
	.weui-btn{
		width: 230px;
	}
	.hospital-arrow{
		position: relative;
		height: 85px;
		line-height: 85px;
		width: 35px;
		float: left;
	}
	.hospital-title{
		height: 85px;
		width: 200px;
		position: relative;
		float: left;
	}
	.hospital-img{
		width: 65px;
		height: 85px;
		line-height: 85px;
		float: left;
	}
	.hospital-inner{
		margin-left: auto;
		margin-right: auto;
		width: 300px;
		height: 85px;
	}
	.hospital-panel{
		margin-top: 5px;
		width: 100%;
		height: 85px;
		background-color: #FFFFFF;
	}
</style>
