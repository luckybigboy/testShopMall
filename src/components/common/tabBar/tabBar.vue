<template>
  <div id="tab_bar">
    <slot></slot>
  </div>
</template>
<script>
  export default {

  }

</script>

<style>
   #tab_bar {
       position: fixed;
       bottom: 0;
       left: 0;
       right: 0;
       display: flex;
       background: #f6f6f6;
       height: 49px;
       box-shadow: 0px -2px 3px rgba(224, 224, 218, .5);
   } 
</style>
