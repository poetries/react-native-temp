
import {queryTestData} from '../../services/api'

export default {
    namespace: 'app',
    state: {
       data: {}
    },
    effects: {
        *query({payload},{put,call,select}) {
            const res = yield call(queryTestData,payload)
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
