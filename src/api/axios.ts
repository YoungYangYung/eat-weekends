import axios from "axios";

// 创建实例时配置默认值
const instance = axios.create({
    baseURL: "http://116.204.113.145:3000",
    withCredentials: true,
    timeout: 10000,
});

export default instance;