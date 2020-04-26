import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import article from '../views/article'
import friend from '../views/friend'
import about from '../views/About'
import message from '../views/message'
import note from '../components/article/note'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/article',
    name: 'article',
    component: article
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/friend',
    name: 'friend',
    component: friend
  },
  {
    path: '/message',
    name: 'message',
    component: message
  },
  {
    path: '/note/:id',
    name: 'note',
    component: note
  },
  {
    path: '*',
    redirect: '/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
