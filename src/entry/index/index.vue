<template>
  <div id="bac">
    <div class="weui-flex">
		  <div class="weui-flex__item">weui</div>
		  <div class="weui-flex__item" @click.prevent="ceshi">weui</div>
		</div>
		<a href="javascript:;" class="weui-btn weui-btn_primary">按钮</a>
<a href="javascript:;" class="weui-btn weui-btn_disabled weui-btn_primary">按钮</a>
<a href="javascript:;" class="weui-btn weui-btn_warn">确认</a>
<a href="javascript:;" class="weui-btn weui-btn_disabled weui-btn_warn">确认</a>
<a href="javascript:;" class="weui-btn weui-btn_default">按钮</a>
<a href="javascript:;" class="weui-btn weui-btn_disabled weui-btn_default">按钮</a>
<a href="javascript:;" class="weui-btn weui-btn_plain-default">按钮</a>
<a href="javascript:;" class="weui-btn weui-btn_plain-primary">按钮</a>
  </div>
</template>


<script>
	
import weui from 'jquery-weui/dist/js/jquery-weui.min'
  export default {
  	methods:{
  		ceshi(){
  			$.alert("法法")
  		}
  	}
  }
  </script>

<style>
	#bac{
		background-color: aqua;
	}
</style>
