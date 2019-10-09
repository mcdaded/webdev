<template>
  <div class="q-pa-0">
    <q-toolbar
      class="shadow-2 rounded-borders"
      style="background-color: #f7f7f7"
    >
      <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
      <q-tabs v-model="tab" shrink>
        <q-tab name="tab1" label="OVERVIEW" />
        <q-tab name="tab2" label="TRANSACTIONS" />
        <q-tab name="tab3" label="CREDIT SCORE" />
        <q-tab name="tab3" label="BILLS" />
        <q-tab name="tab3" label="BUDGETS" />
        <q-tab name="tab3" label="GOALS" />
        <q-tab name="tab3" label="TRENDS" />
        <q-tab name="tab3" label="INVESTMENTS" />
        <q-tab name="tab3" label="WAYS TO SAVE" />
        <q-tab name="tab3" label="WAYS TO EARN" />
      </q-tabs>
    </q-toolbar>
  </div>
</template>

<script>
export default {
  name: "MintToolbar",
  data() {
    return {};
  }
};
</script>
