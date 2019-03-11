<template>
  <div class="home">
    <b-container>
      <b-row>
        <forecast-submission-table></forecast-submission-table>
        <forecast-calculator></forecast-calculator>
      </b-row>
      <b-row>
        <b-col>
          <HelloWorld msg="Welcome to Your Vue.js App" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ForecastCalculator from "@/components/ForecastCalculator.vue";
import ForecastSubmissionTable from "@/components/ForecastSubmissionTable.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    ForecastCalculator,
    ForecastSubmissionTable
  }
};
</script>
