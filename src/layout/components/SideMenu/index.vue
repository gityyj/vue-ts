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
          
        </template>

      </template>
    </Menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { showChildren } from './methods'
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
  },
  data() {
    return {
      openedNames: []
    }
  },
  setup() {
    
  },
})
</script>

