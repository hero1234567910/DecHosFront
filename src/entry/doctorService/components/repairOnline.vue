<template>
  <div style="overflow: auto;height:100%;overflow-x: hidden;">
    <div class="image-style" style="height: 138px;">
      <img style="height:100%;height: 138px;width: 100%;" src="../../../../static/img-2/ylsbzxbx.png" />
    </div>
    <div class="weui-cells weui-cells_form" style="margin-top:0px;">
      <div class="weui-cells__title-wzl">报修人姓名</div>
      <div class="weui-cells" style="margin-top:0px;">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <input
              class="weui-input"
              type="text"
              id="repairName"
              name="repairName"
              placeholder="报修人姓名(必填)"
            />
          </div>
        </div>
      </div>
      <div class="weui-cells__title-wzl">报修人电话</div>
      <div class="weui-cells" style="margin-top:0px;">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <input
              class="weui-input"
              type="text"
              id="repairPhone"
              name="repairPhone"
              placeholder="报修人电话(必填)"
            />
          </div>
        </div>
      </div>
      <div class="weui-cells__title-wzl">设备名称</div>
      <div class="weui-cells" style="margin-top:0px;">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <input
              class="weui-input"
              type="text"
              id="deviceName"
              name="deviceName"
              placeholder="设备名称(必填)"
            />
          </div>
        </div>
      </div>
      <div class="weui-cells__title-wzl">设备位置</div>
      <div class="weui-cells" style="margin-top:0px;">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <input
              class="weui-input"
              type="text"
              id="devicePlace"
              name="devicePlace"
              placeholder="设备位置(必填)"
            />
          </div>
        </div>
      </div>
      <div class="weui-cells__title-wzl">损坏部位</div>
      <div class="weui-cells" style="margin-top:0px;">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <input
              class="weui-input"
              type="text"
              id="damagedParts"
              name="damagedParts"
              placeholder="损坏部位(必填)"
            />
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
                <p class="weui-uploader__title">图片上传(可选)</p>
                <div class="weui-uploader__info">0/1</div>
              </div>
              <div id="uploaderInput" class="weui-uploader__bd">
                <ul class="weui-uploader__files" id="uploaderFiles">
                  <!-- <li class="weui-uploader__file"></li> -->
                </ul>
                <div id="uploaderBox" class="weui-uploader__input-box">
                  <input class="weui-uploader__input" type="file" accept="image/*" multiple />
                </div>
                <!-- <a
                  href="javascript:;"
                  class="weui-btn weui-btn_mini weui-btn_warn"
                  v-on:click="deletePic()"
                >删除</a>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="margin-top: 30px;">
      <div>
        <a
          href="javascript:;"
          class="weui-btn weui-btn_primary"
          style="background-color: #4ccbdb;width: 230px;"
          v-on:click="toSubmit()"
        >提交</a>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import model from "./model.js";
