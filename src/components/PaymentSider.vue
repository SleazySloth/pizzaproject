<template class="site-layout-sider">
  <div style="max-width: content-box">
    <a-image
      :preview="false"
      :src="require('@/assets/DigitalPizza_logo.jpg')"
      style="width: 25vw"
    />
    <h2 style="background-color: white; padding-top: 20px; font-size: xx-large">
      Your Pizza:
    </h2>
    <h3 style="background-color: white; font-size: large">{{ pizza }}</h3>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'PaymentSider',
  setup() {
    return {
      childMessage: ''
    }
  },
  props: {
    pizza: Object
  },
  methods: {}
})
</script>

<style scoped>
.site-layout-sider {
  background-color: white;
}
</style>
