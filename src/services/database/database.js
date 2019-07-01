import request from '@/utils/request';

export async function databaseInfo(params) {
  return request('/api/wms/SystemInfo/database', {
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
