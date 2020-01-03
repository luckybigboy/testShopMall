<template>
  <div id="tab_bar_item" @click="toPage">
    <span class="tab_bar_logo">
      <slot name="bar_logo" v-if="!isActived"></slot>
      <slot name="bar_logo_active" v-else></slot>
      <span class="circle" v-if="tipScore > 0">{{tipScore}}</span>
    </span>
    <div class="bar_title" :style="isActivedTitle">
      <slot name="bar_title"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'tabBarItem',
    props: {
      path: String,
      isActivedColor: {
        type: String,
        default: '#1296db'
      },
      tipScore: {
        type: Number,
        default: 0
      }
    },
    methods: {
      toPage() {
        if (this.$route.path !== this.path)
          this.$router.replace(this.path)
      }
    },
    computed: {
      isActived() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      isActivedTitle() {
        return this.isActived ? {
          color: this.isActivedColor
        } : {}
      }
    }
  }

</script>

<style>
  #tab_bar_item {
    flex: 1;
    text-align: center;
    cursor: pointer;
  }

  .tab_bar_logo {
    position: relative;
  }

  .tab_bar_logo img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 3px;
  }

  .tab_bar_logo .circle {
    background: red;
    color: #fff;
    padding: 0 4px;
    position: absolute;
    font-size: 10px;
    border-radius: 50%;
    right: -10px;
  }

  .bar_title {
    font-size: 14px;
    margin-top: 2px;
  }

</style>
