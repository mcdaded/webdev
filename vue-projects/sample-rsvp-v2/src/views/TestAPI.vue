<template>
  <v-container fluid>
    <v-flex pa-1>
      <v-card>
        <v-card-text>{{ info }} </v-card-text>
        <v-card-actions>
          <v-btn primary @click="createRow">Click</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      info: null,
      errors: [],
      responses: []
    };
  },
  mounted() {
    const URL = "https://api.coindesk.com/v1/bpi/currentprice.json";
    axios
      .get(URL)
      .then(response => (this.info = response))
      .catch(error => this.errors.push(error));
  },
  methods: {
    createRow() {
      const URL = "https://api.coindesk.com/v1/bpi/currentprice.json";
      var data = [{ name: "anan", test: "this worked!" }];
      axios
        .post(URL, { data: data })
        .then(response => this.responses.push(response))
        .catch(error => this.errors.push(error));
    }
  }
};
</script>
