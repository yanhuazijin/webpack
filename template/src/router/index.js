import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
//import casher from '@/views/casher'

Vue.use(Router)

export default new Router({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: "/fundList",
      name: "fundList",
      component: () => import("@/views/fundTranstion/fundList.vue")
    },
    // 基金购买录入页面
    {
      path: "/fundBuy",
      name: "fundBuy",
      component: () => import("@/views/fundTranstion/fundBuy.vue")
    },

    //基金购买结果页面
    {
      path: "/fundRes",
      name: "fundRes",
      component: () => import("@/views/fundTranstion/fundRes.vue")
    },
  ]
})
