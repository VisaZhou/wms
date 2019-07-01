import request from '@/utils/request';

export async function querySupplier(params) {
  return request('/api/wms/supplier/list', {
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

export async function removeSupplier(params) {
  return request('/api/wms/supplier/delete', {
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

export async function removeSuppliers(params) {
  return request('/api/wms/supplier/deletes', {
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

export async function addSupplier(params) {
  return request(`/api/wms/supplier/add`, {
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

export async function updateSupplier(params) {
  return request(`/api/wms/supplier/edit`, {
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
