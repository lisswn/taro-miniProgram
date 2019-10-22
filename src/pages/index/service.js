import Request from '@/utils/request'

export const homeInfo = data => Request({
  url: '/api/home/info',
  method: 'get',
  data
})
