<template>
  <span>
    <span class="mq-scaled mq-sqrt-prefix">√</span><!--
    --><span  contenteditable="false" class="mq-non-leaf mq-sqrt-stem"><!--
      --><span contenteditable="true" class="in-area">{{ root_value }}</span><!--
    --></span>
  </span>
</template>

<script>
 export default {
   data: function () {
     return {
       root_value: '',
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
