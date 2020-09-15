import Vue from "vue";
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    // 컴포넌트의 data 와 비슷.
    state: {
        todos: [
            { id: 1, text: "buy a car", checked: false },
            { id: 2, text: "Read a book", checked: false }
        ],
        users: []
    },
    // 데이터를 실질적으로 바꾸는 곳
    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        },
        ADD_TODO(state, value) {
            state.todos.push({
                id: Date.now(),
                text: value,
                checked: false
            });
        },
        TOGGLE_TODO(state, { id, checked }) {
            const idx = state.todos.findIndex((todo) => todo.id === id);
            state.todos[idx].checked = checked;
        },
        DELETE_TODO(state, id) {
            state.todos = state.todos.filter((todo) => todo.id !== id);
        }
    },
    // 컴포넌트의 methods 와 비슷. DB 비동기 처리
    actions: {
        async getUsers({ commit }) {
            const data = await axios
                .get("https://jsonplaceholder.typicode.com/users")
                .then((res) => res.data);

            commit('SET_USERS', data);
        }
    },
    addTodo(context, value) {
        const { commit } = context;
        setTimeout(() => {
            commit('ADD_TODO', value);
        }, 2000);
    },
    toggleTodo({ commit }, payload) {
        setTimeout(() => {
            commit('TOGGLE_TODO', payload);
        }, 500);
    },
    deleteTodo({ commit }, payload) {
        setTimeout(() => {
            commit('DELETE_TODO', payload);
        }, 1000);
    },
    // 컴포넌트의 computed 와 비슷
    getters: {
    }
})