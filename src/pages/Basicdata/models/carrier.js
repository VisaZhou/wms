import {
  queryCarrier,
  removeCarrier,
  removeCarriers,
  addCarrier,
  updateCarrier,
} from '@/services/carrier/carrier';

const ret = '';
const msg = '';

export default {
  namespace: 'carrier',
  state: {
    data: {
      list: [],
      pagination: {},
    },
    handle: {
      ret,
      msg,
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryCarrier, payload);
      yield put({
        type: 'carrier',
        payload: response,
      });
    },
    *add({ payload, callback }, { call, put }) {
      const response = yield call(addCarrier, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *remove({ payload, callback }, { call, put }) {
      const response = yield call(removeCarrier, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *batchRemove({ payload, callback }, { call, put }) {
      const response = yield call(removeCarriers, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *update({ payload, callback }, { call, put }) {
      const response = yield call(updateCarrier, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
  },

  reducers: {
    carrier(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
    handle(state, action) {
      return {
        ...state,
        handle: action.payload,
      };
    },
  },
};
