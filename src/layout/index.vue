<template>
  <Layout style="height: 100%" class="main">
    <Sider ref="side1" hide-trigger collapsible :width="240" :collapsed-width="78" v-model="isCollapsed"  class="left-sider" >
			<SideMune :menuList="menuList" :collapsed="isCollapsed" :active-name="$route.name" @on-select="turnToPage"> 
				<div class="logo-con">
          <img v-show="!collapsed" src="@/assets/images/logo.jpg" key="max-logo" />
          <img v-show="collapsed" src="@/assets/images/logo-min.jpg" key="min-logo" />
        </div>
			</SideMune>
    </Sider>
    <Layout>
			<Header :style="{padding: 0}" class="header-con">
				<Icon @click="collapsedSider" :class="rotateIcon" color="white" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
			</Header>
			<Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}"  class="main-content-con">
					<router-view/>
			</Content>
    </Layout>
</Layout>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { mapGetters, useStore } from 'vuex'
import SideMune from './components/SideMenu/index.vue'
import './index.less';

export default defineComponent({
  name: 'LayoutBar',
	components: {
		SideMune
	},

  props: {
  },

	setup () {
    const store = useStore()
		console.log(store.getters.menuList)
    return {
      menuList: computed(() => store.getters.menuList),
    }
  },

	data() {
		return {
			isCollapsed: true,
		} 
	},

	computed: {
		rotateIcon () : Array<String> {
			return [
				'menu-icon',
				this.isCollapsed ? 'rotate-icon' : ''
			];
		},
		menuitemClasses () : Array<String> {
			return [
				'menu-item',
				this.isCollapsed ? 'collapsed-menu' : ''
			]
		}
	},
	mounted() {
		const side: any = this.$refs.side1
		side.toggleCollapse();
	},
  methods: {
    collapsedSider() {
      (this.$refs.side1 as any).toggleCollapse();
    },
		turnToPage() {

		},
  }
});
</script>

<style scoped>
@import './index.less';
.menu-icon{
	transition: all .3s;
	cursor: pointer;
}
.rotate-icon{
	transform: rotate(-90deg);
}
</style>
