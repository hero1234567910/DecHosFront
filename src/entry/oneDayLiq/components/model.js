import evn from '../utils/evn.js'

function model(http) {

  return {
     getInpatientOneDayLiquidation(data) {
      return http.post(evn.SEC_HOSAPI+'/wx/common/getInpatientOneDayLiquidation',data,{
      	headers:{
      		'Content-Type': 'application/json;charset=utf-8'
      	}
      });
    },
     getInPatientInfoByPatid(data) {
      return http.post(evn.SEC_HOSAPI+'/wx/common/getInPatientInfoByPatid',data,{
      	headers:{
      		contentType:'application/json;charset=utf-8'
      	}
      });
    }
  }

}

export default model