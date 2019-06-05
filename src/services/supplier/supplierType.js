import request from '@/utils/request';

export async function querySupplierType(params) {
  return request('/api/supplierType/list', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function removeSupplierType(params) {
  return request('/api/supplierType/delete', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function removeSupplierTypes(params) {
  return request('/api/supplierType/deletes', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function addSupplierType(params) {
  return request(`/api/supplierType/add`, {
      method: 'POST',
      data: {
        ...params,
      },
    }
  );
}

export async function updateSupplierType(params) {
  return request(`/api/supplierType/edit`, {
    method: 'POST',
    data: {
      ...params,
    },
  });
}
