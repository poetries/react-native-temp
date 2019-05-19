
import {queryMonitorData} from '../../services/api'

export default {
    namespace: 'monitor',
    state: {
       data: []
    },
    effects: {
        *query({payload},{put,call,select}) {
            const res = yield call(queryMonitorData,payload)
            console.log(res,'===res==')
            yield put({
                type: 'save',
                payload: res && res.data && res.data.list || [],
            });
        }
    },
    reducers: {
        save(state, {payload}) {
            return {
              ...state,
              data: payload,
            };
          },
    },
    subscriptions: {

    },
}
