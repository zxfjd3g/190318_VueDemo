/* 
包含n个用来间接更新状态数据的方法的对象
*/
import axios from 'axios'
import {
  REQUESTING,
  REQUEST_SUCCESS,
  REQUEST_ERROR
} from './mutation_types'

export default {
  
  /* 
    异步action: 包含异步代码的action
  */
  async search ({commit}, searchName) {
    // 更新状态数据(请求中)
    commit(REQUESTING)
    // 发ajax请求获取users数据
    // 发ajax请求获取users
    const url = `https://api.github.com/search/users?q=${searchName}`
    try {
      const response = await axios(url)
      // 请求成功了, 更新数据(成功)
      const users = response.data.items.map(item => ({
        username: item.login,
        url: item.html_url,
        avatar_url: item.avatar_url
      }))
      commit(REQUEST_SUCCESS, users)
    } catch (error) {
      // 请求失败了, 更新数据(失败)
      commit(REQUEST_ERROR, error.message)
    }
  }
}