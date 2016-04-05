import Vue from 'vue'
import Vuex from 'vuex'

// Make vue aware of vuex
Vue.use(Vuex)

// We create an object to hold the initial state when
// the app starts up
const state = {
  variables: [''],
  result: [''],
  quills: ['quill0'],
  active_quill: 0
}

// Create an object storing various mutations. We will write the mutation
const mutations = {
  add_quill (state) {
    var new_index = state.active_quill + 1
    var new_name = 'quill' + state.quills.length
    state.quills.splice(new_index, 0, new_name)
    state.result.splice(new_index, 0, '')
    state.variables.splice(new_index, 0, '')
  }
}

// We combine the intial state and the mutations to create a vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
  state,
  mutations
})
