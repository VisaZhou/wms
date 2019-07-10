import {
  queryUserinfo,
  removeUserinfo,
  removeUsersinfo,
  addUserinfo,
  updateUserinfo,
} from '@/services/userinfo/userinfo';

import {
  queryRoleinfo,
}from '@/services/roleinfo/roleinfo';


const ret = '';
const msg = '';

export default {
  namespace: 'userinfo',
  state: {
    data: {
      list: [],
      pagination: {},
    },
    role: {
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
      const response = yield call(queryUserinfo, payload);
      yield put({
        type: 'userinfo',
        payload: response,
      });
    },
    *fetchRole({ payload }, { call, put }) {
      const response = yield call(queryRoleinfo, payload);
      yield put({
        type: 'roleinfo',
        payload: response,
      });
    },
    *add({ payload, callback }, { call, put }) {
      const response = yield call(addUserinfo, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *remove({ payload, callback }, { call, put }) {
      const response = yield call(removeUserinfo, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *batchRemove({ payload, callback }, { call, put }) {
      const response = yield call(removeUsersinfo, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *update({ payload, callback }, { call, put }) {
      const response = yield call(updateUserinfo, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
  },

  reducers: {
    userinfo (state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
    roleinfo (state, action) {
      return {
        ...state,
        role: action.payload,
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
