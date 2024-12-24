import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000',  // 根据后端实际运行的地址调整
    withCredentials: false
});

export default api;