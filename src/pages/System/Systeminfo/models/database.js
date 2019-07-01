import {databaseInfo} from '@/services/database/database';

export default {
  namespace: 'database',
  state: {
    data: {
    },
  },

  effects: {
    * fetch({payload}, {call, put}) {
      const response = yield call(databaseInfo, payload);
      yield put({
        type: 'database',
        payload: response,
      });
    },
  },
  reducers: {
    database(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
};
