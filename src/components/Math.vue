<template>
    <div class="pane">
        <div v-for="math in math_areas" v-math-focus="$index == active_area" id="{{math}}" class="mq-editable-field mq-math-mode" contenteditable="true" v-on:click="focus($index)" v-on:keydown.r.stop.prevent="space()" v-on:keydown.enter.stop.prevent="enter($index)"></div>
    </div>
</template>

<script>
import { getAreas } from '../vuex/getters'
import { getResults } from '../vuex/getters'
import { get_active_area } from '../vuex/getters'
import { add_area } from '../vuex/actions'
import { activate_area } from '../vuex/actions'
export default {
  vuex: {
    getters: {
      math_areas: getAreas,
      result: getResults,
      active_area: get_active_area
    },
    actions: {
      enter: add_area,
      focus: activate_area
    }
  },
  directives: {
    'math-focus': function (value) {
      if (!value) {
        return
      }
      // var el = this.el
      // vm.nextTick(function () {
        // el.focus()
      // })
    }
  }
}

</script>
