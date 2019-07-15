import evn from '../utils/evn.js'

function model(http) {

  return {
    savePatient(data){
    	return http.post(evn.SEC_HOSAPI+'/wx/common/bingdingPatient',data,{
    		headers:{
    			contentType:'application/json;charset=utf-8'
    		}
    	})
    },
    getAppointRoomInfo(data){
    	return http.post(evn.SEC_HOSAPI+'/wx/common/getAppointRoomInfo',data,{
    		headers:{
    			contentType:'application/json;charset=utf-8'
    		}
    	})
	},
	//当班出诊科室查询
	getDepartmentOnDuty(data){
		return http.post(evn.SEC_HOSAPI+'/wx/common/getDepartmentOnDuty',data,{
			headers:{
    			contentType:'application/json;charset=utf-8'
    		}
		})
	},
	//当班科室号源信息查询
	getDepartmentNumberSource(data){
		return http.post(evn.SEC_HOSAPI+'/wx/common/getDepartmentNumberSource',data,{
			headers:{
    			contentType:'application/json;charset=utf-8'
    		}
		})
	},
	//当班医生信息查询
	getDoctorOnDuty(data){
		return http.post(evn.SEC_HOSAPI+'/wx/common/getDoctorOnDuty',data,{
			headers:{
    			contentType:'application/json;charset=utf-8'
    		}
		})
	}
  }

}

export default model