<template>
  <section id="footer">
    <div
      class="
        lg:border-b lg:border-t
        border-bizz-faint-white
        px-5
        lg:px-160
        mt-5
        lg:mt-136
        grid
        lg:grid-cols-3
        text-white
      "
    >
      <div
        class="
          flex
          lg:pt-80px lg:pb-60px
          py-5
          border-b
          lg:border-b-0 lg:border-r
          border-bizz-faint-white
        "
      >
        <div class="lg:pr-88px hidden lg:block">
          <nuxt-link to="/">
            <svg
              width="29"
              height="32"
              viewBox="0 0 29 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.9469 8.02899L12.8626 15.156C12.5404 15.319 12.3373 15.6495 12.3373 16.0106V30.4251C12.3373 31.1432 13.0981 31.6059 13.7357 31.2756L27.82 23.9789C28.1378 23.8143 28.3372 23.4863 28.3372 23.1285V8.88363C28.3372 8.16959 27.5841 7.7066 26.9469 8.02899Z"
                fill="#FF9A51"
              />
              <path
                opacity="0.7"
                d="M10.3435 21.5162V16.3971C10.3435 15.3703 10.9125 14.4334 11.8112 13.9824L16.0299 11.8616V7.70566C16.0299 7.55532 15.945 7.41772 15.8125 7.35487L0.535948 0.0359554C0.490892 0.0145893 0.442007 0.00247765 0.392187 0.000335693C0.342367 -0.00180626 0.292624 0.00606728 0.2459 0.023489C0.199177 0.0409107 0.156422 0.0675278 0.120167 0.101765C0.0839122 0.136002 0.0548931 0.177166 0.0348268 0.222816C0.0116515 0.274345 -0.000222474 0.330242 3.15625e-06 0.386744V16.3776C3.15625e-06 16.5288 0.0849389 16.6664 0.219137 16.7292L10.3435 21.5162Z"
                fill="#D8611E"
              /></svg
          ></nuxt-link>
        </div>
        <div class="space-y-6 text-sm font-semibold text-bizz-faint-white">
          <nuxt-link to="/faq">FAQ</nuxt-link>
          <nuxt-link to="/">Blog</nuxt-link>
          <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link>
          <nuxt-link to="/tos">Terms and Conditions</nuxt-link>
          <nuxt-link to="/">Contact us</nuxt-link>
        </div>
      </div>
      <div
        class="
          lg:pl-88px
          flex flex-col
          lg:pt-80px lg:pb-60px
          py-5
          border-b
          lg:border-b-0 lg:border-r
          border-bizz-faint-white
        "
      >
        <div class="font-black uppercase text-white mb-10">Contact</div>
        <div class="font-light space-y-2">
          <div>43252 Borer Mountains</div>
          <div>Zackerychester</div>
          <div>Bahamas</div>
          <div>732-528-4945</div>
        </div>
      </div>

      <div
        class="
          lg:max-w-342px lg:pl-88px lg:pt-80px lg:pb-60px
          py-5
          flex flex-col
        "
      >
        <div class="font-black uppercase text-white mb-10">Newsletter</div>
        <div class="font-light mb-4">
          <p>
            Subscribe our newsletter to get more free networking tips and
            resource.
          </p>
        </div>
        <div
          class="
            w-full
            flex
            items-center
            rounded-3xl
            border-2 border-bizz-faint-white
          "
        >
          <div class="w-10/12">
            <input
              type="text"
              class="
                mr-3
                border-0
                outline-none
                focus:border-0 focus:outline-none
                bg-transparent
              "
              placeholder="Enter You Email"
            />
          </div>
          <div class=" flex justify-end w-2/12">
            <button
              class="
                bg-bizz-orange-900
                grid
                place-content-center
                w-8
                h-8
                rounded-full
              "
            >
              <svg
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.09094 0.2652C9.49676 -0.109407 10.1294 -0.0841039 10.504 0.321715L13.7348 3.82168C14.0884 4.20473 14.0884 4.79517 13.7348 5.17824L10.504 8.67828C10.1294 9.0841 9.49677 9.10941 9.09095 8.73481C8.68513 8.3602 8.65982 7.72755 9.03442 7.32172L10.716 5.49996L0.999999 5.49996C0.447714 5.49996 -7.64154e-07 5.05224 -7.86799e-07 4.49996C-8.09444e-07 3.94768 0.447714 3.49996 0.999999 3.49996L10.716 3.49996L9.03443 1.67828C8.65982 1.27246 8.68513 0.639806 9.09094 0.2652Z"
                  fill="#FCFCFD"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        flex
        text-center
        lg:text-left lg:flex-row
        flex-col
        justify-between
        lg:items-center
        py-5
        lg:px-160
        px-5
        text-bizz-faint-white text-md
        font-lighter
      "
    >
      <div>
        Copyright &copy; {{ getYear() }} Growstack Enterprises LTD. All rights
        reserved
      </div>
      <div class="flex lg:mb-0 mb-4 order-first lg:order-last space-x-8">
        <div>
          <svg-icon name="facebook" class="w-5 h-5" />
        </div>
        <div>
          <svg-icon name="twitter" class="w-5 h-5" />
        </div>
        <div>
          <svg-icon name="instagram" class="w-5 h-5" />
        </div>
        <div>
          <svg-icon name="dribble" class="w-5 h-5" />
        </div>
        <div>
          <svg-icon name="behance" class="w-5 h-5" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    getYear() {
      const date = new Date()
      return date.getFullYear()
    },
  },
}
</script>
