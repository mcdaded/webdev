<template>
  <div class="min-w-screen min-h-screen bg-black text-white">
    <div class="max-w-5xl mx-auto flex">
      <sidebar />
      <Content class="prose md:prose-lg content-container text-white py-12" />
    </div>
  </div>
</template>

<script>
import sidebar from "../components/sidebar.vue";

export default {
  name: "Layout",
  components: {
    sidebar,
  },
};
</script>

<style></style>
