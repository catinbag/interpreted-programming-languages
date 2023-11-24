<template>
  <div class="todo-list">
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.title }}
        <el-button size="small" @click="editTodo(todo.id)">
          Редактировать
        </el-button>
        <el-button
          size="small"
          type="danger"
          plain
          @click="deleteTodo(todo.id)"
        >
          Удалить
        </el-button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    todos: Array,
  },
  methods: {
    editTodo(id) {
      this.$emit("edit", id);
    },
    deleteTodo(id) {
      this.$emit("delete", id);
    },
  },
};
</script>
