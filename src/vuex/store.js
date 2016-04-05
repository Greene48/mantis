import Vue from 'vue'
import Vuex from 'vuex'

// Make vue aware of vuex
Vue.use(Vuex)

// We create an object to hold the initial state when
// the app starts up
const state = {
  variables: [''],
  result: [''],
  math_areas: ['area0'],
  active_area: 0
}

// Create an object storing various mutations. We will write the mutation
const mutations = {
  add_area (state, index) {
    var new_index = state.active_area + 1
    var new_name = 'area' + state.math_areas.length
    state.math_areas.splice(new_index, 0, new_name)
    state.result.splice(new_index, 0, '')
    state.variables.splice(new_index, 0, '')
    state.active_area = new_index
  },
  activate_area (state, index) {
    state.active_area = index
  }
}

// We combine the intial state and the mutations to create a vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
  state,
  mutations
})
