import request from '@/utils/request';

export async function serverInfo(params) {
  return request('/api/wms/SystemInfo/server', {
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
