import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('views/home/home')
const Category = () => import('views/category/category')
const Cart = () => import('views/cart/cart')
const Me = () => import('views/me/me')

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/category',
        name: 'category',
        component: Category
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    },
    {
        path: '/me',
        name: 'me',
        component: Me
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router