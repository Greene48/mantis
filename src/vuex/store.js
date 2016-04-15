import Vue from 'vue'
import Vuex from 'vuex'

// Make vue aware of vuex
Vue.use(Vuex)

export const init_data = JSON.stringify([{value: '', result: '', variable: '', functions: 'Square'}])
// We create an object to hold the initial state when
// the app starts up
const state = {
  math_areas: JSON.parse(window.localStorage.getItem('math_areas') || init_data),
  active_area: JSON.parse(window.localStorage.getItem('active_area') || init_data),
  mnts_functions: {
    // sqrt: '<span class="mq-non-leaf"><span class="mq-scaled mq-sqrt-prefix">√</span><div v-bind:class="{ mq-empty: is_empty }" class="mq-non-leaf mq-sqrt-stem"></div></span>'
    type: 'Square'
  }
}

// Create an object storing various mutations. We will write the mutation
const mutations = {
  add_area (state, index) {
    var new_index = state.active_area + 1
    state.math_areas.splice(new_index, 0, {value: '', result: '', variable: '', functions: ''})
    state.active_area = new_index
    window.localStorage.setItem('active_area', JSON.stringify(new_index))
  },
  activate_area (state, index) {
    state.active_area = index
    window.localStorage.setItem('active_area', JSON.stringify(index))
  },
  up_area (state, index) {
    if (state.active_area === 0) {
      return
    }
    state.active_area = index - 1
    window.localStorage.setItem('active_area', JSON.stringify(index - 1))
  },
  down_area (state, index) {
    if (state.active_area + 1 === state.math_areas.length) {
      return
    }
    state.active_area = index + 1
    window.localStorage.setItem('active_area', JSON.stringify(index + 1))
  },
  delete_area (state, index) {
    if (document.getSelection().extentOffset !== 0 || state.active_area === 0) {
      document.execCommand('delete', false, null)
    } else if (!state.math_areas[index].value) {
      var new_index = state.active_area - 1
      state.active_area = new_index
      window.localStorage.setItem('active_area', JSON.stringify(new_index))
      state.math_areas.splice(index, 1)
    } else {
      document.execCommand('selectAll', false, null)
    }
  },
  edit_area (state, index, event) {
    state.math_areas[index].value = event.target.innerHTML
    window.localStorage.setItem('math_areas', JSON.stringify(state.math_areas))
  },
  ins_fctn (state, fctn) {
    document.execCommand('insertHTML', false, state.mnts_functions[fctn])
  }
}

export default new Vuex.Store({
  state,
  mutations
})
