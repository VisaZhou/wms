import {
  querySupplier,
  removeSupplier,
  removeSuppliers,
  addSupplier,
  updateSupplier,
} from '@/services/supplier/supplier';

import {
  querySupplierType,
} from '@/services/supplier/supplierType';

const ret = '';
const msg = '';

export default {
  namespace: 'supplier',
  state: {
    data: {
      list: [],
      pagination: {},
    },
    type: {
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
      const response = yield call(querySupplier, payload);
      yield put({
        type: 'supplier',
        payload: response,
      });
    },
    *fetchType({ payload }, { call, put }) {
      const response = yield call(querySupplierType, payload);
      yield put({
        type: 'supplierType',
        payload: response,
      });
    },
    *add({ payload, callback }, { call, put }) {
      const response = yield call(addSupplier, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *remove({ payload, callback }, { call, put }) {
      const response = yield call(removeSupplier, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *batchRemove({ payload, callback }, { call, put }) {
      const response = yield call(removeSuppliers, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *update({ payload, callback }, { call, put }) {
      const response = yield call(updateSupplier, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
  },

  reducers: {
    supplier(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
    supplierType(state, action) {
      return {
        ...state,
        type: action.payload,
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
