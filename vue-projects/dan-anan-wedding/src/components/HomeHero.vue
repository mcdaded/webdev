<template>
  <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
    <v-layout justify-center align-center column pa-5>
      <div
        class="font-weight-black info--text text-xs-center"
        style="font-size: 10vw;"
      >
        Dan & Anan Wedding 2019
      </div>
      <div class="display-1 font-weight-bold white--text text-xs-center">
        We can't wait to celebrate with you!
      </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'HomeHero',
};
</script>

<style scoped>
.home-hero {
  background: url('../assets/photos/hero/IMG_9094.jpg');
  background-size: cover;
  width: 100%;
  height: 100%;
}

</style>
