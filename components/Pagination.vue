<template>
  <div class="flex justify-between ">
    <!-- <div v-if="currentPage === 1" :class="disabledStyle">
      SingleBack 
      <span class="hidden sm:inline">First</span>
    </div>

    <nuxt-link
      v-else
      :to="{ name: 'admin-users-page-page', params: { page: 1 } }"
      :class="buttonStyles"
    >
      DoubleBack 
      <span class="hidden sm:inline">First</span>
    </nuxt-link> -->

    <div v-if="currentPage === 1" :class="disabledStyle">
     <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.70711 9.70711C5.31658 10.0976 4.68342 10.0976 4.2929 9.70711L0.292894 5.70711C-0.0976312 5.31658 -0.0976312 4.68342 0.292894 4.29289L4.29289 0.292894C4.68342 -0.0976312 5.31658 -0.0976312 5.70711 0.292894C6.09763 0.683417 6.09763 1.31658 5.70711 1.70711L3.41421 4L15 4C15.5523 4 16 4.44771 16 5C16 5.55228 15.5523 6 15 6L3.41421 6L5.70711 8.29289C6.09763 8.68342 6.09763 9.31658 5.70711 9.70711Z" fill="#9CA3AF"/>
</svg>

      <span class="hidden sm:inline">Previous</span>
    </div>

    <nuxt-link
      v-else
      :to="{ name: 'admin-users-page-page', params: { page: prevPage } }"
      :class="buttonStyles"
    >
     <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.70711 9.70711C5.31658 10.0976 4.68342 10.0976 4.2929 9.70711L0.292894 5.70711C-0.0976312 5.31658 -0.0976312 4.68342 0.292894 4.29289L4.29289 0.292894C4.68342 -0.0976312 5.31658 -0.0976312 5.70711 0.292894C6.09763 0.683417 6.09763 1.31658 5.70711 1.70711L3.41421 4L15 4C15.5523 4 16 4.44771 16 5C16 5.55228 15.5523 6 15 6L3.41421 6L5.70711 8.29289C6.09763 8.68342 6.09763 9.31658 5.70711 9.70711Z" fill="#9CA3AF"/>
</svg>

      <span class="hidden sm:inline">Previous</span>
    </nuxt-link>


      <div class="space-x-6" >
        <span v-for="i in totalPages" :key="i" :class="[i === currentPage ?'border-t-2 border-blue-900' : '', 'px-3 py-4']"> <nuxt-link  :to="{ name: 'admin-users-page-page', params: { page: i } }">{{i}}</nuxt-link>  </span>
      </div>






    <div v-if="currentPage === totalPages" :class="disabledStyle">
     <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.2929 0.292893C10.6834 -0.0976311 11.3166 -0.0976311 11.7071 0.292893L15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.7071 9.70711C11.3166 10.0976 10.6834 10.0976 10.2929 9.70711C9.90238 9.31658 9.90238 8.68342 10.2929 8.29289L12.5858 6H1C0.447716 6 -2.41411e-08 5.55228 0 5C2.41411e-08 4.44772 0.447716 4 1 4H12.5858L10.2929 1.70711C9.90238 1.31658 9.90238 0.683418 10.2929 0.292893Z" fill="#9CA3AF"/>
</svg>
      <span class="hidden sm:inline">Next</span>

    </div>

    <nuxt-link
      v-else
      :to="{ name: 'admin-users-page-page', params: { page: nextPage } }"
      :class="buttonStyles"
    >
     <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.2929 0.292893C10.6834 -0.0976311 11.3166 -0.0976311 11.7071 0.292893L15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.7071 9.70711C11.3166 10.0976 10.6834 10.0976 10.2929 9.70711C9.90238 9.31658 9.90238 8.68342 10.2929 8.29289L12.5858 6H1C0.447716 6 -2.41411e-08 5.55228 0 5C2.41411e-08 4.44772 0.447716 4 1 4H12.5858L10.2929 1.70711C9.90238 1.31658 9.90238 0.683418 10.2929 0.292893Z" fill="#9CA3AF"/>
</svg>
      <span class="hidden sm:inline">Next</span>

    </nuxt-link>

    <!-- <div v-if="currentPage === totalPages" :class="disabledStyle">
      <span class="hidden sm:inline">Last</span>
    DoubleFwd 
    </div>

    <nuxt-link
      v-else
      :to="{ name: 'admin-users-page-page', params: { page: totalPages } }"
      :class="buttonStyles"
    >
      <span class="hidden sm:inline">Last</span>
      DoubleFwd 
    </nuxt-link> -->
  </div>
</template>

<script>

export default {
  name: 'Pagination',

  props: {
    total: {
      type: Number,
      default: 0,
    },
    perPage: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    buttonStyles() {
      return ' rounded px-4 py-1 space-x-2 text-sm bg-white flex justify-center items-center hover:bg-bizz-orange-400 hover:text-white transform duration-500 ease-in-out';
    },
    disabledStyle() {
      return '  px-4 py-1 space-x-2 text-sm bg-white flex justify-center items-center text-gray-300';
    },
    totalPages() {
      return Math.ceil(this.total / this.perPage);
    },
    currentPage() {
      return parseInt(this.$route.params.page) || 1;
    },
    prevPage() {
      return this.currentPage > 1 ? this.currentPage - 1 : 1;
    },
    nextPage() {
      return this.currentPage < this.totalPages
        ? this.currentPage + 1
        : this.totalPages;
    },
  },
};
</script>
