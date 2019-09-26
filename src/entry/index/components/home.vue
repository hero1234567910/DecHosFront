<template>
  <div style="overflow: auto;background-color: #FFFFFF;">
 		<div class="hero-banner">
 			<img src="../../../../static/img/图层-646-拷贝.png" class="hero-img" width="100%"/>
 		</div>

 		<div class="hero-search">
			<div class="weui-search-bar" id="searchBar">
			    <form class="weui-search-bar__form" onkeydown="if(event.keyCode==13) return false;">
			        <div class="weui-search-bar__box">
			            <i class="weui-icon-search"></i>
			            <input type="search" class="weui-search-bar__input" id="searchInput"  placeholder="搜索"
			                   required="" v-model="souInput" @click="getAllInfo">
			            <a @click="clear()" class="weui-icon-clear" id="searchClear"></a>
			        </div>
			        <label class="weui-search-bar__label" id="searchText">
			            <i class="weui-icon-search"></i>
			            <span>查询科室名称，便捷挂号</span>
			        </label>
			    </form>
			    <a @click="cancel()" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
			</div>

			<div class="content" style="z-index: 100000000;position: absolute;background-color: white;width: 100%;">
				<homeExtend :seller="seller" :souInput="souInput" v-show="homeShow" @tohomeShow='tohomeShow'></homeExtend>
			</div>
		</div>

		<div class="hero-panel">
			<div class="hero-panel2">
				<div class="hero-panel2_header"><strong>门诊服务</strong></div>
				<div style="margin-left: 5px;margin-right: 5px;width: calc(100% - 10px);">
					<div class="weui-row">
					  <div class="weui-col-50" style="position: relative;" @click="toOutpatientAd()"> <!--style="background-image:url(../../../../static/img/预约.png)	; background-size: 100% 100%;"-->
					  		<img src="../../../../static/img/预约.png" style="width: 100%;position: absolute;"/>
					  </div>
					  <div class="weui-col-50" style="position: relative;" @click="toOutpatientPay()">
					  	<img src="../../../../static/img/缴费.png" style="width: 100%;position: absolute;"/>
					  </div>
					  <!--<div class="weui-col-33">
					  	<img src="../../../../static/img/健康卡1.png" style="width: 100%;" />
					  </div>-->
					</div>
					<div style="margin-left: 20px;margin-right: 20px;margin-top: 10px;height: 60px;">
						<div class="weui-row" style="height: 80px;">
							<div class="weui-col-25">
								<a href="javascript:void(0)" v-on:click="toInformation('dzt')">
									<div class="hero-col-img">
										<img src="../../../../static/img/导诊台.png" style="width: 100%;"/>
									</div>
									<div class="hero-col-dec" style="min-width: 70px;">导诊台确认</div>
								</a>
							</div>
							<div class="weui-col-25">
								<a href="javascript:void(0)" v-on:click="toconsultation()">
									<div class="hero-col-img">
										<img src="../../../../static/img/咨询图标.png" style="width: 100%;"/>
									</div>
									<div class="hero-col-dec">门诊咨询</div>
								</a>
							</div>
							<div class="weui-col-25">
								<a href="javascript:;" v-on:click="toInformation('jzxz')">
									<div class="hero-col-img">
										<img src="../../../../static/img/图层-579.png" style="width: 100%;"/>
									</div>
									<div class="hero-col-dec">就诊需知</div>
								</a>
							</div>
							<div class="weui-col-25">
								<a href="javascript:;" v-on:click="toProfessor()">
									<div class="hero-col-img">
										<img src="../../../../static/images/专家.png" style="width: 100%;"/>
									</div>
									<div class="hero-col-dec">专家信息</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="hero-Image">
			<div style="padding: 5px 10px;">
				<div class="notice-left" style="position: relative;">
					<img src="../../../../static/img/消息 88 通知 公告.svg" style="width: 48%;vertical-align: middle;position: absolute;top: -12px;left: 16px;"/>
				</div>
				<div class="notice-middle" style="width: 50%;">
					<div id="s" style="position:relative; white-space:nowrap; overflow:hidden; height:22px;">
						<div id="noticeList" style="position:absolute; top:0; height:20px;"><span id="ms">医院简介</span></div>
					</div>
				</div>
				<div class="notice-right" @click="getMore">
						查看详情
				</div>
			</div>
			<!--<el-carousel :interval="4000" arrow="always" height="110px">
		    <el-carousel-item>
		      <div :style="{backgroundImage: 'url(' + img + ')'}" class="hero-background">
		      </div>
		    </el-carousel-item>
		    <el-carousel-item>
		      <div :style="{backgroundImage: 'url(' + img1 + ')'}" class="hero-background">
		      </div>
		    </el-carousel-item>
		  </el-carousel>-->
		</div>

		<div style="position: relative;top: -80px;margin-left: 13px;margin-right: 13px;width: calc(100% - 26px);">
			<div class="hero-panel2_header" style="height: 30px;"><strong>在院服务</strong></div>
			<div style="margin-left: 20px;margin-right: 20px;height: 70px;">
				<div class="weui-row" style="height: 80px;">
					<!--<div class="weui-col-25">
						<a href="javascript:;" v-on:click="toSection()">
							<div class="hero-col-img">
								<img src="../../../../static/img/科室预约-.png" style="width: 100%;"/>
							</div>
							<div class="hero-col-dec" style="min-width: 70px;">科室预约</div>
						</a>
					</div>
					<div class="weui-col-25">
						<div class="hero-col-img">
							<img src="../../../../static/img/病房预约-.png" style="width: 100%;"/>
						</div>
						<div class="hero-col-dec">病房预约</div>
					</div>-->
					<div class="weui-col-25">
						<a href="javascript:;" @click="toInformation('rydy')">
						<div class="hero-col-img">
							<img src="../../../../static/img/入院导引.png" style="width: 100%;"/>
						</div>
						<div class="hero-col-dec">入院导引</div>
						</a>
					</div>
					<div class="weui-col-25">
						<a href="javascript:;" @click="toInformation('zyxz')">
						<div class="hero-col-img">
							<img src="../../../../static/img/住院须知.png" style="width: 100%;"/>
						</div>
						<div class="hero-col-dec">住院须知</div>
						</a>
					</div>
					<div class="weui-col-25">
						<a href="javascript:;" v-on:click="toDepartment()">
							<div class="hero-col-img">
								<img src="../../../../static/images/全科.png" style="width: 100%;"/>
							</div>
							<div class="hero-col-dec" style="min-width: 70px;">科室简介</div>
						</a>
					</div>
					<div class="weui-col-25">
						<a href="javascript:;" v-on:click="toOneDay()">
						<div class="hero-col-img">
							<img src="../../../../static/images/复诊.png" style="width: 100%;"/>
						</div>
						<div class="hero-col-dec">住院一日清</div>
						</a>
					</div>
				</div>
			</div>
		</div>

		<div style="height: 10px;width: 100%;position: relative;
    top: -70px;;background-color: #e5e5e5;"></div>

		<div class="hero-panel3">
			<div class="weui-flex">
			  <div class="weui-flex__item" v-on:click="toHospitalizationService()">
			  	<div class="hero-item-img">
							<img src="../../../../static/img/住院中--.png" style="width: 100%;"/>
							<a href="javascript:;">
								<div class="hero-mButton">
									<img src="../../../../static/img/进入.png" style="width: 100%;"/>
								</div>
							</a>
						</div>
			  </div>
			  <div class="weui-flex__item" v-on:click="outHospitalService()">
			  	<div class="hero-item-img" style="margin-top: 20px;margin-left: 5px;">
							<img src="../../../../static/img/图片1.png" style="width: 100%;"/>
							<a href="javascript:;">
								<div class="hero-mButton" style="top: 56px;">
									<img src="../../../../static/img/进入.png" style="width: 100%;"/>
								</div>
							</a>
						</div>
			  </div>
			</div>
		</div>

		<div style="height: 10px;width: 100%;position: relative;top: -83px;background-color: #e5e5e5;"></div>
		<div style="width: 100%;height: 100px;position: relative;top: -83px;">
			<a href="javascript:;" v-on:click="toInformation('tjyy')">
				<img src="../../../../static/img/体检.png" style="width: 100%;"/>
			</a>
		</div>

		<el-dialog title="通告详情" :visible.sync="isShow">
      <commonSelect v-bind:mzData="mzData" @handleCall="handleCall"></commonSelect>
    </el-dialog>
  </div>
