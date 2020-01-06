<template>
  <div id="navControl">
    <div v-for="(item, index) in navControlTitle"
         :key="item.id"
         @click="chooseNav(index)">
      <span :class="{'actived': currentIndex === index}">{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'navControl',
  data () {
    return {
      currentIndex: 0
    }
  },
  props: {
    navControlTitle: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    chooseNav (index) {
      this.currentIndex = index
    }
  }
}
</script>
<style scoped>
#navControl {
  display: flex;
  position: sticky;
  top: 43px;
  background: #fff;
  z-index: 667;
}
#navControl div {
  flex: 1;
  text-align: center;
  height: 40px;
  line-height: 40px;
}
#navControl div span {
  padding: 5px 7px;
}
.actived {
  animation: all 500ms ease-in-out;
  border-bottom: 3px solid var(--navbar_bgColor);
  color: var(--navbar_bgColor);
}
</style>