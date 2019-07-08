import evn from './utils/evn.js'

function model(http) {

  return {
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