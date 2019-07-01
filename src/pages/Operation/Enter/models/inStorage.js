import {
  queryInStorage,
  queryScanAndCheck,
  checkInStorage,
  removeInStorage,
  removeInStorages,
} from '@/services/inStorage/inStorage';

import {
  queryInStorageType,
} from '@/services/inStorage/inStorageType';

const ret = '';
const msg = '';
export default {
  namespace: 'inStorage',

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
      const response = yield call(queryInStorage, payload);
      yield put({
        type: 'inStorage',
        payload: response,
      });
    },
    *fetchType({ payload }, { call, put }) {
      const response = yield call(queryInStorageType, payload);
      yield put({
        type: 'inStorageType',
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
      const response = yield call(checkInStorage, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *remove({ payload, callback }, { call, put }) {
      const response = yield call(removeInStorage, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *batchRemove({ payload, callback }, { call, put }) {
      const response = yield call(removeInStorages, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    //
  },

  reducers: {
    inStorage(state, action) {
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
    inStorageType(state, action) {
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
