import evn from '../utils/evn.js'

function model(http) {

  return {
   // 查询并绑定
    selectPatient(data) {
      return http.post(evn.SEC_HOSAPI+'/wx/common/checkPatient',data,{
      	headers:{
      		contentType:'application/json;charset=utf-8'
      	}
      });
    },
   getPatientAppointInfo(data){
   	return http.post(evn.SEC_HOSAPI+'/wx/common/getPatientAppointInfo',data,{
      	headers:{
      		contentType:'application/json;charset=utf-8'
      	}
      });
   }
  }

}

export default model