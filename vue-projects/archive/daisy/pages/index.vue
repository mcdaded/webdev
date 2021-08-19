<template>
  <div class="container py-24">
    <div>
      <!-- <div class="hero min-h-screen bg-base-200">
        <div class="flex-col hero-content lg:flex-row-reverse">
          <img
            src="https://picsum.photos/id/1005/600/600"
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
            <p class="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div> -->
      <h1 class="text-5xl">daisy</h1>

      <label for="my-modal-2" class="btn btn-primary modal-button"
        >open modal</label
      >
      <input type="checkbox" id="my-modal-2" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <p>
            Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut
            adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea
            quasi eligendi. Saepe velit autem minima.
          </p>
          <div class="modal-action">
            <label for="my-modal-2" class="btn btn-primary">Accept</label>
            <label for="my-modal-2" class="btn">Close</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data: () => ({
    showModal: false,
  }),
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
