import request from '@/utils/request';

export async function queryInStorageType(params) {
  return request('/api/wms/inStorageType/list', {
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

export async function removeInStorageType(params) {
  return request('/api/wms/inStorageType/delete', {
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

export async function removeInStorageTypes(params) {
  return request('/api/wms/inStorageType/deletes', {
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

export async function addInStorageType(params) {
  return request(`/api/wms/inStorageType/add`, {
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

export async function updateInStorageType(params) {
  return request(`/api/wms/inStorageType/edit`, {
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
