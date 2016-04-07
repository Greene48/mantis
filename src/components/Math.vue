<template>
    <div class="pane">
        <div v-for="math in math_areas" v-math-focus="$index == active_area" id="area{{$index}}" class="mq-editable-field mq-math-mode" contenteditable="true" v-on:keydown="edit($index)" v-on:keydown.enter.stop.prevent="enter($index)" v-on:keydown.up.stop.prevent="up($index)" v-on:keydown.down.stop.prevent="down($index)" v-on:keydown.8="delete_area($index)">{{math.value}}</div>
    </div>
</template>

<script>
import Vue from 'vue'
import { getAreas } from '../vuex/getters'
import { get_active_area } from '../vuex/getters'
import { add_area } from '../vuex/actions'
import { activate_area } from '../vuex/actions'
import { up_area } from '../vuex/actions'
import { down_area } from '../vuex/actions'
import { delete_area } from '../vuex/actions'
import { edit_area } from '../vuex/actions'
export default {
  vuex: {
    getters: {
      math_areas: getAreas,
      active_area: get_active_area
    },
    actions: {
      enter: add_area,
      edit: edit_area,
      focus: activate_area,
      up: up_area,
      down: down_area,
      delete_area
    }
  },
  directives: {
    'math-focus': function (value) {
      if (!value) {
        return
      }
      var el = this.el
      Vue.nextTick(function () {
        el.focus()
      })
    }
  }
}

</script>
