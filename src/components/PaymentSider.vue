<template class="site-layout-sider">
  <div style="max-width: content-box">
    <a-image
      :preview="false"
      :src="require('@/assets/DigitalPizza_logo.jpg')"
      style="width: 25vw"
    />
    <p style="background-color: white; padding-top: 1vh">
      This is where the system will print out the different components of the
      pizza class as an itemized list.
    </p>
  </div>
</template>

<script>
export default {
  name: 'PaymentSider'
}
</script>

<style scoped>
.site-layout-sider {
  background-color: white;
}
</style>
