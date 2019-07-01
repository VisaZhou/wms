import request from '@/utils/request';

export async function queryStorehouseType(params) {
  return request('/api/wms/locationType/list', {
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

export async function removeStorehouseType(params) {
  return request('/api/wms/locationType/delete', {
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

export async function removeStorehouseTypes(params) {
  return request('/api/wms/locationType/deletes', {
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

export async function addStorehouseType(params) {
  return request(`/api/wms/locationType/add`, {
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

export async function updateStorehouseType(params) {
  return request(`/api/wms/locationType/edit`, {
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
