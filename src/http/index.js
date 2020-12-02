import HttpRequest from '@/http/axios'
import config from '@/config'

const baseUrl = config.baseUrl
const axios = new HttpRequest(baseUrl)

const $http = {
  post(url, data, baseURL = baseUrl) {
    return new Promise((resolve, reject) => {
      axios.request({
        baseURL,
        url,
        data,
        method: 'post',
        transformRequest: [function(d) {
          let ret = ''
          for (const it in d) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(d[it]) + '&'
          }
          return ret
        }]
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  postByBody(url, data, baseURL = baseUrl) {
    return new Promise((resolve, reject) => {
      axios.request({
        baseURL,
        url,
        data,
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  get(url, params, baseURL = baseUrl) {
    return new Promise((resolve, reject) => {
      axios.request({
        baseURL,
        url,
        params,
        method: 'get'
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  put(url, data, baseURL = baseUrl) {
    return new Promise((resolve, reject) => {
      axios.request({
        baseURL,
        url,
        data,
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  delete(url, params, baseURL = baseUrl) {
    return new Promise((resolve, reject) => {
      axios.request({
        baseURL,
        url,
        params,
        method: 'delete'
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  download(url, params, baseURL = baseUrl) {
    return new Promise((resolve, reject) => {
      axios.request({
        baseURL,
        url,
        params,
        method: 'get',
        responseType: 'blob',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data], { type: response.headers['content-type'] }))
        const headerContent = response.headers['content-disposition'].split('filename=')
        const fileName = headerContent[headerContent.length - 1]
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', fileName)
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link) // 下载完成移除元素
        window.URL.revokeObjectURL(url) // 释放掉blob对象
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  },
  upload(url, data, baseURL = baseUrl) {
    return new Promise((resolve, reject) => {
      axios.request({
        baseURL,
        url,
        data,
        method: 'post',
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default $http
