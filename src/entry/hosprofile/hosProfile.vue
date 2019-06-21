<template>
  <div >
    <div class="weui-tab" id="page-infinite-navbar" >
      <div class="weui-tab__bd" id="#app">
        <div id="tab1" class="weui-tab__bd-item weui-tab__bd-item--active">
          <h2 class="doc-head">医院简介</h2>
          <h4 class="doc-info">发布时间:2019-6-20 发布人:wzl</h4>
          <h6></h6>
            <!-- {{item.content}} -->
            <p
              class="p-style"
            >张家港市第二人民医院，创建于1958年，前身后塍中心卫生院，2004年更名为张家港市金港镇人民医院，2017年增挂张家港市第二人民医院、张家港保税区医院、同济大学附属上海十院金港分院。</p>
            <p
              class="p-style"
            >医院是保税区金港镇唯一的公立医院，也是片区综合实力较强的二级综合性医院，担负着辖区内医疗、教学、科研、公共卫生等任务。新医院核定床位300张，医院目前开设有呼吸、心血管、消化、内分泌、骨科、普外、神经外科、妇产科、儿科、ICU、口腔、皮肤、眼科、五官科、中医、康复、检验、放射、超声、药剂、病理、内镜等24个临床医技科室。其中，骨科（手足外科）是苏州市特色专科，妇产科是张家港市重点专科。</p>
            <p
              class="p-style"
            >医院医疗设备先进，拥有较强的医疗技术力量，现有在职职工340人，其中高级职称45人，中级职称72人。医院坚持科教兴院的发展战略，积极与上级医院合作，2014年成为市中医院、市一院的医联体，2017年加入上海十院医疗联盟，成为上海十院金港分院，引进了一批经验丰富、技术精湛的专家团队，让辖区群众能享受上级专家、上海专家的优质医疗服务。医院致力培养自己的技术骨干，成功开展了支气管镜检查与治疗；胃肠镜下氩气刀诊疗技术、内镜下胃肠道息肉切除术；脊柱、关节微创手术；消化道肿瘤早期诊断与微创治疗、高血压专病、糖尿病强化治疗及甲状腺疾病的诊治；急危重症疾病一体化治疗及妇科肿瘤微创治疗等。</p>
            <p class="p-style">医院始终坚持公益性，倡导医疗便民服务、优质服务，赢得了患者及家属的好评，在近两年的苏州卫计委第三方满意度测评中多次名列前三甲。</p>
            <p
              class="p-style"
            >医院将秉承“诚信、仁爱、敬业、创新”的医院精神，一如既往地在医、教、研、管理、服务等各方面持续改进，努力打造群众满意、政府满意、社会满意的综合性公立医院。</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import weui from "jquery-weui/dist/js/jquery-weui.min";
//import evn from '../index/utils/evn.js';
//import model from './model.js'
export default {
  name: "hosProfile.vue",
  // data(){
  //   this.model = model(this.axios)
    
  //   return{
  //     hosIntro:[]
  //   }
  // },
  // mounted(){
  //   this.getHosIntroduction();
  // },
  // methods: {
  //   getHosIntroduction(){
  //     let self = this;
  //     let data = this;
  //     this.model.getHosIntroduction(data).then(function(res){
  //       self.hosIntro = res.data.data;
  //       console.log(res.data.data);
  //     })
  //   }
  // }
};



</script>

<style >
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
</style>
