<template>
  <amplify-authenticator>
    <div id="app">
      <h1>Todo App</h1>
      <input type="text" v-model="name" placeholder="Todo name" />
      <input type="text" v-model="description" placeholder="Todo description" />
      <button v-on:click="createTodo">Create Todo</button>
    </div>
    <amplify-sign-out></amplify-sign-out>
  </amplify-authenticator>
</template>

<script>
import { API } from "aws-amplify";
import { createTodo } from "./graphql/mutations";
import { components } from "aws-amplify-vue";

export default {
  name: "app",
  components: {
    ...components,
  },
  data() {
    return {
      name: "",
      description: "",
    };
  },
  methods: {
    async createTodo() {
      const { name, description } = this;
      if (!name || !description) return;
      const todo = { name, description };
      await API.graphql({
        query: createTodo,
        variables: { input: todo },
      });
      this.name = "";
      this.description = "";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
