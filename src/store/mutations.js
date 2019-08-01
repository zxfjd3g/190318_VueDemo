/* 
包含n个用来直接更新状态数据的方法的对象
*/
import {
  REQUESTING,
  REQUEST_SUCCESS,
  REQUEST_ERROR
} from './mutation_types'

export default {
  [REQUESTING] (state) {
    state.firstView = false
    state.loading = true
  },

  [REQUEST_SUCCESS] (state, users) {
    state.loading = false
    state.users = users
  },

  [REQUEST_ERROR] (state, msg) {
    state.loading = false
    state.errorMsg = msg
  }
}