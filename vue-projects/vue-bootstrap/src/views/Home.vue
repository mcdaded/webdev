<template>
  <div class="home">
    <b-container style="height: 420px; background-color: rgba(0,0,255,.1)">
      <b-row>
        <b-col>
          <b-button v-on:click="click()">
            Click for Calculator
          </b-button>
        </b-col>
      </b-row>
      <b-row>
        <forecast-submission-table></forecast-submission-table>
        <forecast-calculator v-if="showSide"></forecast-calculator>
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
  },
  data: function() {
    return {
      clicked: true
    };
  },
  methods: {
    click() {
      if (this.clicked === true) {
        this.clicked = false;
      } else {
        this.clicked = true;
      }
    }
  },
  computed: {
    showSide() {
      return this.clicked;
    }
  }
};
</script>
