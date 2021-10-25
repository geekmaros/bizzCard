<template>
  <div
    class="
      py-5
      lg:py-136
      px-8
      lg:px-160
      flex flex-col
      justify-center
      items-center
    "
  >
    <div class="text-xl md:text-5xl mb-5 text-white font-bold ">How it work</div>
    <div class="text-lg text-white font-normal mb-20">
      Bizzcard is a smart business card that helps you build and nurture new
      connections.
    </div>
    <div class="hidden lg:flex justify-center items-center space-x-4 mb-20 ">
      <svg-icon name="downloadstep" class="w-20 h-20" />
      <svg-icon name="connector" class="w-40 h-3" />

      <svg-icon name="keystep" class="w-20 h-20" />
      <svg-icon name="connector" class="w-40 h-3" />

      <svg-icon name="badgestep" class="w-20 h-20" />
      <svg-icon name="connector" class="w-40 h-3" />
      <svg-icon name="clockstep" class="w-20 h-20" />
    </div>

    <div class="grid lg:grid-cols-4 gap-8">
      <div class="text-center flex flex-col justify-center items-center">
        <div class="lg:hidden">
          <svg-icon name="downloadstep" class="w-20 h-20 mb-3" />
        </div>
        <div>
          <h6 class="text-bizz-faint-white text-sm font-bold mb-8">Step 1</h6>
        </div>
        <div class="text-white font-bold text-lg mb-4">
          Download Bizzcard App
        </div>
        <div class="text-white font-light text-md">
          Bizzcard enables you to grow your professional relationships and
          improve sales efficiency.
        </div>
      </div>
      <div class="text-center flex flex-col justify-center items-center">
          <div class="lg:hidden">
          <svg-icon name="keystep" class="w-20 h-20 mb-3" />
        </div>
        <h6 class="text-bizz-faint-white text-sm font-bold mb-8">Step 2</h6>
        <div class="text-white font-bold text-lg mb-4">
          Customize Your Cards
        </div>
        <div class="text-white font-light text-md">
          Add your personal &amp; contact info, social profiles, professional
          experience and achievements through onboarding forms
        </div>
      </div>
      <div class="text-center flex flex-col justify-center items-center">
          <div class="lg:hidden">
          <svg-icon name="badgestep" class="w-20 h-20 mb-3" />
        </div>
        <h6 class="text-bizz-faint-white text-sm font-bold mb-8">Step 3</h6>
        <div class="text-white font-bold text-lg mb-4">
          Share Business Cards
        </div>
        <div class="text-white font-light text-md">
          Fitness Pro tracks your workouts, get better results, and be the
          best version of you.
        </div>
      </div>
      <div class="text-center flex flex-col justify-center items-center">
          <div class="lg:hidden">
          <svg-icon name="clockstep" class="w-20 h-20 mb-3" />
        </div>
        <h6 class="text-bizz-faint-white text-sm font-bold mb-8">Step 4</h6>
        <div class="text-white font-bold text-lg mb-4">Stay Connected</div>
        <div class="text-white font-light text-md">
          All of your business contacts will be stored within our app, making
          contact management effortless.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
