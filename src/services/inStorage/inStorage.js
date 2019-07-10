import request from '@/utils/request';

export async function queryInStorage(params) {
  return request('/api/wms/inStorage/list', {
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
  return request('/api/wms/inStorage/scanAndCheck', {
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

export async function checkInStorage(params) {
  return request('/api/wms/inStorage/check', {
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

export async function removeInStorage(params) {
  return request('/api/wms/inStorage/delete', {
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

export async function removeInStorages(params) {
  return request('/api/wms/inStorage/deletes', {
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

export async function addInStorage(params) {
  return request('/api/wms/inStorage/add', {
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

export async function updateInStorage(params) {
  return request('/api/wms/inStorage/edit', {
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


