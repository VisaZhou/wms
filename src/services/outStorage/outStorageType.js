import request from '@/utils/request';

export async function queryOutStorageType(params) {
  return request('/api/wms/outStorageType/list', {
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

export async function removeOutStorageType(params) {
  return request('/api/wms/outStorageType/delete', {
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

export async function removeOutStorageTypes(params) {
  return request('/api/wms/outStorageType/deletes', {
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

export async function addOutStorageType(params) {
  return request(`/api/wms/outStorageType/add`, {
    method: 'POST',
    headers:{
      'token': window.localStorage.getItem('token'),
      ...request.headers,
    },
    data: {
        ...params,
      },
    }
  );
}

export async function updateOutStorageType(params) {
  return request(`/api/wms/outStorageType/edit`, {
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
