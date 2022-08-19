import Cookies from 'js-cookie'
import { RouteRecordRaw } from 'vue-router'
import { hasOneOf } from './tool'

export const TOKEN_KEY = 'token'

export const getToken = () => { 
  const token = Cookies.get(TOKEN_KEY)
  if(token) return token
  else return false
}

export const setToken = (token: string) => {
  Cookies.set(TOKEN_KEY, token, {expires: 1})
}

export const hasChild = (item: any) => {
  return item.children && item.children.length !== 0
}

const showThisMenuEle = (item: any, access: Array<string>) => {
  if (item.meta && item.meta.access && item.meta.access.length) {
    if (hasOneOf(item.meta.access, access)) return true
    else return false
  } else return true
}

export const getMenuByRouter = (list: Array<RouteRecordRaw>, access: Array<string>) => {
  let res: Array<Object> = [];
  list.forEach((item) => {
    let obj: any = {
      icon: (item.meta && item.meta.icon) || '',
      name: item.name,
      meta: item.meta,
      children: []
    }
    if(hasChild(item) || (item.meta && item.meta.showAlways) && showThisMenuEle(item, access)) {
      obj.children = getMenuByRouter(item.children, access)
    }

    res.push(obj)
  })
  return res
}