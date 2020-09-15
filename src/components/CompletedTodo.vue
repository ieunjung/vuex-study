<template>
  <div>
    Completed Todos : {{ numberOfCompletedTodo }}
  </div>
</template>

<script>
export default {
  computed: {
    numberOfCompletedTodo() {
      return this.$store.getters['todo/numberOfCompletedTodo'];
    }
  }
};
</script>
