<template>
  <div class="app">
    <h1 class="title">Vue Todos</h1>
    <!--
      We have extracted the add new task form to its own component and
      are listening for our custom event 'taskAdded'. When that event is fired
      we will add the task that is passed in the payload of that event to our
      master list of tasks.
     -->
    <add-task-form @taskAdded="addTask" />
    <!--
      We can now call our generic TaskList component and pass in whatever
      list of tasks we want to display (all, completed, active).
      Note we are adding event listeners for our custom events (toggleDone, removeTask)
      that are emitted from the TaskList component in response to a user action.
     -->
    <task-list
      listTitle="Active Tasks"
      :tasks="incompleteTaskList"
      @toggleDone="toggleDone"
      @removeTask="removeTask"
      />
    <task-list
      listTitle="Completed Tasks"
      :tasks="completedTaskList"
      @toggleDone="toggleDone"
      @removeTask="removeTask"
      />
  </div>
</template>

<script>
// We have to import the code for the components that we want to use in our markup
import AddTaskForm from '@/components/AddTaskForm'
import TaskList from '@/components/TaskList'

export default {
  // We have to tell Vue to make these components available for use in our app.
  components: { TaskList, AddTaskForm },
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
/* We will add styles later. */
</style>
