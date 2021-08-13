import request from '@/utils/request'

export function queryApi(url, data) {
  let jsonParams={reqBody:data};
  return request({
    url: url,
    method: 'post',
    data: jsonParams
  })
}
