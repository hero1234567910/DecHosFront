import evn from "../utils/evn.js";

function model(http) {
  return {
    //用户登陆
    Login(data) {
      return http.post(evn.SEC_HOSAPI + "/sys/login", data, {
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        }
      });
    },
    // 获取用户信息
    getDocInfo(data) {
      return http.post(evn.SEC_HOSAPI + "/wx/common/docCode2Token", data, {
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        }
      });
    },
    getDocByToken(data) {
      return http.post(evn.SEC_HOSAPI + "/wx/common/getDocByToken", data, {
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        }
      });
    },
    refreshToken(data) {
      return http.post(evn.SEC_HOSAPI + "/wx/common/refreshToken", data, {
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        }
      });
    },
    getMaintainList(data) {
      return http.get(
        evn.SEC_HOSAPI + '/wx/sys/sechosrepair/listMaintainData?'+toQueryString(data),
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8"
          }
        }
      );
    },
    cancelRepair(data) {
      return http.post(
        evn.SEC_HOSAPI + "/wx/sys/sechosrepair/cancelRepair",
        data,
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8"
          }
        }
      );
    },
    successRepair(data) {
      return http.post(
        evn.SEC_HOSAPI + "/wx/sys/sechosrepair/successRepair?"+toQueryString(data),
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8"
          }
        }
      );
    },
    getMyList(data) {
      return http.get(
        evn.SEC_HOSAPI + '/wx/sys/sechosrepair/listMyData?'+toQueryString(data),
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8"
          }
        }
      );
    },
    getMySatList(data) {
      return http.get(
        evn.SEC_HOSAPI + '/wx/sys/sechosrepair/listMySatData?'+toQueryString(data),
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8"
          }
        }
      );
    }
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
