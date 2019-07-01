import request from '@/utils/request';

export async function queryEquipment(params) {
  return request('/api/wms/equipment/list', {
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

export async function removeEquipment(params) {
  return request('/api/wms/equipment/delete', {
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

export async function removeEquipments(params) {
  return request('/api/wms/equipment/deletes', {
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

export async function addEquipment(params) {
  return request(`/api/wms/equipment/add`, {
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

export async function updateEquipment(params) {
  return request(`/api/wms/equipment/edit`, {
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

