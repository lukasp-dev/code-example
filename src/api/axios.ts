import axios from 'axios';

// TODO: Set axios configuration
const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',  // 기본 URL
    timeout: 1000,  // 타임아웃 설정 (ms 단위)
    headers: { 'X-Custom-Header': 'foobar' }  // 기본 헤더 설정
});

export default axiosInstance;
