<template>
  <div id="app">
    <b-navbar fixed="top" type="dark" variant="primary" toggleable>
      <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_dropdown_collapse">
        <b-navbar-nav>
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="/scores">Scores</b-nav-item>
          <b-nav-item href="/scores">Backtesting</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-container class="page-spacing">
      <br><br>
    </b-container>
    <b-container class="page-content">
      <b-row>
        <b-col></b-col>
        <b-col cols="12"><router-view/></b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
