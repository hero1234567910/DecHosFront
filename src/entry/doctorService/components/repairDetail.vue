<template>
  <div style="overflow: auto;height:100%;overflow-x: hidden;">
    <div class="image-style" style="height: 138px;">
      <img style="height:100%;height: 138px;" src="../../../../static/img-2/bxxq.png" />
    </div>
    <div class="weui-cells weui-cells_form" style="margin-top:0px;">
      <div class="weui-cells__title-wzl">申修人姓名</div>
      <div class="weui-cells" style="margin-top:0px;">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <input class="weui-input" type="text" placeholder="申修人姓名(必填)" />
          </div>
        </div>
      </div>
      <div class="weui-cells__title-wzl">申修人电话</div>
      <div class="weui-cells" style="margin-top:0px;">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <input class="weui-input" type="text" placeholder="申修人电话(必填)" />
          </div>
        </div>
      </div>
      <div class="weui-cells__title-wzl">损坏部位</div>
      <div class="weui-cells" style="margin-top:0px;">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <input class="weui-input" type="text" placeholder="损坏部位(必填)" />
          </div>
        </div>
      </div>
      <div class="weui-cells__title-wzl">报修内容</div>
      <div class="weui-cells" style="margin-top:0px;">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <textarea
              id="repairContent"
              class="weui-textarea"
              placeholder="报修内容(必填)"
              rows="3"
              maxlength="200"
              @keyup="showCount()"
              @keydown="showCount()"
              @blur="showCount()"
              @click="showCount()"
            ></textarea>
            <div class="weui-textarea-counter">
              <span>{{sCount}}</span>/200
            </div>
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
          @click="cancel()"
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
export default {
  data() {
    return {
      sCount: 0
    };
  },
  mounted() {},
  methods: {
    showCount() {
      this.sCount = $("#repairContent").val().length;
    },
    returnList() {
      this.$router.push("/");
    },
    cancel(){

    }
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