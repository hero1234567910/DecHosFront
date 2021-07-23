import evn from '../utils/evn.js'

function model(http) {

  return {
  	add(data) {
      return http.post(evn.SEC_HOSAPI+'/sys/sechosHealthy/add',data,{
      	headers:{
      		'Content-Type': 'application/json;charset=utf-8'
      	}
      });
    },
    getByDetail(data) {
      return http.post(evn.SEC_HOSAPI+'/sys/sechosHealthy/getByDetail',data,{
      	headers:{
      		'Content-Type': 'application/json;charset=utf-8'
      	}
      });
    },
    getByOpenId(data) {
      return http.post(evn.SEC_HOSAPI+'/sys/sechosHealthy/getByOpenId?openId='+data,{
      	headers:{
      		// 'Content-Type': 'application/json;charset=utf-8'
      	}
      });
    },
    listData(data) {
      return http.post(evn.SEC_HOSAPI+'/sys/sechosHealthy/listData',data,{
      	headers:{
      		'Content-Type': 'application/json;charset=utf-8'
      	}
      });
    },
    getByRowGuid(data) {
      return http.post(evn.SEC_HOSAPI+'/sys/sechosHealthy/getByRowGuid?rowGuid='+data,{
      	headers:{
      		// 'Content-Type': 'application/json;charset=utf-8'
      	}
      });
    },
    exportInfo(name){
      return http.post(evn.SEC_HOSAPI+'/sys/sechosHealthy/exportInfo?name='+name,{
      	headers:{
      		// 'Content-Type': 'application/json;charset=utf-8'
      	}
      });
    }
  }

}

export default model