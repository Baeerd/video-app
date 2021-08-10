import Vue from 'vue'
import Router from 'vue-router'
import Video from '@/components/Video'
import Exam from '@/components/Exam'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Video',
      component: Video
    },
    {
      path: '/exam',
      name: 'Exam',
      component: Exam
    }
  ]
})
