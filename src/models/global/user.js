
import {
    mesLogin,
    queryCurrentUser,
    mesLogout
} from '../../services/api'

export default {
  namespace: 'user',

  state: {
    userInfo: {}
  },

  effects: {
    *login({ payload, callback }, { call, put }) {
        const res = yield call(mesLogin,payload)
        if (callback) callback(res);
    },
    *logout({ payload, callback }, { call, put }) {
        const res = yield call(mesLogout,payload)
        if (callback) callback(res);
      },
      *queryUser({ payload,callback }, { call, put }) {
        const res = yield call(queryCurrentUser,payload);
        
        yield put({
          type: 'save',
          payload: res.data,
        });
  
        if (callback) callback(res);
        
      }
  },

  reducers: {
    save(state, {payload}) {
        return {
          ...state,
          userInfo: payload,
        };
      }
  },
};
