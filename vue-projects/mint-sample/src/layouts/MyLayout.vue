<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />
        <!-- <q-avatar>
          <img src="~assets/mintlogo1.png" style="max-width: 400px; height: 200px;" />
        </q-avatar> -->
        <q-toolbar-title>
          Mint
        </q-toolbar-title>
        <q-space />
        <q-tabs v-model="tab" shrink>
          <q-route-tab name="tab1" label="+Add Accounts" to="/" />
          <q-route-tab name="tab2" label="Settings" to="/" />
          <q-route-tab name="tab4" label="Profile" to="/" />
          <q-route-tab name="tab5" label="Tour" to="/" />
          <q-route-tab name="tab3" label="Log Out" to="/" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MyLayout",

  data() {
    return {
      leftDrawerOpen: false
    };
  }
};
</script>
