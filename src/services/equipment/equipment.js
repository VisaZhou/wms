import request from '@/utils/request';

export async function queryEquipment(params) {
  return request('/api/equipment/list', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function removeEquipment(params) {
  return request('/api/equipment/delete', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function removeEquipments(params) {
  return request('/api/equipment/deletes', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function addEquipment(params) {
  return request(`/api/equipment/add`, {
      method: 'POST',
      data: {
        ...params,
      },
    }
  );
}

export async function updateEquipment(params) {
  return request(`/api/equipment/edit`, {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

