<template>
  <div>
    Completed Todos : {{ numberOfCompletedTodo }}
  </div>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    numberOfCompletedTodo() {
      return this.todos.filter((todo) => todo.checked).length;
    }
  }
};
</script>
