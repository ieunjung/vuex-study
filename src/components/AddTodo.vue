<template>
  <input
    v-model="todoText"
    type="text"
    class="w-100 p-2"
    placeholder="Type to-do"
    @keyup.enter="addTodo"
  />
</template>

<script>
export default {
  data() {
    return {
      todoText: ""
    };
  },
  methods: {
    addTodo(e) {
      this.$emit("add-todo", e.target.value);
    }
  }
};
</script>
