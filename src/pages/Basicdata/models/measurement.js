import {
  queryMeasurement,
  removeMeasurement,
  removeMeasurements,
  addMeasurement,
  updateMeasurement,
} from '@/services/measurement/measurement';

const ret = '';
const msg = '';

export default {
  namespace: 'measurement',
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
      const response = yield call(queryMeasurement, payload);
      yield put({
        type: 'measurement',
        payload: response,
      });
    },
    *add({ payload, callback }, { call, put }) {
      const response = yield call(addMeasurement, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *remove({ payload, callback }, { call, put }) {
      const response = yield call(removeMeasurement, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *batchRemove({ payload, callback }, { call, put }) {
      const response = yield call(removeMeasurements, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
    *update({ payload, callback }, { call, put }) {
      const response = yield call(updateMeasurement, payload);
      yield put({
        type: 'handle',
        payload: response,
      });
      if (callback) callback(response);
    },
  },

  reducers: {
    measurement(state, action) {
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
