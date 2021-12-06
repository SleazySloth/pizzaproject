<template>
  <a-layout>
    <a-layout>
      <a-layout-sider class="site-layout-sider" width="20vw">
        <div style="max-width: content-box">
          <a-image
            :preview="false"
            :src="require('@/assets/DigitalPizza_logo.jpg')"
            style="width: 20vw"
          />
          <p>
            This is where the system will print out the different components of
            the pizza class as an itemized list.
          </p>
        </div>
      </a-layout-sider>

      <a-layout-content>
        <div class="site-layout-content">
          <router-view />
        </div>
      </a-layout-content>
      <!--      <a-layout-sider class="site-layout-sider" width="20vw">-->
      <!--        &lt;!&ndash;        <PaymentSider></PaymentSider>&ndash;&gt;-->
      <!--      </a-layout-sider>-->
    </a-layout>

    <a-layout>
      <a-layout-footer class="site-layout-footer">
        <div>Copyright © 2021 Digital Pizza Production Group - SWE 3313</div>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
// import Sider from '@/components/Sider'
// import PaymentSider from '@/components/PaymentSider'

export default {
  name: 'App',
  components: {
    // Sider,
    // PaymentSider
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
