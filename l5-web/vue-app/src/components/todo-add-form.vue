<template>
  <div class="todo-add-form">
    <el-input
      v-model="inputValue"
      size="small"
      placeholder="Введите название"
      class="input"
    />
    <el-button size="small" @click="onAdd">add todo</el-button>
  </div>
</template>

<script>
export default {
  name: "TodoAddForm",
  props: {
    initValue: String,
  },
  data() {
    return {
      inputValue: this.initValue,
    };
  },
  methods: {
    onAdd() {
      this.$emit("submit", this.inputValue);
      this.inputValue = "";
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
