<template>
  <div id="hero-infoDetail" style="overflow-y: auto;">
    <el-form ref="form" :model="form" label-width="80px" :disabled="true">
      <div style="padding: 15px">
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="form.age">
              <!-- <i slot="suffix" class="el-input__icon el-icon-date"></i> -->
          </el-input>
        </el-form-item>
        <el-form-item label="身高">
          <el-input v-model="form.height">
              <span slot="suffix">cm</span>
          </el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="form.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="填报日期">
          <el-col :span="22">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </el-form-item>
      </div>

      <div id="infoDetail-head">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-weight:700">健康信息收录</span>
          </div>
          <div>
            <el-form-item label="体重">
              <el-input v-model="form.weight">
                  <span slot="suffix">kg</span>
              </el-input>
            </el-form-item>
            <el-form-item label="血压">
              <el-input v-model="form.bloodPressure">
                  <span slot="suffix">kPa</span>
              </el-input>
            </el-form-item>
            <el-form-item label="心率">
              <el-input v-model="form.heartRate">
                  <span slot="suffix">次/分钟</span>
              </el-input>
            </el-form-item>
            <el-form-item label="空腹血糖">
              <el-input v-model="form.fastingBloodGlucose">
                  <span slot="suffix">mmol/L</span>
              </el-input>
            </el-form-item>
            <el-form-item label="餐后血糖">
              <el-input v-model="form.postprandialBloodGlucose">
                  <span slot="suffix">mmol/L</span>
              </el-input>
            </el-form-item>
          </div>
        </el-card>
      </div>
      
    </el-form>
  </div>
</template>


<script>
import model from "./model.js";
export default {
  props:["rowGuid"],
  data() {
    this.model = model(this.axios);
    return {
      form: {
        name: "",
        age: "",
        date: "",
        height: "",
        sex: "",
        weight:'',
        bloodPressure:'',
        heartRate:'',
        fastingBloodGlucose:'',
        postprandialBloodGlucose:''
      },
    };
  },
  watch:{
    rowGuid:{
      async handler(val){
        this.model.getByRowGuid(this.rowGuid).then(res => {
          if(res.data.code == 0 && res.data.data){
            this.form = res.data.data;
          }
        })
      },
      immediate:true
    }
    
  },
  mounted() {
    
  },
  methods: {
    onSubmit() {
        console.log(this.form)
    },
  },
};
</script>

<style>
#infoDetail-head .el-card__header{
    padding: 10px;
}
#infoDetail-head .el-card__body{
    padding: 14px;
}
#hero-infoDetail .el-form-item {
  margin-bottom: 10px;
}
.el-input.is-disabled .el-input__inner{
  color: black;
}
</style>
<style scoped>
</style>
