import evn from '../utils/evn.js'

function model(http) {

  return {
  	beforePay(data) {
      return http.post(evn.SEC_HOSAPI+'/wx/common/beforePay',data,{
      	headers:{
      		'Content-Type': 'application/json;charset=utf-8'
      	}
      });
    },
     getInfo(data) {
      return http.post(evn.SEC_HOSAPI+'/wx/common/checkPatient',data,{
      	headers:{
      		'Content-Type': 'application/json;charset=utf-8'
      	}
      });
    },
    // 查询并绑定
    selectPatient(data) {
      return http.post(evn.SEC_HOSAPI+'/wx/common/checkPatient',data,{
      	headers:{
      		contentType:'application/json;charset=utf-8'
      	}
      });
    },
    getJzlsh(data) {
      return http.post(evn.SEC_HOSAPI+'/wx/common/getJzlsh',data,{
      	headers:{
      		'Content-Type': 'application/json;charset=utf-8'
      	}
      });
    },
    getSummary(data) {
      return http.post(evn.SEC_HOSAPI+'/wx/common/getSummary',data,{
      	headers:{
      		'Content-Type': 'application/json;charset=utf-8'
      	}
      });
    },
    getAdvanceDetail(data) {
      return http.post(evn.SEC_HOSAPI+'/wx/common/getAdvanceDetail',data,{
      	headers:{
      		'Content-Type': 'application/json;charset=utf-8'
      	}
      });
    },
     placeOrderByWN(data) {
      return http.post(evn.SEC_HOSAPI+'/wx/common/placeOrderByWN',data,{
      	headers:{
      		'Content-Type': 'application/json;charset=utf-8'
      	}
      });
    },
  }

}

export default model