import Vue from 'vue'
import Router from 'vue-router'

import Home from '../containers/Home'
import Projects from '../containers/Projects'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    }
  ]
})