</template>

<script>
	import commonSelect from './commonSelect.vue'
	import model from './model.js'
	import homeExtend from './homeExtend.vue'
	import textScroll from './textScroll.js'
	import evn from '../utils/evn.js'
  export default {
  	components:{homeExtend,commonSelect},
  	data() {
    	this.model = model(this.axios)
      return {
      	seller:[],
      	souInput:'',
      	homeShow:false,
      	isShow: false,
      	mzData: {},
      	InfoData:{},
      	arr:[]
//    	img: require('../../../../static/images/QUS{5J8J(UI9V82QY4Q$@N8.jpg'),
//    	img1: require('../../../../static/images/7B0Q1Z]]1YFW1HOBBB{OFMQ.jpg'),
      }
    },
    created(){
    	this.getDepartmentOnDuty()
    },
  	mounted(){
  		this.getTGInfo();
			//横向滚动
			$("#s").textScroll();

  	},
  	methods:{
  		getAllInfo(){
  			this.seller = this.arr;
  			console.log(this.seller);
  		},
  		getMore(){
  			this.InfoData.content.replace(
          /<img src="/g,
          '<img class="hos-img" src=' + evn.SEC_HOSAPI
        );
  			this.mzData = this.InfoData;

				console.log(this.mzData);
  			this.isShow = true;
  		},
  		handleCall(res) {
	      this.isShow = false;

	    },
  		getTGInfo(){
  			let self = this;
  			this.model.getTGInfo().then(function(res){
  				if(res.data.code == 0){
  					self.InfoData = res.data.data;
  					$('#ms').text(res.data.data.title);
  				}else{
  					$.toptip("获取通告信息失败", "error");
  				}
  			})
  		},
  		getDepartmentOnDuty() {
	      $.showLoading();
	      let self = this;
	      let data = {};
	      this.model.getDepartmentOnDuty(data).then(function(res) {
	        $.hideLoading();
	        if (res.data.code == "0") {
	        	console.log(res.data.data)
	          let arr = res.data.data;
	          for(var i=0;i<arr.length;i++){
	          	var ch = arr[i].children;
	          	if(ch.length > 0){
	          		for(var j=0;j<ch.length;j++){
	          			if(ch[j].czlx == 1){
	          				ch[j].ksmc += '(专家)'
	          			}
	          			self.arr.push(ch[j]);
	          		}
	          	}
	          }
	        } else {
	          $.toptip(res.data.msg, "error");
	        }
	      });
	    },

			cancel(){
				this.homeShow = false;
			},
			clear(){
				this.homeShow = false;
			},
			tohomeShow(){
				this.homeShow = true;
			},
  		getUserInfo(){
			let self = this;
    		let data = this.GetQueryString('code');
    		this.model.getUserInfo(data).then(function(res){
    			if(res.data.code == '0'){
    				localStorage.setItem('sec_openId',res.data.data.openid);
	    			localStorage.setItem('sec_patientName',res.data.data.patientName);
	    			localStorage.setItem('sec_headImg',res.data.data.headImgUrl);
	    			localStorage.setItem('sec_sex',res.data.data.patientSex);
    				localStorage.setItem('sec_birth',res.data.data.patientBirth);
    				localStorage.setItem('sec_patientIdcard',res.data.data.patientIdcard);
    				localStorage.setItem('sec_patientGuid',res.data.data.rowGuid);
    				localStorage.setItem('sec_cardno',res.data.data.patientIdcard);
    				localStorage.setItem('sec_lxdh',res.data.data.lxdh);

//  				if(res.data.data.patientName == null || res.data.data.patientName == ''){
//  					//说明没有绑定患者信息，去绑定
//  					$.alert("您并未绑定患者信息，请先绑定", "提示", function() {
//							 	$('#cen').addClass('.weui-bar__item--on');
//							});
//  				}
//  				if(res.data.data.patientStatus == 1){
//  					let arr = [];
//							let outArray = res.data.data.outpatients;
//							for(var i=0;i<outArray.length;i++){
//									let blh = outArray[i].medicalNumberMZ;
//									arr.push(parseInt(blh));
//							}
//							arr.sort().reverse();
//							let val = arr[0];
//							for(var i=0;i<outArray.length;i++){
//								if(val == outArray[i].medicalNumberMZ){
//									self.patientId = outArray[i].patidMZ;
//									localStorage.setItem('sec_patientIdmz',self.patientId);
//									localStorage.setItem('patientStatus',1);
//								}
//							}
//  				}
//
//  				if(res.data.data.patientStatus == 2){
//  					let arr = [];
//  						let hosArray = res.data.data.hospitalizedList;
//  						for(var i=0;i<hosArray.length;i++){
//									let blh = hosArray[i].medicalNumber;
//									arr.push(parseInt(blh));
//  						}
//  						arr.sort().reverse();
//  						let val = arr[0];
//  						for(var i=0;i<hosArray.length;i++){
//  							if(val == hosArray[i].medicalNumberMZ){
//  								self.patientId = hosArray[i].patid;
//									localStorage.setItem('sec_patientIdzy',self.patientId);
//									localStorage.setItem('patientStatus',2);
//  							}
//  						}
//  				}
    			}else{
    				$.toptip(res.data.msg, 'error');
    			}

    		})
		},
		//获取url中的参数
		 GetQueryString(name){
			     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
			     var r = window.location.search.substr(1).match(reg);//search,查询？后面的参数，并匹配正则
			     if(r!=null)return  decodeURI(r[2]); return null;
			},
			toOneDay(){
				if (process.env.NODE_ENV == 'dev') {
				  window.location='../../oneDayLiq.html'
				} else if (process.env.NODE_ENV == 'production') {
				  window.location='../../2ysechos/oneDayLiq.html'
				}
			},
  		toOutpatientPay(){
  			if (process.env.NODE_ENV == 'dev') {
				  window.location='../../outpatientPay.html'
				} else if (process.env.NODE_ENV == 'production') {
				  window.location='../../2ysechos/outpatientPay.html'
				}
  		},
  		toconsultation(){
  			if (process.env.NODE_ENV == 'dev') {
				  window.location='../../consultation.html'
				} else if (process.env.NODE_ENV == 'production') {
				  window.location='../../2ysechos/consultation.html'
				}
  		},
  		toHospitalizationService(){
  			if (process.env.NODE_ENV == 'dev') {
				  window.location='../../hospitalizationService.html'
				} else if (process.env.NODE_ENV == 'production') {
				  window.location='../../2ysechos/hospitalizationService.html'
				}
  		},
  		toSection(){
  			if (process.env.NODE_ENV == 'dev') {
				  window.location='../../sections.html'
				} else if (process.env.NODE_ENV == 'production') {
				  window.location='../../2ysechos/sections.html'
				}
  		},
  		toInformation(str){
  			if (process.env.NODE_ENV == 'dev') {
  				console.log(str);
  				if(str == 'jzxz'){
  					window.location='../../hosProfile.html?infoType=PatientNeedtoKnow'
  				}
  				if(str == 'rydy'){
  					window.location='../../hosProfile.html?infoType=DirectAdmission'
  				}
  				if(str == 'zyxz'){
  					window.location='../../hosProfile.html?infoType=Hospitalisation'
			    }
				if(str == 'dzt'){
  					window.location='../../hosProfile.html?infoType=HospitalGuide'
				}
				if(str == 'tjyy'){
  					window.location='../../hosProfile.html?infoType=MedicalAppointment'
				}
				} else if (process.env.NODE_ENV == 'production') {
				if(str == 'jzxz'){
  					window.location='../../2ysechos/hosProfile.html?infoType=PatientNeedtoKnow'
  				}
  				if(str == 'rydy'){
  					window.location='../../2ysechos/hosProfile.html?infoType=DirectAdmission'
  				}
  				if(str == 'zyxz'){
  					window.location='../../2ysechos/hosProfile.html?infoType=Hospitalisation'
				}
				if(str == 'dzt'){
  					window.location='../../2ysechos/hosProfile.html?infoType=HospitalGuide'
				}
				if(str == 'tjyy'){
  					window.location='../../2ysechos/hosProfile.html?infoType=MedicalAppointment'
			    }
				}
  		},
  		toOutpatientAd(){
  			if (process.env.NODE_ENV == 'dev') {
				  window.location='../../outpatientAdvance.html'
				} else if (process.env.NODE_ENV == 'production') {
				  window.location='../../2ysechos/outpatientAdvance.html'
				}
  		},
		outHospitalService(){
			if (process.env.NODE_ENV == 'dev') {
				  window.location='../../outhospitalService.html'
				} else if (process.env.NODE_ENV == 'production') {
				  window.location='../../2ysechos/outhospitalService.html'
				}
		},
		toDepartment(){
			if (process.env.NODE_ENV == 'dev') {
				  window.location='../../introduceDepartment.html'
				} else if (process.env.NODE_ENV == 'production') {
				  window.location='../../2ysechos/introduceDepartment.html'
				}
		},
		toProfessor(){
			if (process.env.NODE_ENV == 'dev') {
				  window.location='../../introduceProfessor.html'
				} else if (process.env.NODE_ENV == 'production') {
				  window.location='../../2ysechos/introduceProfessor.html'
				}
		}

  	}
  }

  </script>
