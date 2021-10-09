<template>
  <section class='px-5 lg:px-0 lg:pr-42px lg:pl-41px pt-10 md:pt-5 pb-10'>
    <header class='flex justify-between items-center'>
      <span class='page-title text-lg font-bold md:font-medium md:text-22px font-medium text-bizz-black-100 leading-8'>User Profile</span>
      <NavMenu/>
    </header>

    <div class='mt-41px grid grid-cols-12 gap-x-6'>
      <div class='col-span-12 order-2 lg:order-1 lg:col-span-9 bg-white rounded-2xl shadow-2xl '>
      <div class='profile-info p-29px border-b'>
        <div class='header flex flex-col lg:flex-row items-center  justify-between'>
          <div class='left flex items-center space-x-3'>
            <img class='user-avatar rounded-full' src='/user-avatar.png' alt=''>
            <div>
              <p class='text-black font-bold'>Linh Nguyen</p>
              <p class='text-bizz-blue font-bold text-xs mt-1'>Owner & Founder</p>
            </div>
          </div>

          <div class='right flex items-center space-x-3 mt-4 lg:mt-0'>
            <button type='button' class='px-6 rounded-lg font-bold py-2 text-xs bg-bizz-dark-blue text-bizz-orange'> View Cards</button>
            <button type='button' class='px-6 rounded-lg font-bold py-2 text-xs bg-white border text-bizz-blue'> Change Photo</button>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.3678 12.3868C6.3438 12.3868 7.13501 11.5957 7.13501 10.6196C7.13501 9.6436 6.3438 8.85242 5.3678 8.85242C4.3918 8.85242 3.60059 9.6436 3.60059 10.6196C3.60059 11.5957 4.3918 12.3868 5.3678 12.3868ZM12.4359 10.6197C12.4359 11.5957 11.6447 12.3869 10.6687 12.3869C9.69266 12.3869 8.90148 11.5957 8.90148 10.6197C8.90148 9.64363 9.69266 8.85244 10.6687 8.85244C11.6447 8.85244 12.4359 9.64363 12.4359 10.6197ZM15.9708 12.3869C16.9468 12.3869 17.738 11.5957 17.738 10.6197C17.738 9.64363 16.9468 8.85244 15.9708 8.85244C14.9947 8.85244 14.2035 9.64363 14.2035 10.6197C14.2035 11.5957 14.9947 12.3869 15.9708 12.3869Z" fill="#2772F0"/>
            </svg>
          </div>
        </div>

        <div class='detail grid md:grid-cols-2 gap-5 mt-8 '>
          <div class='border rounded-3xl flex items-center space-x-4 py-5 pl-6'>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9011 4.23438H7.40581H7.40571C6.69448 4.23437 6.10748 4.23436 5.62929 4.27342C5.13262 4.31401 4.67606 4.40109 4.24722 4.6196C3.58217 4.95846 3.04147 5.49916 2.70261 6.16421C2.4841 6.59305 2.39701 7.04962 2.35643 7.54629C2.31737 8.02447 2.31737 8.61147 2.31738 9.3227V9.3228V13.2837V13.2838C2.31737 13.995 2.31737 14.582 2.35643 15.0601C2.39701 15.5568 2.4841 16.0134 2.70261 16.4423C3.04147 17.1073 3.58217 17.648 4.24722 17.9868C4.67606 18.2053 5.13262 18.2925 5.62929 18.333C6.10751 18.3721 6.69454 18.3721 7.40583 18.3721H14.9011C15.6124 18.3721 16.1994 18.3721 16.6776 18.333C17.1743 18.2925 17.6308 18.2053 18.0597 17.9868C18.7247 17.648 19.2654 17.1073 19.6043 16.4423C19.8228 16.0134 19.9099 15.5568 19.9505 15.0601C19.9895 14.582 19.9895 13.995 19.9895 13.2838V13.2837V9.32278V9.32268C19.9895 8.61146 19.9895 8.02446 19.9505 7.54628C19.9099 7.04962 19.8228 6.59305 19.6043 6.16421C19.2654 5.49916 18.7247 4.95846 18.0597 4.6196C17.6308 4.40109 17.1743 4.31401 16.6776 4.27342C16.1994 4.23436 15.6124 4.23437 14.9012 4.23438H14.9011ZM5.05043 6.19416C5.18862 6.12375 5.38673 6.06638 5.77412 6.03473C6.17182 6.00224 6.68634 6.00155 7.44322 6.00155H14.8655C15.6224 6.00155 16.1369 6.00224 16.5346 6.03473C16.922 6.06638 17.1201 6.12375 17.2583 6.19416C17.5908 6.36359 17.8612 6.63394 18.0306 6.96646C18.101 7.10466 18.1584 7.30276 18.19 7.69015C18.2225 8.08786 18.2232 8.60237 18.2232 9.35925V13.2471C18.2232 14.004 18.2225 14.5185 18.19 14.9163C18.1584 15.3036 18.101 15.5017 18.0306 15.6399C17.8612 15.9724 17.5908 16.2428 17.2583 16.4122C17.1201 16.4826 16.922 16.54 16.5346 16.5716C16.1369 16.6041 15.6224 16.6048 14.8655 16.6048H7.44322C6.68634 16.6048 6.17182 16.6041 5.77412 16.5716C5.38673 16.54 5.18862 16.4826 5.05043 16.4122C4.71791 16.2428 4.44755 15.9724 4.27813 15.6399C4.20771 15.5017 4.15034 15.3036 4.11869 14.9163C4.0862 14.5185 4.08551 14.004 4.08551 13.2471V9.35925C4.08551 8.60237 4.0862 8.08786 4.11869 7.69015C4.15034 7.30276 4.20771 7.10466 4.27813 6.96646C4.44755 6.63394 4.71791 6.36359 5.05043 6.19416ZM7.23576 7.92373C6.83335 7.64767 6.28334 7.75011 6.00728 8.15252C5.73121 8.55494 5.83365 9.10495 6.23607 9.38101L9.65438 11.726C10.558 12.3458 11.7499 12.3458 12.6535 11.726L16.0718 9.38101C16.4742 9.10495 16.5766 8.55494 16.3006 8.15252C16.0246 7.75011 15.4745 7.64767 15.0721 7.92373L11.6538 10.2687C11.3526 10.4753 10.9553 10.4753 10.6541 10.2687L7.23576 7.92373Z" fill="#2772F0"/>
            </svg>

            <div>
              <p class='text-xs text-gray-400 font-bold'>Email</p>
              <p class='text-black text-sm mt-2 font-bold'>Linh Nguyen</p>
            </div>
          </div>
          <div class='border rounded-3xl flex items-center space-x-4 py-5 pl-6'>
            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.22119 10.4196C5.22119 7.00358 7.99042 4.23435 11.4064 4.23435C14.8225 4.23435 17.5917 7.00358 17.5917 10.4196C17.5917 12.3689 16.4111 14.1908 14.7598 15.6219L11.719 18.2574C11.5396 18.4128 11.2733 18.4128 11.0939 18.2574L8.05307 15.6219C6.40175 14.1908 5.22119 12.3689 5.22119 10.4196ZM11.4066 2.46716C7.01454 2.46716 3.4541 6.0276 3.4541 10.4196C3.4541 13.0938 5.05323 15.3606 6.89579 16.9574L9.93668 19.5929C10.7803 20.324 12.0329 20.324 12.8764 19.5929L15.9173 16.9574C17.7599 15.3606 19.359 13.0938 19.359 10.4196C19.359 6.0276 15.7986 2.46716 11.4066 2.46716ZM11.4066 12.1868C12.3827 12.1868 13.1738 11.3956 13.1738 10.4196C13.1738 9.4436 12.3827 8.65239 11.4066 8.65239C10.4306 8.65239 9.63941 9.4436 9.63941 10.4196C9.63941 11.3956 10.4306 12.1868 11.4066 12.1868Z" fill="#2772F0"/>
            </svg>

            <div>
              <p class='text-xs text-gray-400 font-bold'>Location</p>
              <p class='text-black text-sm mt-2 font-bold'>Roseville, California, United States</p>
            </div>
          </div>
          <div class='border rounded-3xl flex items-center space-x-4 py-5 pl-6'>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.34656 6.24282C3.52837 5.18835 4.13064 4.34249 4.77936 3.69378C5.81588 2.65728 7.53044 2.78048 8.40812 3.95451L9.84083 5.87102C10.6298 6.92634 10.5239 8.40093 9.59218 9.33268L9.49392 9.43085C9.14887 9.7759 9.14887 10.3354 9.49392 10.6804L11.4128 12.5993C11.7578 12.9443 12.3173 12.9443 12.6624 12.5993L12.7606 12.501C13.6923 11.5694 15.1669 11.4634 16.2222 12.2524L18.1532 13.6958C19.3196 14.5679 19.442 16.2714 18.4122 17.3011C17.7563 17.957 16.9011 18.5691 15.8337 18.7534C13.8685 19.0927 10.1018 19.0892 6.55291 15.5403C3.00234 11.9898 3.00855 8.20317 3.34656 6.24282ZM6.02904 4.9434C5.51997 5.45245 5.18455 5.98402 5.08816 6.5431C4.81557 8.12399 4.77556 11.2636 7.80261 14.2907C10.8311 17.3192 13.9532 17.2848 15.5331 17.012C16.1029 16.9136 16.6437 16.5705 17.1627 16.0515C17.4312 15.7829 17.3993 15.3387 17.0951 15.1113L15.1641 13.6677C14.8123 13.4048 14.3209 13.4401 14.0103 13.7506L13.912 13.8489C12.8768 14.8841 11.1984 14.8841 10.1632 13.8489L8.24441 11.93C7.2092 10.8949 7.20919 9.21648 8.24441 8.18125L8.34263 8.08303C8.6532 7.77246 8.68851 7.28093 8.42553 6.92915L6.99279 5.01265C6.75969 4.70083 6.30432 4.66812 6.02904 4.9434Z" fill="#2772F0"/>
            </svg>
            <div>
              <p class='text-xs text-gray-400 font-bold'>Phone</p>
              <p class='text-black text-sm mt-2 font-bold'>+84 9999 999999</p>
            </div>
          </div>
          <div class='border rounded-3xl flex items-center space-x-4 py-5 pl-6'>
            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4204 11.8229H15.8031C15.6964 13.9731 15.2043 15.8965 14.4668 17.313C16.5855 16.2938 18.1178 14.2493 18.4204 11.8229ZM18.4204 10.0557H15.8031C15.6964 7.90548 15.2043 5.98205 14.4669 4.56558C16.5855 5.58481 18.1178 7.62929 18.4204 10.0557ZM11.4041 3.87043C11.4048 3.87043 11.4055 3.87043 11.4062 3.87043C11.4071 3.87043 11.4079 3.87043 11.4088 3.87043C11.6017 3.872 12.2471 4.07591 12.9499 5.48155C13.5146 6.61086 13.9311 8.20541 14.0332 10.0557H8.77993C8.88204 8.20541 9.29852 6.61086 9.86316 5.48155C10.5657 4.07634 11.211 3.87212 11.4041 3.87043ZM11.3977 2.10323C6.52167 2.10791 2.57031 6.06216 2.57031 10.9393C2.57031 15.8193 6.52635 19.7754 11.4064 19.7754C16.2864 19.7754 20.2424 15.8193 20.2424 10.9393C20.2424 6.0628 16.2921 2.10897 11.417 2.10323C11.4136 2.10322 11.4103 2.10321 11.4069 2.10321C11.4039 2.10321 11.4008 2.10322 11.3977 2.10323ZM8.34751 4.56463C7.60982 5.98119 7.11748 7.905 7.01072 10.0557H4.39204C4.6947 7.62854 6.22784 5.58354 8.34751 4.56463ZM4.39204 11.8229C4.69469 14.25 6.22784 16.295 8.34753 17.3139C7.60982 15.8974 7.11748 13.9736 7.01072 11.8229H4.39204ZM12.9499 16.397C13.5146 15.2677 13.9311 13.6731 14.0332 11.8229H8.77993C8.88204 13.6731 9.29852 15.2677 9.86316 16.397C10.5687 17.8082 11.2165 18.0081 11.4066 18.0081C11.5966 18.0081 12.2444 17.8082 12.9499 16.397Z" fill="#2772F0"/>
            </svg>
            <div>
              <p class='text-xs text-gray-400 font-bold'>Website</p>
              <p class='text-black text-sm mt-2 font-bold'>https://cadesign.net</p>
            </div>
          </div>
        </div>
      </div>

        <div class='form-section '>
          <form action=''>
            <div class='profile p-29px border-b'>
              <h2 class='text-black font-bold'>Profile Settings</h2>

              <div class='input-grid grid md:grid-cols-3 gap-10 mt-5'>
                <div class='form-group relative h-42px rounded-3xl flex flex-col'>
                  <label class='text-10px absolute ml-5 px-1 bg-white -mt-2 text-gray-400'>Firstname</label>
                  <input placeholder='Firstname' value='Linh' class='text-xs pl-6  py-3 focus:ring-0 focus:border-2 focus:border-bizz-orange rounded-full border-gray-200 text-black font-bold' type='text'>
                </div>

                <div class='form-group relative h-42px rounded-3xl flex flex-col'>
                  <label class='text-10px absolute ml-5 px-1 bg-white -mt-2 text-gray-400'>Lastname</label>
                  <input placeholder='Lastname' value='Nguyen' class='text-xs pl-6  py-3 focus:ring-0 focus:border-2 focus:border-bizz-orange rounded-full border-gray-200 text-black font-bold' type='text'>
                </div>

                <div class='form-group relative h-42px rounded-3xl flex flex-col'>
                  <label class='text-10px absolute ml-5 px-1 bg-white -mt-2 text-gray-400'>Username</label>
                  <input placeholder='Username' value='codedesign' class='text-xs pl-6  py-3 focus:ring-0 focus:border-2 focus:border-bizz-orange rounded-full border-gray-200 text-black font-bold' type='text'>
                </div>

                <div class='form-group relative h-42px rounded-3xl flex flex-col'>
                  <label class='text-10px absolute ml-5 px-1 bg-white -mt-2 text-gray-400'>Phone</label>
                  <input placeholder='Phone' value='+84 9999 999999' class='text-xs pl-6  py-3 focus:ring-0 focus:border-2 focus:border-bizz-orange rounded-full border-gray-200 text-black font-bold' type='text'>
                </div>

                <div class='form-group relative h-42px rounded-3xl flex flex-col'>
                  <label class='text-10px absolute ml-5 px-1 bg-white -mt-2 text-gray-400'>Email</label>
                  <input placeholder='Email' value='linh@cadesign.net' class='text-xs pl-6  py-3 focus:ring-0 focus:border-2 focus:border-bizz-orange rounded-full border-gray-200 text-black font-bold' type='email'>
                </div>

                <div class='form-group relative h-42px rounded-3xl flex flex-col'>
                  <label class='text-10px absolute ml-5 px-1 bg-white -mt-2 text-gray-400'>Website</label>
                  <input placeholder='Website' value='https://cadesign.net' class='text-xs pl-6  py-3 focus:ring-0 focus:border-2 focus:border-bizz-orange rounded-full border-gray-200 text-black font-bold' type='text'>
                </div>

                <div class='form-group relative h-42px rounded-3xl flex flex-col'>
                  <label class='text-10px absolute ml-5 px-1 bg-white -mt-2 text-gray-400'>Company</label>
                  <input placeholder='Company' value='Tesla' class='text-xs pl-6  py-3 focus:ring-0 focus:border-2 focus:border-bizz-orange rounded-full border-gray-200 text-black font-bold' type='text'>
                </div>


                <div class='form-group relative h-42px rounded-3xl flex flex-col'>
                  <label class='text-10px absolute ml-5 px-1 bg-white -mt-2 text-gray-400'>City</label>
                  <input placeholder='City' value='' class='text-xs pl-6  py-3 focus:ring-0 focus:border-2 focus:border-bizz-orange rounded-full border-gray-200 text-black font-bold' type='text'>
                </div>

                <div class='form-group relative h-42px rounded-3xl flex flex-col'>
                  <label class='text-10px absolute ml-5 px-1 bg-white -mt-2 text-gray-400'>Address</label>
                  <input placeholder='Address' value='' class='text-xs pl-6  py-3 focus:ring-0 focus:border-2 focus:border-bizz-orange rounded-full border-gray-200 text-black font-bold' type='text'>
                </div>

              </div>
            </div>
            <div class='account p-29px border-b'>
              <h2 class='text-black font-bold'>Account Settings</h2>

              <div class='input-grid grid md:grid-cols-3 gap-10 mt-5'>
                <div class='form-group relative h-42px rounded-3xl flex flex-col'>
                  <label class='text-10px absolute ml-5 px-1 bg-white -mt-2 text-gray-400'>Default Language</label>
                  <select class='text-xs pl-6  py-3 focus:ring-0 focus:border-2 focus:border-bizz-orange rounded-full border-gray-200 text-black font-bold'>
                    <option value=''>English</option>
                    <option value=''>Spanish</option>
                  </select>
                </div>

                <div class='form-group relative h-42px rounded-3xl flex flex-col'>
                  <label class='text-10px absolute ml-5 px-1 bg-white -mt-2 text-gray-400'>Default Currency</label>
                  <select class='text-xs pl-6  py-3 focus:ring-0 focus:border-2 focus:border-bizz-orange rounded-full border-gray-200 text-black font-bold'>
                    <option value=''>USD</option>
                    <option value=''>GBP</option>
                    <option value=''>NGN</option>
                  </select>
                </div>

              </div>
            </div>

            <div class='button-wrapper p-29px mt-5 md:mt-10'>
              <button role='button' class='flex justify-center items-center space-x-4 bg-bizz-orange rounded-lg px-4 py-2 text-white font-bold' @click='preview = !preview'>
                <span>Submit</span>
              </button>
            </div>

          </form>
        </div>
      </div>
      <div class='col-span-12 order-1 lg:order-2 mt-7 lg:mt-0  lg:col-span-3 bg-white rounded-2xl self-start pb-10 shadow-lg'>
        <div class='profile-info '>
          <div class='header items-center border-b pb-8 pt-8 '>
         <div class='pp-header flex justify-between items-center pr-5'>
           <h2 class='text-black font-bold pl-5'>Public Profile</h2>

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
            <div class=''>
              <p class='text-10px text-gray-400 font-bold'>Contacts</p>
             <div class='contact-image flex -space-x-1 mt-3'>
               <img v-for='i in 5' :key='i' class='rounded-full ring-2 ring-white' :src='`/con${i}.png`' alt=''>
             </div>
            </div>
            <div class=''>
              <p class='text-10px text-gray-400 font-bold mb-2'>Activity</p>
              <span class='text-bizz-green px-3 py-1.5 rounded-full  bg-bizz-green bg-opacity-20 text-10px mt-2 font-bold'>Active</span>
              <ProgressBar/>
            </div>

         <div class='user-stat'>
           <div class='stat-box p-5 rounded-2xl transition-all cursor-pointer bg-bizz-blue bg-opacity-10 max-w-lg shadow'>
             <div class='stat-icon flex items-center space-x-3'>
               <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <rect x="0.536133" y="0.69998" width="45.9475" height="45.9475" rx="22.9738" fill="white"/>
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5261 23.2791C17.2268 21.7056 19.2192 18.3721 23.5094 18.3721C27.7995 18.3721 29.7918 21.7057 30.4924 23.2792C30.6053 23.5328 30.6053 23.8147 30.4924 24.0683C29.7918 25.6418 27.7995 28.9754 23.5094 28.9754C19.2192 28.9754 17.2268 25.6419 16.5261 24.0684C16.4132 23.8147 16.4132 23.5328 16.5261 23.2791ZM23.51 16.6049C18.1123 16.6049 15.6805 20.8352 14.9123 22.5603C14.5956 23.2715 14.5956 24.076 14.9123 24.7872C15.6805 26.5122 18.1123 30.7426 23.51 30.7426C28.9079 30.7426 31.3395 26.5121 32.1075 24.787C32.4241 24.076 32.4241 23.2715 32.1075 22.5605C31.3395 20.8354 28.9079 16.6049 23.51 16.6049ZM19.9767 23.6738C19.9767 21.7217 21.5592 20.1393 23.5112 20.1393C25.4631 20.1393 27.0456 21.7217 27.0456 23.6738C27.0456 25.6257 25.4631 27.2082 23.5112 27.2082C21.5592 27.2082 19.9767 25.6257 19.9767 23.6738ZM23.5118 21.9065C23.4867 21.9065 23.4618 21.9071 23.437 21.9081C23.4854 22.0459 23.5118 22.194 23.5118 22.3483C23.5118 23.0803 22.9184 23.6738 22.1864 23.6738C22.032 23.6738 21.8839 23.6473 21.7462 23.5989C21.7451 23.6237 21.7446 23.6487 21.7446 23.6738C21.7446 24.6498 22.5358 25.441 23.5118 25.441C24.4878 25.441 25.279 24.6498 25.279 23.6738C25.279 22.6977 24.4878 21.9065 23.5118 21.9065Z" fill="#2772F0"/>
               </svg>

               <div class='readings items-center space-x-3 text-bizz-green text-xs'>

                 <span class='block text-gray-400 text-xs leading-5 font-medium'>Total Card Views</span>

                 <span class='text-base block font-bold leading-30px  text-bizz-black-100'>29,214</span>

               </div>
             </div>
           </div>

           <div class='stat-box p-5 mt-6 rounded-2xl transition-all cursor-pointer bg-bizz-orange bg-opacity-10 max-w-lg shadow'>
             <div class='stat-icon flex items-center space-x-3'>
               <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <rect x="0.536133" y="0.80162" width="45.9475" height="45.9475" rx="22.9738" fill="white"/>
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M25.3087 15.8229H22.0585H22.0584C21.1008 15.8229 20.3284 15.8229 19.703 15.874C19.0589 15.9266 18.4933 16.0378 17.9699 16.3045C17.1386 16.728 16.4627 17.4039 16.0392 18.2352C15.7725 18.7586 15.6613 19.3242 15.6087 19.9683C15.5576 20.5937 15.5576 21.3661 15.5576 22.3237V22.3238V26.8366V26.8373C15.5576 27.729 15.5576 28.4396 15.5901 28.9779C15.6207 29.4838 15.6841 30.0173 15.9284 30.4292C16.6006 31.5626 18.0033 32.0302 19.2211 31.5268C19.6637 31.3438 20.0345 30.9551 20.3626 30.5686C20.7114 30.1577 21.1376 29.5894 21.6724 28.8764L21.6733 28.8752L21.6924 28.8498C21.936 28.5249 21.9879 28.4626 22.0382 28.4178C22.1552 28.3132 22.2981 28.2418 22.452 28.2108C22.5181 28.1975 22.5991 28.1934 23.0052 28.1934H25.3087C26.1055 28.1934 26.7482 28.1934 27.2713 28.1577C27.8092 28.121 28.2848 28.0436 28.7352 27.8571C29.8178 27.4087 30.6778 26.5487 31.1262 25.4661C31.3128 25.0157 31.3902 24.5401 31.4268 24.0022C31.4625 23.4791 31.4625 22.8364 31.4625 22.0396V22.0395V21.9768V21.9767C31.4625 21.1799 31.4625 20.5372 31.4268 20.0141C31.3902 19.4762 31.3128 19.0006 31.1262 18.5502C30.6778 17.4677 29.8178 16.6076 28.7352 16.1592C28.2848 15.9727 27.8092 15.8953 27.2713 15.8586C26.7482 15.8229 26.1055 15.8229 25.3087 15.8229ZM18.7716 17.8791C19.0043 17.7605 19.3116 17.679 19.8463 17.6354C20.3913 17.5908 21.0914 17.5901 22.0957 17.5901H25.2767C26.1123 17.5901 26.6947 17.5906 27.1505 17.6217C27.5984 17.6523 27.8592 17.7094 28.0584 17.7919C28.7079 18.061 29.224 18.577 29.4929 19.2265C29.5755 19.4257 29.6326 19.6865 29.6632 20.1344C29.6943 20.5903 29.6948 21.1727 29.6948 22.0082C29.6948 22.8437 29.6943 23.4261 29.6632 23.8819C29.6326 24.3298 29.5755 24.5907 29.4929 24.7898C29.224 25.4393 28.7079 25.9554 28.0584 26.2244C27.8592 26.3069 27.5984 26.3641 27.1505 26.3947C26.6947 26.4258 26.1123 26.4262 25.2767 26.4262H23.0046H22.9411H22.9405C22.6336 26.4259 22.3639 26.4257 22.1026 26.4783C21.6409 26.5713 21.2123 26.7856 20.861 27.0992C20.662 27.2767 20.5003 27.4927 20.3163 27.7384L20.3163 27.7384L20.3161 27.7386L20.278 27.7895C19.7195 28.5342 19.325 29.0596 19.0148 29.425C18.8613 29.6058 18.7455 29.7269 18.6564 29.8066C18.5847 29.8707 18.5484 29.8914 18.543 29.8945L18.5424 29.8949C18.1382 30.0602 17.6737 29.9054 17.4496 29.5306L17.4493 29.5299C17.4467 29.524 17.4302 29.4856 17.4113 29.3916C17.3878 29.2743 17.3679 29.1079 17.3536 28.8713C17.3247 28.3928 17.3243 27.7358 17.3243 26.8049V22.3616C17.3243 21.3573 17.325 20.6572 17.3695 20.1122C17.4132 19.5774 17.4946 19.2702 17.6132 19.0375C17.8673 18.5387 18.2729 18.1332 18.7716 17.8791ZM20.8601 22.0082C20.8601 22.4962 20.4645 22.8918 19.9765 22.8918C19.4885 22.8918 19.0929 22.4962 19.0929 22.0082C19.0929 21.5202 19.4885 21.1246 19.9765 21.1246C20.4645 21.1246 20.8601 21.5202 20.8601 22.0082ZM24.3945 22.0082C24.3945 22.4962 23.9989 22.8918 23.5109 22.8918C23.0229 22.8918 22.6273 22.4962 22.6273 22.0082C22.6273 21.5202 23.0229 21.1246 23.5109 21.1246C23.9989 21.1246 24.3945 21.5202 24.3945 22.0082ZM27.0453 22.8918C27.5333 22.8918 27.9289 22.4962 27.9289 22.0082C27.9289 21.5202 27.5333 21.1246 27.0453 21.1246C26.5573 21.1246 26.1617 21.5202 26.1617 22.0082C26.1617 22.4962 26.5573 22.8918 27.0453 22.8918Z" fill="#F5B544"/>
               </svg>

               <div class='readings items-center space-x-3 text-bizz-green text-xs'>

                 <span class='block text-gray-400 text-xs leading-5 font-medium'>Messages</span>

                 <span class='text-base block font-bold leading-30px  text-bizz-black-100'>9,191</span>

               </div>
             </div>
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
  name: 'User',
  layout:'dashboard',
  transition: 'layout'
}
</script>

<style scoped lang='scss'>
.form-group{
  input{
    &::placeholder{
      font-weight: bold;
      font-size: 12.3705px;
      line-height: 21px;
      color: #040415;
      mix-blend-mode: normal;
      opacity: 0.4;
    }
  }
}
</style>
