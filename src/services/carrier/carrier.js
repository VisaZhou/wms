import request from '@/utils/request';

export async function queryCarrier(params) {
  return request('/api/carrier/list', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function removeCarrier(params) {
  return request('/api/carrier/delete', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function removeCarriers(params) {
  return request('/api/carrier/deletes', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function addCarrier(params) {
  return request(`/api/carrier/add`, {
      method: 'POST',
      data: {
        ...params,
      },
    }
  );
}

export async function updateCarrier(params) {
  return request(`/api/carrier/edit`, {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

