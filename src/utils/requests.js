import axios from 'axios';

const apiMapper = {
  login: {
    url: '/api/auth/login',
    method: 'POST',
  },
};

export const handleReq = async ({action, data, qs}) => {
  const config = {
    url: apiMapper[action].url,
    method: apiMapper[action].method,
    data,
    params: qs,
    headers: {}
  };
  console.log(config);
  const res = await axios(config)
    .catch((err) => {
      throw err;
    });
  console.log(res);
  return res.data;
};