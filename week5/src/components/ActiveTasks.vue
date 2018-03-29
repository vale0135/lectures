<template>
  <section>
  <template v-if="activeTaskList.length > 0">
    <TaskList :tasks="activeTaskList" title="Active Tasks" />
  </template>
    <p v-else>There are no active tasks ... what's next?</p>
  </section>
</template>

<script>
export default {
  props: ['tasks'],
  computed: {
    activeTaskList () {
      return this.tasks.filter(function (task) {
        return !task.isComplete
      })
    }
  },
  methods: {
    toggleDone (task) {
      this.$emit('toggleDone', task)
    },
    removeTask (task) {
      this.$emit('removeTask', task)
    }
  }
}
</script>

<style>

</style>
