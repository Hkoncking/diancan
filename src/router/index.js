import Vue from 'vue'
import VueRouter from 'vue-router'
import Shopcar from "@/views/homePage/Shopcar.vue"

//导入路由规则组件
import centerRouter from './routes/center'
import homePagePouter from './routes/homePage'
import buy from "@/views/homePage/buy"
import foodsRouter from './routes/foods'
import pay from "@/views/homePage/payfor/pay.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/", redirect: "/homePage"
  },
  {
    path:'/shopcar',
    component: Shopcar
  },
  {
    path:'/pay',
    component: pay
  },
  ...centerRouter,
  ...homePagePouter,
  {
    path: "/buy",component: buy
  },
  ...foodsRouter
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
