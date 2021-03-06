import { stringify } from 'qs';
import request from '@/utils/request';

export async function queryDepartment(params) {
  return request('/api/wms/department/list', {
    method: 'POST',
    headers:{
      'token': window.localStorage.getItem('token'),
      ...request.headers,
    },
    data: {
      ...params,
    },
  });
}

export async function removeDepartment(params) {
  return request('/api/wms/department', {
    method: 'POST',
    headers:{
      'token': window.localStorage.getItem('token'),
      ...request.headers,
    },
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function removeDepartments(params) {
  return request('/api/wms/department', {
    method: 'POST',
    headers:{
      'token': window.localStorage.getItem('token'),
      ...request.headers,
    },
    data: {
      ...params,
      method: 'batchDelete',
    },
  });
}

export async function addDepartment(params) {
  return request('/api/wms/department', {
    method: 'POST',
    headers:{
      'token': window.localStorage.getItem('token'),
      ...request.headers,
    },
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateDepartment(params = {}) {
  return request(`/api/wms/department?${stringify(params.query)}`, {
    method: 'POST',
    headers:{
      'token': window.localStorage.getItem('token'),
      ...request.headers,
    },
    data: {
      ...params.body,
      method: 'update',
    },
  });
}
