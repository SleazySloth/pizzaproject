<template>
  <div class="site-layout-content">
    <h2>PIZZA SIZE</h2>
    <!--    Pizza size button group-->
    <div :style="{ marginTop: '16px' }">
      <a-radio-group v-model:value="value2" button-style="solid">
        <a-space>
          <a-button value="pizza-kids" disabled>Kids</a-button>
          <a-button value="pizza-small">Small</a-button>
          <a-button value="pizza-medium">Medium</a-button>
          <a-button value="pizza-large">Large</a-button></a-space
        >
      </a-radio-group>
    </div>

    <h2>CRUST TYPE</h2>
    <!--Crust type button group-->
    <a-space :size="20">
      <a-image
        :width="200"
        :preview="false"
        :src="require('@/assets/thickcrust.png')"
        @click="
          crustClick({
            thickCrust: true
          })
        "
      />
      <a-image
        :width="200"
        :preview="false"
        :src="require('@/assets/thincrust.png')"
        @click="
          crustClick({
            thinCrust: true
          })
        "
      />
      <a-image
        :width="200"
        :preview="false"
        :src="require('@/assets/vegancrust.png')"
        @click="
          crustClick({
            veganCrust: true
          })
        "
      />
    </a-space>
    <h1>
      Crust Type: Thick: {{ pizza.thickCrust }}, Thin: {{ pizza.thinCrust }},
      Vegan: {{ pizza.veganCrust }}
    </h1>

    <h2>SAUCE</h2>
    <!--    Sauce type button group-->
    <a-space :size="20">
      <a-button size="large" @click="sauceClick({ marinaraSauce: true })"
        >House Marinara</a-button
      >
      <a-button size="large" @click="sauceClick({ alfredoSauce: true })"
        >Alfonso's Alfredo</a-button
      >
      <a-button size="large" @click="sauceClick({ pestoSauce: true })"
        >Papa Pesto Verde</a-button
      >
    </a-space>
    <h1>
      Sauce Type: Red: {{ pizza.marinaraSauce }}, White:
      {{ pizza.alfredoSauce }}, Green: {{ pizza.pestoSauce }}
    </h1>

    <h2>TOPPINGS</h2>
    <!--    Toppings button group-->
    <div>
      <a-space size="large">
        <a-button
          size="large"
          @click="onChange({ ...pizza, sausage: !pizza.sausage })"
          >Italian Sausage</a-button
        >
        <a-button
          size="large"
          @click="onChange({ ...pizza, pepperoni: !pizza.pepperoni })"
          >Pepperoni</a-button
        >
        <a-button
          size="large"
          @click="onChange({ ...pizza, chicken: !pizza.chicken })"
          >Chicken</a-button
        >
        <a-button
          size="large"
          @click="onChange({ ...pizza, bacon: !pizza.bacon })"
          >Bacon</a-button
        >
      </a-space>
    </div>
    <div><p></p></div>
    <div>
      <a-space size="large">
        <a-button
          size="large"
          @click="onChange({ ...pizza, onions: !pizza.onions })"
          >Onions</a-button
        >
        <a-button
          size="large"
          @click="onChange({ ...pizza, greenPeppers: !pizza.greenPeppers })"
          >Green Peppers</a-button
        >
        <a-button
          size="large"
          @click="onChange({ ...pizza, olives: !pizza.olives })"
          >Olives</a-button
        >
        <a-button
          size="large"
          @click="onChange({ ...pizza, bananaPeppers: !pizza.bananaPeppers })"
          >Banana Peppers</a-button
        >
      </a-space>
    </div>
    <div><p></p></div>

    <div>
      <a-space size="large">
        <a-button
          size="large"
          @click="onChange({ ...pizza, spinach: !pizza.spinach })"
          >Spinach</a-button
        >
        <a-button
          size="large"
          @click="
            onChange({ ...pizza, sunDriedTomatoes: !pizza.sunDriedTomatoes })
          "
          >Sun-Dried Tomatoes</a-button
        >
        <a-button
          size="large"
          @click="onChange({ ...pizza, artichokes: !pizza.artichokes })"
          >Artichokes</a-button
        >
        <a-button
          size="large"
          @click="onChange({ ...pizza, pineapple: !pizza.pineapple })"
          >Pineapple</a-button
        >
      </a-space>
      <div><p></p></div>
    </div>

    <h2>EXTRAS</h2>
    <!--    Extras button group-->
    <div>
      <a-space size="large">
        <a-button
          size="large"
          @click="onChange({ ...pizza, breadSticks: !pizza.breadSticks })"
          >Breadsticks</a-button
        >
        <a-button
          size="large"
          @click="onChange({ ...pizza, cookiePizza: !pizza.cookiePizza })"
          >Cookie Pizza</a-button
        >
        <a-button
          size="large"
          @click="onChange({ ...pizza, lavaCake: !pizza.lavaCake })"
          >Molten Lava Cake</a-button
        >
        <a-button
          size="large"
          @click="onChange({ ...pizza, cinnamonSticks: !pizza.cinnamonSticks })"
          >Cinnamon Sticks</a-button
        >
      </a-space>
    </div>
    <div><p></p></div>
    <div>
      <a-space size="large">
        <a-button
          size="large"
          @click="onChange({ ...pizza, digitalWatch: !pizza.digitalWatch })"
          >Digital Watch</a-button
        >
        <a-button
          size="large"
          @click="onChange({ ...pizza, beverage: !pizza.beverage })"
          >Beverage</a-button
        >
        <a-button
          size="large"
          @click="onChange({ ...pizza, pizzaHat: !pizza.pizzaHat })"
          >Pizza Hat</a-button
        >
        <a-button
          size="large"
          @click="onChange({ ...pizza, halibut: !pizza.halibut })"
          >Halibut</a-button
        >
      </a-space>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  name: 'Home',
  data() {
    const value1 = ref('a')
    const value2 = ref('c')
    const pizza = {
      //pizza size
      kids: false,
      small: true,
      medium: false,
      large: false,
      //crust type
      thick: false,
      thin: true,
      vegan: false,
      //sauce
      redSauce: true,
      whiteSauce: false,
      greenSauce: false,
      //toppings
      sausage: false,
      pepperoni: false,
      chicken: false,
      bacon: false,
      onions: false,
      greenPeppers: false,
      olives: false,
      bananaPeppers: false,
      spinach: false,
      sunDriedTomatoes: false,
      artichokes: false,
      pineapple: false,
      // extras
      breadSticks: false,
      cookiePizza: false,
      lavaCake: false,
      cinnamonSticks: false,
      digitalWatch: false,
      beverage: false,
      pizzaHat: false,
      halibut: false
    }
    if (ref('pizza-kids')) {
      pizza.kids = !pizza.kids
    }
    if (ref('pizza-small')) {
      pizza.small = !pizza.kids
    }
    if (ref('pizza-medium')) {
      pizza.medium = !pizza.kids
    }
    if (ref('pizza-large')) {
      pizza.large = !pizza.kids
    }
    return {
      value1,
      value2,
      pizza: pizza
    }
  },
  methods: {
    //method for selecting crust type
    crustClick(crust) {
      this.pizza = crust
      if (crust.thickCrust) {
        console.log('Thiccy')
      } else if (crust.thinCrust) {
        console.log('Thinn')
      } else {
        console.log('Vegan')
      }
    },
    //method for selecting sauce
    sauceClick(sauce) {
      this.pizza = sauce
      if (sauce.marinaraSauce) {
        console.log('Red Sauce')
      } else if (sauce.alfredoSauce) {
        console.log('White Sauce')
      } else {
        console.log('Green Sauce')
      }
    },
    //method for adjusting topping and extras selection
    onChange(test) {
      console.log('value1: ', this.value1, test)
      console.log('value2: ', this.value2)
      this.pizza = test
      console.log(this.pizza)
    }
  },
  components: {}
}
</script>
<style></style>
