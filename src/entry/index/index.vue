<template>
  <div style="height: 100%;background-color: #FFFFFF;">
 		<div class="weui-tab">
		  <div class="weui-tab__bd" style="height: 92%;position: absolute;width: 100%;">
        <div id="tab1" class="weui-tab__bd-item weui-tab__bd-item--active weui-iframe" style="overflow: auto;height: calc(100vh - 53px);">
          <home></home>
        </div>
        <div id="tab2" class="weui-tab__bd-item weui-iframe" style="overflow: auto;height: calc(100vh - 53px);">
          <router-view :key="$route.fullPath"></router-view>
        </div>
      </div>
		
		  <div class="weui-tabbar">
		    <a href="#tab1" class="weui-tabbar__item weui-bar__item--on" id="ind">
		      <!--<span class="weui-badge" style="position: absolute;top: -.4em;right: 1em;">8</span>-->
		      <div class="weui-tabbar__icon">
		        <img src="../../../static/img/icon_nav_button.png" alt="">
		      </div>
		      <p class="weui-tabbar__label">主页</p>
		    </a>
		    <a href="#tab2" class="weui-tabbar__item" id="cen">
		      <div class="weui-tabbar__icon">
		        <img src="../../../static/img/icon_nav_cell.png" alt="">
		      </div>
		      <p class="weui-tabbar__label">个人中心</p>
		    </a>
		  </div>
		</div>
  </div>
</template>


<script>
	
import weui from 'jquery-weui/dist/js/jquery-weui.min'
import home from './components/home'
import mycenter from './components/mycenter'
import userBinding from './components/userBinding'
import model from './model.js'
  export default {
	components:{home,mycenter,userBinding},
	data() {
    	this.model = model(this.axios)
      return {
      }
    },
    mounted(){
    	this.getUserInfo();
    },
	methods:{
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
    				
//  				if(res.data.data.patientName == null || res.data.data.patientName == ''){
//  					//说明没有绑定患者信息，去绑定
//  					$.alert("您并未绑定患者信息，清先绑定", "提示", function() {
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
		position: absolute;
		top: 53px;
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
		position: absolute;
    width: 100%;
    top: 5px;
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
