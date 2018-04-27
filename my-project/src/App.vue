<template>
  <div id="app">
    <!-- We need some navigation links to switch between views -->
  <nav class="navbar navbar-inverse">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Vue To-Do</a>
    </div>
      <ul class="nav navbar-nav">
        <!--
          The RouterLink component comes with VueRouter.
          The 'to' prop is the URL route.
        -->
        <li><router-link  to="/">All</router-link></li>
        <li><router-link to="/active">Active</router-link></li>
        <li><router-link  to="/completed">Completed</router-link></li>
      </ul>
    </nav>

    <add-task-form @taskAdded="addTask"/>
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
  <!-- this is a comment -->
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import moment from 'moment'
import AddTaskForm from '@/components/AddTaskForm'
export default {
  name: 'App',
  components: { AddTaskForm },
  data () {
    return {
       baseURL: 'https://vue-todos.robertmckenney.ca/api',
      taskList: [
        { id: 1234, title: 'Learn Vue', isComplete: true, priority: 'medium' },
        { id: 1235, title: 'Learn Vue Router', isComplete: false, priority: 'medium' },
        { id: 1236, title: 'Learn Vuex', isComplete: false, priority: 'medium' },
        { id: 1237, title: 'Learn Vue DevTools', isComplete: true, priority: 'medium' }
      ]
    }
  },
  created () {
    this.taskList = JSON.parse(localStorage.getItem('taskList')) || []
  },
  methods: {
    addTask (task) {
      this.taskList.push(task)
      this.saveTaskList()
    },
    toggleDone (task) {
      task.isComplete = !task.isComplete
      this.saveTaskList()
    },
    removeTask (task) {
      const taskIndex = this.taskList.indexOf(task)
      this.taskList.splice(taskIndex, 1)
      this.saveTaskList()
    },
    saveTaskList () {
      localStorage.setItem('taskList', JSON.stringify(this.taskList))
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir Next', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #f4a742;
  font-size: 18px;
  max-width: 75%;


}

div.navbar-header{
  background-color: #ffb300;
  padding: 10px 5px;
  text-align: center;
}

.nav.navbar.navbar-inverse{
    border: 1px solid #ffb300;
}

a.navbar-brand{
    color: #000000;
    font-size: 24px;
    text-align: center;
    margin: 0 auto;
    text-decoration: none;
}

ul.nav.navbar-nav {
  text-decoration: none;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
nav ul {
  background-color: #ffb300;

  display: flex;
  justify-content: flex-start;
}
nav ul li {
  margin-right: 1em;

}


</style>
