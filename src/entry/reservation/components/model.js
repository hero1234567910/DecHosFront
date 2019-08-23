import evn from '../utils/evn.js'

function model(http) {

  return {
    // 查询患者预约信息(PATID)
    getPatientAppointInfo(data) {
      return http.post(evn.SEC_HOSAPI+'/wx/common/getPatientAppointInfo',data,{
      	headers:{
      		contentType:'application/json;charset=utf-8'
      	}
      });
    },
    // 查询并绑定
    selectPatient(data) {
      return http.post(evn.SEC_HOSAPI + "/wx/common/checkPatient", data, {
        headers: {
          contentType: "application/json;charset=utf-8"
        }
      });
    },
    // 取消预约
    cancelSubmit(data) {
      return http.post(evn.SEC_HOSAPI + "/wx/common/cancelSubmit", data, {
        headers: {
          contentType: "application/json;charset=utf-8"
        }
      });
    },
    savePatient(data){
    	return http.post(evn.SEC_HOSAPI+'/wx/common/bingdingPatient',data,{
    		headers:{
    			contentType:'application/json;charset=utf-8'
    		}
    	})
    },
    // 查询门诊患者信息
    getInfo(data) {
      return http.post(evn.SEC_HOSAPI+'/wx/common/checkPatient',data,{
      	headers:{
      		'Content-Type': 'application/json;charset=utf-8'
      	}
      });
    },
  }

}

export default model