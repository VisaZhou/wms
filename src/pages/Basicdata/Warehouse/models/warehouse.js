import {
  queryWarehouse,
  removeWarehouse,
  removeWarehouses,
  addWarehouse,
  updateWarehouse,
} from '@/services/warehouse/warehouse';

import {
  queryWarehouseType,
} from '@/services/warehouse/warehouseType';

import {
  queryDepartment,
} from '@/services/department/department';

const ret = '';
const msg = '';

export default {
  namespace: 'warehouse',
  state: {
    data: {
      list: [],
      pagination: {},
    },
    type: {
      list: [],
      pagination: {},
    },
    department: {
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
      const response = yield call(queryWarehouse, payload);
      yield put({
        type: 'warehouse',
        payload: response,
      });
    },
    *fetchType({ payload }, { call, put }) {
      const response = yield call(queryWarehouseType, payload);
      yield put({
        type: 'warehouseType',
        payload: response,
      });
    },
    *fetchDepartment({ payload }, { call, put }) {
      const response = yield call(queryDepartment, payload);
      yield put({
        type: 'department',
        payload: response,
      });
    },
    *add({ payload, callback }, { call, put }) {
      const response = yield call(addWarehouse, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *remove({ payload, callback }, { call, put }) {
      const response = yield call(removeWarehouse, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *batchRemove({ payload, callback }, { call, put }) {
      const response = yield call(removeWarehouses, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *update({ payload, callback }, { call, put }) {
      const response = yield call(updateWarehouse, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
  },

  reducers: {
    warehouse(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
    warehouseType(state, action) {
      return {
        ...state,
        type: action.payload,
      };
    },
    department(state, action) {
      return {
        ...state,
        department: action.payload,
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
