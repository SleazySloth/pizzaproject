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
        <h2 style="font-weight: bolder; font-size: x-large">PIZZA SIZE</h2>
        <!--    Pizza size button group-->
        <div :style="{ marginTop: '16px' }">
          <a-radio-group
            v-model:value="pizzaSize"
            button-style="solid"
            v-on:click="onSizeChange"
            size="large"
          >
            <a-space>
              <a-radio-button value="kids" disabled>Kids</a-radio-button>
              <a-radio-button value="small">Small</a-radio-button>
              <a-radio-button value="medium">Medium</a-radio-button>
              <a-radio-button value="large">Large</a-radio-button></a-space
            >
          </a-radio-group>
        </div>
        <p></p>

        <h2 style="font-weight: bolder; font-size: x-large">CRUST TYPE</h2>
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
                  :width="150"
                  :preview="false"
                  :src="require('@/assets/thickcrust.png')"
              /></a-radio-button>
              <a-radio-button value="thin"
                ><a-image
                  :width="150"
                  :preview="false"
                  :src="require('@/assets/thincrust.png')"
              /></a-radio-button>
              <a-radio-button value="vegan"
                ><a-image
                  :width="150"
                  :preview="false"
                  :src="require('@/assets/vegancrust.png')"
              /></a-radio-button>
            </a-space>
          </a-radio-group>
        </div>
        <h2 style="font-weight: bolder; font-size: x-large">SAUCE</h2>
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
                  :width="150"
                  :preview="false"
                  :src="require('@/assets/redsauce.png')"
              /></a-radio-button>
              <a-radio-button value="white"
                ><a-image
                  :width="150"
                  :preview="false"
                  :src="require('@/assets/whitesauce.png')"
              /></a-radio-button>
              <a-radio-button value="green"
                ><a-image
                  :width="150"
                  :preview="false"
                  :src="require('@/assets/greensauce.png')"
              /></a-radio-button>
            </a-space>
          </a-radio-group>
        </div>

        <h2 style="font-weight: bolder; font-size: x-large">CHEESES</h2>
        <!--        Cheese button group-->
        <div :style="{ marginTop: '16px' }">
          <a-radio-group
            v-model:value="pizzaCheese"
            button-style="solid"
            v-on:click="onCheeseChange"
            size="large"
          >
            <a-space>
              <a-radio-button value="mozzarella">Mozzarella</a-radio-button>
              <a-radio-button value="cheddar">Cheddar</a-radio-button>
              <a-radio-button value="provolone">Provolone</a-radio-button>
              <a-radio-button value="feta">Feta (Greek)</a-radio-button>
            </a-space>
          </a-radio-group>
        </div>
        <p></p>

        <h2 style="font-weight: bolder; font-size: x-large">TOPPINGS</h2>
        <!--    Toppings button group-->
        <a-checkbox-group v-model:value="toppings" size="large">
          <a-row>
            <a-checkbox
              class="toppings-checkbox"
              value="sausage"
              @click="onToppingsChange({ ...pizza, sausage: !pizza.sausage })"
            >
              Italian Sausage
            </a-checkbox>
            <a-checkbox
              class="toppings-checkbox"
              value="pepperoni"
              @click="
                onToppingsChange({ ...pizza, pepperoni: !pizza.pepperoni })
              "
              >Pepperoni
            </a-checkbox>
            <a-checkbox
              class="toppings-checkbox"
              value="chicken"
              @click="onToppingsChange({ ...pizza, chicken: !pizza.chicken })"
              >Chicken
            </a-checkbox>
            <a-checkbox
              class="toppings-checkbox"
              value="bacon"
              @click="onToppingsChange({ ...pizza, bacon: !pizza.bacon })"
              >Bacon
            </a-checkbox>
          </a-row>
          <a-row>
            <a-checkbox
              class="toppings-checkbox"
              value="onions"
              @click="onToppingsChange({ ...pizza, onions: !pizza.onions })"
              >Onions
            </a-checkbox>
            <a-checkbox
              class="toppings-checkbox"
              value="greenPeppers"
              @click="
                onToppingsChange({
                  ...pizza,
                  greenPeppers: !pizza.greenPeppers
                })
              "
              >Green Peppers
            </a-checkbox>
            <a-checkbox
              class="toppings-checkbox"
              value="olives"
              @click="onToppingsChange({ ...pizza, olives: !pizza.olives })"
              >Olives
            </a-checkbox>
            <a-checkbox
              class="toppings-checkbox"
              value="bananaPeppers"
              @click="
                onToppingsChange({
                  ...pizza,
                  bananaPeppers: !pizza.bananaPeppers
                })
              "
              >Banana Peppers
            </a-checkbox>
          </a-row>
          <a-row>
            <a-checkbox
              class="toppings-checkbox"
              value="spinach"
              @click="onToppingsChange({ ...pizza, spinach: !pizza.spinach })"
              >Spinach
            </a-checkbox>
            <a-checkbox
              class="toppings-checkbox"
              value="sunDriedTomatoes"
              @click="
                onToppingsChange({
                  ...pizza,
                  sunDriedTomatoes: !pizza.sunDriedTomatoes
                })
              "
              >Sun-Dried Tomatoes
            </a-checkbox>
            <a-checkbox
              class="toppings-checkbox"
              value="artichokes"
              @click="
                onToppingsChange({ ...pizza, artichokes: !pizza.artichokes })
              "
              >Artichokes
            </a-checkbox>
            <a-checkbox
              class="toppings-checkbox"
              value="pineapple"
              @click="
                onToppingsChange({ ...pizza, pineapple: !pizza.pineapple })
              "
              >Pineapple
            </a-checkbox>
          </a-row>
        </a-checkbox-group>
        <p></p>

        <h2 style="font-weight: bolder; font-size: x-large">EXTRAS</h2>
        <!--    Extras button group-->
        <a-checkbox-group v-model:value="extras">
          <a-row>
            <a-col :span="8">
              <a-checkbox
                value="breadSticks"
                @click="
                  onToppingsChange({
                    ...pizza,
                    breadSticks: !pizza.breadSticks
                  })
                "
                ><a-image
                  :width="150"
                  :preview="false"
                  :src="require('@/assets/breadsticks.png')"
              /></a-checkbox>
            </a-col>
            <a-col :span="8">
              <a-checkbox
                value="cookiePizza"
                @click="
                  onToppingsChange({
                    ...pizza,
                    cookiePizza: !pizza.cookiePizza
                  })
                "
                ><a-image
                  :width="150"
                  :preview="false"
                  :src="require('@/assets/cookiepizza.png')"
              /></a-checkbox>
            </a-col>
            <a-col :span="8">
              <a-checkbox
                value="moltenLavaCake"
                @click="
                  onToppingsChange({ ...pizza, lavaCake: !pizza.lavaCake })
                "
                ><a-image
                  :width="150"
                  :preview="false"
                  :src="require('@/assets/moltenlavacake.png')"
              /></a-checkbox>
            </a-col>
            <a-col :span="8">
              <a-checkbox
                value="cinnamonSticks"
                @click="
                  onToppingsChange({
                    ...pizza,
                    cinnamonSticks: !pizza.cinnamonSticks
                  })
                "
                ><a-image
                  :width="150"
                  :preview="false"
                  :src="require('@/assets/cinnamonsticks.png')"
              /></a-checkbox>
            </a-col>
            <a-col :span="8">
              <a-checkbox
                value="digitalWatch"
                @click="
                  onToppingsChange({
                    ...pizza,
                    digitalWatch: !pizza.digitalWatch
                  })
                "
                ><a-image
                  :width="150"
                  :preview="false"
                  :src="require('@/assets/digitalwatch.png')"
              /></a-checkbox> </a-col
            ><a-col :span="8">
              <a-checkbox
                value="beverage"
                @click="
                  onToppingsChange({ ...pizza, beverage: !pizza.beverage })
                "
                ><a-image
                  :width="150"
                  :preview="false"
                  :src="require('@/assets/beverage.png')"
              /></a-checkbox> </a-col
            ><a-col :span="8">
              <a-checkbox
                value="pizzaHat"
                @click="
                  onToppingsChange({ ...pizza, pizzaHat: !pizza.pizzaHat })
                "
                ><a-image
                  :width="150"
                  :preview="false"
                  :src="require('@/assets/pizzahat.png')"
              /></a-checkbox> </a-col
            ><a-col :span="8">
              <a-checkbox value="halibut"
                ><a-image
                  :width="150"
                  :preview="false"
                  :src="require('@/assets/halibut.png')"
                  @click="
                    onToppingsChange({ ...pizza, halibut: !pizza.halibut })
                  "
              /></a-checkbox>
            </a-col>
          </a-row>
        </a-checkbox-group>
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
    const pizzaCheese = ref('mozzarella')
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
      pizzaCheese,
      toppings: ref([]),
      extras: ref([]),
      pizza: pizza
    }
  },
  methods: {
    onChildClick(pizza) {
      this.pizza = pizza
      console.log(this.pizza)
    },
    //method for selecting size type
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
    //method for selecting crust type
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
    //method for selecting sauce
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
    //method for selecting cheese type
    onCheeseChange(event) {
      this.pizza.mozzarella = false
      this.pizza.cheddar = false
      this.pizza.provolone = false
      this.pizza.feta = false
      switch (event.target.value) {
        case 'mozzarella':
          this.pizza.mozzarella = true
          break
        case 'cheddar':
          this.pizza.cheddar = true
          break
        case 'provolone':
          this.pizza.provolone = true
          break
        case 'feta':
          this.pizza.feta = true
          break
        default:
          this.pizza.mozzarella = true
          break
      }
    },
    //method for adjusting topping and extras selection
    onToppingsChange(pizza) {
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
  height: 150px;
}
.sauce-group > div > div > label {
  height: 150px;
}
.toppings-checkbox {
  font-size: 20px;
}
</style>
