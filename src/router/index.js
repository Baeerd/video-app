import Vue from 'vue'
import Router from 'vue-router'
import Video from '@/components/Video'
import Exam from '@/components/Exam'
import Login from '@/components/Login'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '登录',
      component: Login
    },
    {
      path: '/home',
      name: '主页',
      component: Home,
      children: [
        {
          path: '/video',
          name: '视频',
          component: Video
        },
        {
          path: '/exam',
          name: '考试',
          component: Exam
        }
      ]
    }
  ]
})
