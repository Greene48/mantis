<template>
    <div class="pane">
        <p v-for="quill in quills" v-on:click="focus($index)"><span class="index-column"></span><span id="math-field{{ $index }}"></span><span v-cloak id="output{{ $index }}">{{result[$index] | capitalize }}</span></p>
    </div>
</template>

<script>
import { getQuills } from '../vuex/getters'
import { getResults } from '../vuex/getters'
export default {
  vuex: {
    getters: {
      quills: getQuills,
      result: getResults
    }
  }
}

getQuills.forEach(function (value, index) {
  mathField[index] = ''
  mathFieldSpan[index] = document.getElementById('math-field' + index)

  mathField[index] = MQ.MathField(mathFieldSpan[index], {
    spaceBehavesLikeTab: true, // configurable
    supSubsRequireOperand: true,
    handlers: {
      edit: function () { // useful event handlers
        latexSpan.textContent = mathField[index].latex() // simple API
        latex_var = mathField[index].latex()
        parse_latex(latex_var, index)
      },
      enter: function () {
        // console.log('UP')
      },
      upOutOf: function () {
        if (index !== 0) {
          mathField[index - 1].focus()
          // store.set_active_quill(index - 1)
        }
      },
      downOutOf: function () {
        if (index !== store.state.quills.length - 1) {
          mathField[index + 1].focus()
          // store.set_active_quill(index + 1)
        }
      }
    }
  })
})
</script>
