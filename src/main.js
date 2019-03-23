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

axios.defaults.baseURL = 'http://42.159.104.30:8081';

Vue.prototype.$axios = axios;   //全局注册，使用方法为:this.$axios
Vue.prototype.qs = qs;       //全局注册，使用方法为:this.qs

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
