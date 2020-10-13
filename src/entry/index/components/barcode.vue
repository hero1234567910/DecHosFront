<template>
  <div style="width:100%;">
    <svg id="barcode" class="svg-container" />
  </div>
</template>

<script>
import jsbarcode from "jsbarcode";
export default {
  name: "barcode",
  props: {
    barCodeBlh: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  },
  mounted() {
    jsbarcode("#barcode", this.barCodeBlh, {
      displayValue: true, // 是否在条形码下方显示文字
      width: 3, //条宽度
      fontOptions: "bold"
    });
    this.$nextTick();
  },
  methods: {}
};
</script>

<style scoped>
.svg-container {
  display: inline-block;
  position: relative;
  width: 100%;
  vertical-align: middle;
  overflow: hidden;
}
</style>