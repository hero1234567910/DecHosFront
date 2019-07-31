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
	  			 <el-button type="primary" @click="getInfo">选择病历</el-button>
	  		</div>
  		</div>
  	<div class="ad-content" v-show="showContent">
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
			
  	</div>
  		
  	</div>
  	
  	<el-dialog title="选择病历号" :visible.sync="isShow">
				<commonSelect v-bind:mzData='mzData' @handleCall="handleCall"></commonSelect>
			</el-dialog>
  </div>
</template>


<script>
	import model from './model.js'
	import commonSelect from './commonSelect'
  export default {
  	components: {commonSelect},
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
				showContent:false,
  		}
  	},
  	mounted(){
    	this.getInfo()
    },
  	methods:{
  		handleCall(res){
  			this.isShow = false;
  			if(res.zyzt != 4){
  				this.showContent = false;
  				$.alert("您暂未出院", "提示", function() {});
  			}else{
  				this.blh = res.blh;
  				this.patid = res.patid;
  				this.showContent = true;
  			}
			},
  		opendialog(){
  			
  		},
  		//获取病历号
  		getInfo(){
				let self = this;
				$.showLoading();
				let data={
					hzxm:this.hzxm,
					zjh:this.zjh,
					action:'zy',
					openid:localStorage.getItem('sec_openId')
				}
				
				this.model.getInfo(data).then(function(res){
					$.hideLoading();
					if(res.data.code == '0'){
						self.mzData = res.data.data;
						self.isShow = true;
						self.val1 = 0;
						self.val2 = 0;
						self.val3 = 0;
					}else{
						$.toptip(res.data.msg,'error');
					}
				})
			},
			sub(){
				let self = this;
				if(this.val1 == 0 || this.val2 == 0 || this.val3 == 0){
					$.alert("评分不能为空", "提示", function() {
							});
					return;
				}
				//评价
				let data = {
					evaluateDoc:this.val1,
					evaluateNurse:this.val2,
					evaluateFacilities:this.val3,
					evaluateOpinion:this.textarea2,
					patientRowGuid:localStorage.getItem('sec_patientGuid')
				}
				
				this.model.saveEvaluate(data).then(function(res){
					if(res.data.code == 0){
						$.toast("感谢您的评价", function() {
							if(process.env.NOED_ENV == 'dev'){
								window.location = '../../index.html'
							}else if(process.env.NODE_ENV == 'production'){
								window.location = '../../sechos/index.html'
							}
						});
					}else{
						$.toptip(res.data.msg,'error');
					}
				})
			}
  		
  	}
  }
  </script>

<style>
	.el-rate__icon{
		font-size: 35px;
	}
	.el-dialog{
		width: calc(100vw - 20px);
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
