<template>
  <div style="max-width: content-box">
    <a-menu
      mode="vertical"
      theme="dark"
      :inline-collapsed="collapsed"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
    >
      <a-menu-item key="1" @click="goToHome()">
        <span>Option 1</span>
      </a-menu-item>
      <a-menu-item key="2" @click="goToAbout()">
        <span>Option 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <span>Option 3</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, watch } from 'vue'
import '@ant-design/icons-vue'
export default defineComponent({
  name: 'Sider',
  methods: {
    goToHome() {
      this.$router.push('/Home')
    },
    goToAbout() {
      this.$router.push('/About')
    }
  },
  setup() {
    const state = reactive({
      collapsed: false,
      selectedKeys: ['1'],
      openKeys: ['sub1'],
      preOpenKeys: ['sub1']
    })
    watch(
      () => state.openKeys,
      (val, oldVal) => {
        state.preOpenKeys = oldVal
      }
    )

    const toggleCollapsed = () => {
      state.collapsed = !state.collapsed
      state.openKeys = state.collapsed ? [] : state.preOpenKeys
    }

    return { ...toRefs(state), toggleCollapsed }
  },
  components: {}
})
</script>

<style scoped></style>
