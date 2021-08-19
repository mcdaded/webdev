<template>
  <div class="items-center px-5 py-12 lg:px-20">
    <div
      class="
        w-full
        modal-glass
        px-5
        mx-auto
        border
        rounded-lg
        shadow-xl
        lg:px-0
        text-blueGray-500
        lg:w-full
      "
      aria-hidden="false"
      aria-describedby="modalDescription"
      role="dialog"
    >
      <div class="flex items-center justify-end px-6 py-4">
        <button
          class="
            p-1
            transition-colors
            duration-200
            transform
            rounded-md
            hover:bg-opacity-25 hover:bg-blueGray-600
            focus:outline-none
          "
          type="button"
          aria-label="Close"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-circle-x"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="12" r="9"></circle>
            <path d="M10 10l4 4m0 -4l-4 4"></path>
          </svg>
        </button>
      </div>
      <div class="flex flex-col w-full mb-12 text-center">
        <h2
          class="
            mb-8
            text-xs
            font-semibold
            tracking-widest
            text-black
            uppercase
            title-font
          "
        >
          a great header right here
        </h2>
        <h1
          class="
            mx-auto
            mb-8
            text-2xl
            font-semibold
            leading-none
            tracking-tighter
            text-black
            lg:w-1/2
            sm:text-4xl
            title-font
          "
        >
          A Long headline to switch your visitors into users.
        </h1>
        <a
          class="mx-auto text-sm font-semibold text-blue-600 hover:text-black"
          title="read more"
        >
          Read more about the offer »
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
}
</script>

<style>
.modal-glass {
  background: rgba(61, 179, 168, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
