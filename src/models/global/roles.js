
import {queryRoles} from '../../services/api'

export default {
    namespace: 'roles',
    state: {
       data: []
    },
    effects: {
        *query({payload},{put,call,select}) {
            const res = yield call(queryRoles,payload)
            yield put({
                type: 'save',
                payload: res && res.data && (res.data || {}).list || [],
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
