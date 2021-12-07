<template>
  <a-layout>
    <a-layout-sider class="site-layout-sider" width="25vw">
      <PaymentSider
        :pizza="pizza"
        v-on:childToParent="onChildClick"
      ></PaymentSider>
    </a-layout-sider>
    <a-layout-content>
      <div class="site-layout-content">
        <h2>PIZZA SIZE</h2>
        <!--    Pizza size button group-->
        <div :style="{ marginTop: '16px' }">
          <a-radio-group
            v-model:value="pizzaSize"
            button-style="solid"
            v-on:click="onSizeChange"
          >
            <a-space>
              <a-radio-button value="kids" disabled>Kids</a-radio-button>
              <a-radio-button value="small">Small</a-radio-button>
              <a-radio-button value="medium">Medium</a-radio-button>
              <a-radio-button value="large">Large</a-radio-button></a-space
            >
          </a-radio-group>
        </div>
        <h2>CRUST TYPE</h2>
        <!--Crust type button group-->
        <div :style="{ marginTop: '16px' }">
          <a-radio-group
            class="crust-group"
            v-model:value="pizzaCrust"
            button-style="solid"
            style="height: 25vh"
            v-on:click="onCrustChange"
          >
            <a-space>
              <a-radio-button value="thick"
                ><a-image
                  :width="200"
                  :preview="false"
                  :src="require('@/assets/thickcrust.png')"
              /></a-radio-button>
              <a-radio-button value="thin"
                ><a-image
                  :width="200"
                  :preview="false"
                  :src="require('@/assets/thincrust.png')"
              /></a-radio-button>
              <a-radio-button value="vegan"
                ><a-image
                  :width="200"
                  :preview="false"
                  :src="require('@/assets/vegancrust.png')"
              /></a-radio-button>
            </a-space>
          </a-radio-group>
        </div>
        <h2>SAUCE</h2>
        <!--    Sauce type button group-->
        <div :style="{ marginTop: '16px' }">
          <a-radio-group
            class="sauce-group"
            v-model:value="pizzaSauce"
            button-style="solid"
            style="height: 25vh"
            v-on:click="onSauceChange"
          >
            <a-space>
              <a-radio-button value="red"
                ><a-image
                  :width="200"
                  :preview="false"
                  :src="require('@/assets/redsauce.png')"
              /></a-radio-button>
              <a-radio-button value="white"
                ><a-image
                  :width="200"
                  :preview="false"
                  :src="require('@/assets/whitesauce.png')"
              /></a-radio-button>
              <a-radio-button value="green"
                ><a-image
                  :width="200"
                  :preview="false"
                  :src="require('@/assets/greensauce.png')"
              /></a-radio-button>
            </a-space>
          </a-radio-group>
        </div>

        <h2>CHEESES</h2>
        <!--        Cheese button group-->
        <a-space :size="50">
          <a-button
            size="large"
            @click="onChange({ ...pizza, mozzarella: !pizza.mozzarella })"
            >Mozzarella</a-button
          >
          <a-button
            size="large"
            @click="onChange({ ...pizza, cheddar: !pizza.cheddar })"
            >Cheddar</a-button
          >
          <a-button
            size="large"
            @click="onChange({ ...pizza, provolone: !pizza.provolone })"
            >Provolone</a-button
          >
          <a-button
            size="large"
            @click="onChange({ ...pizza, feta: !pizza.feta })"
            >Feta (Greek)</a-button
          >
        </a-space>
        <p></p>

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
              @click="
                onChange({ ...pizza, bananaPeppers: !pizza.bananaPeppers })
              "
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
                onChange({
                  ...pizza,
                  sunDriedTomatoes: !pizza.sunDriedTomatoes
                })
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
            <a-image
              :width="200"
              :preview="false"
              :src="require('@/assets/breadsticks.png')"
              @click="onChange({ ...pizza, breadSticks: !pizza.breadSticks })"
            />
            <a-image
              :width="200"
              :preview="false"
              :src="require('@/assets/cookiepizza.png')"
              @click="onChange({ ...pizza, cookiePizza: !pizza.cookiePizza })"
            />
            <a-image
              :width="200"
              :preview="false"
              :src="require('@/assets/moltenlavacake.png')"
              @click="onChange({ ...pizza, lavaCake: !pizza.lavaCake })"
            />
            <a-image
              :width="200"
              :preview="false"
              :src="require('@/assets/cinnamonsticks.png')"
              @click="
                onChange({ ...pizza, cinnamonSticks: !pizza.cinnamonSticks })
              "
            />
          </a-space>
        </div>
        <div><p></p></div>
        <div>
          <a-space size="large">
            <a-image
              :width="200"
              :preview="false"
              :src="require('@/assets/digitalwatch.png')"
              @click="onChange({ ...pizza, digitalWatch: !pizza.digitalWatch })"
            />
            <a-image
              :width="200"
              :preview="false"
              :src="require('@/assets/beverage.png')"
              @click="onChange({ ...pizza, beverage: !pizza.beverage })"
            />
            <a-image
              :width="200"
              :preview="false"
              :src="require('@/assets/pizzahat.png')"
              @click="onChange({ ...pizza, pizzaHat: !pizza.pizzaHat })"
            />
            <a-image
              :width="200"
              :preview="false"
              :src="require('@/assets/halibut.png')"
              @click="onChange({ ...pizza, halibut: !pizza.halibut })"
            />
          </a-space>
        </div>
      </div>
    </a-layout-content>
  </a-layout>
