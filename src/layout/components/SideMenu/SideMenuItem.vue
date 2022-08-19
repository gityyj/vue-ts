<template>
  <Submenu :name="parentName">
    <template>

    </template>
    <template v-for="item in children">
      <template v-if="item.children && item.children.length === 1">
        <SideMenuItem v-if="showChildren(item)" :key="'menu-' + item.name" ></SideMenuItem>
        <menu-item v-else :key="'menu-' + item.children[0].name" :name="getNameOrHref(item, true)">
          <Icon type=""></Icon>
          <span>{{ showTitle(item.children[0]) }}</span>
        </menu-item>
      </template>
      <template v-else>
        
      </template>
    </template>
  </Submenu>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { showChildren, getNameOrHref } from './methods'
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
  setup() {
    return { showChildren, getNameOrHref }
  },
})
</script>
