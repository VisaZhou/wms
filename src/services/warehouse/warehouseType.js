import { stringify } from 'qs';
import request from '@/utils/request';

export async function queryWarehouseType(params) {
  return request(`/api/warehouseType?${stringify(params)}`);
}

export async function removeWarehouseType(params) {
  return request('/api/warehouseType', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function removeWarehouseTypes(params) {
  return request('/api/warehouseType', {
    method: 'POST',
    data: {
      ...params,
      method: 'batchDelete',
    },
  });
}

export async function addWarehouseType(params) {
  return request('/api/warehouseType', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateWarehouseType(params = {}) {
  return request(`/api/warehouseType?${stringify(params.query)}`, {
    method: 'POST',
    data: {
      ...params.body,
      method: 'update',
    },
  });
}
