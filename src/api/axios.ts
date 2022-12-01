import axios from "axios";

// 创建实例时配置默认值
const instance = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
    timeout: 10000,
});

console.log('===process.env', process.env.NODE_ENV)

export default instance;