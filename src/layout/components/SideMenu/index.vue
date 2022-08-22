<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <Menu 
      v-show="!collapsed" 
      :active-name="activeName" 
      :open-names="openedNames" 
      :accordion="accordion"
      :theme="theme"
    >
      <template v-for="item in menuList">
        <template v-if="item.children && item.children.length === 1">
          <SideMenuItem v-if="showChildren(item)" :key="'menu-' + item.name" :parentItem="item"></SideMenuItem>
          <menu-item v-else :name="getNameOrHref(item, true)" :key="'menu-' + item.children[0].name">
            <Icon :type="item.icon"></Icon>
            <span>{{ showTitle(item.children[0]) }}</span>
          </menu-item>
        </template>
        <template v-else>
          <SideMenuItem v-if="showChildren(item)" :key="'menu-' + item.name" :parentItem="item"></SideMenuItem>
          <menu-item v-else :name="getNameOrHref(item)" :key="'menu-' + item.name">
            <Icon :type="item.icon"></Icon>
            <span>{{ showTitle(item) }}</span>
          </menu-item>
        </template>
      </template>
    </Menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { showChildren, getNameOrHref } from './methods'
import SideMenuItem from './SideMenuItem.vue'
import { showTitle } from '@/libs/util'

export default defineComponent({
  props: {
    collapsed: {
      type: Boolean
    },
    menuList: {
      type: Array
    },
    activeName: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'dark'
    },
    accordion: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      openedNames: []
    }
  },
  components: {
    SideMenuItem
  },
  setup() {
    return { showChildren, getNameOrHref, showTitle }
  },
})
</script>
<style lang="less" scoped>
@import './side-menu.less';
</style>

