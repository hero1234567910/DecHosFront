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
	getAppointDepartmentYNo(data){
    	return http.post(evn.SEC_HOSAPI+'/wx/common/getAppointDepartmentYNo',data,{
    		headers:{
    			contentType:'application/json;charset=utf-8'
    		}
    	})
    },
    getOutpatientAppointmentReg(data){
    	return http.post(evn.SEC_HOSAPI+'/wx/common/getOutpatientAppointmentReg',data,{
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
	getDepartmentOnDutyYNo(data){
		return http.post(evn.SEC_HOSAPI+'/wx/common/getDepartmentOnDutyYNo',data,{
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
	},
	getAppointDoctorInfo(data){
		return http.post(evn.SEC_HOSAPI+'/wx/common/getAppointDoctorInfo',data,{
			headers:{
    			contentType:'application/json;charset=utf-8'
    		}
		})
	},
	getAppointDoctorYNo(data){
		return http.post(evn.SEC_HOSAPI+'/wx/common/getAppointDoctorYNo',data,{
			headers:{
    			contentType:'application/json;charset=utf-8'
    		}
		})
	}
	,
	//挂号预算
	RegisteredBudget(data){
		return http.post(evn.SEC_HOSAPI+'/wx/common/RegisteredBudget',data,{
			headers:{
    			contentType:'application/json;charset=utf-8'
    		}
		})
	}
	,
	getDoctorOnDutyYNo(data){
		return http.post(evn.SEC_HOSAPI+'/wx/common/getDoctorOnDutyYNo',data,{
			headers:{
    			contentType:'application/json;charset=utf-8'
    		}
		})
	}
  }

}

export default model