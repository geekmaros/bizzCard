<template>
  <div class="px-5 lg:pl-160 py-5 lg:py-136 text-white">
    <div class="flex flex-col lg:flex-row">
      <div class="lg:w-5/12 pt-118 flex flex-col space-y-8">
        <div class="text-white text-3xl lg:text-5xl leading-10 lg:leading-56px font-bold">
          All your connections, in your pocket
        </div>
        <div class="text-bizz-faint-white text-2xl">
          Paper business cards after COVID19? Don’t even think about it. Digital
          cards can easily be shared with anyone in a contactless way while
          saving trees at the same time.
        </div>
        <div class="flex flex-col space-y-4 mb-12">
          <div class="flex items-center">
            <span><svg-icon name="mark" class="w-14px h-10px mr-17" /></span>
            <span class="text-bizz-faint-white text-md font-bold"
              >Share anything instantly</span
            >
          </div>
          <div class="flex items-center">
            <span><svg-icon name="mark" class="w-14px h-10px mr-17" /></span>
            <span class="text-bizz-faint-white text-md font-bold"
              >Company branding</span
            >
          </div>
          <div class="flex items-center">
            <span><svg-icon name="mark" class="w-14px h-10px mr-17" /></span>
            <span class="text-bizz-faint-white text-md font-bold"
              >Manage your contacts</span
            >
          </div>
          <div class="flex items-center">
            <span><svg-icon name="mark" class="w-14px h-10px mr-17" /></span>
            <span class="text-bizz-faint-white text-md font-bold"
              >Profile analytics</span
            >
          </div>
          <div class="flex items-center">
            <span><svg-icon name="mark" class="w-14px h-10px mr-17" /></span>
            <span class="text-bizz-faint-white text-md font-bold"
              >Share anything instantly</span
            >
          </div>
          <div class="flex items-center">
            <span><svg-icon name="mark" class="w-14px h-10px mr-17" /></span>
            <span class="text-bizz-faint-white text-md font-bold"
              >Intuitive and clean design</span
            >
          </div>
        </div>
        <div class="flex">
          <div>
            <button
              class="
                rounded-64px
                bg-bizz-orange-900
                px-6
                py-3
                font-bold
                text-lg text-gray-900
                button
                flex
                items-center
              "
            >
              Download App
            </button>
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
                hover:bg-white hover:text-black
                duration-300
                hover:transform hover:scale-105
                transition-all
              "
            >
              View FAQ
            </button>
          </div>
        </div>
      </div>
      <div class="hidden lg:block w-full lg:w-7/12 lg:pr-88px">
        <div class="relative">
          <div class="absolute left_phone">
            <img src="@/assets/images/left_phone.png" alt="left_phone" />
            <div class="absolute ball">
              <img src="@/assets/images/ball.png" alt="ball" />
            </div>
          </div>
          <div class="absolute right_phone">
            <img src="@/assets/images/right_phone.png" alt="right_phone" />
            <div class="absolute apple">
              <img src="@/assets/images/apple.png" alt="apple" />
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
.left_phone {
  left: 50%;
  top: 50%;
  z-index: 5;
  transform: translate(-60%, 50%);
    animation: move-left_phone 4s infinite alternate;

}
.right_phone {
  left: 50%;
  top: 50%;
  transform: translate(5%, 75%);
  animation: move-right_phone 4s infinite alternate;

}
.ball {
  right: 0;
  top: 0;
  z-index: 10;
  transform: translate(-40%, 40%);
  animation: move-ball 4s infinite alternate;
}
.apple {
  left: 50%;
  top: 0;
  z-index: 10;
  transform: translate(60%, 70%);
    animation: move-apple 4s infinite alternate;

}

@keyframes move-ball {
  from {
   transform: translate(-40%, 40%);
  }
  to {
   transform: translate(-40%, 200%);
      // transform:  rotateZ(309deg);

  }
}
@keyframes move-apple {
  from {
  transform: translate(40%, 70%);
  }
  to {
   transform: translate(-180%, 70%);
  //  transform:  rotateY(360deg);
  }
}
@keyframes move-right_phone {
  from {
  transform: translate(5%, 75%);
  }
  to {
   transform: translate(15%, 75%);
  }
}
@keyframes move-left_phone {
  from {
   transform: translate(-60%, 50%);;
  }
  to {
   transform: translate(-75%, 40%);
      // transform:  rotateZ(10deg);

  }
}
</style>
