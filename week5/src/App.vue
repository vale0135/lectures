<template>
  <div class="app">
    <!-- We need some navigation links to switch between views -->
    <nav>
      <ul>
        <!--
          The RouterLink component comes with VueRouter.
          The 'to' prop is the URL route.
        -->
        <li><router-link to="/">All</router-link></li>
        <li><router-link to="/active">Active</router-link></li>
        <li><router-link to="/completed">Completed</router-link></li>
      </ul>
    </nav>
    <h1 class="title">Vue Todos</h1>
    <add-task-form @taskAdded="addTask" />
    <!--
      The RouterView is a placeholder that VueRouter uses to know
      where to insert the designated component for a given URL.
      In this case we are passing our taskList as a prop to each route's
      component and we are listening for user events.  This way we are still
      only mainting one master list in the App.vue component.
     -->
    <router-view
      :tasks="taskList"
      @toggleDone="toggleDone"
      @removeTask="removeTask"
    />
  </div>
</template>

<script>
import AddTaskForm from '@/components/AddTaskForm'

export default {
  name: 'App',
  components: { AddTaskForm },
  data () {
    return {
      taskList: [
        { id: 1234, title: 'Learn Vue', isComplete: true, priority: 'medium' },
        { id: 1235, title: 'Learn Vue Router', isComplete: false, priority: 'medium' },
        { id: 1236, title: 'Learn Vuex', isComplete: false, priority: 'medium' },
        { id: 1237, title: 'Learn Vue DevTools', isComplete: true, priority: 'medium' }
      ]
    }
  },

  methods: {
    addTask (task) {
      this.taskList.push(task)
    },

    toggleDone (task) {
      task.isComplete = !task.isComplete
    },

    removeTask (task) {
      const taskIndex = this.taskList.indexOf(task)
      this.taskList.splice(taskIndex, 1)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav ul {
  list-style: none;
  display: flex;
  justify-content: flex-start;
}
nav ul li {
  margin-right: 1em;
}
</style>
