
import {
  SET_ISLOGIN,
  SET_SID,
  SET_USER,
  SET_MSG,
  SET_TOKEN,
  SET_HIDE
} from '@/store/mutation-types'
import { getCode, login } from '@/api/login'
import { v4 as uuidv4 } from 'uuid'

export default {
  namespaced: true,
  state: {
    sid: '',
    isLogin: false,
    token: '',
    userInfo: {},
    isHide: false
  },
  mutations: {
    [SET_SID] (state, value) {
      state.sid = value
    },
    [SET_TOKEN] (state, value) {
      state.token = value
      localStorage.setItem('token', value)
    },
    // 设置用户的基本信息
    [SET_USER] (state, value) {
      if (value === '') return
      state.userInfo = value
      // 本地存储用户的基本信
      localStorage.setItem('userInfo', JSON.stringify(value))
    },
    // 设置isLogin的状态
    [SET_ISLOGIN] (state, value) {
      state.isLogin = value
    },
    // 设置container的状态
    [SET_HIDE] (state, value) {
      state.isHide = value
    },
    [SET_MSG] (state, value) {
      state.num = value
    }
  },
  getters: {
    user: (state) => state.userInfo,
    isLogin: (state) => state.isLogin,
    token: (state) => state.token,
    sid: (state) => state.sid,
    isHide: (state) => state.isHide
  },
  actions: {
    message ({ commit }, msg) {
      commit('setMessage', msg)
    },
    // 获取图片验证码
    async getCode ({ commit }) {
      let sid = ''
      if (localStorage.getItem('sid')) {
        sid = localStorage.getItem('sid')
      } else {
        sid = uuidv4()
        localStorage.setItem('sid', sid)
      }
      // 更改app中的sid，全局vuex
      commit('SET_SID', sid)
      const result = await getCode(sid)
      // if (result.code === 200) {
      //   // 返回到前端svg图片数据
      //   return result.data
      // }
      return result
    },
    // 登录
    async login ({ commit, state }, payload) {
      const result = await login({
        ...payload,
        sid: state.sid
      })
      if (result.code === 200 && result.token) {
        const userInfo = result.data
        userInfo.username = payload.username
        commit('SET_TOKEN', result.token)
        commit('SET_USER', userInfo)
        commit('SET_ISLOGIN', true)
      }
      return result
    }
  }
}
