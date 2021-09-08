<template>
  <div class="site-layout-content">
    <a-space :size="20">
      <a-image
        :width="400"
        :preview="false"
        :src="require('@/assets/thick_crust.png')"
        @click="
          crustClick({
            thiccCrust: true,
            thinCrust: false,
            veganCrust: false
          })
        "
      />
      <a-button ghost size="large"> </a-button>
      <a-button
        ghost
        size="large"
        @click="
          crustClick({
            thiccCrust: false,
            thinCrust: true,
            veganCrust: false
          })
        "
        >Thin Crust</a-button
      >
      <a-button
        ghost
        size="large"
        @click="
          crustClick({
            thiccCrust: false,
            thinCrust: false,
            veganCrust: true
          })
        "
        >Vegan Crust</a-button
      >
    </a-space>
    <h1>thicc: {{ pizza.thiccCrust }}</h1>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      pizza: { thiccCrust: true }
    }
  },
  methods: {
    crustClick(crust) {
      this.pizza = crust
      if (crust.thiccCrust) {
        console.log('Thiccy')
      } else if (crust.thinCrust) {
        console.log('Thinn')
      } else {
        console.log('Freak')
        //method for clickin pictures
      }
    }
  },
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
