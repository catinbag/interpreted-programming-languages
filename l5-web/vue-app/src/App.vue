<template>
  <div id="app">
    <todo-app />
  </div>
</template>

<script>
import TodoApp from "./components/todo-app.vue";

export default {
  name: "App",
  components: {
    TodoApp,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
