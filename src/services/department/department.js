import { stringify } from 'qs';
import request from '@/utils/request';

export async function queryDepartment(params) {
  return request(`/api/department/list?${stringify(params)}`);
}

export async function removeDepartment(params) {
  return request('/api/department', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function removeDepartments(params) {
  return request('/api/department', {
    method: 'POST',
    data: {
      ...params,
      method: 'batchDelete',
    },
  });
}

export async function addDepartment(params) {
  return request('/api/department', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateDepartment(params = {}) {
  return request(`/api/department?${stringify(params.query)}`, {
    method: 'POST',
    data: {
      ...params.body,
      method: 'update',
    },
  });
}
