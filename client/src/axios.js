import defaultAxios from 'axios';

const axios = defaultAxios.create({
  baseURL: 'https://myprincess.jcloud.ik-server.com'
});

export default axios;
