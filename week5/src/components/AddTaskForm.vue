<template>
  <div>
    <input type="text" v-model.trim="newTask.title" @keyup.enter="addTask">
    <select v-model="newTask.priority">
      <option value="high">high</option>
      <option value="medium">medium</option>
      <option value="low">low</option>
    </select>
    <button @click="addTask">Add Task</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newTask: {}
    }
  },

  created () {
    this.newTask = this.getNewTask()
  },

  methods: {
    addTask () {
      // this.taskList.push(this.newTask)
      this.$emit('taskAdded', this.newTask)
      this.newTask = this.getNewTask()
    },

    getNewTask () {
      return {
        id: null,
        title: '',
        isComplete: false,
        priority: 'medium'
      }
    }
  }
}
</script>

<style>

</style>
