let ENV_CONFIG = {};

if (process.env.NODE_ENV == 'dev') {
  ENV_CONFIG = {
    SEC_HOSAPI:"http://localhost:9091"

  }
} else if (process.env.NODE_ENV == 'production') {
  ENV_CONFIG = {
		SEC_HOSAPI:"http://yl.nxjnjc.com"
  }
} else if (process.env.NODE_ENV == 'test') {
  ENV_CONFIG = {

  }
}
export default ENV_CONFIG
