<template>
  <div id="mainTabBar">
    <tabBar>
      <TabBarItem path="/home" :tipScore="homeNum">
        <img src="~assets/img/tabbar/home" alt="" slot="bar_logo">
        <img src="~assets/img/tabbar/home_active" alt="" slot="bar_logo_active">
        <div slot="bar_title">首页</div>
      </TabBarItem>
      <TabBarItem path="/category">
        <img src="~assets/img/tabbar/category" alt="" slot="bar_logo">
        <img src="~assets/img/tabbar/category_active" alt="" slot="bar_logo_active">
        <div slot="bar_title">分类</div>
      </TabBarItem>
      <TabBarItem path="/cart" :tipScore="cartNum">
        <img src="~assets/img/tabbar/cart" alt="" slot="bar_logo">
        <img src="~assets/img/tabbar/cart_active" alt="" slot="bar_logo_active">
        <div slot="bar_title">购物车</div>
      </TabBarItem>
      <TabBarItem path="/me">
        <img src="~assets/img/tabbar/profile" alt="" slot="bar_logo">
        <img src="~assets/img/tabbar/profile_active" alt="" slot="bar_logo_active">
        <div slot="bar_title">我的</div>
      </TabBarItem>
    </tabBar>
  </div>
</template>
<script>
  // import {
  //   mapState
  // } from 'vuex'
  const tabBar = () => import('components/common/tabBar/tabBar')
  const TabBarItem = () => import('components/common/tabBar/tabBarItem')
  export default {
    name: 'mainTabBar',
    data() {
      return {
        homeNum: 3,
        cartNum: 2
      }
    },
    computed: {
      // ...mapState({
      //   homeNum: state => state.CartTip.homeNum,
      //   cartNum: state => state.CartTip.cartNum,
      // })
    },
    components: {
      tabBar,
      TabBarItem
    }
  }

</script>
<style>
      
</style>
