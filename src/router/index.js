import Vue from 'vue'
import VueRouter from 'vue-router'
import Shopcar from "@/views/homePage/Shopcar.vue"

//导入路由规则组件
import centerRouter from './routes/center'
import homePagePouter from './routes/homePage'
import foodsRouter from './routes/foods'

Vue.use(VueRouter)

const routes = [
  {
    path: "/", redirect: "/homePage"
  },
  {
    path:'/shopcar',
    component: Shopcar
  },
  ...centerRouter,
  ...homePagePouter,
  ...foodsRouter
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
