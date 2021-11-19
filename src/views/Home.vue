<template>
  <div class="site-layout-content">
    <a-space :size="20">
      <a-image
        :width="200"
        :preview="false"
        :src="require('@/assets/naked_crust.jpeg')"
        @click="
          crustClick({
            thiccCrust: true,
            thinCrust: false,
            veganCrust: false
          })
        "
      />
      <a-image
        :width="200"
        :preview="false"
        :src="require('@/assets/naked_crust.jpeg')"
        @click="
          crustClick({
            thiccCrust: false,
            thinCrust: true,
            veganCrust: false
          })
        "
      />
      <a-image
        :width="200"
        :preview="false"
        :src="require('@/assets/naked_crust.jpeg')"
        @click="
          crustClick({
            thiccCrust: false,
            thinCrust: false,
            veganCrust: true
          })
        "
      />
    </a-space>
    <h1>
      Crust Type: Thick:{{ pizza.thiccCrust }}, Thin:{{ pizza.thinCrust }},
      Vegan:{{ pizza.veganCrust }}
    </h1>
    <a-space size="large">
      <a-button size="large">Red Sauce</a-button>
      <a-button size="large">White Sauce</a-button>
      <a-button size="large">Green Sauce</a-button>
    </a-space>
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
/*.site-layout-header {*/
/*  min-height: 10vh;*/
/*  max-height: 30px;*/
/*  font-size: 30px;*/
/*}*/
.site-layout-content {
  min-height: 90vh;
  max-height: 90vh;
  padding: 20px;
  background: steelblue;
}
.site-layout-footer {
  min-height: 5vh;
  max-height: 5vh;
  text-align: center;
  margin-bottom: 0;
  padding-bottom: 0;
}
</style>
