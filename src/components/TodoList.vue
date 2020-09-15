<template>
  <div>
    <Todo
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle-checkbox="toggleCheckbox"
      @click-delete="clickDelete"
    />
  </div>
</template>

<script>
import Todo from "@/components/Todo.vue";

export default {
  components: {
    Todo
  },
  computed: {
    todos() {
      return this.$store.state.todo.todos;
    }
  },
  methods: {
    toggleCheckbox(value) {
      this.$emit("toggle-checkbox", value);
    },
    clickDelete(id) {
      this.$emit("click-delete", id);
    }
  }
};
</script>
