import request from '@/utils/request'
import { GisUrl } from './url'
// export function getViewPoint() {
//   return request({
//     url: `${GisUrl}/anchor/list`,
//     method: 'get'

//   })
// }

// export function getPointInfo(id) {
//   return request({
//     url: `${GisUrl}/anchor/get`,
//     method: 'get',
//     params: { id }
//   })
// }

export function getViewPoint() {
  return request({
    url: '/gis/viewPoint',
    method: 'get'

  })
}

export function getPointInfo(id) {
  return request({
    url: '/gis/pointInfo',
    method: 'get',
    params: { id }
  })
}
