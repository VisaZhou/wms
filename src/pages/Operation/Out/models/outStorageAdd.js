import {
  queryOutStorageType,
} from '@/services/outStorage/outStorageType';

import{
  queryWarehouse,
} from '@/services/warehouse/warehouse';

import {
  queryCustomer,
} from '@/services/customer/customer';

import {
  queryProductInfo,
} from '@/services/product/product';

import {
  addOutStorage,
} from '@/services/outStorage/outStorage';

const ret = '';
const msg = '';
export default {
  namespace: 'outStorageAdd',
  state: {
    handle: {
      ret,
      msg,
    },
    type: {
      list: [],
    },
    warehouse: {
      list: [],
    },
    customer: {
      list: [],
    },
    product: {
      list: [],
    },
  },

  effects: {
    *fetchType({ payload }, { call, put }) {
      const response = yield call(queryOutStorageType, payload);
      yield put({
        type: 'outStorageType',
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
    *fetchCustomer({ payload }, { call, put }) {
      const response = yield call(queryCustomer, payload);
      yield put({
        type: 'customer',
        payload: response,
      });
    },
    *fetchProduct({ payload }, { call, put }) {
      const response = yield call(queryProductInfo, payload);
      yield put({
        type: 'product',
        payload: response,
      });
    },
    *add({ payload, callback }, { call, put }) {
      const response = yield call(addOutStorage, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
  },

  reducers: {
    handle(state, action) {
      return {
        ...state,
        handle: action.payload,
      };
    },
    outStorageType(state, action) {
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
    customer(state, action) {
      return {
        ...state,
        customer: action.payload,
      };
    },
    product(state, action) {
      return {
        ...state,
        product: action.payload,
      };
    },
  },
};
