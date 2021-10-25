<template>
  <div class="lg:pl-80px px-5 lg:pr-160 py-10 lg:py-136 bg-bizz-black">
    <div class="grid lg:grid-cols-2 gap-12">
      <div class="pt-83 lg:block flex items-center justify-center "> <img src="@/assets/images/phone_mockup.png"  alt="" class="object-contain lg:w-full lg:h-full w-8/12">   </div>

      <div class="bg-bizz-dark-brown rounded-20px p-12">
        <div class="pt-88px text-5xl lg:text-64px lg:leading-65px leading-10 font-bold mb-6">
          <div class="text-white">Next-level</div>
          <div class="text-bizz-orange">Networking</div>
        </div>
        <div class="w-auto lg:max-w-448px font-normal text-lg text-bizz-faint-white mb-12">
          Bizzcard makes growing your business and expanding your network easy
        </div>
        <div class="flex flex-col space-y-6">
          <div class="flex">
            <div class="mx-6">
              <svg-icon name='share' class='w-10 h-10'  />
            </div>
            <div>
              <h1 class="text-lg font-bold text-white mb-1">
                Unlimited Sharing
              </h1>
              <p
                class="
                  text-sm
                  max-w-257px
                  leading-24px
                  font-normal
                  text-bizz-faint-white
                "
              >
                Bizzcard works with any device, no app required! Instantly share
                with anyone by using your profile’s QR code or URL.
              </p>
            </div>
          </div>
          <div class="flex border-2 border-bizz-faint-white rounded-lg py-4">
            <div class="mx-6">
            <svg-icon name='customize' class='w-10 h-10' />
                        </div>
            <div>
              <h1 class="text-lg font-bold text-white mb-1">
                Fully Customizable
              </h1>
              <p
                class="
                  text-sm
                  max-w-257px
                  leading-24px
                  font-normal
                  text-bizz-faint-white
                "
              >
                Easily customize your profile to represent you and your company
                - all on the same page.
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="mx-6">
              <svg-icon name='analysis' class="w-10 h-10" />
                          </div>
            <div class="mb-12">
              <h1 class="text-lg font-bold text-white">Unlimited Sharing</h1>
              <p
                class="
                  text-sm
                  max-w-257px
                  leading-24px
                  font-normal
                  text-bizz-faint-white
                "
              >
                Bizzcard works with any device, no app required! Instantly share
                with anyone by using your profile’s QR code or URL.
              </p>
            </div>
          </div>
        </div>
        <div class="flex justify-end">
          <LandingPageDownloadButton arrow="arrow" class="mb-12" />
        </div>
      </div>
    </div>
  </div>
</template>
