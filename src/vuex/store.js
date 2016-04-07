import Vue from 'vue'
import Vuex from 'vuex'

// Make vue aware of vuex
Vue.use(Vuex)

// We create an object to hold the initial state when
// the app starts up
const state = {
  math_areas: [
    {value: '', result: '', variable: ''}
  ],
  active_area: 0
}

// Create an object storing various mutations. We will write the mutation
const mutations = {
  add_area (state, index) {
    var new_index = state.active_area + 1
    state.math_areas.splice(new_index, 0, {value: '', result: '', variable: ''})
    state.active_area = new_index
  },
  activate_area (state, index) {
    state.active_area = index
  },
  up_area (state, index) {
    if (state.active_area === 0) {
      return
    }
    state.active_area = index - 1
  },
  down_area (state, index) {
    if (state.active_area + 1 === state.math_areas.length) {
      return
    }
    state.active_area = index + 1
  },
  delete_area (state, index) {
    if (document.getSelection().extentOffset !== 0 || state.active_area === 0) {
      return
    } else if (!state.math_areas[index].value) {
      var new_index = state.active_area - 1
      state.active_area = new_index
      state.math_areas.splice(index, 1)
    } else {
      // select all text
    }
  },
  edit_area (state, index, value) {
    // this is undefined
    console.log(value)
  }
}

// We combine the intial state and the mutations to create a vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
  state,
  mutations
})
