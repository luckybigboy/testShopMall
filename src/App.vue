<template>
  <div id="app">
    <router-view></router-view>
    <mainTabBar></mainTabBar>
  </div>
</template>

<script>
const mainTabBar = () => import('components/content/mainTabBar/mainTabBar')
export default {
  name: 'app',
  components: {
    mainTabBar
  }
}
</script>

<style>
@import url("assets/css/base.css");
</style>
