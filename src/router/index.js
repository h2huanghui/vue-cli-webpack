import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

/* 创建router实例 */
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/h1',
          name: 'H1',
          component: () => import('@/components/H1.vue')
        }, {
          path: '/h2',
          name: 'H2',
          component: () => import('@/components/H2.vue')
        }]
    },
    {
      path: '/hi1',
      name: 'hi1',
      component: () => import('@/components/Hi1.vue')
    },
    {
      path: '/params/:newsId/:newsTitle',
      name: 'Params',
      component: () => import('@/components/Params.vue')
    },
    {
      path: '/query',
      name: 'Query',
      component: () => import('@/components/Query.vue')
    },
    {
      path: '/activity',
      name: 'Activity',
      component: () => import('@/components/Activity.vue')
    }
  ]
})
