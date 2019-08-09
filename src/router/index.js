import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
