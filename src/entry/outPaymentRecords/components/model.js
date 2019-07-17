import evn from "../utils/evn.js";

function model(http) {
  return {
    //查询门诊患者收费结算信息(PATID)
    getOutpatientFeeSettlementInfo(data) {
      return http.post(
        evn.SEC_HOSAPI + "/wx/common/getOutpatientFeeSettlementInfo",
        data,
        {
          headers: {
            contentType: "application/json;charset=utf-8"
          }
        }
      );
    },
    //查询门诊患者收费结算明细信息
    getOutpatientFeeSettlementDetail(data) {
      return http.post(
        evn.SEC_HOSAPI + "/wx/common/getOutpatientFeeSettlementDetail",
        data,
        {
          headers: {
            contentType: "application/json;charset=utf-8"
          }
        }
      );
    },
    // 查询并绑定
    selectPatient(data) {
      return http.post(evn.SEC_HOSAPI + "/wx/common/checkPatient", data, {
        headers: {
          contentType: "application/json;charset=utf-8"
        }
      });
    }
  };
}
export default model;
