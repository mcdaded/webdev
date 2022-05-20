<template>
  <section class="text-blueGray-700">
    <div
      class="
        container
        flex flex-col
        items-center
        px-5
        py-16
        mx-auto
        md:flex-row
        lg:px-28
      "
    >
      <div
        class="
          flex flex-col
          items-start
          w-full
          pt-0
          mb-16
          text-left
          lg:flex-grow
          md:w-1/2
          xl:mr-20
          md:pr-24 md:mb-0
        "
      >
        <h1
          class="
            mb-8
            text-2xl
            font-black
            tracking-tighter
            text-black
            md:text-5xl
            title-font
          "
        >
          Medium length display headline.
        </h1>
        <p class="mb-8 text-base leading-relaxed text-left text-blueGray-600">
          Deploy your mvp in minutes, not days. WT offers you a a wide selection
          swapable sections for your landing page.
        </p>
        <div class="flex flex-col w-full gap-2 md:justify-start md:flex-row">
          <input
            class="
              flex-grow
              w-full
              px-4
              py-2
              mb-4
              text-base text-black
              transition
              duration-650
              ease-in-out
              transform
              rounded-lg
              lg:w-auto
              bg-blueGray-200
              focus:outline-none focus:border-purple-500
              sm:mb-0
              focus:bg-white focus:shadow-outline focus:ring-2
              ring-offset-current ring-offset-2
            "
            placeholder="Your Email"
            type="email"
            data-np-checked="1"
          />
          <button
            class="
              flex
              items-center
              px-6
              py-2
              mt-auto
              font-semibold
              text-white
              transition
              duration-500
              ease-in-out
              transform
              bg-blue-600
              rounded-lg
              hover:bg-blue-700
              focus:shadow-outline focus:outline-none focus:ring-2
              ring-offset-current ring-offset-2
            "
          >
            Action
          </button>
        </div>
        <p class="w-full mt-2 mb-8 text-sm text-left text-blueGray-600">
          I got 99 problems and blocks ain't one.
        </p>
      </div>
      <div class="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
        <img
          class="object-cover object-center rounded-lg"
          alt="hero"
          src="https://dummyimage.com/720x600/F3F4F7/8693ac"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'hero',
}
</script>

<style></style>
