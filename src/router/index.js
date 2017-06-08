import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index.vue'
import project from '../pages/project'
import mine from '../pages/mine'
Vue.use(Router)
export default new Router({
  routes: [
    { path: '/', component: index },
    { path: '/project', component: project },
    { path: '/mine', component: mine },
  ]
})
