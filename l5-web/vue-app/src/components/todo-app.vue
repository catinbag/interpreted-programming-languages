<template>
  <div class="todo-app">
    <todo-add-form @submit="createTodo" />
    <todo-list :todos="todos" @edit="setTodoToEdit" @delete="onDeleteTodo" />
    <todo-edit
      v-if="dialogVisible"
      :todo="todoToEdit"
      @close="closeDialog"
      @submit="onEditTodo"
    />
  </div>
</template>

<script>
import TodoList from "./todo-list.vue";
import TodoAddForm from "./todo-add-form.vue";
import TodoEdit from "./todo-edit.vue";

const serverUrl = "https://jsonplaceholder.typicode.com/todos";
const itemsCount = 10;

export default {
  name: "TodoApp",
  components: {
    TodoList,
    TodoAddForm,
    TodoEdit,
  },
  data() {
    return {
      todos: [],
      todoToEdit: null,
    };
  },
  computed: {
    dialogVisible() {
      return this.todoToEdit !== null;
    },
  },
  mounted() {
    fetch(serverUrl)
      .then((data) => data.json())
      .then((data) => {
        const items = data.slice(0, itemsCount);
        this.todos = items.map((item) => ({ id: item.id, title: item.title }));
      });
  },
  methods: {
    createTodo(title) {
      const newTodo = {
        id: Math.round(Math.random() * 1000),
        title,
      };

      this.todos.push(newTodo);
    },
    setTodoToEdit(id) {
      this.todoToEdit = this.todos.find((todo) => todo.id === id);
    },
    onEditTodo(todo) {
      const indexToEdit = this.todos.findIndex(
        (todoEl) => todoEl.id === todo.id
      );
      this.todos.splice(indexToEdit, 1, todo);
      this.todoToEdit = null;
    },
    onDeleteTodo(id) {
      const indexToDelete = this.todos.findIndex((todo) => todo.id === id);
      this.todos.splice(indexToDelete, 1);
    },
    closeDialog() {
      this.todoToEdit = null;
    },
  },
};
</script>

<style scoped>
.todo-app {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
