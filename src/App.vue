<template>
  <a-layout>
    <a-layout-header style="background-color: #46484d">
      <div class="site-layout-header" id="nav" style="color: #5de0ec">
        <h1
          style="
            color: steelblue;
            font-family: Herculanum, fantasy;
            text-align: center;
            max-width: content-box;
          "
        >
          <FireFilled />
          <FireTwoTone twoToneColor="#523a3a" spin />
          <FireFilled />
          <b> THE PIZZA STORE </b>
          <FireFilled />
          <FireTwoTone twoToneColor="#523a3a" spin />
          <FireFilled />
        </h1>
      </div>
    </a-layout-header>
    <a-layout>
      <a-layout-sider style="width: 80vw">
        <Sider></Sider>
      </a-layout-sider>

      <a-layout-content style="padding: 0 50px; margin-top: 24px">
        <div class="site-layout-content">
          <span>
            <a-button ghost size="large">Option 1</a-button> &nbsp;
            <a-button ghost size="large">Option 2</a-button> &nbsp;
            <a-button ghost size="large">Option 3</a-button> &nbsp;
            <a-button danger ghost size="large">Option 4</a-button>
          </span>
          <!--          <CoolScreen></CoolScreen>-->
        </div>
      </a-layout-content>
    </a-layout>
    <a-layout>
      <a-layout-footer>
        <div class="site-layout-footer">Feet</div>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
// import CoolScreen from '@/components/CoolScreen'
// import Header from '@/components/Header'
import Sider from '@/components/Sider'
// import { FireOutlined } from '@ant-design/icons-vue'
import { FireFilled } from '@ant-design/icons-vue'
import { FireTwoTone } from '@ant-design/icons-vue'

export default {
  name: 'App',
  components: {
    // Header,
    // CoolScreen,
    Sider,
    // FireOutlined,
    FireFilled,
    FireTwoTone
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 3px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.site-layout-header {
  min-height: 10vh;
  max-height: 30px;
  font-size: 30px;
}
.site-layout-content {
  min-height: 80vh;
  padding: 40px;
  background: steelblue;
}
.site-layout-footer {
  min-height: 5px;
  max-height: 10px;
  text-align: center;
  margin-bottom: 0;
  padding-bottom: 0;
}
</style>
