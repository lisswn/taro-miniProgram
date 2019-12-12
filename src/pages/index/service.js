import Request from '@/utils/request'

export const getHomeInfo = data => Request({
  url: '/api/home/info',
  method: 'get',
  data
})
