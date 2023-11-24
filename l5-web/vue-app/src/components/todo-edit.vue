<template>
  <el-dialog title="Редактирование" visible width="30%">
    <el-input
      v-model="title"
      size="small"
      placeholder="Введите название"
      class="input"
    />
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">Отмена</el-button>
      <el-button type="primary" @click="submit">Обновить</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: "TodoAddForm",
  props: {
    todo: Object,
  },
  data() {
    return {
      title: this.todo.title,
    };
  },
  methods: {
    submit() {
      const payload = {
        ...this.todo,
        title: this.title,
      };
      this.$emit("submit", payload);
      this.title = "";
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo-add-form {
  display: flex;
}

.input {
  margin-right: 16px;
}
/*  */
</style>
