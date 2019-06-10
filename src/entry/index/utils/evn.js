let ENV_CONFIG = {};

if (process.env.NODE_ENV == 'dev') {
  ENV_CONFIG = {
    // CFCU_API: "http://192.168.1.129:9090",
    // CFCU_API: "http://192.168.1.110:9090",

    // LIANJIA_API: "http://192.168.1.110:9091",
    // CFCU_API: "https://apisit.wuxibigdata.com",
    CFCU_API: "http://localhost:7071",
    CESHI_API:"http://localhost:7070"
    // LIANJIA_API: "https://api.wuxibigdata.com:9091",

  }
} else if (process.env.NODE_ENV == 'production') {
  ENV_CONFIG = {
    // CFCU_API: "http://api.wuxibigdata.com:9090",
    // CFCU_API: "https://apisit.wuxibigdata.com",
    CFCU_API: "http://apisitunion.wuxibigdata.com:9090",
    // LIANJIA_API: "https://api.wuxibigdata.com:9091",
    // CFCU_API: "http://192.168.1.129:9090",
    MOCK_API: 'http://www.easy-mock.com/mock/5bd5072c7c1abe61ecb488df/example',

  }
} else if (process.env.NODE_ENV == 'test') {
  ENV_CONFIG = {
    // CFCU_API: "https://apisit.wuxibigdata.com",
    CFCU_API: "http://apisitunion.wuxibigdata.com:9090",

    // LIANJIA_API: "https://apitest.wuxibigdata.com:9091",
    // CFCU_API: "http://192.168.1.129:9090",
    MOCK_API: 'https://www.easy-mock.com/mock/5bd5072c7c1abe61ecb488df/example',

  }
}
export default ENV_CONFIG