<style>
	.el-dialog {
	  width: calc(100vw - 20px);
	}
</style>
<style scoped>
	.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
	.hero-Image{
		height: 66px;
    position: relative;
    top: -68px;
	}
	.hero-mButton{
		position: absolute;
    top: 77px;
    width: 35px;
	}
	.hero-item-img{
		width: 100%;
		height: 100%;
		position: relative;
	}
	.weui-flex{
		height: 100px;
	}
	.hero-panel3{
		margin-left: 13px;
		margin-right: 13px;
		width: calc(100% - 26px);
		height: 100px;
		position: relative;
    top: -82px;
	}
	.hero-col-dec{
		height: 20px;
		line-height: 20px;
		    width: 100%;
    font-size: 12px;
    color: #b2b2b2;
    text-align: center;
	}
	.hero-col-img{
		height: 55px;
		width: 50px;
		/*margin-left: 5px;*/
		margin: 0 auto;
	}
	.weui-row .weui-col-25{
		height: 100%;
	}
	.weui-row .weui-col-33{
		width: calc((100% - 8px*2)/ 3);
	}
	.weui-col-33{
		height: 100%;
	}
	.weui-row{
		height: 113px;
	}
	.hero-panel2_header{
		width: 100%;
		height: 25px;
		line-height: 25px;
		font-size: 15px;
    padding-left: 10px;
    font-weight: 500;
	}
	.hero-panel2{
		border: 0px solid #E6E6EA;
    border-radius: 5px;
    background-color: white;
    height: 100%;
    width: 100%;
    box-shadow: 1px 2px 6px #888888;
	}
	.hero-panel{
		height: 233px;
		width: 100%;
		    position: relative;
    top: -90px;
		padding-left: 13px;
    padding-right: 13px;
    width: calc(100% - 26px);
        max-width: 400px;
	}
	.hero-banner{
		height:100px;
		width: 100%;
	}
	.hero-search{
		position: relative;
    width: 100%;
    top: -95px;
	}
	.weui-search-bar:before{
		border-top: 0px solid #D7D6DC;
	}
	.weui-search-bar:after{
		border-bottom: 0px solid #D7D6DC;
	}
	.weui-search-bar{
		position: relative;
    padding: 8px 20px;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    box-sizing: border-box;
    background-color:transparent;
    -webkit-text-size-adjust: 100%;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
	}
	/*.weui-search-bar__form {
		background-color: transparent;
	}
	.weui-search-bar__box{
		background-color: #5dbff1;
		    z-index: 3;
	}
	.weui-icon-search{
		color: #f9f9f9
	}
	 input::-webkit-input-placeholder {
        color: #f9f9f9;
     }*/
    .notice-left{
			/*border: 1px solid #CCC;*/
			float: left;
			height: 30px;
			width: 85px
		}

		.notice-middle{
			float: left;
			height: 30px;
			font-weight: 600
		}

		.notice-right{
			height: 30px;
			float: right;
			color: darkgray;
			font-size: 14px;
		}
</style>
