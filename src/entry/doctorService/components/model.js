import evn from "../utils/evn.js";

function model(http) {
  return {
    //滑块验证
    getId(data) {
      return http.get(evn.SEC_HOSAPI + "/sys/getGeetest/getId", {
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        }
      });
    },
    //用户登陆
    //  Login(data) {
    //    return http.post(evn.SEC_HOSAPI + "/sys/login", data, {
    //      headers: {
    //        "Content-Type": "application/json;charset=utf-8"
    //      }
    //    });
    //  },
    //用户登陆
    Login(data) {
      return http.post(evn.SEC_HOSAPI + "/wx/sys/sechosrepair/login", data, {
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
    getListByGuid(data) {
      return http.post(
        evn.SEC_HOSAPI + "/wx/sys/sechosrepair/getListByGuid",
        data,
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
    addRepair(data) {
      return http.post(evn.SEC_HOSAPI + "/wx/sys/sechosrepair/add", data, {
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        }
      });
    },
    getMySatList(data) {
      return http.get(
        evn.SEC_HOSAPI +
          "/wx/sys/sechosrepairsatisfaction/listData?" +
          toQueryString(data),
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8"
          }
        }
      );
    },
    updateSat(data) {
      return http.post(
        evn.SEC_HOSAPI + "/wx/sys/sechosrepairsatisfaction/update",
        data,
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8"
          }
        }
      );
    },
    uploadPic(data) {
      return http.post(evn.SEC_HOSAPI + "/wx/sys/common/upload", data);
    },
    countSats(data) {
      return http.post(
        evn.SEC_HOSAPI + "/wx/sys/sechosrepairsatisfaction/countSats",
        data,
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8"
          }
        }
      );
    },
    listRepairData(data) {
      return http.get(
        evn.SEC_HOSAPI + "/wx/sys/sechosrepair/listData?" + toQueryString(data),
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8"
          }
        }
      );
    },
    getAttachList(data) {
      return http.post(
        evn.SEC_HOSAPI + "/wx/sys/frameAttach/getAttachList",
        data,
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8"
          }
        }
      );
    },
    deleteMyPic(data) {
      return http.post(evn.SEC_HOSAPI + "/wx/sys/frameAttach/delete", data, {
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        }
      });
    },
    getOaUserList(data) {
      return http.get(evn.SEC_HOSAPI + "/sys/user/getOAUser?" + data, {
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        }
      });
    },
    getUserPic(data) {
      return http.get(evn.SEC_HOSAPI + "/wx/common/getDoctorPic?popuPersonGuid="+data, {
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        }
      });
    },
    //  getImg(data){
    //  	return http.get("https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket="+data, {
    //      headers: {
    //        "Content-Type": "application/x-www-form-urlencoded",
    //        "Access-Control-Allow-Origin":"*"
    //      }
    //    });
    //  }
    /**
     * 获取推广次数
     * @param {*} data 
     */
    getMyPopuCount(data) {
      return http.post(
        evn.SEC_HOSAPI +
          "/wx/sys/sechosconsultation/getMyPopuCount?" +
          data,
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8"
          }
        }
      );
    },
    /**
     * 获取推广列表
     */
    getPatientListByOpenId(data) {
      return http.post(
        evn.SEC_HOSAPI +
          "/wx/sys/sechosconsultation/getPatientListByOpenId?" +
          data,
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8"
          }
        }
      );
    },
    getPopuListByAdmin(data) {
      return http.get(
        evn.SEC_HOSAPI +
          "/wx/sys/sechosconsultation/getPopuListByAdmin?" +
          data,
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
