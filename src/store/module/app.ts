import { createStore } from 'vuex'
import { getMenuByRouter } from '@/libs/util'

import router from '@/router'
import routers from '@/router/routers'
const homeName = 'home'

export default createStore({
  state: {
    breadCrumbList: [],
    tagNavList: [],
    homeRoute: {},
    // local: localRead('local'),
    errorList: [],
    hasReadErrorPage: false
  },
  getters: {
    menuList: (state, getters, rootState: any) => getMenuByRouter(routers, rootState.user.access) 
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
