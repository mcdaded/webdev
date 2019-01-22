<template>
  <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
    <v-layout justify-center align-center column pa-5>
      <div
        class="font-weight-black white--text text-xs-center"
        style="font-size: 10vw;"
      >
        HEALTHY MEALS
      </div>
      <div class="font-weight-black white--text text-xs-center mb-3">
        <h1>FOR YOUR TABLE</h1>
      </div>
      <div class="display-1 font-weight-bold white--text text-xs-center">
        Finally be a foodie at home with fresh, chef-prepared meals delivered
        daily to your door.
      </div>
      <v-btn
        fab
        class="hidden-sm-and-down mt-5 brown darken-4"
        @click="$vuetify.goTo('#home-details', { offset: -5 })"
      >
        <v-icon large color="white">expand_more</v-icon>
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'HomeHero'
};
</script>

<style scoped>
.home-hero {
  background: url('../assets/home_hero_background.jpg');
  background-size: cover;
  width: 100%;
  height: 100%;
}

h1 {
  font-size: 34px;
}
@media (min-width: 576px) {
  h1 {
    font-size: 22px;
  }
}
@media (min-width: 768px) {
  h1 {
    font-size: 24px;
  }
}
@media (min-width: 992px) {
  h1 {
    font-size: 34px;
  }
}
</style>
