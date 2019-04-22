import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: r => require.ensure([], () => r(require('../page/index')), 'index')
    },
    {
      path: '/question',
      component: r => require.ensure([], () => r(require('../page/question')), 'question')
    },
    {
      path: '/show',
      component: r => require.ensure([], () => r(require('../page/show')), 'show')
    }
  ]
})
