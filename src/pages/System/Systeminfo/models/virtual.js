import {virtualInfo} from '@/services/virtual/virtual';

export default {
  namespace: 'virtual',
  state: {
    data: {
    },
  },

  effects: {
    * fetch({payload}, {call, put}) {
      const response = yield call(virtualInfo, payload);
      yield put({
        type: 'virtual',
        payload: response,
      });
    },
  },
  reducers: {
      virtual(state, action) {
        return {
          ...state,
          data: action.payload,
      };
    },
   },
};
