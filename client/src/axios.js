import defaultAxios from 'axios';

const axios = defaultAxios.create({
	baseURL: 'http://node19574-myprincess.jcloud.ik-server.com:5000'
});

export default axios;
