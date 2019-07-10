import request from '@/utils/request';

export async function queryUserinfo(params) {
  return request('/api/wms/user/list', {
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

export async function removeUserinfo(params) {
  return request('/api/wms/user/delete', {
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

export async function removeUsersinfo(params) {
  return request('/api/wms/user/deletes', {
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

export async function addUserinfo(params) {
  return request(`/api/wms/user/add`, {
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

export async function updateUserinfo(params) {
  return request(`/api/wms/user/edit`, {
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
