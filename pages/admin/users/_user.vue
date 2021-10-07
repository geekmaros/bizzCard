<template>
  <section class='pl-41px pt-5 pr-42px pb-10'>
    <header class='flex justify-between items-center'>
      <span class='page-title text-22px font-medium text-bizz-black-100 leading-8'>User Profile</span>
      <NavMenu/>
    </header>

    <div class='mt-41px grid grid-cols-12 gap-x-6'>
      <div class='col-span-9 bg-white shadow-2xl'></div>
      <div class='col-span-3 bg-white shadow-2xl'></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'user',
  layout:'dashboard',
  transition: 'layout'
}
</script>

<style scoped lang='scss'>
table{
  thead{
    th{
      @apply pb-4
    }
  }
  tbody{
    tr{
      &:hover{
        @apply bg-gray-100
      }
      td{
        @apply py-2;
      }
    }
  }
}
</style>
