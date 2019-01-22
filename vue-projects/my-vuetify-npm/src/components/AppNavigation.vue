<template>
  <span>
    <template>
      <v-navigation-drawer
        app
        v-model="drawer"
        class="brown lighten-2"
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
    <v-toolbar app color="brown darken-4" dark>
      <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-toolbar-side-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <router-link to="/">
        <v-toolbar-title to="/">{{ appTitle }}</v-toolbar-title>
      </router-link>
      <v-btn flat class="hidden-sm-and-down" to="/menu">Menu</v-btn>
      <v-btn flat class="hidden-sm-and-down" to="/#home-details">Details</v-btn>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <div v-if="!isAuthenticated" class="hidden-sm-and-down">
        <v-btn flat to="/sign-in">SIGN IN</v-btn>
        <v-btn color="brown lighten-3" to="/join">JOIN</v-btn>
      </div>
      <div v-else>
        <v-btn flat to="/about">PROFILE</v-btn>
        <v-btn outline color="white" @click="logout">Logout</v-btn>
      </div>
    </v-toolbar>
  </span>
</template>

<script>
export default {
  name: 'AppNavigation',
  data() {
    return {
      appTitle: 'Meal Prep',
      drawer: false,
      items: [
        { title: 'Menu', icon: 'dashboard', to: '/menu' },
        { title: 'Sign In', icon: 'account_box', to: '/sign-in' },
        { title: 'Join', icon: 'create', to: '/join' },
        { title: 'Home Details', icon: 'view_list', to: '/#home-details' }
      ]
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('userSignOut');
    }
  }
};
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}
</style>
