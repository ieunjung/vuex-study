import axios from 'axios';

export default {
    namespaced: true,
    state: {
        users: []
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        },
    },
    actions: {
        async getUsers({ commit }) {
            const data = await axios
                .get("https://jsonplaceholder.typicode.com/users")
                .then((res) => res.data);

            commit('SET_USERS', data);
        },
    }
}