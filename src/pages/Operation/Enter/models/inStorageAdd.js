import {
  queryInStorageType,
} from '@/services/inStorage/inStorageType';

import{
  queryWarehouse,
} from '@/services/warehouse/warehouse';

import {
  querySupplier,
} from '@/services/supplier/supplier';

import {
  queryProduct,
} from '@/services/product/product';

import {
  addInStorage,
} from '@/services/inStorage/inStorage';

const ret = '';
const msg = '';
export default {
  namespace: 'inStorageAdd',
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
    supplier: {
      list: [],
    },
    product: {
      list: [],
    },
  },

  effects: {
    *fetchType({ payload }, { call, put }) {
      const response = yield call(queryInStorageType, payload);
      yield put({
        type: 'inStorageType',
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
    *fetchSupplier({ payload }, { call, put }) {
      const response = yield call(querySupplier, payload);
      yield put({
        type: 'supplier',
        payload: response,
      });
    },
    *fetchProduct({ payload }, { call, put }) {
      const response = yield call(queryProduct, payload);
      yield put({
        type: 'product',
        payload: response,
      });
    },
    *add({ payload, callback }, { call, put }) {
      const response = yield call(addInStorage, payload);
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
    inStorageType(state, action) {
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
    supplier(state, action) {
      return {
        ...state,
        supplier: action.payload,
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
