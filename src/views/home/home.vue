<<<<<<< HEAD
<template>
    <div id="home">
        <navBar class="nar_Bar">
            <div slot="center">购物街</div>
        </navBar>
        <p>{{listArr}}</p>
    </div>
</template>
<script>
    const navBar = () => import('components/common/navbar/navBar')
    import {
        getHomeMultiData
    } from 'request/requestCategory/home'
    export default {
        name: 'home',
        data() {
            return {
                listArr: []
            }
        },
        components: {
            navBar
        },
        created() {
            let params = {
                postId: 1
            }
            getHomeMultiData(params).then(res => {
                this.listArr = res[0]
                console.log(this.listArr);
            }
            ).catch(err => {
                console.log(err)
            })
        }
    }
</script>
<style scoped>
    .nar_Bar {
        background: var(--navbar_bgColor);
        color: #fff;
        box-shadow: 0 4px 3px rgba(100, 100, 100, .1);
    }
</style>
=======
>>>>>>> parent of 656a2d3... 第二次提交，修改去除公共样式等
