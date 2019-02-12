<template>
  <v-footer class="pa-3" dark color="grey darken-3" dense app inset>
    <v-btn class="hidden-sm-and-down" v-for="icon in icons" :key="icon" dark icon>
      <v-icon size="24px">{{ icon }}</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-flex
      color="grey darken-2"
      class="hidden-sm-and-down py-3 text-xs-right white--text xs12"
    >
      &copy;2019 — <strong>DanAn</strong>
    </v-flex>
    <v-flex
      color="grey darken-2"
      class="hidden-md-and-up py-3 text-xs-center white--text xs12"
    >
      &copy;2019 — <strong>DanAn</strong>
    </v-flex>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-instagram',
    ],
  }),
};

</script>

<style></style>
