<template>
<section class='h-screen font-serif overflow-x-hidden overflow-y-hidden relative  grid grid-cols-12'>
  <SideBar class='col-span-2'/>
  <Nuxt keep-alive class='col-span-10 overflow-y-scroll'/>
</section>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>

<style scoped>

</style>
