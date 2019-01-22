import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/index.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login,
      name: '',
      leaf: false,
      hidden: true
    },
  ]
})
