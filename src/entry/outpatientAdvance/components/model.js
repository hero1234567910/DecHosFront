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
    }
  }

}

export default model