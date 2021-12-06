<template>
  <a-layout>
    <a-layout>
      <a-layout-content>
        <div class="site-layout-content">
          <router-view />
        </div>
      </a-layout-content>
    </a-layout>
    <a-layout>
      <a-layout-footer class="site-layout-footer">
        <div>Copyright © 2021 Digital Pizza Production Group - SWE 3313</div>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  name: 'App',
  components: {}
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
.site-layout-content {
  min-height: 95vh;
  padding: 20px;
  background-color: #cbcbcb;
}
.site-layout-footer {
  height: 5vh;
  background-color: darkorange;
}
.site-layout-sider {
  background-color: #222222;
}
</style>
