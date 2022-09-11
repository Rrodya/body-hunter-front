import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import MainPage from "@/views/main-page.vue";
import Login from "@/views/login/login-page.vue";
import sendReq from "@/services/api";

import App from "@/App.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [

  {
    path: '',
    name: 'start',
    component: MainPage
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: () => import("@/views/register/register-page.vue")
  },
  {
    path: "/homepage",
    component: () => import("@/views/home-page/home-page.vue"),
    children: [
      {
        path: '',
        name: "homepage",
        component: () => import("@/views/home-main/home-main.vue")
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  console.log(next);
  if(to.matched.length !== 0 && to.matched[0].path === "/homepage"){
    if(localStorage.bh_token){
      const bh_token = localStorage.bh_token;

      sendReq("checktoken", "post", {token: bh_token}).then(res => {
        if(res.message === "token") {
          next(false);
        } else {
          next();
        }
      })
    } else {
      next(false);
    }
  } else {
    next();
  }

})

export default router
