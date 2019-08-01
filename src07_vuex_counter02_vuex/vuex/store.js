/* 
vuex最核心的管理对象模块
*/
import Vue from 'vue'
import Vuex from 'vuex'

// 声明使用vue的插件
Vue.use(Vuex)
/* 
包含n个状态数据的对象
*/
const state = {
  count: 1,
  xxx: true
}

/* 
包含n个用来直接更新状态数据的方法对象
*/
const mutations = {
  // 加1的方法
  INCREMENT(state) {
    state.count++
  },

  // 减1的方法
  DECREMENT(state) {
    state.count--
  }
}

/* 
包含n个用来间接更新状态数据的方法对象
*/
const actions = {
  /* 
  increment(context) {
    context.commit('INCREMENT')
  },

  decrement (context) {
    context.commit('DECREMENT')
  }, */

  incrementIfOdd ({commit, state}) {
    if (state.count%2===1) {
      commit('INCREMENT')
    }
  },
  incrementAsync ({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000);
  }
}


const getters = {
  evenOrOdd (state) {
    return state.count%2===1 ? '奇数' : '偶数'
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})