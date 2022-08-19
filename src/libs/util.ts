import Cookies from 'js-cookie'
import { RouteRecordRaw } from 'vue-router'

export const TOKEN_KEY = 'token'

export const getToken = () => { 
  const token = Cookies.get(TOKEN_KEY)
  if(token) return token
  else return false
}

export const setToken = (token: string) => {
  Cookies.set(TOKEN_KEY, token, {expires: 1})
}

export const getMenuByRouter = (list: Array<RouteRecordRaw>, access: Array<string>) => {
  let res: Array<Object> = [];
  list.forEach((item) => {
    let obj: Object = {
      icon: (item.meta && item.meta.icon) || '',
      name: item.name,
      meta: item.meta
    }
    res.push(obj)
  })
  return res
}