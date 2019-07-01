import request from '@/utils/request';

export async function queryOutStorage(params) {
  return request('/api/wms/outStorage/list', {
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

export async function queryScanAndCheck(params) {
  return request('/api/wms/outStorage/scanAndCheck', {
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

export async function checkOutStorage(params) {
  return request('/api/wms/outStorage/check', {
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

export async function removeOutStorage(params) {
  return request('/api/wms/outStorage/delete', {
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

export async function removeOutStorages(params) {
  return request('/api/wms/outStorage/deletes', {
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
