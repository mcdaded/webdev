<template>
  <span>
    <template>
      <v-navigation-drawer
        app
        v-model="drawer"
        class="primary lighten-2"
        dark
        disable-resize-watcher
      >
        <v-list>
          <v-list-tile v-for="item in items" :key="item.title" :to="item.to">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </template>
    <v-toolbar app class="primary text-xs-center" dark dense>
      <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-toolbar-side-icon>
      <v-layout justify-center align-center>
        <v-spacer class="hidden-md-and-up"></v-spacer>
        <v-btn flat class="hidden-sm-and-down" to="/menu">Menu</v-btn>
        <router-link to="/">
          <v-toolbar-title to="/">{{ appTitle }}</v-toolbar-title>
        </router-link>
        <router-link to="/#home-details">
          <v-btn flat class="hidden-sm-and-down">Details</v-btn>
        </router-link>
      </v-layout>
    </v-toolbar>
  </span>
</template>

<script>
export default {
  name: 'AppNavigation',
  data() {
    return {
      appTitle: 'Dan & Anan Wedding',
      drawer: false,
      items: [
        { title: 'Menu', icon: 'dashboard', to: '/menu' },
        { title: 'Sign In', icon: 'account_box', to: '/sign-in' },
        { title: 'Join', icon: 'create', to: '/join' },
        { title: 'Home Details', icon: 'view_list', to: '/#home-details' },
      ],
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('userSignOut');
    },
  },
};
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}
</style>
