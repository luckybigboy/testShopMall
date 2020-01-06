<template>
  <div id="recommendIcon">
    <ul>
      <li v-for="item in recommendIconArr"
          :key="item.id">
        <a :href="item.link">
          <img :src="item.url"
               alt="">
          <div>{{item.title}}</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'recommendIcon',
  data () {
    return {

    }
  },
  props: {
    recommendIconArr: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style scoped>
#recommendIcon {
  width: 100%;
  min-height: 190px;
  border-bottom: 10px solid rgb(228, 225, 225);
}
#recommendIcon ul {
  padding: 10px 0 20px;
}
#recommendIcon ul li {
  float: left;
  width: 25%;
  text-align: center;
  font-size: 12px;
  margin-bottom: 5px;
}
#recommendIcon ul li a {
  display: inline-block;
}
#recommendIcon ul li img {
  width: 60px;
  height: 60px;
  vertical-align: middle;
}
#recommendIcon ul li div {
  margin-top: 3px;
}
</style>