import {
  queryOutStorageType,
  removeOutStorageType,
  removeOutStorageTypes,
  addOutStorageType,
  updateOutStorageType,
} from '@/services/outStorage/outStorageType';

const ret = '';
const msg = '';
export default {
  namespace: 'outStorageType',

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
      const response = yield call(queryOutStorageType, payload);
      yield put({
        type: 'outStorageType',
        payload: response,
      });
    },
    *add({ payload, callback }, { call, put }) {
      const response = yield call(addOutStorageType, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *remove({ payload, callback }, { call, put }) {
      const response = yield call(removeOutStorageType, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *batchRemove({ payload, callback }, { call, put }) {
      const response = yield call(removeOutStorageTypes, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *update({ payload, callback }, { call, put }) {
      const response = yield call(updateOutStorageType, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
  },

  reducers: {
    outStorageType(state, action) {
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

