<template>
  <div style="max-width: content-box">
    <!--    <a-button-->
    <!--      type="primary"-->
    <!--      @click="toggleCollapsed"-->
    <!--      style="margin-bottom: 16px"-->
    <!--    >-->
    <!--      <MenuUnfoldOutlined v-if="collapsed" />-->
    <!--      <MenuFoldOutlined v-else />-->
    <!--    </a-button>-->
    <a-menu
      mode="vertical"
      theme="dark"
      :inline-collapsed="collapsed"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
    >
      <a-menu-item key="1">
        <!--        <template #icon>-->
        <!--          <PieChartOutlined />-->
        <!--        </template>-->
        <span>Option 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <!--        <template #icon>-->
        <!--          <DesktopOutlined />-->
        <!--        </template>-->
        <span>Option 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <!--        <template #icon>-->
        <!--          <InboxOutlined />-->
        <!--        </template>-->
        <span>Option 3</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, watch } from 'vue'
import // MenuFoldOutlined,
// MenuUnfoldOutlined
// PieChartOutlined,
// MailOutlined,
// DesktopOutlined,
// InboxOutlined,
// AppstoreOutlined
'@ant-design/icons-vue'
export default defineComponent({
  name: 'Sider',
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
  components: {
    // MenuFoldOutlined,
    // MenuUnfoldOutlined
    // PieChartOutlined,
    // MailOutlined,
    // DesktopOutlined,
    // InboxOutlined,
    // AppstoreOutlined
  }
})
</script>

<style scoped></style>
