<template>
  <div>
    User List

    <div v-for="user in users" :key="user.id">
      {{ user.name }}
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.getUsers();
  },
  computed: {
    users() {
      return this.$store.state.users;
    }
  },
  methods: {
    getUsers() {
      this.$store.dispatch("getUsers");
    }
  }
};
</script>
