<template>
  <section class='pl-41px pt-5 font-serif pr-42px bg-white pb-16 '>
    <header class='flex justify-between items-center'>
      <div>
        <nuxt-link to='/admin/card/create' class='page-title hover:text-bizz-orange flex items-center space-x-4 text-sm font-medium text-bizz-black-100 leading-8'>
          <svg width="6" height="10" class='currentColor' viewBox="0 0 6 10" fill="none"  xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.70711 0.292893C6.09763 0.683416 6.09763 1.31658 5.70711 1.7071L2.41421 4.99999L5.70711 8.29288C6.09763 8.6834 6.09763 9.31657 5.70711 9.70709C5.31658 10.0976 4.68342 10.0976 4.29289 9.70709L0.292893 5.7071C-0.0976312 5.31657 -0.0976312 4.68341 0.292893 4.29289L4.29289 0.292893C4.68342 -0.097631 5.31658 -0.097631 5.70711 0.292893Z" fill="currentColor"/>
          </svg>
          <span>Back to Templates</span>
        </nuxt-link>
        <p class='text-2xl leading-6 font-bold mt-3 text-bizz-black-200'>Preview Card Template</p>
      </div>
      <NavMenu/>
    </header>

    <nav class='flex mt-12 w-full justify-end items-center pb-5 border-b border-gray-100'>
      <div class='left flex items-center space-x-3 hidden'>
        <div @click="activeCard = 'front'" :class="activeCard === 'front' ? 'text-bizz-orange border-bizz-orange border font-bold' : ''" class='bc-front font-medium  cursor-pointer  py-1.5 px-2 rounded-full   flex items-center space-x-3 text-sm leading-4'>
          <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.394 0.843492C6.66455 0.593754 7.08632 0.610623 7.33606 0.881169L9.48991 3.21448C9.72564 3.46985 9.72564 3.86347 9.48991 4.11885L7.33606 6.45221C7.08633 6.72276 6.66456 6.73963 6.39401 6.4899C6.12346 6.24016 6.10659 5.81839 6.35632 5.54784L7.47739 4.33333L1.00004 4.33333C0.63185 4.33333 0.333374 4.03486 0.333373 3.66667C0.333373 3.29848 0.63185 3 1.00004 3L7.47737 3L6.35633 1.78555C6.10659 1.515 6.12346 1.09323 6.394 0.843492Z" fill="currentColor"/>
          </svg>

          <span>Business Card Front</span>

        </div>

        <div @click='activeCard = "back"' :class="activeCard === 'back' ? 'text-bizz-orange border-bizz-orange border font-bold' : ''" class='bc-back font-medium cursor-pointer rounded-full text-gray-500 py-1.5 px-2 flex items-center space-x-3 text-sm leading-4'>
          <span>Card Back Side </span>
        </div>
      </div>

      <div class='right'>
        <div class='font-bold py-1.5 flex items-center space-x-8 px-2 text-sm leading-4'>
          <span class='cursor-pointer block text-gray-400'>Overview</span>
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.792893 0.792893C0.402369 1.18342 0.402369 1.81658 0.792893 2.20711L3.58579 5L0.792893 7.79289C0.402369 8.18342 0.402369 8.81658 0.792893 9.20711C1.18342 9.59763 1.81658 9.59763 2.20711 9.20711L5.70711 5.70711C6.09763 5.31658 6.09763 4.68342 5.70711 4.29289L2.20711 0.792893C1.81658 0.402369 1.18342 0.402369 0.792893 0.792893Z" fill="#777E91"/>
          </svg>

          <span class='cursor-pointer block text-bizz-black-200 block'>Create Template</span>

        </div>
      </div>
    </nav>


    <main class='grid grid-cols-12 gap-7 pt-10'>
      <div class='sub-main col-span-7'>

          <div :class="preview ? 'pb-10 border-b border-gray-200' : ''" v-if='preview' class='form-group'>
            <p class='text-base  font-medium text-bizz-black-400'>
              <span class='block leading-5'>Full Card Template</span>
              <span class='text-xs mt-0.5 block text-gray-400'>Drag or choose your file to upload</span>
            </p>

            <div class='card-preview mt-6 mb-6'>
              <img class='w-full' src='/cardpreview.png' alt=''>
            </div>
          </div>


        <div :class="!preview ? 'pb-10 border-b border-gray-200' : ''" v-if='!preview' class='form-group'>
          <img src='/svg/preview.svg' alt=''>
          <p class='text-28px  font-bold text-bizz-black-400'>
            <span class='block text-sidebar leading-5'>Card Template Created</span>
            <span class='text-2xl font-normal w-7/12 mt-8 block text-gray-400'>Your template has been successfully created</span>
          </p>
        </div>



          <div class='submit-wrapper flex justify-between mt-10'>
            <p @click='preview = !preview' role='button' :class="!preview ? 'px-16':''" class='flex justify-center items-center space-x-4 bg-bizz-orange rounded-lg px-4 py-2 text-white font-bold'>
              <span>{{preview ? 'Complete Upload' : 'Finish'}}</span>
              <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.69175 1.09943C6.95215 0.859063 7.35811 0.875298 7.59848 1.1357L9.67156 3.38151C9.89845 3.6273 9.89846 4.00617 9.67157 4.25197L7.59849 6.49783C7.35812 6.75823 6.95216 6.77447 6.69176 6.5341C6.43136 6.29373 6.41512 5.88777 6.65548 5.62737L7.73452 4.45841L1.50006 4.45841C1.14568 4.45841 0.858398 4.17112 0.858398 3.81674C0.858398 3.46236 1.14568 3.17507 1.50006 3.17507L7.7345 3.17507L6.65549 2.00616C6.41512 1.74576 6.43135 1.33981 6.69175 1.09943Z" fill="#FCFCFD"/>
              </svg>
            </p>

            <p class='text-bizz-black-200 leading-4 font-bold flex items-center space-x-3'>
              <span>Auto saving</span>
              <span class=''>
                <svg width="16" class='animate-spin' height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.19987 1.72089C7.84549 1.72089 7.5582 2.00817 7.5582 2.36255V4.28755C7.5582 4.64194 7.84549 4.92922 8.19987 4.92922C8.55425 4.92922 8.84154 4.64194 8.84154 4.28755V2.36255C8.84154 2.00817 8.55425 1.72089 8.19987 1.72089Z" fill="#23262F"/>
