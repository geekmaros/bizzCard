<template>
  <div class="bg-bizz-dark-brown">
    <LandingPageHeader />

    <div class="px-160 pt-136 pb-20">
      <div class="flex flex-col text-center items-center">
        <div class="max-w-640px">
          <div class="uppercase font-bold text-gray-700 text-sm mb-3">
            learn how to get started
          </div>
          <div class="text-4xl text-white font-bold mb-5">
            Frequently Asked Questions
          </div>
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

    <div class="px-160 text-center text-white">
      <div class="flex justify-center items-center space-x-4 mb-16">
        <div    @click="handleTab(`general`)"     :class="[currentTab === 'general' ? 'bg-gray-800 px-2 py-1 text-white' : 'text-bizz-faint-white', ' rounded-2xl cursor-pointer']" >
          General
        </div>
        <div  @click="handleTab(`app`)" :class="[currentTab === 'app' ? 'bg-gray-800 px-2 py-1 text-white' : 'text-bizz-faint-white', ' rounded-2xl cursor-pointer']">App</div>
        <div  @click="handleTab(`subscription`)" :class="[currentTab === 'subscription' ? 'bg-gray-800 px-2 py-1 text-white' : 'text-bizz-faint-white', ' rounded-2xl cursor-pointer']">
          Subscription
        </div>
        <div  @click="handleTab(`business`)" :class="[currentTab === 'business' ? 'bg-gray-800 px-2 py-1 text-white' : 'text-bizz-faint-white', ' rounded-2xl cursor-pointer']">
          For Business
        </div>
      </div>

      <div
        v-for="faq in faqArray"
        :key="faq.id"
        class="
          cursor-pointer
          mx-auto
          py-5
          border-gray-500 border-t
          flex flex-col
        "
        @click="() => handleActiveFaq(faq.id)"
      >
        <div class="">
          
            <div
              class=" flex justify-between text-white text-18px font-bold"
            >
              <div>
                {{ faq.question }}
              </div>
              <div v-if="faq.isOpen">
                <svg-icon name="arrow-down" class="h-6 w-6 transform rotate-180" />
              </div>
              <div v-else>
                <svg-icon name="arrow-down" class="h-6 w-6" />
              </div>
            </div>
       
          <div
            :class="[faq.isOpen ? 'text-left block mt-2 text-sm  text-bizz-faint-white' : 'hidden', 'text-gray-400']"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>

    <LandingPageCarousel />
    <LandingPageFooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
        currentTab : 'general',
      isActive: false,
      faqArray: [
        {
          id: 1,
          question: 'How do I register on Bizzcard',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, commodo id eros, adipiscing est venenati s velit lorem. Mauris integer feugiat dolor sceleris que porttitor sagittis senectus commodo habitas se. Consequat netus commodo massa urna, vulpu tate pellentesque ultrices rhoncus rutrum. Nam eni m vestibulum blandit neque morbi.',
          isOpen: false,
        },
        {
          id: 2,
          question: 'How old does my child need to be to participate in class?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, commodo id eros, adipiscing est venenati s velit lorem. Mauris integer feugiat dolor sceleris que porttitor sagittis senectus commodo habitas se. Consequat netus commodo massa urna, vulpu tate pellentesque ultrices rhoncus rutrum. Nam eni m vestibulum blandit neque morbi.',
          isOpen: false,
        },
        {
          id: 3,
          question: 'Do I have to be a member to take class?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, commodo id eros, adipiscing est venenati s velit lorem. Mauris integer feugiat dolor sceleris que porttitor sagittis senectus commodo habitas se. Consequat netus commodo massa urna, vulpu tate pellentesque ultrices rhoncus rutrum. Nam eni m vestibulum blandit neque morbi.',
          isOpen: false,
        },
        {
          id: 4,
          question: 'Can I join a class once it’s in session?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, commodo id eros, adipiscing est venenati s velit lorem. Mauris integer feugiat dolor sceleris que porttitor sagittis senectus commodo habitas se. Consequat netus commodo massa urna, vulpu tate pellentesque ultrices rhoncus rutrum. Nam eni m vestibulum blandit neque morbi.',
          isOpen: false,
        },
        {
          id: 5,
          question: 'Do I need to buy a yoga mat, towel, or equipment?',
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
    handleTab(tab){
        this.currentTab = tab
    }
  },
}
</script>

<style scoped></style>
