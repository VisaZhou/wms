import request from '@/utils/request';

export async function virtualInfo(params) {
  return request('/api/wms/SystemInfo/virtual', {
    method: 'POST',
    headers:{
      'token': window.localStorage.getItem('token'),
      ...request.headers,
    },
    data: {
      ...params,
    },
  });
}
