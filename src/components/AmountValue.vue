<template lang="html">
  Increment/Decrement Value<br>
  <input type="number" :value="amount" v-model="fieldVal" @input="getValue()">
</template>

<script>
import { getAmount } from '../vuex/getters'
import { changeAmount } from '../vuex/actions'
import store from '../vuex/store'

export default {
  vuex: {
    store,
    getters: {
      amount: getAmount
    },
    actions: {
      changeAmount: changeAmount
    }
  },
  data () {
    return {
      fieldVal: null
    }
  },
  methods: {
    getValue () {
      this.changeAmount(Number(this.fieldVal))
    }
  }
}
</script>

<style lang="css">
</style>
