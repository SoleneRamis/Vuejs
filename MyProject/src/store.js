import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './vuex/getters'
import * as actions from './vuex/actions'

Vue.use(Vuex)

const state = {
  counterState: Number()
}

const mutations = {
  increment (state) {
    state.counterState++
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
