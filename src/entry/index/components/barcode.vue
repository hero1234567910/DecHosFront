<template>
  <svg id="barcode" />
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
  },
  methods: {}
};
</script>

<style>
</style>