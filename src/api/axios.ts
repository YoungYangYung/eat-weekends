import axios from "axios";

// 创建实例时配置默认值
const instance = axios.create({
    baseURL: "http://localhost:7001",
    withCredentials: true,
});

console.log('===process.env', process.env.NODE_ENV)

export default instance;