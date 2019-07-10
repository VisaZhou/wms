import request from '@/utils/request';

export async function queryRoleinfo(params) {
  return request('/api/wms/role/list', {
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

export async function removeRoleinfo(params) {
  return request('/api/wms/role/delete', {
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

export async function removeRolesinfo(params) {
  return request('/api/wms/role/deletes', {
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

export async function addRoleinfo(params) {
  return request(`/api/wms/role/add`, {
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

export async function updateRoleinfo(params) {
  return request(`/api/wms/role/edit`, {
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
