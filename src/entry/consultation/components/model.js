import evn from '../utils/evn.js'

function model(http) {

  return {
    getList(data){
    	return http.get(evn.SEC_HOSAPI+'/wx/sys/sechosconsultation/listData?'+toQueryString(data),{
    		headers:{
    			contentType:'application/json;charset=utf-8'
    		}
    	})
    },
    consul(data){
    	return http.post(evn.SEC_HOSAPI+'/wx/sys/sechosconsultation/add',data,{
    		headers:{
    			contentType:'application/json;charset=utf-8'
    		}
    	})
    },
    getDetail(data){
			return http.post(evn.SEC_HOSAPI+'/wx/sys/sechosconsultation/queryByGuid?'+toQueryString(data),{
				headers:{
					contentType:'application/json;charset=utf-8'
				}
			})
    }
  }

}


//url转换工具
function cleanArray(actual) {
  const newArray = [];
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i]);
    }
  }
  return newArray;
}
function toQueryString(obj) {
			  if (!obj) return "";
			  return cleanArray(
			    Object.keys(obj).map(key => {
			      if (obj[key] === undefined) return "";
			        return encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]);
			    })
			  ).join("&")}
export default model