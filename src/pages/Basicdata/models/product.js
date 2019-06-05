import {
  queryProduct,
  removeProduct,
  removeProducts,
  addProduct,
  updateProduct,
} from '@/services/product/product';

const ret = '';
const msg = '';

export default {
  namespace: 'product',
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
      const response = yield call(queryProduct, payload);
      yield put({
        type: 'product',
        payload: response,
      });
    },
    *add({ payload, callback }, { call, put }) {
      const response = yield call(addProduct, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *remove({ payload, callback }, { call, put }) {
      const response = yield call(removeProduct, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *batchRemove({ payload, callback }, { call, put }) {
      const response = yield call(removeProducts, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *update({ payload, callback }, { call, put }) {
      const response = yield call(updateProduct, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
  },

  reducers: {
    product(state, action) {
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
