import Vue from 'vue'
import Router from 'vue-router'
import Watchers from '../components/Watchers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Watchers',
      component: Watchers
    }
  ]
})
