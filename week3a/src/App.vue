<template>
  <div id="app">
    <h1 class="title">Vue Todos</h1>
    <input type="text" v-model.trim="newTask.title" @keyup.enter="addTask">
    <select v-model="newTask.priority">
      <option value="high">high</option>
      <option value="medium">medium</option>
      <option value="low">low</option>
    </select>
    <button @click="addTask">Add Task</button>
    <task-list
      :tasks="incompleteTaskList"
      @removeTask="removeTask"
      @toggleDone="toggleDone"
      />
    <task-list
      :tasks="completedTaskList"
      @removeTask="removeTask"
      @toggleDone="toggleDone"
      />
  </div>
</template>

<script>
import TaskList from '@/components/TaskList'

export default {
  name: 'App',
  components: { TaskList },
  data () {
    return {
      newTask: {},
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
      // This loops over our array of tasks and gives back a
      // new array with just the complete items
      return this.taskList.filter(function (task) {
        return task.isComplete
      })
    },
    incompleteTaskList () {
      // This loops over our array of tasks and gives back a
      // new array with just the incomplete items
      return this.taskList.filter(task => !task.isComplete)
    }
  },
  created () {
    this.newTask = this.getNewTask()
  },
  methods: {
    getNewTask () {
      return {
        id: null,
        title: '',
        isComplete: false,
        priority: 'medium'
      }
    },

    addTask () {
      this.taskList.push(this.newTask)
      this.newTask = this.getNewTask()
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
  color: #2c3e50;
  text-align: center;
  margin-top: 60px;
}
</style>
