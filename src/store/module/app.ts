import { getMenuByRouter } from '@/libs/util'

import router from '@/router'
import routers from '@/router/routers'
const homeName = 'home'

export default {
  state: {
    breadCrumbList: [],
    tagNavList: [],
    homeRoute: {},
    // local: localRead('local'),
    errorList: [],
    hasReadErrorPage: false
  },
  getters: {
    menuList: (state: any, getters: any, rootState: any) => getMenuByRouter(routers, [])
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
}
