import Vue from 'vue'
import VueRouter from 'vue-router'

//导入路由规则组件
import centerRouter from './routes/center'
import homePagePouter from './routes/homePage'

Vue.use(VueRouter)

const routes = [
  {
    path: "/", redirect: "/homePage"
  },
  ...centerRouter,
  ...homePagePouter
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
