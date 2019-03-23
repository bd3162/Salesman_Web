import Vue from 'vue'
import Router from 'vue-router'

import Base from "../components/Base";
import Shot from "../components/Shot";
import User from "../components/User";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Base',
      component:Base
    },
    {
      path: '/shot',
      name: 'Shot',
      component:Shot
    },
    {
      path: '/user',
      name: 'User',
      component:User
    }
  ]
})
