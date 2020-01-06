<template>
  <div id="home">
    <navBar class="nar_Bar">
      <div slot="center">购物街</div>
    </navBar>
    <scroll class="contents">
      <homeSwiper :swiperImgArr="homeData.swiperImgArr"></homeSwiper>
      <recommendIcon :recommendIconArr="homeData.recommendIcon"></recommendIcon>
      <featureView></featureView>
      <navControl :navControlTitle="['流行','精选','精款']"></navControl>
      <!-- <scroll>
        <div class="content"
             ref="aaa">
          <ul>
            <li>内容区域1</li>
            <li>内容区域2</li>
            <li>内容区域3</li>
            <li>内容区域4</li>
            <li>内容区域5</li>
            <li>内容区域6</li>
            <li>内容区域7</li>
            <li>内容区域8</li>
            <li>内容区域9</li>
            <li>内容区域10</li>
            <li>内容区域11</li>
            <li>内容区域12</li>
            <li>内容区域13</li>
            <li>内容区域14</li>
            <li>内容区域15</li>
            <li>内容区域16</li>
            <li>内容区域17</li>
            <li>内容区域18</li>
            <li>内容区域19</li>
            <li>内容区域20</li>
            <li>内容区域21</li>
            <li>内容区域22</li>
            <li>内容区域23</li>
            <li>内容区域24</li>
            <li>内容区域25</li>
            <li>内容区域26</li>
            <li>内容区域27</li>
            <li>内容区域28</li>
            <li>内容区域29</li>
            <li>内容区域30</li>
            <li>内容区域31</li>
            <li>内容区域32</li>
            <li>内容区域33</li>
            <li>内容区域34</li>
            <li>内容区域35</li>
            <li>内容区域36</li>
            <li>内容区域37</li>
            <li>内容区域38</li>
            <li>内容区域39</li>
            <li>内容区域40</li>
            <li>内容区域41</li>
            <li>内容区域42</li>
            <li>内容区域43</li>
            <li>内容区域44</li>
            <li>内容区域45</li>
            <li>内容区域46</li>
            <li>内容区域47</li>
            <li>内容区域48</li>
            <li>内容区域49</li>
            <li>内容区域50</li>
            <li>内容区域51</li>
            <li>内容区域52</li>
            <li>内容区域53</li>
            <li>内容区域54</li>
            <li>内容区域55</li>
            <li>内容区域56</li>
            <li>内容区域57</li>
            <li>内容区域58</li>
            <li>内容区域59</li>
            <li>内容区域60</li>
            <li>内容区域61</li>
            <li>内容区域62</li>
            <li>内容区域63</li>
            <li>内容区域64</li>
            <li>内容区域65</li>
            <li>内容区域66</li>
            <li>内容区域67</li>
            <li>内容区域68</li>
            <li>内容区域69</li>
            <li>内容区域70</li>
            <li>内容区域71</li>
            <li>内容区域72</li>
            <li>内容区域73</li>
            <li>内容区域74</li>
            <li>内容区域75</li>
            <li>内容区域76</li>
            <li>内容区域77</li>
            <li>内容区域78</li>
            <li>内容区域79</li>
            <li>内容区域80</li>
            <li>内容区域81</li>
            <li>内容区域82</li>
            <li>内容区域83</li>
            <li>内容区域84</li>
            <li>内容区域85</li>
            <li>内容区域86</li>
            <li>内容区域87</li>
            <li>内容区域88</li>
            <li>内容区域89</li>
            <li>内容区域90</li>
            <li>内容区域91</li>
            <li>内容区域92</li>
            <li>内容区域93</li>
            <li>内容区域94</li>
            <li>内容区域95</li>
            <li>内容区域96</li>
            <li>内容区域97</li>
            <li>内容区域98</li>
            <li>内容区域99</li>
            <li>内容区域100</li>
          </ul>
        </div>
      </scroll> -->
    </scroll>
  </div>
</template>
<script>
const navBar = () => import('components/common/navbar/navBar')
const scroll = () => import('components/common/scroll/scroll')

const navControl = () => import('components/content/navControl/navControl')

const homeSwiper = () => import('./homeComponents/homeSwiper')
const recommendIcon = () => import('./homeComponents/recommendIcon')
const featureView = () => import('./homeComponents/featureView')

// 导入请求接口
import { getHomeMultiData, getHomeData } from 'request/requestCategory/home'
export default {
  name: 'home',
  data () {
    return {
      homeData: {
        swiperImgArr: [
          {
            url: "https://a2.vimage1.com/upload/flow/2018/06/12/50/15287856410421.jpg",
            link: "https://www.jd.com/"
          },
          {
            url: "https://a3.vimage1.com/upload/flow/2018/06/06/29/15282588215380.jpg",
            link: "https://www.jd.com/"
          },
          {
            url: "https://a2.vimage1.com/upload/flow/2018/06/11/129/15287110698394.jpg",
            link: "https://www.jd.com/"
          },
          {
            url: "https://a3.vimage1.com/upload/flow/2018/06/11/79/15286841592012.jpg",
            link: "https://www.jd.com/"
          }
        ],
        recommendIcon: [
          {
            url: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png.webp',
            title: '超市',
            link: 'https://www.jd.com/'
          },
          {
            url: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png.webp',
            title: '数码电器',
            link: 'https://www.jd.com/'
          },
          {
            url: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t17725/156/1767366877/17404/f45d418b/5ad87bf0N66c5db7c.png.webp',
            title: '盒马生鲜',
            link: 'https://www.jd.com/'
          },
          {
            url: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png.webp',
            title: '服饰',
            link: 'https://www.jd.com/'
          },
          {
            url: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png.webp',
            title: '充值缴费',
            link: 'https://www.jd.com/'
          },
          {
            url: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png.webp',
            title: '9.9大拼购',
            link: 'https://www.jd.com/'
          },
          {
            url: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png.webp',
            title: '领券',
            link: 'https://www.jd.com/'
          },
          {
            url: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png.webp',
            title: '赚钱',
            link: 'https://www.jd.com/'
          }
        ]
      },
      homeDataList: {
        'pop': { page: 0, list: [] },
        'choiceness': { page: 0, list: [] },
        'pureP': { page: 0, list: [] }
      }
    }
  },
  methods: {
    getHomeMultiData () {
      getHomeMultiData().then(res => {
        console.log(res);
      }
      ).catch(err => {
        console.log(err)
      })
    },

    // 获取商品列表
    getHomeData (type, page) {
      getHomeData(type, page).then(res => {
        console.log(res);
      }).catch(err => console.log(err))
    }

  },
  created () {
    this.getHomeMultiData();
    this.getHomeData('pop', 1);
  },
  mounted () {
    // this.scroll = new BScroll('.content', {
    //   pullUpLoad: true,
    //   probeType: 3
    // })
    // this.scroll.on('scroll', (position) => {
    //   console.log(position)
    // })
    // this.scroll.on('pullingUp', () => {
    //   console.log('加载更多');
    // })
  },
  components: {
    navBar,
    navControl,
    homeSwiper,
    recommendIcon,
    featureView,
    scroll
  }
}
</script>
<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
  background: #ddd;
}
.nar_Bar {
  background: var(--navbar_bgColor);
  color: #fff;
  box-shadow: 0 4px 3px rgba(100, 100, 100, 0.1);
}
.content {
  height: 40vh;
  background: orange;
}
.contents {
  height: calc(100% - 93px);
  overflow: hidden;
}
</style>
