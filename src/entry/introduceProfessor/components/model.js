import evn from '../utils/evn.js'

 
function model(http) {

  return {
    // 获取科室信息
    getDepartmentListToWx() {
      return http.get(
        evn.SEC_HOSAPI +
          "/wx/sys/sechosdepartment/getDepartmentListToWx",
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
    /**
     * 根据科室获取专家列表
     * @param {*} data 
     */
    getListByGuid(data) {
      return http.post(
        evn.SEC_HOSAPI + "/wx/sys/sechosprofessor/getListByGuid",
        data,
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8"
          }
        }
      );
    }
  }

}

export default model