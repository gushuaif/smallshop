import Vue from 'vue'
import App from './App.vue'
import router from './router'
// Import Swiper Vue.js components
import VueAwesomeSwiper from 'vue-awesome-swiper'
// Import Swiper styles
import 'swiper/css/swiper.css'


Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// axios.defaults.baseURL = 'http://152.136.185.210:7878/api/m5'
// axios.defaults.timeout = 5000
// 1.基本使用
// axios({
//   url: '/home/multidata',
//   params: {
//     type: 'pop',
//     page: 3
//   }
//   // method: 'get'
// }).then(res => {
//   console.log(res);
// })
// // 2.发送并发请求
// axios.all([axios({
//   url:'/home/multidata'
// }),axios({
//   url: '/home/data',
//   params :{
//     type: 'sell',
//     page: 5
//   }
// })])
// .then(result => {
//   console.log(result);
// })

// 3.创建实例
// const instance = axios.create({
//   baseURL: 'http://152.136.185.210:7878/api/m5',
//   timeout: 2500
// })

// instance({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })

// instance({
//   url: '/home/data',
//   params:{
//     type: 'pop',
//     page: 1
//   }
// }).then(result => {
//   console.log(result);
// })
// 4.封装一个request函数
import { request } from './network/request'
// request({
//   url: '/home/multidata'
// }, res => {
//   console.log(res);
// }, err => {
//   console.log(err);
// })

// request({
//   baseConfig: {

//   },
//   success: function(res) {

//   },
//   failure: function(err) {

//   }
// })
// request({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })