<template>
  <div id="navbar" class="navbar">
    <b-nav pills>
      <b-navbar-brand pl-5 href="#">NavBar</b-navbar-brand>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
.navbar {
  background-color: #383ac7;
  float: none;
  vertical-align: top;
  text-align: center;
}

.nav-item {
  background-color: white;
}
</style>
