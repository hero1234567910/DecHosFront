let ENV_CONFIG = {};

if (process.env.NODE_ENV == 'dev') {
  ENV_CONFIG = {
    SEC_HOSAPI:"http://localhost:9091"

  }
} else if (process.env.NODE_ENV == 'production') {
  ENV_CONFIG = {
		SEC_HOSAPI:"https://p.zjgwsjk.com/2ysechos"
  }
} else if (process.env.NODE_ENV == 'test') {
  ENV_CONFIG = {

  }
}
export default ENV_CONFIG
