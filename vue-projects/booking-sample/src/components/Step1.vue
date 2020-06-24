<template>
  <!-- <div class="flex flex-center column">
    <q-form @submit="onSubmit" >
      <div class="row justify-center">
        <h4>Booking Start</h4>
      </div>
      <div class="row justify-center">
        <div class="col-12">
          <h6>Number of bedrooms</h6>
        </div>
        <div class="col-10">
          <q-btn-toggle
            v-model="numBedrooms"
            spread
            toggle-color="primary"
            size="lg"
            :options="[
              {label: 'One', value: 'one'},
              {label: 'Two', value: 'two'},
              {label: 'Three', value: 'three'}
            ]"
          />
        </div>
        <div class="col-12">
          <h6>Number of bathrooms</h6>
        </div>
        <div class="col-10">
          <q-btn-toggle
            v-model="numBathrooms"
            spread
            toggle-color="primary"
            size="lg"
            :options="[
              {label: 'One', value: 'one'},
              {label: 'Two', value: 'two'},
              {label: 'Three', value: 'three'}
            ]"
          />
        </div>
        <div class="col-12">
          <h6>Type of booking</h6>
        </div>
        <div class="col-10">
          <q-btn-toggle
            v-model="typeBooking"
            spread
            toggle-color="primary"
            size="lg"
            :options="[
              {label: 'One', value: 'one'},
              {label: 'Two', value: 'two'},
              {label: 'Three', value: 'three'}
            ]"
          />
        </div>

      </div>
    </q-form>
  </div> -->
  <div class="q-pa-md">
    <div class="flex flex-center column">
      <div class="row justify-center">
        <h5 class="q-pa-none q-ma-none">Booking Start</h5>
      </div>
      <div class="row justify-center">
        <div class="col-12 text-subtitle1 q-pt-md">
          Number of bedrooms
        </div>
        <div class="col-10">
          <q-btn-toggle
            v-model="numBedrooms"
            spread
            toggle-color="primary"
            size="lg"
            :options="[
              {label: 'Studio', value: 'studio'},
              {label: 'One', value: 'one'},
              {label: 'Two', value: 'two'},
              {label: 'Three', value: 'three'},
              {label: 'Four', value: 'four'},
              {label: 'Five', value: 'five'}
            ]"
          />
        </div>
        <div class="col-12 text-subtitle1 q-pt-md">
          Number of bathrooms
        </div>
        <div class="col-10">
          <q-btn-toggle
            v-model="numBathrooms"
            spread
            toggle-color="primary"
            size="lg"
            :options="[
              {label: 'One', value: 'one'},
              {label: 'Two', value: 'two'},
              {label: 'Three', value: 'three'},
              {label: 'Four', value: 'four'},
              {label: 'Five', value: 'five'}
            ]"
          />
        </div>
        <div class="col-12 text-subtitle1 q-pt-md">
          Clean Type
        </div>
        <div class="col-10">
          <q-btn-toggle
            v-model="cleanType"
            spread
            toggle-color="primary"
            size="lg"
            :options="[
              {label: 'Standard', value: 'standard'},
              {label: 'Standard Plus', value: 'standard_plus'},
              {label: 'Deep Clean', value: 'deep'},
              {label: 'Moving In/Out', value: 'moving'}
            ]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step1',
  data () {
    return {
      numBedrooms: null,
      numBathrooms: null,
      cleanType: null,
      models: [
        {dataModel: null, label: 'Number of Bedrooms',}
      ]
    }
  }
}
</script>

<style scoped>
.step-title {
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: normal;
  border-style: dotted;
}

div.q-btn {
  border-color: #696;
  border-style: solid;
}

.button { 
    color:#050; 
    font: old 84% 'trebuchet ms',helvetica,sans-serif; 
    background-color:#fed; 
    border:1px solid; 
    border-color: #696 #363 #363 #696; 
}

</style>