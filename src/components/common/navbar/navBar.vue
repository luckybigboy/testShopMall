<template>
  <div class="navBar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
</script>
<style scoped>
.navBar {
  display: flex;
  line-height: 44px;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 666;
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>