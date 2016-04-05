import Vue from 'vue'
import App from './App'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: {
    App
  },
  ready: function () {
    document.getElementById('area0').focus()
  }
})
