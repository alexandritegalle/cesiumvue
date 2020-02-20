import { CHANGE_CZML_DATA_SOURCE } from '@/store/mutation-types'
import melbourne from '@/data/bird-melbourne'
import sydney from '@/data/bird-sydney'
import nodata from '@/data/no-data'

const state = {
  message: 'Hello',
  count: 0,
  czml: nodata,
  datasources: [...nodata, ...melbourne, ...sydney]
}
const mutations = { // synchronous
  increment (state, payload) {
    state.count += payload
  },
  [CHANGE_CZML_DATA_SOURCE] (state, payload) {
    state.czml = payload
  }
}
const actions = { // asynchronous
  increment (state, payload) {
    state.commit('increment', payload)
  },
  changeCzmlDataSource (state, payload) {
    state.commit(CHANGE_CZML_DATA_SOURCE, payload)
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
