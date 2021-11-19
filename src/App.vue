<template>
  <a-layout>
    <!--    <a-layout-header style="background-color: #46484d">-->
    <!--      <div class="site-layout-header" id="nav" style="color: #5de0ec">-->
    <!--        <h1-->
    <!--          style="-->
    <!--            color: steelblue;-->
    <!--            font-family: Herculanum, fantasy;-->
    <!--            text-align: center;-->
    <!--            max-width: content-box;-->
    <!--          "-->
    <!--        >-->
    <!--          <FireFilled />-->
    <!--          <FireTwoTone twoToneColor="#523a3a" spin />-->
    <!--          <FireFilled />-->
    <!--          <b> THE PIZZA STORE </b>-->
    <!--          <FireFilled />-->
    <!--          <FireTwoTone twoToneColor="#523a3a" spin />-->
    <!--          <FireFilled />-->
    <!--        </h1>-->
    <!--      </div>-->
    <!--    </a-layout-header>-->
    <a-layout>
      <a-layout-sider style="width: 80vw">
        <Sider></Sider>
      </a-layout-sider>

      <a-layout-content>
        <div class="site-layout-content">
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-sider>
        <PaymentSider></PaymentSider>
      </a-layout-sider>
    </a-layout>

    <a-layout>
      <a-layout-footer>
        <div class="site-layout-footer">
          Copyright © 2021 Digital Pizza Production Group - SWE 3313
        </div>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
// import { FireFilled, FireTwoTone } from '@ant-design/icons-vue'
import Sider from '@/components/Sider'
import PaymentSider from '@/components/PaymentSider'

export default {
  name: 'App',
  components: {
    // FireFilled,
    // FireTwoTone,
    Sider,
    PaymentSider
  }
}
</script>

<style></style>
