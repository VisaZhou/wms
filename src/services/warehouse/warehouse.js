import request from '@/utils/request';

export async function queryWarehouse(params) {
  return request('/api/storage/list', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function removeWarehouse(params) {
  return request('/api/storage/delete', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function removeWarehouses(params) {
  return request('/api/storage/deletes', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function addWarehouse(params) {
  return request(`/api/storage/add`, {
    method: 'POST',
      data: {
        ...params,
      },
  }
  );
}

export async function updateWarehouse(params) {
  return request(`/api/storage/edit`, {
    method: 'POST',
    data: {
      ...params,
    },
  });
}



