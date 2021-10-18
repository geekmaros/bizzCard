<template>
  <div class="bg-bizz-dark-brown">
    <LandingPageHeader />

    <div class="px-160 pt-136 pb-20">
     <div class=" flex flex-col
          text-center
         items-center
         
         ">
         
      <div
        class="
          max-w-640px
         
        "
      >
        <div class="uppercase font-bold text-gray-700 text-sm mb-3">
          learn how to get started
        </div>
        <div class="text-4xl text-white font-bold mb-5">Terms and Condition</div>
        <div class="font-light text-white">
          Join Bizzcard community now to get free updates and also alot of
          freebies are waiting for you or
          <span class="text-bizz-orange-400">
            <nuxt-link to="#">Contact Support</nuxt-link>
          </span>
        </div>
      </div>
     </div>
    </div>

    <div class='px-160 text-center text-white '>
        <div class="flex justify-center items-center space-x-4 mb-16">
            <div class="rounded-2xl cursor-pointer bg-gray-800 px-2 py-1">General</div>
            <div class="rounded-2xl cursor-pointer bg-gray-800 px-2 py-1">App</div>
            <div class="rounded-2xl cursor-pointer bg-gray-800 px-2 py-1">Subscription</div>
            <div class="rounded-2xl cursor-pointer bg-gray-800 px-2 py-1">For Business</div>
        </div>





<div
        v-for="faq in faqArray"
        :key="faq.id"
        class="
          cursor-pointer
          mx-auto
          py-5
          border-gray-500 border-b
          flex
          flex-col
        "
        @click="() => handleActiveFaq(faq.id)"
      >
        <div class=" ">
          <div class="text-black mb-2 flex">
            <div v-if="faq.isOpen">
              <svg-icon name="expand-button" class="h-6 w-6"></svg-icon>
            </div>
            <div v-else>
              <svg-icon name="collapse-button" class="h-6 w-6"></svg-icon>
            </div>

            <div class="ml-5 flex justify-between text-white text-xl font-medium">
            <div>
                  {{ faq.question }}
            </div>
            <div>
                <svg-icon name="arrow-down" />
            </div>
            </div>
          </div>
          <div
            :class="[faq.isOpen ? 'block' : 'hidden', 'ml-11 text-gray-500']"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>



    </div>
    <LandingPageFooter />
  </div>
</template>


<script>
export default {
  data() {
    return {
      isActive: false,
      faqArray: [
        {
          id: 1,
          question: 'Where is Egbian College of Science and Technology?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, commodo id eros, adipiscing est venenati s velit lorem. Mauris integer feugiat dolor sceleris que porttitor sagittis senectus commodo habitas se. Consequat netus commodo massa urna, vulpu tate pellentesque ultrices rhoncus rutrum. Nam eni m vestibulum blandit neque morbi.',
          isOpen: false,
        },
        {
          id: 2,
          question: 'When is the admission coming out?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, commodo id eros, adipiscing est venenati s velit lorem. Mauris integer feugiat dolor sceleris que porttitor sagittis senectus commodo habitas se. Consequat netus commodo massa urna, vulpu tate pellentesque ultrices rhoncus rutrum. Nam eni m vestibulum blandit neque morbi.',
          isOpen: false,
        },
        {
          id: 3,
          question: 'How much is the admission form?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, commodo id eros, adipiscing est venenati s velit lorem. Mauris integer feugiat dolor sceleris que porttitor sagittis senectus commodo habitas se. Consequat netus commodo massa urna, vulpu tate pellentesque ultrices rhoncus rutrum. Nam eni m vestibulum blandit neque morbi.',
          isOpen: false,
        },
        {
          id: 4,
          question: 'Do I need JAMB to apply?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, commodo id eros, adipiscing est venenati s velit lorem. Mauris integer feugiat dolor sceleris que porttitor sagittis senectus commodo habitas se. Consequat netus commodo massa urna, vulpu tate pellentesque ultrices rhoncus rutrum. Nam eni m vestibulum blandit neque morbi.',
          isOpen: false,
        },
      ],
    }
  },
  methods: {
    handleActiveFaq(id) {
      this.faqArray.map((faq) => {
        if (faq.id === id) {
          faq.isOpen = !faq.isOpen
          return true
        } else {
          faq.isOpen = false
          return true
        }
      })
    },
  },
}
</script>

<style scoped></style>






