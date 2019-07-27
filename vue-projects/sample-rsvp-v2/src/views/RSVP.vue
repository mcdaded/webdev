<template>
  <v-container fluid>
    <v-flex pa-1>
      <v-card>
        <v-card-text>
          <v-form>
            <v-text-field
              name="subject"
              v-model="subject"
              label="Subject"
              required
              type="text"
            ></v-text-field>
            <v-textarea
              solo
              name="message"
              v-model="message"
              label="Message"
              required
            ></v-textarea>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <div class="text-xs-center">
            <v-btn color="accent" @click="testApi">SEND MESSAGE </v-btn>
          </div>
        </v-card-actions>
      </v-card>
      <v-card>
        <v-card-text>{{ apiData }}</v-card-text>
        <v-card-text>WHAT?</v-card-text>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      message: null,
      subject: null,
      apiData: ""
    };
  },
  methods: {
    submit() {},
    testApi() {
      const baseURI =
        "https://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.names";
      this.$http.get(baseURI).then(response => {
        this.apiData = response.data;
      });
      //   .catch(error => {
      //       console.log(error)
      //   })
    }
  }
};
</script>
