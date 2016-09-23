<template lang="html">
  <div>
    <button @click="increment(amount)">Increment +{{amount}}</button>
    <button @click="decrement(amount)">Decrement -{{amount}}</button>
  </div>
  <p>
    <amount-value></amount-value>
  </p>
</template>

<script>
import { store } from '../vuex/store'
import { getAmount } from '../vuex/getters.js'
import { incrementCounter, decrementCounter } from '../vuex/actions'
import AmountValue from './AmountValue.vue'
export default {
  components: {
    AmountValue
  },
  vuex: {
    store,
    actions: {
      increment: incrementCounter,
      decrement: decrementCounter
    },
    getters: {
      amount: getAmount
    }
  }
}
</script>

<style lang="css">
</style>