</template>
<script>
import { ref } from 'vue'
import PaymentSider from '@/components/PaymentSider'

export default {
  name: 'Home',
  data() {
    const pizzaSize = ref('small')
    const pizzaCrust = ref('thick')
    const pizzaSauce = ref('red')
    // const value2 = ref<string>('a');
    // const value3 = ref<string>('a');
    const pizza = {
      //pizza size
      kids: false,
      small: true,
      medium: false,
      large: false,
      //crust type
      thick: true,
      thin: false,
      vegan: false,
      //sauce
      redSauce: true,
      whiteSauce: false,
      greenSauce: false,
      //cheese
      mozzarella: true,
      cheddar: false,
      provolone: false,
      feta: false,
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
    return {
      pizzaSize,
      pizzaCrust,
      pizzaSauce,
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
    onChildClick(pizza) {
      this.pizza = pizza
      console.log(this.pizza)
    },
    //method for adjusting topping and extras selection
    onCrustChange(event) {
      this.pizza.thick = false
      this.pizza.thin = false
      this.pizza.vegan = false
      switch (event.target.value) {
        case 'thick':
          this.pizza.thick = true
          break
        case 'thin':
          this.pizza.thin = true
          break
        case 'vegan':
          this.pizza.vegan = true
          break
        default:
          this.pizza.thick = true
          break
      }
    },
    onSauceChange(event) {
      this.pizza.redSauce = false
      this.pizza.whiteSauce = false
      this.pizza.greenSauce = false
      switch (event.target.value) {
        case 'red':
          this.pizza.redSauce = true
          break
        case 'white':
          this.pizza.whiteSauce = true
          break
        case 'green':
          this.pizza.greenSauce = true
          break
        default:
          this.pizza.redSauce = true
          break
      }
    },
    onSizeChange(event) {
      this.pizza.kids = false
      this.pizza.small = false
      this.pizza.medium = false
      this.pizza.large = false
      switch (event.target.value) {
        case 'kids':
          this.pizza.kids = true
          break
        case 'small':
          this.pizza.small = true
          break
        case 'medium':
          this.pizza.medium = true
          break
        case 'large':
          this.pizza.large = true
          break
        default:
          this.pizza.small = true
          break
      }
    },
    onChange(pizza) {
      this.pizza = pizza
      console.log(this.pizza)
    }
  },
  components: {
    PaymentSider
  }
}
</script>
<style>
.crust-group > div > div > label {
  height: 200px;
}
.sauce-group > div > div > label {
  height: 200px;
}
/*.ant-radio-button-wrapper {*/
/*  height: 22vh;*/
/*}*/
</style>
