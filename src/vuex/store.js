import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  amount: 1
}

const mutations = {
  INCREMENT (state, amount) {
    state.count = state.count + amount
  },
  DECREMENT (state, amount) {
    if (state.count > 0) state.count = state.count - amount
  },
  CHANGEAMOUNT (state, value) {
    console.log('value', value)
    if (value > -1) {
      state.amount = value
    }
  }
}

export default new Vuex.Store({
  state,
  mutations
})
