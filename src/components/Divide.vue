<template>
  <span>
    <span contenteditable="false" class="mq-fraction mq-non-leaf"><span contenteditable="true" class="mq-numerator in-area"></span><span contenteditable="true" class="mq-denominator in-area"></span></span>
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
.in-area {
    display: inline-block;
}
.in-area:empty::before {
    content: 'cc';
    display: inline-block;
    background: #ccc;
    color: #ccc;
}
.in-area:empty:focus::before {
    content: 'cc';
}
</style>
