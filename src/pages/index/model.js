import * as Api from './service'

export default {
  namespace: 'home',
  state: {
    homeInfo: {}
  },
  effects: {
    * getHomeInfo({payload}, {call, put}) {
      try {
        const res = yield call(Api.homeInfo, payload)
        if (res && res.success) {
          yield put({
            type: 'save',
            payload: {
              homeInfo: res.data
            }
          })
        }
      } catch (e) {
        console.log(e)
      }
    }
  },
  reducers: {
    save(state, {payload}) {
      return {...state, ...payload}
    }
  }
}
