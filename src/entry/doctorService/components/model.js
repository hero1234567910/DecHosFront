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
    }
  };
}

export default model;
