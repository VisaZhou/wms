import {
  queryStorehouse,
  removeStorehouse,
  removeStorehouses,
  addStorehouse,
  updateStorehouse,
} from '@/services/storehouse/storehouse';

import {
  queryStorehouseType,
} from '@/services/storehouse/storehouseType';

import {
  queryWarehouse,
} from '@/services/warehouse/warehouse';

const ret = '';
const msg = '';

export default {
  namespace: 'storehouse',
  state: {
    data: {
      list: [],
      pagination: {},
    },
    type: {
      list: [],
      pagination: {},
    },
    warehouse: {
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
      const response = yield call(queryStorehouse, payload);
      yield put({
        type: 'storehouse',
        payload: response,
      });
    },
    *fetchType({ payload }, { call, put }) {
      const response = yield call(queryStorehouseType, payload);
      yield put({
        type: 'storehouseType',
        payload: response,
      });
    },
    *fetchWarehouse({ payload }, { call, put }) {
      const response = yield call(queryWarehouse, payload);
      yield put({
        type: 'warehouse',
        payload: response,
      });
    },
    *add({ payload, callback }, { call, put }) {
      const response = yield call(addStorehouse, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *remove({ payload, callback }, { call, put }) {
      const response = yield call(removeStorehouse, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *batchRemove({ payload, callback }, { call, put }) {
      const response = yield call(removeStorehouses, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *update({ payload, callback }, { call, put }) {
      const response = yield call(updateStorehouse, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
  },

  reducers: {
    storehouse(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
    storehouseType(state, action) {
      return {
        ...state,
        type: action.payload,
      };
    },
    warehouse(state, action) {
      return {
        ...state,
        warehouse: action.payload,
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
