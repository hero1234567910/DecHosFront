<template>
  <div style="overflow: auto;">
  	<div class="ad-header">
  		<div class="ad-headerImg">
  			<img src="../../../../static/img/评价1.svg" style="position: absolute;top: 7px;
	    left: 17px;"/>
	  		</div>
	  		<div class="ad-title">
	  			<p style="font-size: 20px;font-weight: 700;">出院评价</p>
	  		</div>
	  		
	  		<div class="ad-button">
	  			 <el-button type="primary">选择病历</el-button>
	  		</div>
  		</div>
  	<div class="ad-content">
  		<div class="content-text">
  			<p class="text-ev">主治医生满意度</p>
  			<el-rate
			  v-model="val1"
			  >
			</el-rate>
  		</div>
  		
  		<div class="content-text">
  			<p class="text-ev">护理人员满意度</p>
  			<el-rate
			  v-model="val2"
			  >
			</el-rate>
  		</div>
  		
  		<div class="content-text">
  			<p class="text-ev">医疗设施满意度</p>
  			<el-rate
			  v-model="val3"
			  >
			</el-rate>
			
			<div class="input-advice">
				<el-input
				  type="textarea"
				  :rows="4"
				  placeholder="请输入您的意见(选填)"
				  maxlength="500"
				  v-model="textarea2">
				</el-input>
			</div>
			
			<div style="margin-top: 30px;">
				<div>
					<a href="javascript:;" class="weui-btn weui-btn_primary" v-on:click="sub()">评价完成</a>
				</div>
			</div>
			
			<el-dialog title="选择要结算的病历号" :visible.sync="isShow">
				<commonSelect v-bind:mzData='mzData' @handleCall="handleCall"></commonSelect>
			 </el-dialog>
			
  	</div>
  		
  	</div>
  </div>
</template>


<script>
	import model from './model.js'
	import commonSelect from './commonSelect'
  export default {
  	data(){
  		this.model = model(this.axios);
  		return{
  			val1:0,
  			val2:0,
  			val3:0,
  			textarea2:'',
  			blh:'',
  			zjh:localStorage.getItem('sec_patientIdcard'),
				hzxm:localStorage.getItem('sec_patientName'),
				patid:'',
				isShow:false,
				mzData:[],
  		}
  	},
  	mounted(){
    	
    },
  	methods:{
  		
  	}
  }
  </script>

<style>
	.el-rate__icon{
		font-size: 35px;
	}
</style>
<style scoped>
	.el-button--primary{
		background-color: #4CCBDB;
	}
	.sub{
		
	}
	.input-advice{
		margin-left: auto;
		margin-right: auto;
		width: calc(100vw - 30px);
    margin-top: 34px;
	}
	.text-ev{
		font-size: 21px;
    color: #909399;
	}
	.el-rate{
		height: 40px;
		line-height:2;
	}
	.content-text{
		width: 100%;
    text-align: center;
    margin-top: 20px;
	}
	.ad-content{
		width: 100%;
		height: calc(100vh - 60px);
	}
	.weui-btn_primary{
		background-color: #4CCBDB;
	}
	.weui-btn{
		width: 230px;
	}
	.ad-fin{
		height: 60px;
		width: 60px;
		line-height: 60px;
		position: relative;
	}
	.ad-title{
		float:left;
		height: 60px;
		line-height: 60px;
	}
	.ad-headerImg{
		width: 80px;
		height: 60px;
		line-height: 60px;
		float: left;
		position: relative;
	}
	.ad-header{
		position: relative;
		width: 100%;
		height: 60px;
		background-color: #FFFFFF;
	}
	.ad-button{
		float: right;
		line-height: 60px;
		margin-right: 10px;
	}
</style>
