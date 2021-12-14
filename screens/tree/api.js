import {data} from './data';
export const getChannelNodeFromApi = (from = 0, size = 100) => {
  return fetch(
    `http://192.168.1.38:7979/bts/api/v1/channelNode/list?from=${from}&size=${size}`,
    {
      method: 'GET',
      headers: {
        'x-access-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBUeXBlIjoiYWdlbnRBcHAiLCJleHBpcmVkSW4iOjYwMCwiZXhwaXJlZFRpbWUiOiIyMDIxLTEyLTE0VDEzOjM5OjE4LjAxNVoiLCJwaG9uZU51bWJlciI6Iis4NDMxOTc3MTExMSIsInVzZXJJZCI6IjVlYzM0ZjBkOTI0NTc4MDAxMTk4YWMyNyIsImhvbGRlcklkIjoiNWVjMzRmMGRlZWM0YjIwMDE4MGRiMDcwIiwiaWF0IjoxNjM5NDg4NTM4LCJleHAiOjE2Mzk0ODkxMzh9.e_94gjOy-XIhm41Y4AVZ9LJl30GyygqzrQy33aCE65o',
      },
    },
  )
    .then((response) => {
      // return response.json();
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
};
export const getProductFormApi = () => {
  const request = new Request(
    'http://192.168.1.38:7979/bts/api/v1/product/forms/5f24dd5ee164ea00195b81af',
    {
      method: 'GET',
      headers: new Headers({
        'x-access-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBUeXBlIjoiYWdlbnRBcHAiLCJleHBpcmVkSW4iOjYwMCwiZXhwaXJlZFRpbWUiOiIyMDIxLTEyLTE0VDEzOjM5OjE4LjAxNVoiLCJwaG9uZU51bWJlciI6Iis4NDMxOTc3MTExMSIsInVzZXJJZCI6IjVlYzM0ZjBkOTI0NTc4MDAxMTk4YWMyNyIsImhvbGRlcklkIjoiNWVjMzRmMGRlZWM0YjIwMDE4MGRiMDcwIiwiaWF0IjoxNjM5NDg4NTM4LCJleHAiOjE2Mzk0ODkxMzh9.e_94gjOy-XIhm41Y4AVZ9LJl30GyygqzrQy33aCE65o',
        'X-Schema-Version': '1.2.0',
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    },
  );
  return fetch(request)
    .then((response) => {
      if (response.ok) {
        let data = [];
        response.json().then((_json) => {
          console.log('data======', _json);
        });
        return data;
      }
      return [];
    })
    .catch((error) => {
      console.error(error);
    });
};
