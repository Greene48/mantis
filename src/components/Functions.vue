<template>
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
</template>

<script>
import { ins_fctn } from '../vuex/actions'
export default {
  vuex: {
    actions: {
      ins_fctn
    }
  }
}

</script>
