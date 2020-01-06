<template>
  <div id="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'scroll',
  data () {
    return {
      scroll: null
    }
  },
  mounted () {
    this.scroll = new BScroll('#scroll', {

    })
  }
}
</script>
<style lang="scss" scoped>
</style>