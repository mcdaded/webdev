<template>
  <v-footer class="pa-3" dark color="grey darken-3" dense app inset>
    <v-btn v-for="link in links" :key="link" color="white" flat round class="hidden-sm-and-down">
      {{ link }}
    </v-btn>
    <v-spacer></v-spacer>
    <v-flex color="grey darken-2" py-3 text-xs-center white--text xs12>
      &copy;2018 — <strong>Vuetify</strong>
    </v-flex>
  </v-footer>
</template>

<!-- <template>
  <v-footer class="pa-3" height="auto" dark color="grey darken-3" >
    <v-layout justify-center row wrap>
      <v-btn v-for="link in links" :key="link" color="white" flat round>
        {{ link }}
      </v-btn>
      <v-flex color="grey darken-2" py-3 text-xs-center white--text xs12>
        &copy;2018 — <strong>Vuetify</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template> -->

<!-- <template>
  <v-footer height="auto" dense dark color="primary lighten-1">
    <v-card class="flex" flat tile>
      <v-card-actions class="justify-center">
        <v-btn v-for="link in links" :key="link" color="white" flat round>
          {{ link }}
        </v-btn>
      </v-card-actions>
      <v-card-actions class="justify-center">
        &copy;2018 — <strong>Vuetify</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template> -->

<script>
export default {
  data: () => ({
    links: [
      'Home',
      'About Us',
      'Team',
      'Services',
      'Blog',
      'Contact Us',
    ],
  }),
};
</script>

<style></style>
