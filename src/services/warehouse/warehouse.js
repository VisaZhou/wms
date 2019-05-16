import { stringify } from 'qs';
import request from '@/utils/request';

export async function queryWarehouse(params) {
  return request(`/api/warehouse?${stringify(params)}`);
}

export async function removeWarehouse(params) {
  return request('/api/warehouse', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function removeWarehouses(params) {
  return request('/api/warehouse', {
    method: 'POST',
    data: {
      ...params,
      method: 'batchDelete',
    },
  });
}

export async function addWarehouse(params) {
  return request('/api/warehouse', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateWarehouse(params = {}) {
  return request(`/api/warehouse?${stringify(params.query)}`, {
    method: 'POST',
    data: {
      ...params.body,
      method: 'update',
    },
  });
}
