import Vue from 'vue'
import Router from 'vue-router'
import AllTasks from '@/components/AllTasks'
import ActiveTasks from '@/components/ActiveTasks'
import CompletedTasks from '@/components/CompletedTasks'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'AllTasksPage',
      component: AllTasks
    },
    {
      path: '/active',
      name: 'Active',
      component: ActiveTasks
    },
    {
      path: '/completed',
      name: 'Completed',
      component: CompletedTasks
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
