import request from '@/utils/request';

export async function queryWarehouseType(params) {
  return request('/api/storageType/list', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function removeWarehouseType(params) {
  return request('/api/storageType/delete', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function removeWarehouseTypes(params) {
  return request('/api/storageType/deletes', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function addWarehouseType(params) {
  return request(`/api/storageType/add`, {
      method: 'POST',
      data: {
        ...params,
      },
    }
  );
}

export async function updateWarehouseType(params) {
  return request(`/api/storageType/edit`, {
    method: 'POST',
    data: {
      ...params,
    },
  });
}
