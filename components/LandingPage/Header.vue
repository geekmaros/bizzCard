<template>
  <div>
    <div
      class="
        lg:py-56px py-8
        lg:px-160
        px-4
        flex
        lg:justify-between lg:flex-row
        flex-col
      "
    >
      <div class="flex justify-between">
        <div class="pr-10 sm:border-r border-bizz-divider">
          <nuxt-link to="/">
            <svg-icon name="logo" class="w-20 sm:w-136 h-32"
          /></nuxt-link>
        </div>
        <div class="sm:ml-10 text-gray-400 text-sx flex space-x-6">
          <span>Pricing</span>
          <span>Download</span>
          <span>Corporate</span>
        </div>
      </div>

      <div class="mr-4 mt-5 sm:mt-0 flex sm:items-center justify-between lg:justify-center space-x-8">
       <div class="flex space-x-6">
          <span>
          <svg-icon name="facebook" class="w-5 h-5" />
        </span>
        <span>
          <svg-icon name="twitter" class="w-5 h-5" />
        </span>
        <span>
          <svg-icon name="instagram" class="w-5 h-5" />
        </span>
       </div>
        <div>
          <button
            class="
              ml-6
              rounded-3xl
              border-2 border-gray-500
              px-2
              py-1
              text-sm text-white
            "
          >
            Get free trial
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
}
</script>