import evn from "../utils/evn.js";
import Guid from "./Guid.vue";
export default {
  data() {
    this.model = model(this.axios);
    return {
      sCount: 0,
      guid: ""
    };
  },
  mounted() {
    this.initPage();
    this.upLoadInit();
  },
  methods: {
    showCount() {
      let self = this;
      self.sCount = $("#reportContent").val().length;
    },
    toSubmit() {
      let self = this;
      $.confirm(
        "您确定提交吗？",
        "提示",
        function() {
          self.save();
        },
        function() {
          return;
        }
      );
    },
    initPage() {
      let self = this;
      $("#repairName").val(localStorage.getItem("m_user_userName"));
      $("#repairPhone").val(localStorage.getItem("m_mobile"));
    },
    panNull(ele, str) {
      if (ele == null || ele == "") {
        $.alert(str, "警告");
        return true;
      } else {
        return false;
      }
    },
    save() {
      if (
        this.panNull($("#repairName").val(), "报修人姓名不能为空") ||
        this.panNull($("#repairPhone").val(), "报修人电话不能为空") ||
        this.panNull($("#deviceName").val(), "设备名称不能为空") ||
        this.panNull($("#devicePlace").val(), "设备地址不能为空") ||
        this.panNull($("#damagedParts").val(), "损坏部位内容不能为空") ||
        this.panNull($("#reportContent").val(), "报修内容不能为空")
      ) {
        return;
      }
      this.addRepair();
    },
    addRepair() {
      let self = this;
      let data = {
        repairName: $("#repairName").val(),
        repairGuid: localStorage.getItem("m_user_rowGuid"),
        repairPhone: $("#repairPhone").val(),
        deviceName: $("#deviceName").val(),
        devicePlace: $("#devicePlace").val(),
        damagedParts: $("#damagedParts").val(),
        reportContent: $("#reportContent").val(),
        uploadImgGuid: Guid.guid
      };
      //console.log(Guid.guid);
      this.model.addRepair(data).then(function(res) {
        if (res.data.code == "0") {
          $.toast("提交成功", "success", function() {
            self.$router.push("/myRepairList");
          });
        } else {
          $.toptip(res.data.msg, "error");
        }
      });
    },
    upLoadInit() {
      let allowTypes = ["image/jpg", "image/jpeg", "image/png", "image/gif"];
      // 允许上传的图片类型
      // 最大约为9.5M
      let maxSize = 10000000;
      // 图片最大宽度
      let maxWidth = 10000;
      // 最大上传图片数量
      let maxCount = 1;

      let self = this;
      $("#uploaderInput").on("change", function(event) {
        let files = event.target.files;
        //console.log(files);return false;
        // 如果没有选中文件，直接返回
        if (files.length === 0) {
          return;
        }

        for (let i = 0, len = files.length; i < len; i++) {
          let file = files[i];
          let reader = new FileReader();

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
            //console.log(e);
            let img = new Image();
            img.src = e.target.result;
            img.onload = function() {
              // 不要超出最大宽度
              let w = Math.min(maxWidth, img.width);
              // 高度按比例计算
              let h = img.height * (w / img.width);
              let canvas = document.createElement("canvas");
              let ctx = canvas.getContext("2d");
              // 设置 canvas 的宽度和高度
              canvas.width = w;
              canvas.height = h;
              ctx.drawImage(img, 0, 0, w, h);
              let base64 = canvas.toDataURL("image/jpeg", 0.8);
              //console.log(base64);
              // 插入到预览区
              let $preview = $(
                '<li class="weui-uploader__file weui-uploader__file_status" style="background-image:url(' +
                  img.src +
                  ')"></li>'
              );
              $("#uploaderFiles").append($preview);
              let num = $(".weui-uploader__file").length;
              $(".weui-uploader__info").text(num + "/" + maxCount);
              $("#uploaderBox").css("display", "none");
              //document.getElementById('uploaderBox').setAttribute('display','none');
              // $("#uploaderInput").append(
              //   '<a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary" v-on:click="deletePic()">删除</a>'
              // );
              //document.getElementById('deleteBt').setAttribute('v-on:click','delete()')
              //console.log(file)
              //console.log(files[0]);
              $.showLoading();
              let deleteComponent = Vue.extend({
                template:
                  '<a id="deleteID" href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary" v-on:click="deletePic()">删除</a>',
                methods: {
                  deletePic() {
                    // let self = this;
                    let data = Guid.guid;
                    //console.log(data);
                    if (data == null || data == undefined || data == "") {
                      $.toptip("暂无图片可删除", "warning");
                    } else {
                      //console.log(data);
                      let guids = new Array();
                      guids.push(data);
                      JSON.stringify(guids);
                      //console.log(self.model);
                      self.model.deleteMyPic(guids).then(function(res) {
                        if (res.data.code == "0") {
                          $.toast("图片删除成功", "success", function() {
                            $("#uploaderBox").css("display", "flex");
                            Guid.guid = "";
                            // console.log($(".weui-uploader__file").length);
                            //console.log(document.getElementsByClassName("weui-uploader__file"))
                            $(".weui-uploader__file").removeClass(
                              "weui-uploader__file_status"
                            );
                            $(".weui-uploader__file").removeClass(
                              "weui-uploader__file"
                            );
                            $('#deleteID').remove();
                            //$(".weui-uploader__file").css("display", "none");
                            $(".weui-uploader__info").text(0 + "/" + 1);
                          });
                        } else {
                          $.toptip(res.data.msg, "error");
                        }
                      });
                    }
                  }
                }
              });
              let component = new deleteComponent().$mount();
              document
                .getElementById("uploaderInput")
                .appendChild(component.$el);

              var formData = new FormData();
              formData.append("file", file);
              
              $.ajax({
                type: "POST",
                url: evn.SEC_HOSAPI + "/wx/sys/common/upload",
                data: formData,
                processData: false,
                contentType: false,
                success: function(res) {
                  //console.log(res);
                  $.hideLoading();
                  let data = JSON.parse(res);
                  Guid.guid = data.attachRowguid;
                  $.toptip("图片上传成功", "success");
                  //console.log(data.attachRowguid);
                }
              });
            };
          };
        }
      });
    }
    // deletePic() {
    //   let self = this;
    //   let data = Guid.guid;
    //   console.log(data);
    //   if (data == null || data == undefined || data == "") {
    //     $.toptip("暂无图片可删除", "warning");
    //   } else {
    //     //console.log(data);
    //     let guids = new Array();
    //     guids.push(data);
    //     JSON.stringify(guids);
    //     this.model.deletePic(guids).then(function(res) {
    //       if (res.data.code == "0") {
    //         $.toast("图片删除成功", "success", function() {
    //           $("#uploaderBox").css("display", "flex");
    //           Guid.guid = "";
    //           // console.log($(".weui-uploader__file").length);
    //           //console.log(document.getElementsByClassName("weui-uploader__file"))
    //           $(".weui-uploader__file").removeClass(
    //             "weui-uploader__file_status"
    //           );
    //           $(".weui-uploader__file").removeClass("weui-uploader__file");
    //           //$(".weui-uploader__file").css("display", "none");
    //           $(".weui-uploader__info").text(0 + "/" + 1);
    //         });
    //       } else {
    //         $.toptip(res.data.msg, "error");
    //       }
    //     });
    //   }
    // }
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
/* .weui-btn_primary {
  background-color: #4ccbdb;
}
.weui-btn {
  width: 230px;
} */
.content_Down_photo img {
  width: 70px;
  height: 70px;
  margin: 15px;
}
</style>