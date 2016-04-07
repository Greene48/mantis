<template>
  <div id="main_window" class="window">
 
  <header class="toolbar toolbar-header">
    <h1 class="title">mantis</h1>
    <div class="toolbar-actions">
    <div class="btn-group">
      <button class="btn btn-default" v-on:click="">
        <span class="fa fa-undo"></span>
      </button>
      <button class="btn btn-default" v-on:click="">
        <span class="fa fa-repeat"></span>
      </button>
    </div>
    <div class="btn-group">
      <button class="btn btn-default" v-on:click="ins_fctn('sqrt')">
        <span><strong>&radic;<span style="text-decoration:overline;">x</span></strong></span>
      </button>
      <button class="btn btn-default" v-on:click="ins_fctn('abs')">
        <span><strong>|x|</strong></span>
      </button>
      <button class="btn btn-default" v-on:click="ins_fctn('pi')">
        <span><strong>&pi;</strong></span>
      </button>
      <button class="btn btn-default" v-on:click="ins_fctn('sup')">
        <span class="fa fa-superscript"></span>
      </button>
    </div>
    <div class="btn-group">
      <button class="btn btn-default" v-on:click="ins_fctn('lt')">
        <span><strong>&lt;</strong></span>
      </button>
      <button class="btn btn-default" v-on:click="ins_fctn('gt')">
        <span><strong>&gt;</strong></span>
      </button>
      <button class="btn btn-default" v-on:click="ins_fctn('le')">
        <span><strong>&le;</strong></span>
      </button>
      <button class="btn btn-default" v-on:click="ins_fctn('ge')">
        <span><strong>&ge;</strong></span>
      </button>
    </div>
    <div class="btn-group">
      <button class="btn btn-default">
        <span class="fa fa-font"></span>
      </button>
    </div>
    <input type="search" id="search_input" class="form-control" placeholder="Search" v-model="query">
    </div>
  </header>
  
  <div class="window-content">
    <div class="pane-group">
      <div class="pane-sm sidebar">    
      </div>
      
      <math v-on:click="focus(active_area)"></math>

    </div>
  </div>
  <footer class="toolbar toolbar-footer">
    LaTeX: <span id="latex"></span> MathJS: <span id="mathjs"></span>
		
    <div class="footer-signature"><i class="fa fa-code"></i> by Mantis Software</div>
  </footer>
  
</div>
</template>

<script>
import Math from './components/Math'
import store from './vuex/store'
import { activate_area } from './vuex/actions'

export default {
  components: {
    Math
  },
  store,
  vuex: {
    getters: {
      active_area: function (state) {
        return state.active_area
      }
    },
    actions: {
      // this isn't working. Maybe because its tied to a directive that uses nexttick
      focus: activate_area
    }
  }
}
</script>

<style>
@import './main.css'
</style>
