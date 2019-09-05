<template>
  <div style="overflow: auto;height:100%;overflow-x: hidden;">
    <div class="image-style" style="height: 138px;">
      <img style="height:100%;height: 138px;" src="../../../../static/img-2/bxxq.png" />
    </div>
    <div class="weui-cells weui-cells_form" style="margin-top:0px;">
      <div class="weui-cells__title-wzl">报修人姓名</div>
      <div class="weui-cells" style="margin-top:0px;">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <input class="weui-input" type="text" id="repairName" name="repairName" readonly />
          </div>
        </div>
      </div>
      <div class="weui-cells__title-wzl">报修人电话</div>
      <div class="weui-cells" style="margin-top:0px;">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <input class="weui-input" type="text" id="repairPhone" name="repairPhone" readonly/>
          </div>
        </div>
      </div>
      <div class="weui-cells__title-wzl">设备名称</div>
      <div class="weui-cells" style="margin-top:0px;">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <input class="weui-input" type="text" id="deviceName" name="deviceName" readonly/>
          </div>
        </div>
      </div>
      <div class="weui-cells__title-wzl">设备位置</div>
      <div class="weui-cells" style="margin-top:0px;">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <input class="weui-input" type="text" id="devicePlace" name="devicePlace" readonly/>
          </div>
        </div>
      </div>
      <div class="weui-cells__title-wzl">损坏部位</div>
      <div class="weui-cells" style="margin-top:0px;">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <input class="weui-input" type="text" id="damagedParts" name="damagedParts" readonly/>
          </div>
        </div>
      </div>
      <div class="weui-cells__title-wzl">报修状态</div>
      <div class="weui-cells" style="margin-top:0px;">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <input class="weui-input" type="text" id="repairStatus" name="repairStatus" readonly/>
          </div>
        </div>
      </div>
      <div class="weui-cells__title-wzl">报修内容</div>
      <div class="weui-cells" style="margin-top:0px;">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <textarea
              id="reportContent"
              name="reportContent"
              class="weui-textarea"
              rows="3"
              maxlength="200"
              readonly
            ></textarea>
          </div>
        </div>
      </div>
      <div class="weui-cells__title-wzl">破损照片</div>
      <div class="weui-cells" style="margin-top:0px;">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <div class="weui-uploader">
              <div class="weui-uploader__hd">
                <!-- <p class="weui-uploader__title">图片上传</p> -->
                <!-- <div class="weui-uploader__info">0/2</div> -->
              </div>
              <div class="weui-uploader__bd">
                <ul class="weui-uploader__files" id="uploaderFiles">
                  <!-- <li class="weui-uploader__file"></li> -->
                </ul>
                <div class="weui-uploader__input-box">
                  <input
                    id="uploaderInput"
                    class="weui-uploader__input"
                    type="file"
                    accept="image/*"
                    multiple
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="weui-row">
      <div class="weui-col-50">
        <a
          href="javascript:;"
          class="weui-btn weui-btn_primary hero-button"
          @click="toSubmit()"
          v-show="cancelButton"
        >取消报修</a>
      </div>
      <div class="weui-col-50">
        <a
          href="javascript:;"
          class="weui-btn weui-btn_primary hero-button"
          @click="returnList()"
        >返回列表</a>
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
      picGuid:'',
      rowGuid:'',
      cancelButton:true
    };
  },
  mounted() {
    this.initRepairDetail();
  },
  methods: {
    initRepairDetail(){
      let self = this;
      let data = this.$route.query;
      $('#repairName').val(data.repairName);
      $('#repairPhone').val(data.repairPhone);
      $('#deviceName').val(data.deviceName);
      $('#devicePlace').val(data.devicePlace);
      $('#damagedParts').val(data.damagedParts);
      if(data.repairStatus==0){
        $('#repairStatus').val('报修中');
        $('#repairStatus').css('color','blue')
      }else if(data.repairStatus==1){
        $('#repairStatus').val('报修取消');
        $('#repairStatus').css('color','red')
        self.cancelButton = false;
      }else{
        $('#repairStatus').val('报修完成');
        $('#repairStatus').css('color','green')
        self.cancelButton = false;
      }
      $('#reportContent').val(data.reportContent);
      self.picGuid = data.picGuid;
      self.rowGuid = data.rowGuid;
    },
    returnList() {
      this.$router.push("/myRepairList");
    },
    cancel(){
      let self = this;
      let data = this.$route.query.rowGuid;
      this.model.cancelRepair(data).then(function(res){
        if(res.data.code == "0"){
          $.toast("报修取消成功",function(){
            self.$router.push("/myRepairList");
          });
        }else{
          $.toptip(res.data.msg, "error");
        }
      })
    },
    toSubmit() {
      let self = this;
      $.confirm(
        "您确定要取消吗？",
        "提示",
        function() {
          self.cancel();
        },
        function() {
          return;
        }
      );
    },
  }
};
</script>

<style scoped>
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
.weui-btn {
  width: 150px;
}
.content_Down_photo img {
  width: 70px;
  height: 70px;
  margin: 15px;
}
.hero-button {
  background-color: #44c5e3;
  width: 170px;
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
</style>