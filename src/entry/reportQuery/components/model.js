import evn from "../utils/evn.js";

function model(http) {
  return {
    getReportList(data) {
      return http.post(evn.SEC_HOSAPI + "/wx/common/getReportList" ,data, {
        headers: {
          contentType: "application/json;charset=utf-8"
        }
      });
    },
    getLabReportList(data) {
      return http.post(evn.SEC_HOSAPI + "/wx/common/getLabReportList" ,data,{
          headers: {
            contentType: "application/json;charset=utf-8"
          }
        });
    },
    getDetail(data){
    	return http.post(evn.SEC_HOSAPI + "/wx/common/getReportDetail" ,data,{
          headers: {
            contentType: "application/json;charset=utf-8"
          }
        });
    },
    getLabDetail(data){
    	return http.post(evn.SEC_HOSAPI + "/wx/common/getLabReportDetail" ,data,{
          headers: {
            contentType: "application/json;charset=utf-8"
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
  };
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
  ).join("&");
}

export default model;
