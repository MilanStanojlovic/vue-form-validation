import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import Vuelidate from 'vuelidate';

import router from './router'
import store from './store'

Vue.use(Vuelidate);

axios.defaults.baseURL = 'https://vue-axios-fd06d.firebaseio.com';
// axios.defaults.headers.common['Authorization'] = 'fasdasd';
axios.defaults.headers.get['Accepts'] = 'application/json';

const requestInterceptor = axios.interceptors.request.use((config) => {
  console.log('Request incerceptor', config);
  return config;
})

const responseInterceptor = axios.interceptors.response.use((response) => {
  console.log('Response interceptor', response)
  return response;
})

axios.interceptors.request.eject(requestInterceptor);
axios.interceptors.response.eject(responseInterceptor);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
