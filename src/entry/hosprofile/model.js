import evn from '../index/utils/evn.js';

function model(http) {

  return {
    // 获取用户信息
    getHosIntroduction(data) {
    	console.log(data);
        $.ajax({
            url: evn.SEC_HOSAPI+'/wx/sys/informationinfo/getHosIntroduction',
            contentType: 'application/json;charset=utf-8',
            method: 'get',
            dataType: 'JSON',
            success: function(res) {
                if (res.code == '0') {
                    data = res.data;
                }
                if (res.code == '500') {
                    layer.msg(res.msg);
                }
            }
        });
    },
  }

}

export default model