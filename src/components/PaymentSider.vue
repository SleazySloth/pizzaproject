<template class="site-layout-sider">
  <div style="max-width: content-box">
    <a-image
      :preview="false"
      :src="require('@/assets/DigitalPizza_logo.jpg')"
      style="width: 25vw"
    />
    <h2
      style="background-color: white; padding-top: 20px; font-size: xxx-large"
    >
      Your Pizza:
    </h2>
    <!--    <h3 style="background-color: white; font-size: large">{{ pizza }}</h3>-->
    <h3
      style="
        background-color: white;
        font-size: xx-large;
        text-align: left;
        padding-left: 25px;
      "
    >
      Size: {{ this.displaySize() }}
    </h3>
    <h3
      style="
        background-color: white;
        font-size: xx-large;
        text-align: left;
        padding-left: 25px;
      "
    >
      Crust: {{ this.displayCrust() }}
    </h3>
    <h3
      style="
        background-color: white;
        font-size: xx-large;
        text-align: left;
        padding-left: 25px;
      "
    >
      Cheese: {{ this.displayCheese() }}
    </h3>
    <h3
      style="
        background-color: white;
        font-size: xx-large;
        text-align: left;
        padding-left: 25px;
      "
    >
      Toppings:
    </h3>
    <li
      style="
        background-color: white;
        font-size: xx-large;
        text-align: left;
        padding-left: 25px;
      "
      v-for="topping in this.displayToppings()"
      :key="topping"
    >
      {{ topping }}
    </li>
    <p></p>
    <h3
      style="
        background-color: white;
        font-size: xx-large;
        text-align: left;
        padding-left: 25px;
      "
    >
      Extras:
    </h3>
    <li
      style="
        background-color: white;
        font-size: xx-large;
        text-align: left;
        padding-left: 25px;
      "
      v-for="extra in this.displayExtras()"
      :key="extra"
    >
      {{ extra }}
    </li>
    <p></p>
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
  methods: {
    displaySize() {
      if (this.pizza.kids) {
        return 'Kids'
      }
      if (this.pizza.small) {
        return 'Small'
      }
      if (this.pizza.medium) {
        return 'Medium'
      }
      if (this.pizza.large) {
        return 'Large'
      }
      return 'Small'
    },
    displayCrust() {
      if (this.pizza.thick) {
        return 'Thick'
      }
      if (this.pizza.thin) {
        return 'Thin'
      }
      if (this.pizza.Vegan) {
        return 'Vegan'
      }
      return 'Thick'
    },
    displayCheese() {
      if (this.pizza.mozzarella) {
        return 'Mozzarella'
      }
      if (this.pizza.cheddar) {
        return 'Cheddar'
      }
      if (this.pizza.provolone) {
        return 'Provolone'
      }
      if (this.pizza.feta) {
        return 'Feta'
      }
      return 'Mozzarella'
    },
    displayToppings() {
      const toppings = []
      if (this.pizza.sausage) {
        toppings.push('Italian Sausage')
      }
      if (this.pizza.pepperoni) {
        toppings.push('Pepperoni')
      }
      if (this.pizza.chicken) {
        toppings.push('Chicken')
      }
      if (this.pizza.bacon) {
        toppings.push('Bacon')
      }
      if (this.pizza.onions) {
        toppings.push('Onions')
      }
      if (this.pizza.greenPeppers) {
        toppings.push('Green Peppers')
      }
      if (this.pizza.olives) {
        toppings.push('Olives')
      }
      if (this.pizza.bananaPeppers) {
        toppings.push('Banana Peppers')
      }
      if (this.pizza.spinach) {
        toppings.push('Spinach')
      }
      if (this.pizza.sunDriedTomatoes) {
        toppings.push('Sun-Dried Tomatoes')
      }
      if (this.pizza.artichokes) {
        toppings.push('Artichokes')
      }
      if (this.pizza.pineapple) {
        toppings.push('Pineapple')
      }
      return toppings
    },
    displayExtras() {
      const extras = []
      if (this.pizza.breadSticks) {
        extras.push('Breadsticks')
      }
      if (this.pizza.cookiePizza) {
        extras.push('Cookie Pizza')
      }
      if (this.pizza.lavaCake) {
        extras.push('Molten Lava Cake')
      }
      if (this.pizza.cinnamonSticks) {
        extras.push('Cinnamon Sticks')
      }
      if (this.pizza.digitalWatch) {
        extras.push('Digital Watch')
      }
      if (this.pizza.beverage) {
        extras.push('Beverage')
      }
      if (this.pizza.pizzaHat) {
        extras.push('Pizza Hat')
      }
      if (this.pizza.halibut) {
        extras.push('Halibut')
      }
      return extras
    }
  }
})
</script>

<style scoped>
.site-layout-sider {
  background-color: white;
}
</style>
