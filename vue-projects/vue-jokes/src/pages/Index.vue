<template>
  <q-page class="flex flex-center">
    <JokeCard />
  </q-page>
</template>

<script>
import JokeCard from "components/JokeCard.vue"

export default {
  name: 'PageIndex',
  components: {
    JokeCard
  }
}
</script>
