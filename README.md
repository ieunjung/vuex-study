# Learning Vuex with ToDo List

> https://www.youtube.com/playlist?list=PLB7CpjPWqHOtYP7P_0Ls9XNed0NLvmkAh

### < Vuex >

- state  
  컴포넌트의 data 와 비슷. 데이터를 정의하는 곳
- mutations  
  데이터를 실질적으로 바꾸는 곳

```
// commit
this.$store.commit("ADD_TODO", e.target.value);
```

- actions  
  컴포넌트의 methods 와 비슷. DB 비동기 처리

```
// dispatch
this.$store.dispatch("addTodo", e.target.value);
```

- getters  
  컴포넌트의 computed 와 비슷
