<template>
  <mdb-container>
    <mdb-row>
      <mdb-col col="12" sm="6" lg="8" style="background-color: grey">col="12" sm="6" lg="8"</mdb-col>
      <mdb-col col="6" lg="4" style="background-color: magenta">col="6" lg="4"</mdb-col>
    </mdb-row>
    <mdb-row>
      <mdb-col style="background-color: coral" col="6" sm="4">col="6" sm="4"</mdb-col>
      <mdb-col style="background-color: blue" col="6" sm="4">col="6" sm="4"</mdb-col>
      <mdb-col style="background-color: green" col="6" sm="4">col="6" sm="4"</mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
export default {
  components: {
    mdbContainer,
    mdbRow,
    mdbCol
  }
};
</script>

