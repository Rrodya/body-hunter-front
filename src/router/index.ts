import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import MainPage from "@/views/main-page.vue";
import Login from "@/views/login/login-page.vue";

import App from "@/App.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: App,
    children: [
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
      }
    ]
  },

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // console.log(to);
  // console.log(from);
  // console.log(next);
  next();
})

export default router
