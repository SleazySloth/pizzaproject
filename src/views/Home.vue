<template>
  <div class="site-layout-content">
    <a-space :size="20">
      <a-button ghost size="large">Option 1</a-button>
      <a-button ghost size="large">Option 2</a-button>
      <a-button ghost size="large">Option 3</a-button>
      <a-button danger ghost size="large">Option 4</a-button>
    </a-space>
    <!--          <CoolScreen></CoolScreen>-->
  </div>
</template>
<script>
export default {
  name: 'Home',
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
