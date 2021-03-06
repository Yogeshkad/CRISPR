import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/library/Index')
    },
    {
      path: '/origins',
      name: 'Origins',
      component: () => import('@/views/origins/Index')
    },
    {
      path: '/news',
      name: 'News',
      component: () => import('@/views/home/Index')
    },
    {
      path: '/article/:id',
      name: 'Article',
      component: () => import('@/views/article/Index'),
      props: true
    },
    {
      path: '/library/:profiles',
      name: 'Library',
      component: () => import('@/views/library/Index'),
      props: true
    },
    {
      path: '/store',
      name: 'Store',
      component: () => import('@/views/store/Index')
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('@/views/projects/Index')
    },
    {
      path: '/project/:instanceId/:base/:projectId',
      name: 'Project',
      component: () => import('@/views/projects/DnaModeller'),
      props: true
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () => import('@/views/settings/Index')
    },
    {
      path: '/store/part/:id',
      name: 'Part Store Page',
      component: () => import('@/views/store-page/Part')
    },
    {
      path: '/store/application/:id',
      name: 'Application Store Page',
      component: () => import('@/views/store-page/Happ')
    },
    {
      path: '/kanbans',
      name: 'Kanbans',
      component: () => import('@/views/kanbans/Kanbans')
    },
    {
      path: '/parts',
      name: 'Parts',
      component: () => import('@/views/library/Parts'),
      props: true
    },
    {
      path: '/part/:id',
      name: 'Part',
      component: () => import('@/views/parts/PartEditor')
    },
    {
      path: '/profiles',
      name: 'Profiles',
      component: () => import('@/views/profiles/Index')
    },
    {
      path: '/personas',
      name: 'Personas',
      component: () => import('@/views/personas/Index')
    },
    {
      path: '/profile-site/:id',
      name: 'Profile',
      component: () => import('@/views/profileSite/Index')
    },
    {
      path: '/projectKanban/:instanceId/:base/:projectId',
      name: 'Project Kanban',
      component: () => import('@/views/projectKanban/ProjectKanbanModule')
    },
    {
      path: '/freckles/:id',
      name: 'Freckles',
      component: () => import('@/views/freckles/Index')
    },
    {
      path: '/holopunk-records/library',
      name: 'Holopunk Records',
      component: () => import('@/components/parts/MusicLibrary/MusicManager')
    }
  ]
})

// Bootstrap Analytics
// Set in .env
// https://github.com/MatteoGabriele/vue-analytics
if (process.env.VUE_APP_GOOGLE_ANALYTICS) {
  Vue.use(require('vue-analytics').default, {
    id: process.env.VUE_APP_GOOGLE_ANALYTICS,
    router,
    autoTracking: {
      page: process.env.NODE_ENV !== 'development'
    }
  })
}

export default router
