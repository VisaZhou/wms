import request from '@/utils/request';

export async function queryCustomer(params) {
  return request('/api/client/list', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function removeCustomer(params) {
  return request('/api/client/delete', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function removeCustomers(params) {
  return request('/api/client/deletes', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function addCustomer(params) {
  return request(`/api/client/add`, {
      method: 'POST',
      data: {
        ...params,
      },
    }
  );
}

export async function updateCustomer(params) {
  return request(`/api/client/edit`, {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

