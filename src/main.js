// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';

//在main.js加入下面两行代码
import echarts from 'echarts'
Vue.prototype.$echarts = echarts //将echarts注册成Vue的全局属性

import store from './store/store'
import Vuex from 'vuex'


import axios from 'axios'
import qs from 'qs'

Vue.use(ElementUI);
Vue.use(Antd);
Vue.use(Vuex);
Vue.config.productionTip = false;

//axios.defaults.baseURL = 'http://42.159.104.30:8081';

Vue.prototype.$axios = axios;   //全局注册，使用方法为:this.$axios
Vue.prototype.qs = qs;       //全局注册，使用方法为:this.qs


axios.defaults.baseURL = 'https://haoxipeng.chinacloudapp.cn/scrm-1.0';

//main.js设置全局的请求次数，请求的间隙
axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
  var config = err.config;
  // If config does not exist or the retry option is not set, reject
  if(!config || !config.retry) return Promise.reject(err);

  // Set the variable for keeping track of the retry count
  config.__retryCount = config.__retryCount || 0;

  // Check if we've maxed out the total number of retries
  if(config.__retryCount >= config.retry) {
    // Reject with the error
    return Promise.reject(err);
  }

  // Increase the retry count
  config.__retryCount += 1;

  // Create new promise to handle exponential backoff
  var backoff = new Promise(function(resolve) {
    setTimeout(function() {
      resolve();
    }, config.retryDelay || 1);
  });

  // Return the promise in which recalls axios to retry the request
  return backoff.then(function() {
    return axios(config);
  });
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
