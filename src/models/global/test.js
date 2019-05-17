
import {queryReport} from '../../services/api'

export default {
    namespace: 'report',
    state: {
       data: []
    },
    effects: {
        *query({payload},{put,call,select}) {
            const res = yield call(queryReport,payload)
            console.log(res.data.list)
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
