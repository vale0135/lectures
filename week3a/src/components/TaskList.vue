<template>
  <section>
  <template v-if="tasks.length > 0">
    <h2>Completed Tasks</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <span class="far"
              :class="{
                'fa-circle': ! task.isComplete,
                'fa-check-circle': task.isComplete
              }"
              @click="toggleDone(task)"></span>
        <span>{{ task.title }}</span>
        <span>{{ task.priority }}</span>
        <span class="far fa-trash-alt" @click="removeTask(task)"></span>
      </li>
    </ul>
    </template>
    <p v-else>There are no completed tasks ... get to work!</p>
  </section>
</template>

<script>
export default {
  props: ['tasks'],
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
