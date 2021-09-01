<template>
  <div>
    <a-layout>
      <a-layout-content> </a-layout-content>
      <CoolScreen></CoolScreen>
      <a-button>Text</a-button>
    </a-layout>
  </div>
</template>
<script>
import CoolScreen from '@/components/CoolScreen'

export default {
  name: 'App',
  components: {
    CoolScreen
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
}
.site-layout-content {
  min-height: 80vh;
  padding: 24px;
  background: #fff;
}
.site-layout-footer {
  min-height: 12vh;
  text-align: center;
  padding-top: 3vh;
  margin-bottom: 0%;
  padding-bottom: 0%;
}
</style>
