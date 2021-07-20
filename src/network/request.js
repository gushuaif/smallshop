import axios from "axios";

export function request(config) {
    // 创建axiso实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout: 2500
    })
    // axios的拦截器
    // 请求拦截的作用
    instance.interceptors.request.use(config => {

        // 1.比如config中的部分信息不符合服务器的要求
        // 2.每次发送网络请求时，都希望在界面显示请求图标
        // 3.登录等网络请求 必须携带特殊的信息
        return config
    }, err => {
        // console.log(err);
    });
    // 响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err);
    })
    // 发送网络请求
    return instance(config)

}
// export function request(config) {
//     return new Promise((resolve, reject) => {
//     // 创建axiso实例
//     const instance = axios.create({
//         baseURL: 'http://152.136.185.210:7878/api/m5',
//         timeout: 2500
//     })
//     // 发送网络请求
//     instance(config)
//     .then(res => {      
//         resolve(res)
//     })
//     .catch(err => {   
//         reject(err)
//     })
//     })
// }