<template>
  <div style="overflow: auto;">
 		<div class="page-panel">
 			<div class="panel-img">
 				<img src="../../../../static/img/头像1.png" width="45%" style="position: absolute;bottom: 3px;left: 20px;"/>
 			</div>
 			<div class="page-content">
 				<p style="position: absolute;bottom: 0px;left: 50px;">咨询人姓名</p>
 			</div>
 		</div>
 		<div class="page-input">
			<div class="weui-cells">
			  <div class="weui-cell">
			    <div class="weui-cell__bd">
			      <input class="weui-input" type="text" id="consultationName">
			    </div>
			  </div>
			</div>
 		</div>
 		
 		<div class="page-panel">
 			<div class="panel-img">
 				<img src="../../../../static/img/手机 (2).png" width="35%" style="position: absolute;bottom: 3px;left: 20px;"/>
 			</div>
 			<div class="page-content">
 				<p style="position: absolute;bottom: 0px;left: 50px;">咨询人手机号码</p>
 			</div>
 		</div>
 		<div class="page-input">
			<div class="weui-cells">
			  <div class="weui-cell">
			    <div class="weui-cell__bd">
			      <input class="weui-input" type="text" id="consultationMobile">
			    </div>
			  </div>
			</div>
 		</div>
 		
 		<div class="page-panel">
 			<div class="panel-img">
 				<img src="../../../../static/img/问题(2).png" width="45%" style="position: absolute;bottom: 3px;left: 20px;"/>
 			</div>
 			<div class="page-content">
 				<p style="position: absolute;bottom: 0px;left: 50px;">咨询内容</p>
 			</div>
 		</div>

			<div class="weui-cells weui-cells_form">
				<div class="weui-cell">
			    <div class="weui-cell__hd"><label class="weui-label">咨询标题</label></div>
			    <div class="weui-cell__bd">
			      <input class="weui-input" type="text"  placeholder="请输入标题" maxlength="50" id="consultationTitle">
			    </div>
			  </div>

			  <div class="weui-cell">
			    <div class="weui-cell__bd">
			      <textarea class="weui-textarea" maxlength="200" placeholder="请输入咨询内容" rows="3" id="consultationContent" @keyup="showCount()" @keydown="showCount()" @blur="showCount()" @click="showCount()"></textarea>
			      <div class="weui-textarea-counter"><span>{{sCount}}</span>/200</div>
			    </div>
			  </div>
			</div>
			
			<div style="margin-top: 30px;">
				<div>
					<a href="javascript:;" class="weui-btn weui-btn_primary" v-on:click="tolist()">确认咨询</a>
				</div>
			</div>
			
			
  </div>
</template>


<script>
	import model from './model.js'
  export default {
  	data(){
  		this.model = model(this.axios);
  		return{
  			sCount:0
  		}
  	},
  	methods:{
  		showCount(){
  			this.sCount = $('#consultationContent').val().length
  		},
  		tolist(){
  			let self = this;
			let consultationName = $('#consultationName').val();
			let consultationMobile = $('#consultationMobile').val();
			let consultationContent = $('#consultationContent').val();
			let consultationTitle = $('#consultationTitle').val();
			
			if (
						this.panNull(consultationName, "咨询姓名不能为空") ||
				    this.panNull(consultationMobile, "咨询手机号不能为空") ||
				    this.panNull(consultationContent, "咨询内容不能为空") ||
				    this.panNull(consultationTitle, "咨询标题不能为空")
				  ) {
				    return;
				  };
				  let data = {
				  	'consultationName':consultationName,
				  	'consultationMobile':consultationMobile,
				  	'consultationContent':consultationContent,
				  	'consultationTitle':consultationTitle
				  }
				  this.model.consul(data).then(function(res){
				  	if(res.data.code == '0'){
				  		$.toast("咨询成功", function() {
							  self.$router.push('/');
							});
				  	}else{
				  		$.toptip(res.data.msg, 'error');
				  	}
				  })
  		},
  		panNull(ele, str) {
			  if (ele == null || ele == "") {
			    $.alert(str, "警告");
			    return true;
			  } else {
			    return false;
			  }
			},
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
	.weui-textarea{
		height: 130px;
	}
	.weui-cells{
		margin-top: 5px;
	}
	.page-panel{
		height: 45px;
		width: 100%;
	}
	.panel-img{
		height: 100%;
		line-height: 45px;
		float: left;
		width: 45px;
		position: relative;
	}
	.page-content{
		height: 45px;
		position: relative;
	}
	.page-input{
		height: 45px;
		width: 100%;
	}
</style>
