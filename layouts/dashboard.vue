<template>
<section class='h-screen relative font-serif overflow-x-hidden overflow-y-hidden   grid grid-cols-12'>
    <div @click="toggle" v-if="backdrop" class='backdrop z-20 cursor-pointer absolute inset-0 b z-2 bg-black bg-opacity-40' ></div>
  <SideBar   :class="[showAside ? 'isOpen' : null, 'sidebar']"  class='fixed transition-all duration-300 ease-in  md:relative z-50 w-12/12 md:w-full md:col-span-3 lg:col-span-2'/>
  <Nuxt keep-alive class='col-span-12 md:col-span-9 lg:col-span-10 overflow-y-scroll'/>
  <button @click="toggle" class='menu-toggle md:hidden z-10 bg-white rounded-full shadow-lg p-2 absolute top-0 right-0 mr-5 mt-4'>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
</section>
</template>

<script>
export default {
  name: 'Dashboard',
  data(){
    return{
      showAside: false,
      backdrop : false
    }
  },
  methods: {
    toggle(){
      this.showAside = !this.showAside
       this.backdrop =  !this.backdrop
    }
  },
  // watch: {
  //   $route() {
  //     const deviceChecker = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  //     if (deviceChecker){
  //       this.showAside = false;
  //     }

  //   },
  // },
  // mounted(){
  //   if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  //     this.showAside = false
  //   }
  // }
}
</script>

<style scoped lang='scss'>

@media screen and (max-width: 768px) {
 .sidebar {
    left: -100vw;
    transition: all 0.3s linear;
    &.isOpen {
      left: 0;
    }
  }
}
</style>
