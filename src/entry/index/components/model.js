import evn from '../utils/evn.js'

function model(http) {

  return {
  	getOutpatientWaitingInfo(data) {
      return http.post(evn.SEC_HOSAPI+'/wx/common/getOutpatientWaitingInfo',data,{
      	headers:{
      		'Content-Type': 'application/json;charset=utf-8'
      	}
      });
    },
  	// 查询门诊患者信息
    getInfo(data) {
      return http.post(evn.SEC_HOSAPI+'/wx/common/checkPatient',data,{
      	headers:{
      		'Content-Type': 'application/json;charset=utf-8'
      	}
      });
    },
  	getTGInfo(){
  		return http.get(evn.SEC_HOSAPI+'/wx/sys/informationinfo/getAnnouncements',{
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
    refreshToken(data){
    	return http.post(evn.SEC_HOSAPI+'/wx/common/refreshToken',data,{
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