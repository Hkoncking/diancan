import Vue from 'vue'
import VueRouter from 'vue-router'

//导入路由规则组件
import centerRouter from './routes/center'
import homePagePouter from './routes/homePage'
import buy from "@/views/homePage/buy"

Vue.use(VueRouter)

const routes = [
  {
    path: "/", redirect: "/homePage"
  },
  ...centerRouter,
  ...homePagePouter,
  {
    path: "/buy",component: buy
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
