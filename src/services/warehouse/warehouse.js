import request from '@/utils/request';

export async function queryWarehouse(params) {
  return request('/api/wms/storage/list', {
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

export async function removeWarehouse(params) {
  return request('/api/wms/storage/delete', {
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

export async function removeWarehouses(params) {
  return request('/api/wms/storage/deletes', {
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

export async function addWarehouse(params) {
  return request(`/api/wms/storage/add`, {
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

export async function updateWarehouse(params) {
  return request(`/api/wms/storage/edit`, {
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



