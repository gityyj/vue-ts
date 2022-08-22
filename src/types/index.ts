import type { RouteRecordRaw } from "vue-router";
import { defineComponent } from "vue";
export type Component<T = any> = ReturnType<typeof defineComponent> | (() => Promise<typeof import('*.vue')>) | (() => Promise<T>)

export interface RouteMeta {
  title?: string;
  hideInMenu?: boolean;
  notCache?: boolean;
}

// Omit 生成一个新类型，该类型拥有 T 中除了 K 属性以外的所有属性
// export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
//   name: string;
//   path: string;
//   meta: RouteMeta;
//   component: Component | string;
//   children?: Array<AppRouteRecordRaw>;
// }


// export type AppRouteModule = AppRouteRecordRaw