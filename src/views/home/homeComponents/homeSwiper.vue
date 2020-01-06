<template>
  <div id="homeSwiper">
    <swiper>
      <swiperItem v-for="item in swiperImgArr"
                  :key="item.id">
        <a :href="item.link">
          <img :src="item.url"
               alt="">
        </a>
      </swiperItem>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index'
export default {
  name: 'homeSwiper',
  data () {
    return {
    }
  },
  props: {
    swiperImgArr: {
      type: Array,
      default: () => []
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>
<style scoped>
</style>