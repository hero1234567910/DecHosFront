import evn from '../../utils/evn.js'

function model(http) {

  return {
    // 获取用户菜单
    getMenu(data) {
      return http.get(evn.CESHI_API+'/sys/user/getMenuByUserGuid?userGuid='+data);
    },
  }

}

export default model