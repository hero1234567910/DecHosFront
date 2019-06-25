<template>
  <div >
    <div class="weui-tab" id="page-infinite-navbar" >
      <div class="weui-tab__bd" id="#app">
        <div id="tab1" class="weui-tab__bd-item weui-tab__bd-item--active">
          <h2 class="doc-head">{{title}}</h2>
          <h4 class="doc-info">发布时间:{{infoDate}}</h4>
          <h6></h6>
          <div class="hos-content" v-html="content">
            {{content}}
          </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import weui from "jquery-weui/dist/js/jquery-weui.min";
//import evn from '../index/utils/evn.js';
import model from './model.js'
export default {
  name: "floorDistribution.vue",
  data(){
    this.model = model(this.axios)
    
    return{
      title:'',
      infoDate:'',
      createUserName:'',
      content:''
    }
  },
  mounted(){
    this.getFloorDistribution();
  },
  methods: {
    getFloorDistribution(){
      let self = this;
      let data = this;
      this.model.getFloorDistribution(data).then(function(res){
        if(res.data.code == '0'){
          //console.log(res.data);
          //console.log(res.data.data);
          let title = res.data.data.title;
          let infoDate = res.data.data.infoDate;
          let createUserName = res.data.data.createUserName;
          let content = res.data.data.content;
          self.title = title;
          self.infoDate = infoDate;
          self.createUserName = createUserName;
          var _str = res.data.data.content.replace(/<img src="/g, '<img class="hos-img" src="http://localhost:9091');
          //console.log(_str);
          self.content = _str;
        }else{
          $.alert(res.data.msg);
        }
        console.log(res.data.data);
      })
    }
  }
};



</script>

<style>
.doc-head {
  text-align: center;
}
.doc-info {
  text-align: center;
}
.p-style {
  margin-left: 20px;
  margin-right: 20px;
  text-indent: 2em;
}
body{
    overflow: auto;
}
.hos-content{
  margin-top: 0px;
  margin-right: 12px;
  margin-left: 12px;
}
.hos-img{
  display: inline-block;
  height: auto;
  max-width: 100%;
}
</style>
