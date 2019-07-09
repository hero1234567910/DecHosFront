<template>
  <div style="overflow: auto;background-color: #FFFFFF;">
 		<div class="hero-banner">
 			<img src="../../../../static/img/图层-646-拷贝.png" class="hero-img" width="100%"/>
 		</div>
 		
 		<div class="hero-search">
	 		<div class="weui-search-bar" id="searchBar">
			  <form class="weui-search-bar__form">
			    <div class="weui-search-bar__box">
			      <i class="weui-icon-search"></i>
			      <input type="search" class="weui-search-bar__input" id="searchInput" placeholder="" required="">
			      <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
			    </div>
			    <label class="weui-search-bar__label" id="searchText">
			      <i class="weui-icon-search"></i>
			      <span>搜索</span>
			    </label>
			  </form>
			  <a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
			</div>
		</div>
		
		<div class="hero-panel">
			<div class="hero-panel2">
				<div class="hero-panel2_header"><strong>门诊服务</strong></div>
				<div style="margin-left: 5px;margin-right: 5px;width: calc(100% - 10px);">
					<div class="weui-row">
					  <div class="weui-col-33" @click="toOutpatientAd()"> <!--style="background-image:url(../../../../static/img/预约.png)	; background-size: 100% 100%;"-->
					  		<img src="../../../../static/img/预约.png" style="width: 100%;"/>
					  </div>
					  <div class="weui-col-33">
					  	<img src="../../../../static/img/缴费.png" style="width: 100%;"/>
					  </div>
					  <div class="weui-col-33">
					  	<img src="../../../../static/img/健康卡1.png" style="width: 100%;" />
					  </div>
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
								<div class="hero-col-img">
									<img src="../../../../static/img/复诊提醒1.png" style="width: 100%;"/>
								</div>
								<div class="hero-col-dec">复诊提醒</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div style="position: relative;top: -80px;margin-left: 13px;margin-right: 13px;width: calc(100% - 26px);">
			<div class="hero-panel2_header" style="height: 30px;"><strong>在院服务</strong></div>
			<div style="margin-left: 20px;margin-right: 20px;height: 70px;">
				<div class="weui-row" style="height: 80px;">
					<div class="weui-col-25">
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
					</div>
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
				</div>
			</div>
		</div>
		
		<div style="height: 10px;width: 100%;position: relative;
    top: -70px;;background-color: #e5e5e5;"></div>
		
		<div class="hero-panel3">
			<div class="weui-flex">
			  <div class="weui-flex__item">
			  	<div class="hero-item-img">
							<img src="../../../../static/img/住院中--.png" style="width: 100%;"/>
							<a href="javascript:;" v-on:click="toHospitalizationService()">
								<div class="hero-mButton">
									<img src="../../../../static/img/进入.png" style="width: 100%;"/>
								</div>
							</a>
						</div>
			  </div>
			  <div class="weui-flex__item">
			  	<div class="hero-item-img" style="margin-top: 20px;margin-left: 5px;">
							<img src="../../../../static/img/图片1.png" style="width: 100%;"/>
							<div class="hero-mButton" style="top: 56px;">
								<img src="../../../../static/img/进入.png" style="width: 100%;"/>
							</div>
						</div>
			  </div>
			</div>
		</div>
		
		<div style="height: 10px;width: 100%;    position: relative;
    top: -83px;background-color: #e5e5e5;"></div>
		<div style="width: 100%;height: 100px;    position: relative;top: -83px;">
			<img src="../../../../static/img/体检.png" style="width: 100%;"/>
		</div>
  </div>
</template>


<script>
	import model from './model.js'
  export default {
  	methods:{
  		toconsultation(){
  			if (process.env.NODE_ENV == 'dev') {
				  window.location='../../consultation.html'
				} else if (process.env.NODE_ENV == 'production') {
				  window.location='../../sechos/consultation.html'
				}
  		},
  		toHospitalizationService(){
  			if (process.env.NODE_ENV == 'dev') {
				  window.location='../../hospitalizationService.html'
				} else if (process.env.NODE_ENV == 'production') {
				  window.location='../../sechos/hospitalizationService.html'
				}
  		},
  		toSection(){
  			if (process.env.NODE_ENV == 'dev') {
				  window.location='../../sections.html'
				} else if (process.env.NODE_ENV == 'production') {
				  window.location='../../sechos/sections.html'
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
				} else if (process.env.NODE_ENV == 'production') {
				if(str == 'jzxz'){
  					window.location='../../sechos/hosProfile.html?infoType=PatientNeedtoKnow'
  				}
  				if(str == 'rydy'){
  					window.location='../../sechos/hosProfile.html?infoType=DirectAdmission'
  				}
  				if(str == 'zyxz'){
  					window.location='../../sechos/hosProfile.html?infoType=Hospitalisation'
				}
				if(str == 'dzt'){
  					window.location='../../sechos/hosProfile.html?infoType=HospitalGuide'
			    }
				}
  		},
  		toOutpatientAd(){
  			if (process.env.NODE_ENV == 'dev') {
				  window.location='../../outpatientAdvance.html'
				} else if (process.env.NODE_ENV == 'production') {
				  window.location='../../sechos/outpatientAdvance.html'
				}
  		}
  	}
  }
  </script>

<style scoped>
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
    font-size: 6px;
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
		height: 70px;
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
		height: 190px;
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
    .weui-search-bar__form{
    	border: 0px solid #E6E6EA;
      border-radius: 10px;
    }
    .weui-search-bar__cancel-btn{
    	color: rgba(255, 255, 255, 0.95)
    }
</style>
