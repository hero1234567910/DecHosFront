import evn from '../index/utils/evn.js';

function model(http) {

  return {
    // 获取医院简介信息
    getHosIntroduction(data) {
    	//console.log(data);
        return http.get(evn.SEC_HOSAPI+'/wx/sys/informationinfo/getHosIntroduction',data,{
            headers:{
                contentType:'application/json;charset=utf-8'
            }
        });
    },
    //获取门诊流程
    getOutpatientProcess(data){
        return http.get(evn.SEC_HOSAPI+'/wx/sys/informationinfo/getOutpatientProcess',data,{
            headers:{
                contentType:'application/json;charset=utf-8'
            }
        });
    },
    //获取楼层分布
    getFloorDistribution(data){
        return http.get(evn.SEC_HOSAPI+'/wx/sys/informationinfo/getFloorDistribution',data,{
            headers:{
                contentType:'application/json;charset=utf-8'
            }
        });
    },
    //获取就诊须知
    getPatientNeedtoKnow(data){
        return http.get(evn.SEC_HOSAPI+'/wx/sys/informationinfo/getPatientNeedtoKnow',data,{
            headers:{
                contentType:'application/json;charset=utf-8'
            }
        });
    },
    //获取入院引导
    getDirectAdmission(data){
        return http.get(evn.SEC_HOSAPI+'/wx/sys/informationinfo/getDirectAdmission',data,{
            headers:{
                contentType:'application/json;charset=utf-8'
            }
        });
    },
    //获取住院须知
    getHospitalisation(data){
        return http.get(evn.SEC_HOSAPI+'/wx/sys/informationinfo/getHospitalisation',data,{
            headers:{
                contentType:'application/json;charset=utf-8'
            }
        });
    },
    //获取出院导引
    getOutHospitalInfo(data){
        return http.get(evn.SEC_HOSAPI+'/wx/sys/informationinfo/getOutHospitalInfo',data,{
            headers:{
                contentType:'application/json;charset=utf-8'
            }
        });
    },
    //获取出院须知信息
    getOutNeedKnow(data){
        return http.get(evn.SEC_HOSAPI+'/wx/sys/informationinfo/getOutNeedKnow',data,{
            headers:{
                contentType:'application/json;charset=utf-8'
            }
        });
    },
    //获取科室简介
    getDepartmentsIntroduction(data){
        return http.get(evn.SEC_HOSAPI+'/wx/sys/informationinfo/getDepartmentsIntroduction',data,{
            headers:{
                contentType:'application/json;charset=utf-8'
            }
        });
    },
    //获取健康教育
    getHealthEducation(data){
        return http.get(evn.SEC_HOSAPI+'/wx/sys/informationinfo/getHealthEducation',data,{
            headers:{
                contentType:'application/json;charset=utf-8'
            }
        });
    },
    //获取附件
    getAttachList(data){
        return http.post(evn.SEC_HOSAPI+'/wx/sys/frameAttach/getAttachList',data,{
            headers:{
                contentType:'application/json;charset=utf-8'
            }
        });
    }
  }

}

export default model