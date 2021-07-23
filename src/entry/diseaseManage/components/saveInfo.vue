<template>
  <div id="hero-saveInfo" style="overflow-y: auto;height: calc(100vh - 102px);">
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <div style="padding: 15px">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="form.age" type="number">
              <!-- <i slot="suffix" class="el-input__icon el-icon-date"></i> -->
          </el-input>
        </el-form-item>
        <el-form-item label="身高" prop="height">
          <el-input v-model="form.height">
              <span slot="suffix">cm</span>
          </el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="form.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="填报日期" prop="date">
          <el-col :span="22">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
              v-model="form.date"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </el-form-item>
      </div>

      <div id="saveInfo-head">
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

      <div style="text-align: center;margin-top:10px">
          <el-button type="primary" style="width:100%" @click="onSubmit">立即填报</el-button>
      </div>
      
    </el-form>
  </div>
</template>


<script>
import model from "./model.js";
export default {
  data() {
    this.model = model(this.axios);
    return {
      form: {
        name: "",
        age: "",
        date: new Date(),
        height: "",
        sex: "",
        weight:'',
        bloodPressure:'',
        heartRate:'',
        fastingBloodGlucose:'',
        postprandialBloodGlucose:'',
        openId:localStorage.getItem("sec_openId"),
      },
      val:'',
      rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
          ],
          age: [
            { required: true, message: '请输入年龄', trigger: 'blur' },
          ],
          date: [
            { required: true, message: '请选择日期', trigger: 'blur' },
          ],
          height: [
            { required: true, message: '请输入身高', trigger: 'blur' },
          ],
          sex: [
            { required: true, message: '请选择性别', trigger: 'blur' },
          ],
        }
    };
  },
  mounted() {
    this.model.getByOpenId(this.form.openId).then(res => {
      if(res.data.code == 0 && res.data.data){
        this.form = res.data.data;
        this.form.date=new Date();
        this.form.weight = "";
        this.form.bloodPressure = "";
        this.form.heartRate = "";
        this.form.fastingBloodGlucose = "";
        this.form.postprandialBloodGlucose = "";
      }
    })
  },
  methods: {
    async onSubmit() {
      const flag = await this.checkSL();
      this.$refs["form"].validate((valid) => {
          if (valid) {
            if(this.form.openId){
              if(!flag){
                this.$dialog.alert({
                  message: '今日已填报，无需再次填报',
                });
                return false;
              }

              this.model.add(this.form).then(res => {
                this.$dialog.alert({
                  message: '填报成功',
                });
                this.form.weight = "";
                this.form.bloodPressure = "";
                this.form.heartRate = "";
                this.form.fastingBloodGlucose = "";
                this.form.postprandialBloodGlucose = "";
              })
            }else{
              this.$dialog.alert({
                  message: '用户信息获取失败,无法填报',
              });
            }            

          } else {
            console.log('error submit!!');
            return false;
          }
        });
        
    },
    async checkSL(){
      let params = {
        date:this.form.date,
        openId:this.form.openId
      }
      return await this.model.getByDetail(params).then(res => {
        if(res.data.code == 0){
          return true;
        }else{
          console.log(res.data.msg)
          return false;
        }
      })
    }
  },
};
</script>

<style>
#saveInfo-head .el-card__header{
    padding: 10px;
}
#saveInfo-head .el-card__body{
    padding: 14px;
}
/* #hero-saveInfo .el-form-item {
  margin-bottom: 10px;
} */
</style>
<style scoped>
</style>
