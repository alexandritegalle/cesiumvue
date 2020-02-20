import Vue from 'vue'
import Vuex from 'vuex'
import czmldatasource from './modules/czmldatasource'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    czmldatasource
  }
})
