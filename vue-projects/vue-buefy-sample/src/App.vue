<template>
  <div id="app">
    <nav id="nav" class="navbar is-primary">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/buttons">Button</router-link>
    </nav>
    <div id="content" class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
