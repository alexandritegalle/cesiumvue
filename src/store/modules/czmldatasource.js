const state = {
  message: 'Hello from Vuex',
  count: 0
}
const mutations = { // synchronous
  increment (state, payload) {
    state.count += payload
  }
}
const actions = { // asynchronous
  increment (state, payload) {
    state.commit('increment', payload)
  }
}
const getters = {
  message (state) {
    return state.message.toUpperCase()
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
