<template>
  <div class="pl-160">
    <div class="pt-118  grid grid-cols-2 mr-24">
      <div class="pt-83">
        <h2 class="text-gray-600 uppercase text-16px font-bold leading-10">
          Connect smarter. network faster
        </h2>
        <div class="leading-65px text-64px font-bold mb-5">
          <span class="text-white"> Make better </span>
          <span class="text-bizz-orange"> Connections </span>
        </div>
        <h5 class="text-gray-500 mb-10 font-normal pr-20">
          Bizzcard is a smart business card that helps you build and nurture new
          connections.
        </h5>
        <div class="flex">
          <div>
         <LandingPageDownloadButton />
          </div>
          <div>
            <button
              class="
                ml-4
                rounded-64px
                border-2 border-white
                px-6
                py-3
                font-bold
                text-lg text-white
                hover:bg-white
                hover:text-black
              
                duration-300
                hover:transform
                hover:scale-105
                transition-all
              "
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div class="flex justify-end text-white">
        <img src="/Hero-Fitness.png" alt="hero-fitnes" claas="h-64" />
      </div>
    </div>

    <div class='my-10'>
      <button class="rounded-full w-12 h-12 border-2 flex justify-center items-center border-gray-600">
        <nuxt-link to="#"
          ><svg
            width="9"
            height="14"
            viewBox="0 0 9 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="animate-bounce"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.73479 9.09094C9.1094 9.49676 9.0841 10.1294 8.67828 10.504L5.17832 13.7348C4.79526 14.0884 4.20482 14.0884 3.82176 13.7348L0.321719 10.504C-0.084104 10.1294 -0.109414 9.49677 0.265188 9.09095C0.639789 8.68513 1.27245 8.65982 1.67827 9.03442L3.50003 10.716L3.50003 1C3.50003 0.447715 3.94775 -1.01632e-07 4.50003 -1.967e-07C5.05232 -2.91768e-07 5.50003 0.447715 5.50003 1L5.50003 10.716L7.32171 9.03443C7.72753 8.65982 8.36019 8.68513 8.73479 9.09094Z"
              fill="#777E91"
            />
          </svg>
        </nuxt-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
