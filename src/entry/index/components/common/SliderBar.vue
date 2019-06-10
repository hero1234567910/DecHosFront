<template>
<el-container style="height: 500px; border: 1px solid #eee">
	<el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
   </el-header>
   <el-container>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu>
      <el-submenu :index="menu.rowGuid" v-for="(menu,index) in menus" :key="menu.rowGuid">
        <template slot="title"><i class="el-icon-message"></i>{{menu.title}}</template>
        <el-menu-item-group v-for="item in menu.data" :key="item.rowGuid">
          <el-menu-item :index="item.rowGuid">{{item.title}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
    <el-main>
      <!--<el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>-->
    </el-main>
  </el-container>
</el-container>
</template>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
	import model from './model.js'
  export default {
    data() {
    	this.model = model(this.axios)
      return {
      	menus:[]
      }
    },
    mounted(){
    	this.getMenu();
    },
    methods:{
    	getMenu(){
    		let self = this;
    		let data = 'd2abd45c-f039-451f-90cd-843db45fda98';
    		this.model.getMenu(data).then(function(res){
    			self.menus = res.data.data;
    			console.log(self.menus)
    		})
    	}
    }
  };
</script>