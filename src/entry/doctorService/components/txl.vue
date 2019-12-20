<template>
  <div style="overflow: auto;height:100%;overflow-x: hidden;background-color: #ecf5ff;">
  	<el-card class="box-card">
	    <div slot="header" class="clearfix">
	      <div class="card-hero">
	        <img
	          src="../../../../static/img/通讯录.png"
	          style="position: absolute;top: -7px;width: 80%;"
	        />
	      </div>
	      <span style="font-weight: 700;">院内通讯录</span>
	      <span style="color: darkgray;font-size: 13px;">【左滑查看联系电话】</span>
	    </div>
	    
	    <div>
	    	<div style="float: left;width: 80%;">
	    		<div class="weui-search-bar" id="searchBar">
					  <form class="weui-search-bar__form">
					    <div class="weui-search-bar__box">
					      <i class="weui-icon-search"></i>
					      <input type="search" class="weui-search-bar__input" id="searchInput" @keyup.enter="Search()" placeholder="搜索姓名">
					      <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
					    </div>
					    <label class="weui-search-bar__label" id="searchText">
					      <i class="weui-icon-search"></i>
					      <span>搜索</span>
					    </label>
					  </form>
					  <a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel" @click="getList('')">取消</a>
					</div>
	    	</div>
	    	<div style="float: right;width: 20%;">
	    		<a href="javascript:;" class="weui-btn weui-btn_primary" @click="Search()">搜索</a>
	    	</div>
	    </div>
	    
	    
    </el-card>
    <div class="weui-cells" style="background-color: #f8fcff;">
		  <div class="weui-cell weui-cell_swiped" id="item.rowId" v-for="item in users" :key="item.rowId">
        <div class="weui-cell__bd">
          <div class="weui-cell">
            <div class="weui-cell__bd">
              <p>{{item.userName}}</p>
            </div>
            <div class="weui-cell__ft" v-if="item.duty == null || item.duty == ''"></div>
            <div class="weui-cell__ft" v-if="item.duty != null">{{item.duty}}</div>
          </div>
        </div>
        <div class="weui-cell__ft" v-show="item.mobile != null">
          <a class="weui-swiped-btn weui-swiped-btn_default delete-swipeout" href="javascript:">{{item.mobile}}</a>
          <a class="weui-swiped-btn weui-swiped-btn_warn close-swipeout" :href="'tel:' + item.mobile">拨号</a>
        </div>
        
        <div class="weui-cell__ft" v-show="item.mobile == null || item.mobile == ''">
          <a class="weui-swiped-btn weui-swiped-btn_default close-swipeout" href="javaScript:;">暂无</a>
        </div>
      </div>
      
		</div>
  </div>
</template>

<script>
import model from "./model.js";
export default {
  data() {
    this.model = model(this.axios);
    return {
     users:[]
    };
  },
  created(){
  },
  mounted() {
  	this.getList('')
  },
  methods: {
    getList(searchaVal){
    	let self = this;
    	var params = new URLSearchParams();
			params.append('page', '1');
			params.append('limit', '100');
			params.append('userName',searchaVal);
			$.showLoading();
    	this.model.getOaUserList(params).then(function(res){
    		$.hideLoading();
    		if(res.data.code == 0){
    			self.users = res.data.data;
					self.$nextTick(function(){
						$('.weui-cell_swiped').swipeout()
					})
    		}else{
    			$.toptip(res.data.msg, "error");
    		}
    	})
    },
    Search(){
    	let self = this;
    	let searchVal = $('#searchInput').val();
    	console.log('aaaa')
      self.getList(searchVal);
    }
  }
};
</script>
<style>
	.el-card__body{
		padding: 5px;
	}
</style>
<style scoped>
	.weui-btn{
		width: 100% !important;
		margin-bottom: 5px !important;
	}
.weui-cells__title-wzl {
  background-color: whitesmoke;
  margin-top: 0px;
  padding-left: 15px;
  padding-right: 15px;
  color: #999999;
  font-size: 14px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.weui-btn_primary {
  background-color: #4ccbdb;
}
.content_Down_photo img {
  width: 70px;
  height: 70px;
  margin: 15px;
}
.hero-button {
  background-color: #44c5e3;
  width: 80%;
  height: 38px;
  line-height: 38px;
}
.weui-row .weui-col-50 {
  height: 50px;
}
.weui-row {
  margin-top: 20px;
  height: 50px;
}
.card-hero {
  width: 50px;
  height: 40px;
  line-height: 20px;
  float: left;
  position: relative;
}
</style>