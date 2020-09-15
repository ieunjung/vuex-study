export default {
    namespaced: true,
    state: {
        todos: [
            { id: 1, text: "buy a car", checked: false },
            { id: 2, text: "Read a book", checked: false }
        ],

    },
    mutations: {
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
    actions: {
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
    },
    getters: {
        numberOfCompletedTodo: state => {
            return state.todos.filter((todo) => todo.checked).length;
        }
    }
}