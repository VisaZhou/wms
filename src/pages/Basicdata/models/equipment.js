import {
  queryEquipment,
  removeEquipment,
  removeEquipments,
  addEquipment,
  updateEquipment,
} from '@/services/equipment/equipment';

const ret = '';
const msg = '';

export default {
  namespace: 'equipment',
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
      const response = yield call(queryEquipment, payload);
      yield put({
        type: 'equipment',
        payload: response,
      });
    },
    *add({ payload, callback }, { call, put }) {
      const response = yield call(addEquipment, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *remove({ payload, callback }, { call, put }) {
      const response = yield call(removeEquipment, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *batchRemove({ payload, callback }, { call, put }) {
      const response = yield call(removeEquipments, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *update({ payload, callback }, { call, put }) {
      const response = yield call(updateEquipment, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
  },

  reducers: {
    equipment(state, action) {
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
