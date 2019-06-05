import request from '@/utils/request';

export async function querySupplier(params) {
  return request('/api/supplier/list', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function removeSupplier(params) {
  return request('/api/supplier/delete', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function removeSuppliers(params) {
  return request('/api/supplier/deletes', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function addSupplier(params) {
  return request(`/api/supplier/add`, {
      method: 'POST',
      data: {
        ...params,
      },
    }
  );
}

export async function updateSupplier(params) {
  return request(`/api/supplier/edit`, {
    method: 'POST',
    data: {
      ...params,
    },
  });
}
