import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/index.vue'
import Main from './views/main.vue'
import Home from './views/Home.vue'
import Hello from './components/HelloWorld.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Hello,
            name: '',
            leaf: false,
            hidden: true
        },
        {
            path: '/login',
            component: Login,
            name: '',
            leaf: false,
            hidden: true
        },
        {
            path: '/main',
            component: Main,
            name: '',
            leaf: false,
            hidden: true
        },
        {
            path: '/home',
            component: Home,
            name: '欢迎访问少华学生管理系统',
            hidden: true,
            leaf: false,
            children: [
                { path: '/Main', component: Main, name: '主页', hidden: true }
            ]
        },
    ]
})
