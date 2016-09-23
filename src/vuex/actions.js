export const incrementCounter = function ({ dispatch, state }, amount = 1) {
  dispatch('INCREMENT', amount)
}

export const decrementCounter = function ({ dispatch, state }, amount = 1) {
  dispatch('DECREMENT', amount)
}

export const changeAmount = function ({ dispatch, state }, value) {
  dispatch('CHANGEAMOUNT', value)
}
