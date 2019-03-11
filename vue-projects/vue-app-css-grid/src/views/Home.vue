<template>
  <div class="home">
    <hello-world :msg="Hello"></hello-world>
    <good-bye-world :msg="goodbye"></good-bye-world>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import GoodByeWorld from "@/components/GoodByeWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    GoodByeWorld
  }
};
</script>

<style>
.home {
  display: grid;
  grid-template-columns: 70% 20%;
  grid-template-rows: 70vh;
  grid-gap: 30px;
  background-color: #2196f3;
  padding: 30px;
}
</style>
