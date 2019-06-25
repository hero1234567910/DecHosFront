import evn from '../index/utils/evn.js';

function model(http) {

  return {
    // 获取用户信息
    getHosIntroduction(data) {
    	//console.log(data);
        return http.get(evn.SEC_HOSAPI+'/wx/sys/informationinfo/getHosIntroduction',data,{
            headers:{
                contentType:'application/json;charset=utf-8'
            }
        });
    },
    getOutpatientProcess(data){
        return http.get(evn.SEC_HOSAPI+'/wx/sys/informationinfo/getOutpatientProcess',data,{
            headers:{
                contentType:'application/json;charset=utf-8'
            }
        });
    },
    getFloorDistribution(data){
        return http.get(evn.SEC_HOSAPI+'/wx/sys/informationinfo/getFloorDistribution',data,{
            headers:{
                contentType:'application/json;charset=utf-8'
            }
        });
    }
  }

}

export default model