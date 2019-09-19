<template>
  <div style="height: 100%;background-color: #FFFFFF;">
  	<div>
		  <div class="weui-form-preview" v-for="item in cfData">
			  <div class="weui-form-preview__hd">
			    <label class="weui-form-preview__label">药品金额</label>
			    <em class="weui-form-preview__value">¥{{item.je}}</em>
			  </div>
			  <div class="weui-form-preview__bd">
			    <div class="weui-form-preview__item">
			      <label class="weui-form-preview__label">药品名称</label>
			      <span class="weui-form-preview__value">{{item.xmmc}}</span>
			    </div>
			    <div class="weui-form-preview__item">
			      <label class="weui-form-preview__label">数量</label>
			      <span class="weui-form-preview__value">{{item.xmsl}}</span>
			    </div>
			    <div class="weui-form-preview__item">
			      <label class="weui-form-preview__label">单价</label>
			      <span class="weui-form-preview__value">¥{{item.xmdj}}</span>
			    </div>
			    <div class="weui-form-preview__item">
			      <label class="weui-form-preview__label">规格</label>
			      <span class="weui-form-preview__value">¥{{item.ypgg}}</span>
			    </div>
			  </div>
			</div>
			
			<div style="margin-top: 10px;margin-bottom: 30px;">
					<div>
						<a href="javascript:;" class="weui-btn weui-btn_primary" @click="selectClick">我已确认</a>
					</div>
				</div>
			
		</div>
  </div>
</template>


<script>
import weui from "jquery-weui/dist/js/jquery-weui.min";
import model from "./model.js";

export default {
  data() {
    this.model = model(this.axios);
    return {
    	
    };
  },
  props:['cfData'],
  mounted() {
  	
  },
  methods: {
		selectClick(row) {
			let cfxh = '';
	    let arr = this.cfData;
	    for (var i=0;i<arr.length;i++) {
	     cfxh = cfxh+','+arr[i].cfxh;
	    }
      this.$emit('cfCall',cfxh.substr(1));
    },		
  }
};
</script>

<style scoped>
	.weui-btn_primary{
		background-color: #4CCBDB;
	}
	.weui-btn{
		width: 230px;
	}
	.weui-form-preview{
		margin-bottom: 14px;
	}
</style>
