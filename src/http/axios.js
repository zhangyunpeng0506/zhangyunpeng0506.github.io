import axios from 'axios'

class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }
  getConfig() {
    return {
      baseUrl: this.baseUrl,
      withCredentials: false, // 跨域请求是否提供凭据
      headers: {
        //
      }
    }
  }
  interceptors(instance) {
    instance.interceptors.request.use(config => { // 请求拦截
      return config
    }, error => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use(res => {
      const { data, status, headers } = res
      return { data, status, headers }
    }, error => {
      return Promise.reject(error)
    })
  }
  request(options) {
    const instance = axios.create()
    options = Object.assign(this.getConfig(), options)
    this.interceptors(instance)
    return instance(options)
  }
}

export default HttpRequest
