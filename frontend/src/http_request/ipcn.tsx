// api.js
import axios from 'axios';

export default axios.create({
    baseURL: 'https://ip.cn/', // 修改为你的API基地址
    timeout: 10000, // 设置请求超时
    headers: {
        'Content-Type': 'application/json',
    },
});

// export default speedTestIp;
