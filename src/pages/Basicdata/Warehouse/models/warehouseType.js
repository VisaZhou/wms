import {
  queryWarehouseType,
  removeWarehouseType,
  removeWarehouseTypes,
  addWarehouseType,
  updateWarehouseType,
} from '@/services/warehouse/warehouseType';

const ret = '';
const msg = '';
export default {
  namespace: 'warehouseType',

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
      const response = yield call(queryWarehouseType, payload);
      yield put({
        type: 'warehouseType',
        payload: response,
      });
    },
    *add({ payload, callback }, { call, put }) {
      const response = yield call(addWarehouseType, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *remove({ payload, callback }, { call, put }) {
      const response = yield call(removeWarehouseType, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *batchRemove({ payload, callback }, { call, put }) {
      const response = yield call(removeWarehouseTypes, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *update({ payload, callback }, { call, put }) {
      const response = yield call(updateWarehouseType, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
  },

  reducers: {
    warehouseType(state, action) {
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
