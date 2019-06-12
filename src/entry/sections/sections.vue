<template>
<div>
	<div class="hero-search">
		<!--<div class="hero-search-head">
			<img src="../../../static/img/圆角矩形-576.png" style="width: 100%;" />
		</div>-->
 		<div class="weui-search-bar" id="searchBar">
	 		<div class="hero-search-head">
				<img src="../../../static/img/圆角矩形-576.png" style="width: 100%;position: absolute;bottom: 0px;" />
			</div>
		  <form class="weui-search-bar__form">
		    <div class="weui-search-bar__box">
		      <i class="weui-icon-search"></i>
		      <input type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="">
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
	
	<div class="hero-main">
		<!--<el-tabs :tab-position="tabPosition" style="height: 200px;">
		    <el-tab-pane label="用户管理">用户管理</el-tab-pane>
		    <el-tab-pane label="配置管理">配置管理</el-tab-pane>
		    <el-tab-pane label="角色管理">角色管理</el-tab-pane>
		    <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
		</el-tabs>-->
		<el-tabs type="border-card" :tab-position="tabPosition">
		  <el-tab-pane label="用户管理">
		  	<sectionsItem></sectionsItem>
		  </el-tab-pane>
		  <el-tab-pane label="配置管理">
		  	<sectionsItem></sectionsItem>
		  </el-tab-pane>
		  <el-tab-pane label="角色管理">角色管理</el-tab-pane>
		  <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
		  <el-tab-pane label="用户管理">用户管理</el-tab-pane>
		  <el-tab-pane label="配置管理">配置管理</el-tab-pane>
		  <el-tab-pane label="角色管理">角色管理</el-tab-pane>
		  <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
		  <el-tab-pane label="用户管理">用户管理</el-tab-pane>
		  <el-tab-pane label="配置管理">配置管理</el-tab-pane>
		  <el-tab-pane label="角色管理">角色管理</el-tab-pane>
		  <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
		  <el-tab-pane label="用户管理">用户管理</el-tab-pane>
		  <el-tab-pane label="配置管理">配置管理</el-tab-pane>
		  <el-tab-pane label="角色管理">角色管理</el-tab-pane>
		  <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
		  <el-tab-pane label="用户管理">用户管理</el-tab-pane>
		  <el-tab-pane label="配置管理">配置管理</el-tab-pane>
		  <el-tab-pane label="角色管理">角色管理</el-tab-pane>
		  <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
		  <el-tab-pane label="用户管理">用户管理</el-tab-pane>
		  <el-tab-pane label="配置管理">配置管理</el-tab-pane>
		  <el-tab-pane label="角色管理">角色管理</el-tab-pane>
		  <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
		  <el-tab-pane label="用户管理">用户管理</el-tab-pane>
		  <el-tab-pane label="配置管理">配置管理</el-tab-pane>
		  <el-tab-pane label="角色管理">角色管理</el-tab-pane>
		  <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
		</el-tabs>
	</div>
</div>
</template>

<script>
	import weui from 'jquery-weui/dist/js/jquery-weui.min'
	import sectionsItem from './components/sectionsItem'
  export default {
  	components: {sectionsItem},
  	  data() {
      return {
        tabPosition: 'left'
      };
    },
    methods: {
      
    }
  }
</script>

<style>
	.el-tabs__nav-scroll{
		overflow-y: auto;
	}
	.el-tabs--left, .el-tabs--right{
		height: calc(100vh - 46px);
	}
	.hero-main{
		height: calc(100vh - 44px);
	}
	.hero-search-head{
		height: 28px;
    	bottom: -2px;
		width: 30px;
		position: relative;
	}
	.hero-search{
    	height: 44px;
	}
	.weui-search-bar__form{
    	border: 0px solid #E6E6EA;
      border-radius: 10px;
      margin-left: 10px;
      margin-right: 15px;
    }
</style>