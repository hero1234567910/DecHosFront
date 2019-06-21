import evn from './utils/evn.js'

function model(http) {

  return {
    // 获取用户信息
    getUserInfo(data) {
      return http.post(evn.SEC_HOSAPI+'/wx/common/code2Token',data,{
      	headers:{
      		'Content-Type': 'application/json;charset=utf-8'
      	}
      });
    },
  }

}

export default model