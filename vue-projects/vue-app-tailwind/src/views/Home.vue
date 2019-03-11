<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div
      class="bg-purple text-white sm:bg-green md:bg-blue md:text-yellow lg:bg-red xl:bg-orange ..."
    >
      Test
    </div>
    <div class="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
      <div class="sm:flex sm:items-center px-6 py-4">
        <img
          class="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
          src="https://avatars0.githubusercontent.com/u/1006420?s=460&v=4"
          alt=""
        />
        <div class="text-center sm:text-left sm:flex-grow">
          <div class="mb-4">
            <p class="text-xl leading-tight">Jerrie Pelser</p>
            <p class="text-sm leading-tight text-grey-dark">
              Freelance software developer and blogger
            </p>
          </div>
          <div>
            <button
              class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white"
            >
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
