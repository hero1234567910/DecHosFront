import evn from "../utils/evn.js";

function model(http) {
  return {
    getInfo(data) {
      return http.post(evn.SEC_HOSAPI + "/wx/common/checkPatient", data, {
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        }
      });
    },
    savePatient(data) {
      return http.post(evn.SEC_HOSAPI + "/wx/common/bingdingPatient", data, {
        headers: {
          contentType: "application/json;charset=utf-8"
        }
      });
    },
    bindUser(data) {
      return http.post(evn.SEC_HOSAPI + "/wx/common/bindInfo", data, {
        headers: {
          contentType: "application/json;charset=utf-8"
        }
      });
    }
  };
}

export default model;
