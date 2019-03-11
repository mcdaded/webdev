<template>
  <!--Not setting the size of this col as the other will resize around-->
  <b-col cols="4" id="forecast-calculator" class="forecast-calculator">
    <h1>Forecast Calculator</h1>
  </b-col>
</template>

<script>
export default {
  name: "ForecastCalculator",
  props: {
    msg: String
  }
};
</script>

<style scoped>
.forecast-calculator {
  background-color: aquamarine;
  height: 100px;
}
</style>
