<template>
  <div class="py-136 px-160">
    <div class="grid grid-cols-2">
      <div>
        <div class="pt-88px text-64px leading-65px font-bold mb-8">
          <div class="text-white">Create an</div>
          <div class="text-bizz-orange">engaging profile</div>
          <div class="text-white">about yourself</div>
        </div>

        <div
          class="max-w-448px font-light text-2xl text-bizz-faint-white mb-14"
        >
          Create an engaging and memorable profile for the people you meet while
          saving your contact information directly into their phone.
        </div>
        <LandingPageDownloadButton />
      </div>
      <div class="pr-73px">
        <div class="relative">
         
          <div class="absolute right-0">
            <img src="@/assets/images/img.png" alt="phone" />
             <div class="absolute  lamp z-10">
            <img src="@/assets/images/lamp-left.png" alt="phone" />
          </div>
          <div class="absolute clock -right-1/2 z-10">
            <img src="@/assets/images/clock-left.png" alt="phone" />
          </div>
          </div>

          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.lamp {
  left : -300px;
  top: 150px;
}
.clock {
  right : -250px;
  top: 200px;
}

</style>
