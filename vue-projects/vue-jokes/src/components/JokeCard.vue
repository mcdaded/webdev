<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-card-section>
        <div class="text-h2 q-mt-sm q-mb-sm text-center">Want to hear a joke?</div>
        <div v-if="hasJoke" class="text-h5 q-pa-md text-grey text-center text-vertical-bottom">
          {{ joke }}
        </div>
      </q-card-section>
      <div style="position: absolute; bottom: 0; right: 0">
        <q-card-actions>
          <q-btn class="q-pa-sm q-ma-md" color="secondary" label="Get Joke" @click="getJoke()"/>
          <q-btn class="q-pa-sm q-ma-md" style="bg-grey" label="Clear" @click="clearJoke()"/>
        </q-card-actions>
      </div>
    </q-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "JokeCard",
  data () {
    return {
      hasJoke: false,
      joke: '',
      errors: []
    }
  },
  methods: {
    getJoke () {
      const HTTP = axios.create({
        baseURL: "https://icanhazdadjoke.com/",
        headers: {
          Accept: 'application/json'
        }
      })
      HTTP
        .get()
        .then(response => {
          this.joke = response.data.joke;
          this.hasJoke = true;
          console.log(response);
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    clearJoke () {
      this.joke = '';
      this.hasJoke = true;
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 50vw
  height: 350px 
  min-width: 90vw
</style>
