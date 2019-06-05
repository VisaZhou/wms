import request from '@/utils/request';

export async function queryMeasurement(params) {
  return request('/api/unit/list', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function removeMeasurement(params) {
  return request('/api/unit/delete', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function removeMeasurements(params) {
  return request('/api/unit/deletes', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function addMeasurement(params) {
  return request(`/api/unit/add`, {
      method: 'POST',
      data: {
        ...params,
      },
    }
  );
}

export async function updateMeasurement(params) {
  return request(`/api/unit/edit`, {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

