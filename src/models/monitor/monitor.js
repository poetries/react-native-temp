
import {queryMonitorData} from '../../services/api'

export default {
    namespace: 'monitor',
    state: {
       data: []
    },
    effects: {
        *query({payload},{put,call,select}) {
            const res = yield call(queryMonitorData,payload)
            yield put({
                type: 'save',
                payload: res.data.list || [],
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
