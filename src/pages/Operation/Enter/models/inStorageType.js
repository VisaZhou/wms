import {
  queryInStorageType,
  removeInStorageType,
  removeInStorageTypes,
  addInStorageType,
  updateInStorageType,
} from '@/services/inStorage/inStorageType';

const ret = '';
const msg = '';
export default {
  namespace: 'inStorageType',

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
      const response = yield call(queryInStorageType, payload);
      yield put({
        type: 'inStorageType',
        payload: response,
      });
    },
    *add({ payload, callback }, { call, put }) {
      const response = yield call(addInStorageType, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *remove({ payload, callback }, { call, put }) {
      const response = yield call(removeInStorageType, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *batchRemove({ payload, callback }, { call, put }) {
      const response = yield call(removeInStorageTypes, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *update({ payload, callback }, { call, put }) {
      const response = yield call(updateInStorageType, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
  },

  reducers: {
    inStorageType(state, action) {
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
