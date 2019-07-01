import {serverInfo} from '@/services/server/server';

export default {
  namespace: 'server',
  state: {
    data: {
    },
  },

  effects: {
    * fetch({payload}, {call, put}) {
      const response = yield call(serverInfo, payload);
      yield put({
        type: 'server',
        payload: response,
      });
    },
  },
  reducers: {
    server(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
};
