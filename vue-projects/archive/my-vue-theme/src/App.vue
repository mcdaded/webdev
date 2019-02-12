<template>
  <v-app>
    <v-layout justify-center>
      <app-navigation></app-navigation>
      <v-content transition="slide-x-transition">
        <router-view></router-view>
      </v-content>
      <app-footer></app-footer>
    </v-layout>
  </v-app>
</template>

<script>
import AppNavigation from "@/components/AppNavigation.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppNavigation,
    AppFooter
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
