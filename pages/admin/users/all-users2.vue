<template>
  <section class='pl-41px pt-5 pr-42px pb-10'>
    <header class='flex justify-between items-center'>
      <span class='page-title text-22px font-medium text-bizz-black-100 leading-8'>Overview</span>
      <NavMenu/>
    </header>

    <div class='mt-48px'>

      <div class='table-section mt-20 rounded-2xl bg-white shadow-2xl p-29px'>
        <div class='header flex justify-between items-center'>
          <div class='left'>
            <span class='font-bold text-base leading-6'>Latest Users</span>
            <span class='block text-gray-400 text-xs'>890,344 Users</span>
          </div>
          <p role='button' class='btn flex ml-auto justify-center items-center font-bold space-x-2 w-40s rounded-lg text-white bg-bizz-green text-xs leading-6 px-8 py-2.5'>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.85917 13.2734L3.85917 10.4309L5.63576 10.4309C7.10755 10.4309 8.30066 9.23778 8.30066 7.76596L8.30066 5.98937L10.9656 5.98937C11.4561 5.98937 11.8539 5.59168 11.8539 5.10107C11.8539 4.61046 11.4561 4.21277 10.9656 4.21277L8.19968 4.21277L8.19855 4.21277C7.63506 4.21251 7.20915 4.2123 6.79842 4.31093C6.43587 4.39798 6.08928 4.54153 5.77136 4.73633C5.41096 4.95725 5.10973 5.25874 4.71107 5.65777L3.52758 6.84124L3.52748 6.84135C3.12849 7.23997 2.82701 7.54117 2.60617 7.90152C2.41136 8.21944 2.26779 8.56605 2.18075 8.92866C2.08208 9.33966 2.08228 9.76576 2.08255 10.3298L2.08255 10.3299L2.08257 13.3101L2.08257 13.3102C2.08256 14.0252 2.08256 14.6153 2.12184 15.096C2.16263 15.5953 2.25019 16.0543 2.46985 16.4855C2.81051 17.154 3.35407 17.6976 4.02265 18.0383C4.45378 18.2579 4.91276 18.3455 5.41207 18.3863C5.89279 18.4256 6.48292 18.4255 7.19792 18.4255L7.19801 18.4255L14.7331 18.4255L14.7332 18.4255C15.4482 18.4255 16.0383 18.4256 16.519 18.3863C17.0184 18.3455 17.4773 18.2579 17.9084 18.0383C18.5771 17.6976 19.1206 17.154 19.4613 16.4855C19.6809 16.0543 19.7684 15.5953 19.8093 15.096C19.8486 14.6153 19.8486 14.0252 19.8486 13.3101L19.8486 10.4309C19.8486 9.94025 19.4508 9.54256 18.9603 9.54256C18.4697 9.54256 18.072 9.94025 18.072 10.4309L18.072 13.2734C18.072 14.0343 18.0713 14.5516 18.0386 14.9514C18.0068 15.3408 17.9491 15.54 17.8783 15.6789C17.7079 16.0132 17.4362 16.285 17.1019 16.4553C16.9629 16.5261 16.7638 16.5838 16.3743 16.6156C15.9745 16.6482 15.4573 16.6489 14.6964 16.6489L7.2347 16.6489C6.4738 16.6489 5.95656 16.6482 5.55674 16.6156C5.1673 16.5838 4.96814 16.5261 4.82921 16.4553C4.49492 16.285 4.22314 16.0132 4.05281 15.6789C3.98202 15.54 3.92434 15.3408 3.89252 14.9514C3.85986 14.5516 3.85917 14.0343 3.85917 13.2734ZM5.90333 6.97804C6.2239 6.65745 6.39783 6.48699 6.52405 6.38021L6.52406 7.76596C6.52406 8.25656 6.12636 8.65426 5.63576 8.65426L4.25004 8.65426C4.35679 8.52803 4.52727 8.3541 4.84784 8.03351L5.90333 6.97804ZM13.6304 5.10106C13.6304 4.61045 14.0281 4.21276 14.5187 4.21276L17.7039 4.21276L17.4438 3.95258C17.0969 3.6057 17.0969 3.04323 17.4438 2.69635C17.7906 2.34947 18.3531 2.34947 18.7 2.69635L20.4766 4.47294C20.8235 4.81982 20.8235 5.38229 20.4766 5.72917L18.7 7.50577C18.3531 7.85265 17.7906 7.85265 17.4438 7.50577C17.0969 7.15889 17.0969 6.59642 17.4438 6.24954L17.7039 5.98936L14.5187 5.98936C14.0281 5.98936 13.6304 5.59167 13.6304 5.10106Z" fill="white"/>
            </svg>

            <span>
       Add User
      </span>
          </p>
        </div>

        <div class='user-icon-wrapper grid grid-cols-4 gap-8 mt-5'>
          <div v-for='i in 12' :key='i' class='profile-info pb-8 border max-w-xs rounded-2xl shadow cursor-pointer transition-all duration-300 transform hover:-translate-y-2 '>
            <div class='header items-center border-b pb-8 pt-8 '>
              <div class='pp-header flex justify-end pr-5'>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.3678 12.3868C6.3438 12.3868 7.13501 11.5957 7.13501 10.6196C7.13501 9.6436 6.3438 8.85242 5.3678 8.85242C4.3918 8.85242 3.60059 9.6436 3.60059 10.6196C3.60059 11.5957 4.3918 12.3868 5.3678 12.3868ZM12.4359 10.6197C12.4359 11.5957 11.6447 12.3869 10.6687 12.3869C9.69266 12.3869 8.90148 11.5957 8.90148 10.6197C8.90148 9.64363 9.69266 8.85244 10.6687 8.85244C11.6447 8.85244 12.4359 9.64363 12.4359 10.6197ZM15.9708 12.3869C16.9468 12.3869 17.738 11.5957 17.738 10.6197C17.738 9.64363 16.9468 8.85244 15.9708 8.85244C14.9947 8.85244 14.2035 9.64363 14.2035 10.6197C14.2035 11.5957 14.9947 12.3869 15.9708 12.3869Z" fill="#2772F0"/>
                </svg>
              </div>
              <div class='left flex flex-col items-center mt-10 space-x-3'>
                <img class='user-avatar rounded-full' src='/user-avatar.png' alt=''>
                <div class='mt-3'>
                  <p class='text-black font-bold'>Linh Nguyen</p>
                  <p class='text-bizz-blue font-bold text-xs mt-1'>Owner & Founder</p>
                </div>
              </div>
            </div>

            <div class='detail grid grid-cols-1 gap-5 mt-8 px-5'>
              <div class=''>
                <p class='text-10px text-gray-400 font-bold'>Email</p>
                <p class='text-black text-xs mt-2 font-bold'>linhnguyen@cadesign.net</p>
              </div>
              <div class=''>
                <p class='text-10px text-gray-400 font-bold'>Phone</p>
                <p class='text-black text-xs mt-2 font-bold'>(826) 840-8449</p>
              </div>
              <div class=''>
                <p class='text-10px text-gray-400 font-bold'>Location</p>
                <p class='text-black text-xs mt-2 font-bold'>Roseville, California, United States</p>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AdminIndex',
  layout:'dashboard',
  transition: 'layout'
}
</script>

<style scoped lang='scss'>

</style>