<path d="M8.19987 11.3459C7.84549 11.3459 7.5582 11.6332 7.5582 11.9876V13.9126C7.5582 14.2669 7.84549 14.5542 8.19987 14.5542C8.55425 14.5542 8.84154 14.2669 8.84154 13.9126V11.9876C8.84154 11.6332 8.55425 11.3459 8.19987 11.3459Z" fill="#23262F"/>
<path d="M13.9749 7.49589C14.3293 7.49589 14.6165 7.78317 14.6165 8.13755C14.6165 8.49194 14.3293 8.77922 13.9749 8.77922H12.0499C11.6955 8.77922 11.4082 8.49194 11.4082 8.13755C11.4082 7.78317 11.6955 7.49589 12.0499 7.49589H13.9749Z" fill="#23262F"/>
<path d="M4.99154 8.13755C4.99154 7.78317 4.70425 7.49589 4.34987 7.49589H2.42487C2.07049 7.49589 1.7832 7.78317 1.7832 8.13755C1.7832 8.49194 2.07049 8.77922 2.42487 8.77922H4.34987C4.70425 8.77922 4.99154 8.49194 4.99154 8.13755Z" fill="#23262F"/>
<path d="M11.8297 3.60035C12.0803 3.34976 12.4866 3.34976 12.7372 3.60035C12.9878 3.85093 12.9878 4.25721 12.7372 4.5078L11.376 5.86898C11.1254 6.11957 10.7191 6.11957 10.4685 5.86898C10.218 5.6184 10.218 5.21211 10.4685 4.96153L11.8297 3.60035Z" fill="#23262F"/>
<path d="M5.93121 10.4062C5.68063 10.1556 5.27435 10.1556 5.02376 10.4062L3.66258 11.7673C3.41199 12.0179 3.41199 12.4242 3.66258 12.6748C3.91317 12.9254 4.31945 12.9254 4.57003 12.6748L5.93121 11.3136C6.1818 11.063 6.1818 10.6567 5.93121 10.4062Z" fill="#23262F"/>
<path d="M12.7372 11.7674C12.9877 12.018 12.9877 12.4243 12.7372 12.6749C12.4866 12.9254 12.0803 12.9254 11.8297 12.6749L10.4685 11.3137C10.2179 11.0631 10.2179 10.6568 10.4685 10.4062C10.7191 10.1556 11.1254 10.1556 11.376 10.4062L12.7372 11.7674Z" fill="#23262F"/>
<path d="M5.93127 5.8689C6.18186 5.61831 6.18186 5.21203 5.93127 4.96144L4.57009 3.60026C4.31951 3.34968 3.91323 3.34968 3.66264 3.60026C3.41205 3.85085 3.41205 4.25713 3.66264 4.50772L5.02382 5.8689C5.27441 6.11948 5.68069 6.11948 5.93127 5.8689Z" fill="#23262F"/>
</svg>
              </span>
            </p>
          </div>
      </div>

    </main>
  </section>
</template>

<script>
export default {
  name: 'CardPreview',
  layout:'dashboard',
  transition: 'layout',
  data(){
    return{
      toggleValue: false,
      togglePhotoValue: false,
      preview: true
    }
  }
}
</script>

<style scoped lang='scss'>
main{
  form{
    .create-input{
      @apply w-full font-medium rounded-lg focus:border-bizz-orange focus:ring-0 mt-2 border-2 border-gray-300;
    }
  }
}
</style>
