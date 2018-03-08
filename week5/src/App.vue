<template>
  <div class="app">
    <nav>
      <ul>
        <li><router-link to="/">All</router-link></li>
        <li><router-link to="/active">Active</router-link></li>
        <li><router-link to="/completed">Completed</router-link></li>
      </ul>
    </nav>
    <h1 class="title">Vue Todos</h1>
    <add-task-form @taskAdded="addTask" />
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

  computed: {
    completedTaskList () {
      return this.taskList.filter(function (task) {
        return task.isComplete
      })
    },
    incompleteTaskList () {
      return this.taskList.filter(task => !task.isComplete)
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
