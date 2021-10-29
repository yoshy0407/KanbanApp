import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import KanbanLogin from '@/components/templates/KanbanLogin.vue'
import KanbanDashboard from '@/components/templates/KanbanDashboard.vue'
import KanbanMain from '@/components/templates/KanbanMain.vue'
import KanbanBoardList from '@/components/templates/KanbanBoardList.vue'
import KanbanBoard from '@/components/templates/KanbanBoard.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'KanbanLogin',
    component: KanbanLogin,
    meta: {
      requireAuth: false
    }

  },
  {
    path: '/',
    name: 'KanbanMain',
    component: KanbanMain,
    children: [
      {
        path: '/',
        name: 'KanbanDashboard',
        component: KanbanDashboard,
        meta: {
          requireAuth: true
        }
      },
      {
        path: '/boardList',
        name: 'KanbanBoardList',
        component: KanbanBoardList,
        meta: {
          requireAuth: true
        }
      },
      {
        path: '/board/:boardId',
        name: 'KanbanBoard',
        component: KanbanBoard,
        meta: {
          requireAuth: true
        }
      }
    ],
    meta: {
      requireAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
