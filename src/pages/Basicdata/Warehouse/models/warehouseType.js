import {
  queryWarehouseType,
  removeWarehouseType,
  removeWarehouseTypes,
  addWarehouseType,
  updateWarehouseType,
} from '@/services/warehouse/warehouseType';

export default {
  namespace: 'warehouseType',

  state: {
      list: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryWarehouseType, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *add({ payload, callback }, { call, put }) {
      const response = yield call(addWarehouseType, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },
    *remove({ payload, callback }, { call, put }) {
      const response = yield call(removeWarehouseType, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },
    *batchRemove({ payload, callback }, { call, put }) {
      const response = yield call(removeWarehouseTypes, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },
    *update({ payload, callback }, { call, put }) {
      const response = yield call(updateWarehouseType, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
};
