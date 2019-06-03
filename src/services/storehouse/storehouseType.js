import request from '@/utils/request';

export async function queryStorehouseType(params) {
  return request('/api/locationType/list', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function removeStorehouseType(params) {
  return request('/api/locationType/delete', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function removeStorehouseTypes(params) {
  return request('/api/locationType/deletes', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function addStorehouseType(params) {
  return request(`/api/locationType/add`, {
      method: 'POST',
      data: {
        ...params,
      },
    }
  );
}

export async function updateStorehouseType(params) {
  return request(`/api/locationType/edit`, {
    method: 'POST',
    data: {
      ...params,
    },
  });
}
