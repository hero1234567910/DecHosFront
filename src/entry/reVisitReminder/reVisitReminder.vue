<template>
  <div style="height: 100%;background-color: #FFFFFF;">
 		<router-view :key="$route.fullPath"></router-view>
  </div>
</template>


<script>
	
import weui from 'jquery-weui/dist/js/jquery-weui.min'
//import home from './components/home'
import model from './model.js'
  export default {
//	components:{home},
	data() {
    	this.model = model(this.axios)
      return {
      }
    },
    mounted(){
    },
		methods:{
				
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
