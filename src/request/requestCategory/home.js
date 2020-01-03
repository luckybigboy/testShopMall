import {request} from 'request'

export function getHomeMultiData(parmas) {
    return request({
        url: '/comments',
        parmas
    })
}