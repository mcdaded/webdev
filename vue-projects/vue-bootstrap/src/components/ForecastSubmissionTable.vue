<template>
  <!--Not setting the size of this col as the other will resize around-->
  <b-col id="forecast-submission-table" class="forecast-submission-table">
    <h1>Forecast Submission Table</h1>
  </b-col>
</template>

<script>
export default {
  name: "ForecastSubmissionTable",
  props: {
    msg: String
  }
};
</script>

<style scoped>
.forecast-submission-table {
  background-color: bisque;
}
</style>
