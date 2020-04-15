<template>
  <div style="overflow: auto;background-color: #FFFFFF;">
 		<div class="ad-header">
  		<div class="ad-headerImg">
  			<img src="../../../../static/img/排队等候中-icon.svg" style="position: absolute; top: 11px;left: 17px;width: 64%;"/>
	  		</div>
	  		<div class="ad-title">
	  			<p style="font-size: 20px;font-weight: 700;">候诊信息</p>
	  		</div>
  		</div>
  		
  		<el-card class="box-card" v-show="wp.dqxh != undefined">
			  <div slot="header" class="clearfix">
			    <span>当前看诊序号: {{wp.dqxh}}</span>
			    <el-button style="float: right; padding: 3px 0" type="text">{{wp.ghlb | jzlx}}</el-button>
			  </div>
			  <div class="text item">
			    	就诊顺序号: {{wp.sxh}}
			  </div>
			  <div class="text item">
			    	前面排队人数: {{wp.pdrs}}
			  </div>
			  <div class="text item">
			    	科室名称: {{wp.ksmc}}
			  </div>
			  <div class="text item">
			   		挂号序号: {{wp.ghxh}}
			  </div>
			  <div class="text item">
			    	医生名称: {{wp.ysmc}}
			  </div>
			</el-card>
  </div>
</template>

<script>
	import model from './model.js'
	import evn from '../utils/evn.js'
  export default {
  	data() {
    	this.model = model(this.axios)
      return {
      	zjh:localStorage.getItem('sec_patientIdcard'),
      	hzxm:localStorage.getItem('sec_patientName'),
      	patid:'',
      	wp:{}
      }
    },
    created(){
    },
  	mounted(){
			this.getInfo();
  	},
  	methods:{
  		getOutpatientWaitingInfo(){
  			let self = this;
  			let data = {
  				hzxm:this.hzxm,
  				patid:this.patid
  			}
  			this.model.getOutpatientWaitingInfo(data).then(function(res){
  				if(res.data.code == '0'){
  					self.wp = res.data.data;
  				}else{
  					$.toptip(res.data.msg,'error')
  				}
  			})
  		},
  		//检查是否有绑定并查询患者门诊信息
			getInfo(){
				let self = this;
				this.zjh = localStorage.getItem('sec_patientIdcard');
				this.hzxm = localStorage.getItem('sec_patientName');
				if(this.zjh == 'null' || this.zjh == '' || this.zjh == null){
					$.confirm("您并未绑定身份证，请先绑定","提示",function() {
							if (process.env.NODE_ENV == 'dev') {
							  window.location='../index.html#/userBinding'
							} else if (process.env.NODE_ENV == 'production') {
							  window.location='../2ysechos/index.html#/userBinding'
							}
						}, function() {
					  	if (process.env.NODE_ENV == 'dev') {
							  window.location='../index.html'
							} else if (process.env.NODE_ENV == 'production') {
							  window.location='../2ysechos/index.html'
							}
					  });
					  return;
				}
				if(localStorage.getItem('sec_flag') == 'zf'){
					self.patid = localStorage.getItem('zfpatid');
					self.getOutpatientWaitingInfo();
				}
				if(localStorage.getItem('sec_flag') == 'cb'){
					self.patid = localStorage.getItem('cbpatid');
					self.getOutpatientWaitingInfo();
				}
				if(localStorage.getItem('sec_flag') == ''){
					$.alert("未查询到您的信息，请先建档", "提示", function() {
						  //点击确认后的回调函数
					  if (process.env.NODE_ENV == 'dev') {
							  window.location='../../index.html#/userFiling?zjh='+this.zjh+'&hzxm='+this.hzxm;
							} else if (process.env.NODE_ENV == 'production') {
							  window.location='../../2ysechos/index.html#/userFiling?zjh='+this.zjh+'&hzxm='+this.hzxm;
							}
						});
				}
				
				
//				let data={
//					hzxm:this.hzxm,
//					zjh:this.zjh,
//					action:'mz',
//					openid:localStorage.getItem('sec_openId')
//				}
//				
//				this.model.getInfo(data).then(function(res){
//					if(res.data.code == '0'){
//						//门诊模块 就取门诊自费并且病历号最大的
//						let arr = [];
//						let outArray = res.data.data;
//						for(var i=0;i<outArray.length;i++){
//								if(outArray[i].ybdm == '101'){
//									let blh = outArray[i].blh;
//									arr.splice(0);
//									arr.push(parseInt(blh));
//									break;
//								}
//								//门诊医保病人
//								if(outArray[i].ybdm == '701'){
//									let blh = outArray[i].blh;
//									arr.push(parseInt(blh));
//									localStorage.setItem('sec_yb',true);								
//								}
//						}
//						if(arr.length == 0){
//							$.alert("未查询到您的信息，请先建档", "提示", function() {
//						  //点击确认后的回调函数
//						  if (process.env.NODE_ENV == 'dev') {
//								  window.location='../../index.html#/userFiling?zjh='+this.zjh+'&hzxm='+this.hzxm;
//								} else if (process.env.NODE_ENV == 'production') {
//								  window.location='../../2ysechos/index.html#/userFiling?zjh='+this.zjh+'&hzxm='+this.hzxm;
//								}
//							});
//							return;
//						}
//						arr.sort().reverse();
//						let val = arr[0];
//						for(var i=0;i<outArray.length;i++){
//							if(val == outArray[i].blh){
//								self.patid = outArray[i].patid;
//								self.getOutpatientWaitingInfo();
//							}
//						}
//					}
//					if(res.data.msg == '未查询到门诊患者'){
//						$.alert("未查询到您的信息，请先建档", "提示", function() {
//						  //点击确认后的回调函数
////						  self.$router.push('/userFiling?zjh='+self.zjh)
//						  if (process.env.NODE_ENV == 'dev') {
//								  window.location='../../index.html#/userFiling?zjh='+this.zjh+'&hzxm='+this.hzxm;
//								} else if (process.env.NODE_ENV == 'production') {
//								  window.location='../../2ysechos/index.html#/userFiling?zjh='+this.zjh+'&hzxm='+this.hzxm;
//								}
//						});
//					}
//				})
			}
  	},
  	filters: {
	    jzlx: function(value) {
	      switch(value){
            case "0":
                return '普通挂号';
                break;
            case "1":
                return '急诊挂号';
                break;
           
             case "2":
                return '专家挂号';
                break;
            
             case "3":
                return '点名专家';
                break;
            
             case "4":
                return '特殊挂号';
                break;
            
            case "5":
                return '义诊';
                break;

            case "6":
                return '外宾挂号';
                break;
        }
	    }
 	 }
  	
  }
  
  </script>
<style scoped>
	.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
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
</style>
