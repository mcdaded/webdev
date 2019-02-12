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
    <!-- <v-toolbar app class="primary text-xs-center" dark dense> -->
    <v-toolbar app class="primary text-xs-center" dark>
      <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-toolbar-side-icon>
      <v-layout justify-center align-center>
        <v-spacer class="hidden-md-and-up"></v-spacer>
        <router-link to="/schedule">
          <v-btn flat class="hidden-sm-and-down">Schedule</v-btn>
        </router-link>
        <router-link to="/directions">
          <v-btn flat class="hidden-sm-and-down">Directions</v-btn>
        </router-link>
        <router-link to="/photos">
          <v-btn flat class="hidden-sm-and-down">Photos</v-btn>
        </router-link>
        <router-link to="/">
          <v-toolbar-title to="/"
            >Dan & Anan <br />
            Wedding</v-toolbar-title
          >
        </router-link>
        <router-link to="/faq">
          <v-btn flat class="hidden-sm-and-down">FAQ</v-btn>
        </router-link>
        <router-link to="/registry">
          <v-btn flat class="hidden-sm-and-down">Reigistry</v-btn>
        </router-link>
        <router-link to="/contact">
          <v-btn flat class="hidden-sm-and-down">Contact</v-btn>
        </router-link>
      </v-layout>
    </v-toolbar>
  </span>
</template>

<script>
export default {
  name: "AppNavigation",
  data() {
    return {
      appTitle: "Dan & Anan Wedding",
      drawer: false,
      items: [
        { title: "Home", icon: "home", to: "/" },
        { title: "Schedule", icon: "event", to: "/schedule" },
        { title: "Directions", icon: "map", to: "/directions" },
        { title: "Photos", icon: "photo_camera", to: "/photos" },
        { title: "FAQ", icon: "fa fa-question-circle", to: "/faq" },
        { title: "Registry", icon: "view_list", to: "/registry" },
        { title: "Contact", icon: "email", to: "/contact" }
      ]
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
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
