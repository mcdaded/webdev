<template>
  <q-page>
    <div class="row justify-center">
      <div class="col-md-12 col-lg-8">
        <Reservation />
      </div>
    </div>
  </q-page>
</template>

<script>
import Reservation from "components/Reservations.vue"

export default {
  name: 'PageIndex',
  components: {
    Reservation,
  }
}
</script>
