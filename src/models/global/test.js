
import {queryReport} from '../../services/api'

export default {
    namespace: 'report',
    state: {
       data: {}
    },
    effects: {
        *query({payload},{put,call,select}) {
            const res = yield call(queryReport,payload)
            yield put({
                type: 'save',
                payload: res,
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
