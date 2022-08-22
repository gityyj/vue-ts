<template>
  <Submenu :name="parentName">
    <template v-slot:title>
      <Icon :type="parentItem.icon"></Icon>
      <span>{{ showTitle(parentItem) }}</span>
    </template>
    <template v-for="item in children">
      <template v-if="item.children && item.children.length === 1">
        <SideMenuItem v-if="showChildren(item)" :key="'menu-' + item.name" ></SideMenuItem>
        <menu-item v-else :key="'menu-' + item.children[0].name" :name="getNameOrHref(item, true)">
          <Icon :type="item.icon"></Icon>
          <span>{{ showTitle(item.children[0]) }}</span>
        </menu-item>
      </template>
      <template v-else>
        <SideMenuItem v-if="showChildren(item)" :key="'menu-' + item.name" :parentItem="item" ></SideMenuItem>
        <menu-item v-else :key="'menu-' + item.name" :name="getNameOrHref(item)">
          <Icon :type="item.icon"></Icon>
          <span>{{ showTitle(item) }}</span>
        </menu-item>
      </template>
    </template>
  </Submenu>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { showChildren, getNameOrHref } from './methods'
import { showTitle } from '@/libs/util'

export default defineComponent({
  name: 'SideMenuItem',
  props: {
    parentItem: {
      type: Object,
      default: () => {}
    },
    theme: String,
    iconSize: Number
  },
  setup(props) {
    console.log(props.parentItem.children, 'props.parentItem.children')
    return { showChildren, getNameOrHref, showTitle, children: props.parentItem.children }
  },
})
</script>
