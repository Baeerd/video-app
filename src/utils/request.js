import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: "/", // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
  cancelMultiple: true
})

// // request interceptor
service.interceptors.request.use(
  config => {
    //config.headers['auth-token'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYyNjczOTU1MTc0OSwibG9naW5Tb3VyY2UiOiJkZWZhbHRTb3VyY2UifQ.0Z9LHs7M60zxKVkMeWFQDZSgXpTjZg1bFnV2LCCuNOs';
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data

    return res
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
