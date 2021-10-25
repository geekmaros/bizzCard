<template>
  <div>
    <button
      class="
        rounded-64px
        bg-bizz-orange
       lg:px-6
                lg:py-3
                px-3
                py-1
                font-bold
                text-base lg:text-lg text-gray-900
        button
        flex
        items-center
      "
    >
      <span>Download App</span>
      <span v-if="arrow === 'arrow'">
        <svg
          class="ml-2 mt-1 w-6"
          width="10"
          height="7"
          viewBox="0 0 10 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.39388 0.843553C6.66443 0.593815 7.0862 0.610684 7.33594 0.88123L9.48978 3.21454C9.72552 3.46991 9.72552 3.86353 9.48979 4.11891L7.33594 6.45227C7.08621 6.72282 6.66443 6.73969 6.39389 6.48996C6.12334 6.24022 6.10646 5.81845 6.3562 5.5479L7.47727 4.33339L0.999918 4.33339C0.631728 4.33339 0.333251 4.03492 0.333251 3.66673C0.333251 3.29854 0.631728 3.00006 0.999918 3.00006L7.47725 3.00006L6.3562 1.78561C6.10647 1.51506 6.12334 1.09329 6.39388 0.843553Z"
            fill="#09040D"
          />
        </svg>
      </span>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    arrow: {
      type: String,
    },
  },
}
</script>
<style scoped lang="scss">
.button:hover {
  background: transparent;
  color: #fff;
  border: 2px solid rgb(255, 174, 81);
  transition: all 200ms ease-in-out;
  svg path {
    fill: #fff;
  }
}
</style>
