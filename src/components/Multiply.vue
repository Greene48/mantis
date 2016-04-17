<template>
  <span>
    <span class="mq-binary-operator">·</span>
  </span>
</template>

<script>
 export default {
   data: function () {
     return {
       focused: false
     }
   },
   methods: {
     toggle_focus: function () {
       this.focused = !this.focused
     }
   }
 }
</script>

<style>
.mq-binary-operator {
  padding: 0 0.2em;
  display: inline-block;
}
</style>
