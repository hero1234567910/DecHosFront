import evn from '../utils/evn.js'

function model(http) {

  return {
  	getTGInfo(data){
  		return http.post(evn.SEC_HOSAPI+'/wx/sys/hosuser/getInforMation',data,{
      	headers:{
      		'Content-Type': 'application/json;charset=utf-8'
      	}
      });
  	},
  	// 获取用户信息
    getUserInfo(data) {
      return http.post(evn.SEC_HOSAPI+'/wx/common/code2Token',data,{
      	headers:{
      		'Content-Type': 'application/json;charset=utf-8'
      	}
      });
    },
    // 查询并绑定
    bindUser(data) {
      return http.post(evn.SEC_HOSAPI+'/wx/common/bindInfo',data,{
      	headers:{
      		contentType:'application/json;charset=utf-8'
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
    getUserByToken(data){
    	return http.post(evn.SEC_HOSAPI+'/wx/common/getUserByToken',data,{
      	headers:{
      		'Content-Type': 'application/json;charset=utf-8'
      	}
      });
    },
    //当班出诊科室查询
		getDepartmentOnDuty(data){
			return http.post(evn.SEC_HOSAPI+'/wx/common/getDepartmentOnDuty',data,{
				headers:{
	    			contentType:'application/json;charset=utf-8'
	    		}
			})
		},
  }

}

export default model