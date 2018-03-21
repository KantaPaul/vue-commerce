import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import EditEmployee from '@/components/EditEmployee'
import NewEmployee from '@/components/NewEmployee'
import ViewEmployee from '@/components/ViewEmployee'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/Edit/:id',
      name: 'EditEmployee',
      component: EditEmployee
    },
    {
      path: '/New',
      name: 'NewEmployee',
      component: NewEmployee
    },
    {
      path: '/View/:id',
      name: 'ViewEmployee',
      component: ViewEmployee
    }
  ]
})
