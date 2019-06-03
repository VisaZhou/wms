import request from '@/utils/request';

export async function queryStorehouse(params) {
  return request('/api/location/list', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function removeStorehouse(params) {
  return request('/api/location/delete', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function removeStorehouses(params) {
  return request('/api/location/deletes', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function addStorehouse(params) {
  return request(`/api/location/add`, {
      method: 'POST',
      data: {
        ...params,
      },
    }
  );
}

export async function updateStorehouse(params) {
  return request(`/api/location/edit`, {
    method: 'POST',
    data: {
      ...params,
    },
  });
}



