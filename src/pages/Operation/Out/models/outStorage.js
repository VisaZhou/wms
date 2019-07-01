import {
  queryOutStorage,
  queryScanAndCheck,
  checkOutStorage,
  removeOutStorage,
  removeOutStorages,
} from '@/services/outStorage/outStorage';

import {
  queryOutStorageType,
} from '@/services/outStorage/outStorageType';

const ret = '';
const msg = '';
export default {
  namespace: 'outStorage',

  state: {
    data: {
      list: [],
    },
    handle: {
      ret,
      msg,
    },
    type: {
      list: [],
    },
    scanAndCheck: {
      data: {},
      list: [],
    }
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryOutStorage, payload);
      yield put({
        type: 'outStorage',
        payload: response,
      });
    },
    *fetchType({ payload }, { call, put }) {
      const response = yield call(queryOutStorageType, payload);
      yield put({
        type: 'outStorageType',
        payload: response,
      });
    },
    *fetchScanAndCheck({ payload }, { call, put }) {
      const response = yield call(queryScanAndCheck, payload);
      yield put({
        type: 'scanAndCheck',
        payload: response,
      });
    },
    *check({ payload, callback }, { call, put }) {
      const response = yield call(checkOutStorage, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *remove({ payload, callback }, { call, put }) {
      const response = yield call(removeOutStorage, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *batchRemove({ payload, callback }, { call, put }) {
      const response = yield call(removeOutStorages, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    //
  },

  reducers: {
    outStorage(state, action) {
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
    outStorageType(state, action) {
      return {
        ...state,
        type: action.payload,
      };
    },
    scanAndCheck(state, action) {
      return {
        ...state,
        scanAndCheck: action.payload,
      };
    },
  },
};
