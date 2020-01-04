<template>
  <div id="app">
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
