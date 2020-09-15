import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    // data()
    state: {
        todos: [
            { id: 1, text: "buy a car", checked: false },
            { id: 2, text: "Read a book", checked: false }
        ]
    },
    // 데이터를 실질적으로 바꾸는 곳
    mutations: {

    },
    // methods
    actions: {

    },
    // computed 와 비슷
    getters: {

    }
})