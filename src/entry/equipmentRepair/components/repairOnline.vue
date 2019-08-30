<template>
  <div style="overflow: auto;height:100%;overflow-x: hidden;">
    <div class="image-style" style="height: 138px;">
      <img style="height:100%;height: 138px;" src="../../../../static/img-2/ylsbzxbx.png" />
    </div>
    <div class="weui-cells weui-cells_form" style="margin-top:0px;">
      <div class="weui-cells__title-wzl">报修人姓名</div>
      <div class="weui-cells" style="margin-top:0px;">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <input class="weui-input" type="text" placeholder="报修人姓名(必填)" />
          </div>
        </div>
      </div>
      <div class="weui-cells__title-wzl">报修人电话</div>
      <div class="weui-cells" style="margin-top:0px;">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <input class="weui-input" type="text" placeholder="报修人电话(必填)" />
          </div>
        </div>
      </div>
      <div class="weui-cells__title-wzl">设备名称</div>
      <div class="weui-cells" style="margin-top:0px;">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <input class="weui-input" type="text" placeholder="设备名称(必填)" />
          </div>
        </div>
      </div>
      <div class="weui-cells__title-wzl">设备位置</div>
      <div class="weui-cells" style="margin-top:0px;">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <input class="weui-input" type="text" placeholder="设备位置(必填)" />
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
            <textarea id="repairContent"
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
                <p class="weui-uploader__title">图片上传</p>
                <div class="weui-uploader__info">0/2</div>
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
    <div style="margin-top: 30px;">
      <div>
        <a href="javascript:;" class="weui-btn weui-btn_primary" v-on:click="save()">提交</a>
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
  mounted() {
    this.upLoadInit();
  },
  methods: {
    showCount() {
      this.sCount = $("#repairContent").val().length;
    },
    upLoadInit() {
      var allowTypes = ["image/jpg", "image/jpeg", "image/png", "image/gif"];
      // 允许上传的图片类型
      // 1024KB，也就是 1MB
      var maxSize = 2048 * 2048;
      // 图片最大宽度
      var maxWidth = 10000;
      // 最大上传图片数量
      var maxCount = 2;
      $("#uploaderInput").on("change", function(event) {
        var files = event.target.files;
        //console.log(files);return false;
        // 如果没有选中文件，直接返回
        if (files.length === 0) {
          return;
        }

        for (var i = 0, len = files.length; i < len; i++) {
          var file = files[i];
          var reader = new FileReader();

          // 如果类型不在允许的类型范围内
          if (allowTypes.indexOf(file.type) === -1) {
            $.alert("该类型不允许上传！", "警告！");
            continue;
          }

          if (file.size > maxSize) {
            //$.weui.alert({text: '图片太大，不允许上传'});
            $.alert("图片太大，不允许上传", "警告！");
            continue;
          }

          if ($(".weui-uploader__file").length >= maxCount) {
            $.alert({ text: "最多只能上传" + maxCount + "张图片" });
            return;
          }
          reader.readAsDataURL(file);
          reader.onload = function(e) {
            console.log(e);
            var img = new Image();
            img.src = e.target.result;
            img.onload = function() {
              // 不要超出最大宽度
              var w = Math.min(maxWidth, img.width);
              // 高度按比例计算
              var h = img.height * (w / img.width);
              var canvas = document.createElement("canvas");
              var ctx = canvas.getContext("2d");
              // 设置 canvas 的宽度和高度
              canvas.width = w;
              canvas.height = h;
              ctx.drawImage(img, 0, 0, w, h);
              var base64 = canvas.toDataURL("image/jpeg", 0.8);
              //console.log(base64);
              // 插入到预览区
              var $preview = $(
                '<li class="weui-uploader__file weui-uploader__file_status" style="background-image:url(' +
                  img.src +
                  ')"></li>'
              );
              $("#uploaderFiles").append($preview);
              var num = $(".weui-uploader__file").length;
              $(".weui-uploader__info").text(num + "/" + maxCount);

              var formData = new FormData();

              formData.append("images", base64);
              console.log(img.src);
              //   $.ajax({
              //     url: "savetofile.php",

              //     type: "POST",

              //     data: formData,

              //     contentType: false,

              //     processData: false,

              //     success: function(data) {
              //       $preview.removeClass("weui-uploader__file_status");
              //       $.toast("上传成功", function() {
              //         //console.log('close');
              //       });
              //     },
              //     error: function(xhr, type) {
              //       alert("Ajax error!");
              //     }
              //   });
            };
          };
        }
      });
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
  width: 230px;
}
.content_Down_photo img {
  width: 70px;
  height: 70px;
  margin: 15px;
}
</style>