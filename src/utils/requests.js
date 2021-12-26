import axios from 'axios';
import { getUser } from './helpers';
const apiMapper = {
  login: {
    url: '/api/auth/login',
    method: 'POST',
  },
  getPickups: {
    url: '/api/pickup',
    method: 'GET',
  },
  getPickupById: {
    url: '/api/pickup/:id',
    method: 'GET',
  },
  schedulePickup: {
    url: '/api/pickup/schedule',
    method: 'POST',
  },
  updatePickup: {
    url: '/api/pickup',
    method: 'PUT'
  }
};

const tokenHeaderName = 'App-token';

const defaultHeaders = () => {
  const headers = {};
  const userInfo = getUser();
  if(userInfo) {
    headers[tokenHeaderName] = userInfo.token;
  }
  return headers;
};

export const handleReq = async ({action, data, qs, variables}) => {
  let ep = apiMapper[action].url;
  if(variables) {
    for(let key in variables) {
      ep = ep.replace(`:${key}`, variables[key]);
    }
  }
  const config = {
    url: ep,
    method: apiMapper[action].method,
    data,
    params: qs,
    headers: {...defaultHeaders()}
  };
  const res = await axios(config)
    .catch((err) => {
      throw err;
    });
  return res.data;
};