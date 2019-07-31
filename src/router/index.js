/* 
路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

export default new VueRouter({

  mode: 'history', // 去掉了路由路径上的#
  // 应用中所有的路由
  routes,
})