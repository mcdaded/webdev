<template>
  <v-container fluid>
    <v-flex pa-1>
      <v-card>
        <v-card-text>
          <v-form>
            <v-text-field
              prepend-icon="person"
              name="name"
              label="Name"
              type="text"
              required
            ></v-text-field>
            <v-text-field
              prepend-icon="email"
              name="email"
              label="Email"
              required
              type="text"
            ></v-text-field>
            <v-text-field
              prepend-icon="subject"
              name="subject"
              label="Subject"
              required
              type="text"
            ></v-text-field>
            <v-textarea
              solo
              prepend-icon="message"
              name="message"
              label="Message"
              required
            >
            </v-textarea>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="submit">Send</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: 'ContactForm'
};
</script>

<style scoped></style>
