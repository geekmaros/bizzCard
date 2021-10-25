<template>
  <div class="py-5 lg:py-136 px-5 lg:px-160">
    <div class="grid lg:grid-cols-2">
      <div>
        <div
          class="
            pt-88px
            text-4xl
            lg:text-64px
            leading-10
            lg:leading-65px
            font-bold
            mb-8
          "
        >
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
       <div class="hidden lg:block lg:pr-73px relative order-first lg:order-last"> 
        <div class="absolute centralize lg:left-1/3">
          <img src="@/assets/images/img.png" alt="phone" />
          <div class="absolute lamp z-10">
            <img src="@/assets/images/lamp-left.png" alt="phone" />
          </div>
          <div class="absolute clock -right-1/2 z-10">
            <img src="@/assets/images/clock-left.png" alt="phone" />
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
  left: -350px;
  top: 150px;
}
.clock {
  right: -230px;
  top: 210px;
}
@media (max-width: 760px) {
  .centralize {
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
