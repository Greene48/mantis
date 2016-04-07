export const add_area = function ({ dispatch, state }, index) {
  dispatch('add_area', index)
}

export const activate_area = function ({ dispatch, state }, index) {
  dispatch('activate_area', index)
}

export const up_area = function ({ dispatch, state }, index) {
  dispatch('up_area', index)
}

export const down_area = function ({ dispatch, state }, index) {
  dispatch('down_area', index)
}

export const delete_area = function ({ dispatch, state }, index) {
  dispatch('delete_area', index)
}

export const edit_area = function ({ dispatch, state }, index, e) {
  dispatch('edit_area', index, e)
}
