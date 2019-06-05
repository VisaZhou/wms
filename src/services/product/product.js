import request from '@/utils/request';

export async function queryProduct(params) {
  return request('/api/production/list', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function removeProduct(params) {
  return request('/api/production/delete', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function removeProducts(params) {
  return request('/api/production/deletes', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function addProduct(params) {
  return request(`/api/production/add`, {
      method: 'POST',
      data: {
        ...params,
      },
    }
  );
}

export async function updateProduct(params) {
  return request(`/api/production/edit`, {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

