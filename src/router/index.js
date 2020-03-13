import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/home/Home')
const Fair = () => import('../views/fair/Fair')
const Group = () => import('../views/group/Group')
const Note = () => import('../views/note/Note')
const Personal = () => import('../views/personal/Personal')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/fair',
    component: Fair
  },
  {
    path: '/group',
    component: Group
  },
  {
    path: '/note',
    component: Note
  },
  {
    path: '/personal',
    component: Personal
  },
  // {
  //   path: '/detail/:iid',
  //   component: Detail
  // },

]


//2.创建路由对象
const router = new VueRouter({
  routes,
  mode: 'history'
})

//3.导出router
export default router