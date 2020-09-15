<template>
  <div>
    User List

    <div v-for="user in people" :key="user.id">
      {{ user.name }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  created() {
    this.getUsers();
  },
  computed: {
    // ...mapState({
    //   people: state => state.user.users
    // })
    ...mapState('user', {
      people: state => state.users
    })
    // ...mapState({ people: "users" })
    // users() {
    //   return this.$store.state.users;
    // }
  },
  methods: {
    ...mapActions('user', ["getUsers"])
    // getUsers() {
    //   this.$store.dispatch("getUsers");
    // }
  }
};
</script>
