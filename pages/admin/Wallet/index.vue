<template>
  <section class="pl-41px pt-5 pr-42px pb-10">
    <header class="flex justify-between items-center">
      <span
        class="page-title text-22px font-medium text-bizz-black-100 leading-8"
        >Wallets</span
      >
      <NavMenu />
    </header>

    <div class="mt-70">
           <div class="table-section mt-20 rounded-2xl bg-white shadow-2xl p-29px">
        <div class="">
          <span class="font-bold text-base leading-6">Wallets</span>
          <div class="grid grid-cols-3 gap-6 mb-10 mt-8">
            <!-- 1st Box -->

            <div class="w-auto bg-bizz-orange p-6 flex items-center rounded-xl">
              <div class="rounded-xl p-3 bg-gray-200 bg-opacity-10 mr-5">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.96021 4.82782C5.96021 4.20239 5.45319 3.69537 4.82776 3.69537C4.20233 3.69537 3.69531 4.20239 3.69531 4.82782V19.5497C3.69531 22.0514 5.72337 24.0795 8.22511 24.0795H22.947C23.5724 24.0795 24.0794 23.5725 24.0794 22.947C24.0794 22.3216 23.5724 21.8146 22.947 21.8146H8.22511C6.97424 21.8146 5.96021 20.8006 5.96021 19.5497V4.82782ZM19.8814 4.02708C20.3236 3.58484 21.0407 3.58484 21.4829 4.02708L23.7478 6.29198C24.19 6.73424 24.19 7.45126 23.7478 7.89352C23.3056 8.33576 22.5885 8.33576 22.1463 7.89352L21.8146 7.56182V10.4901C21.8146 15.4936 17.7585 19.5497 12.755 19.5497H9.35762C8.73219 19.5497 8.22517 19.0427 8.22517 18.4173C8.22517 17.7918 8.73219 17.2848 9.35762 17.2848H12.755C16.5076 17.2848 19.5497 14.2427 19.5497 10.4901V7.56182L19.218 7.89352C18.7758 8.33576 18.0587 8.33576 17.6165 7.89352C17.1742 7.45126 17.1742 6.73424 17.6165 6.29198L19.8814 4.02708Z"
                    fill="#F2F2F2"
                  />
                </svg>
              </div>
              <div class="flex flex-col">
                <p class="font-bold text-white text-2xl">$6,325.00</p>
                <p class="text-gray-600 text-xs font-medium">Wallet Balance</p>
              </div>
            </div>

            <!-- 2nd Box -->

            <div
              class="
                w-auto
                bg-white
                border border-gray-300
                p-6
                flex
                items-center
                rounded-xl
              "
            >
              <div class="rounded-xl p-3 bg-bizz-green bg-opacity-10 mr-5">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.28443 4.82782C6.28443 4.20239 5.77741 3.69537 5.15198 3.69537C4.52655 3.69537 4.01953 4.20239 4.01953 4.82782V19.5497C4.01953 22.0514 6.04759 24.0795 8.54933 24.0795H23.2712C23.8966 24.0795 24.4036 23.5725 24.4036 22.947C24.4036 22.3216 23.8966 21.8146 23.2712 21.8146H8.54933C7.29846 21.8146 6.28443 20.8006 6.28443 19.5497V4.82782ZM20.2059 4.02708C20.6481 3.58484 21.3652 3.58484 21.8074 4.02708L24.0723 6.29198C24.5145 6.73424 24.5145 7.45126 24.0723 7.89352C23.6301 8.33576 22.913 8.33576 22.4708 7.89352L22.1391 7.56182V10.4901C22.1391 15.4936 18.083 19.5497 13.0795 19.5497H9.68212C9.05669 19.5497 8.54967 19.0427 8.54967 18.4173C8.54967 17.7918 9.05669 17.2848 9.68212 17.2848H13.0795C16.8321 17.2848 19.8742 14.2427 19.8742 10.4901V7.56182L19.5425 7.89352C19.1003 8.33576 18.3832 8.33576 17.941 7.89352C17.4987 7.45126 17.4987 6.73424 17.941 6.29198L20.2059 4.02708Z"
                    fill="#4B9F47"
                  />
                </svg>
              </div>
              <div class="flex flex-col">
                <p class="font-bold text-black text-2xl">$4,660.00</p>
                <p class="text-gray-600 text-xs font-medium">ِAmount Spent</p>
              </div>
            </div>

            <!-- 3rd Box -->
            <div class="self-start bg-green-600 py-3 text-center rounded-md">
              <p class="text-white text-xl font-semibold">Fund Wallet</p>
            </div>
          </div>
        </div>

        <div class="header flex justify-between items-center">
          <div class="left">
            <span class="font-bold text-base leading-6"
              >Latest Transactions</span
            >
          </div>
          <p
            role="button"
            class="
              btn
              flex
              ml-auto
              justify-center
              items-center
              font-bold
              space-x-2
              w-40s
              rounded-lg
              text-white
              bg-bizz-blue-500
              text-xs
              leading-6
              px-8
              py-2.5
            "
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.85917 13.2734L3.85917 10.4309L5.63576 10.4309C7.10755 10.4309 8.30066 9.23778 8.30066 7.76596L8.30066 5.98937L10.9656 5.98937C11.4561 5.98937 11.8539 5.59168 11.8539 5.10107C11.8539 4.61046 11.4561 4.21277 10.9656 4.21277L8.19968 4.21277L8.19855 4.21277C7.63506 4.21251 7.20915 4.2123 6.79842 4.31093C6.43587 4.39798 6.08928 4.54153 5.77136 4.73633C5.41096 4.95725 5.10973 5.25874 4.71107 5.65777L3.52758 6.84124L3.52748 6.84135C3.12849 7.23997 2.82701 7.54117 2.60617 7.90152C2.41136 8.21944 2.26779 8.56605 2.18075 8.92866C2.08208 9.33966 2.08228 9.76576 2.08255 10.3298L2.08255 10.3299L2.08257 13.3101L2.08257 13.3102C2.08256 14.0252 2.08256 14.6153 2.12184 15.096C2.16263 15.5953 2.25019 16.0543 2.46985 16.4855C2.81051 17.154 3.35407 17.6976 4.02265 18.0383C4.45378 18.2579 4.91276 18.3455 5.41207 18.3863C5.89279 18.4256 6.48292 18.4255 7.19792 18.4255L7.19801 18.4255L14.7331 18.4255L14.7332 18.4255C15.4482 18.4255 16.0383 18.4256 16.519 18.3863C17.0184 18.3455 17.4773 18.2579 17.9084 18.0383C18.5771 17.6976 19.1206 17.154 19.4613 16.4855C19.6809 16.0543 19.7684 15.5953 19.8093 15.096C19.8486 14.6153 19.8486 14.0252 19.8486 13.3101L19.8486 10.4309C19.8486 9.94025 19.4508 9.54256 18.9603 9.54256C18.4697 9.54256 18.072 9.94025 18.072 10.4309L18.072 13.2734C18.072 14.0343 18.0713 14.5516 18.0386 14.9514C18.0068 15.3408 17.9491 15.54 17.8783 15.6789C17.7079 16.0132 17.4362 16.285 17.1019 16.4553C16.9629 16.5261 16.7638 16.5838 16.3743 16.6156C15.9745 16.6482 15.4573 16.6489 14.6964 16.6489L7.2347 16.6489C6.4738 16.6489 5.95656 16.6482 5.55674 16.6156C5.1673 16.5838 4.96814 16.5261 4.82921 16.4553C4.49492 16.285 4.22314 16.0132 4.05281 15.6789C3.98202 15.54 3.92434 15.3408 3.89252 14.9514C3.85986 14.5516 3.85917 14.0343 3.85917 13.2734ZM5.90333 6.97804C6.2239 6.65745 6.39783 6.48699 6.52405 6.38021L6.52406 7.76596C6.52406 8.25656 6.12636 8.65426 5.63576 8.65426L4.25004 8.65426C4.35679 8.52803 4.52727 8.3541 4.84784 8.03351L5.90333 6.97804ZM13.6304 5.10106C13.6304 4.61045 14.0281 4.21276 14.5187 4.21276L17.7039 4.21276L17.4438 3.95258C17.0969 3.6057 17.0969 3.04323 17.4438 2.69635C17.7906 2.34947 18.3531 2.34947 18.7 2.69635L20.4766 4.47294C20.8235 4.81982 20.8235 5.38229 20.4766 5.72917L18.7 7.50577C18.3531 7.85265 17.7906 7.85265 17.4438 7.50577C17.0969 7.15889 17.0969 6.59642 17.4438 6.24954L17.7039 5.98936L14.5187 5.98936C14.0281 5.98936 13.6304 5.59167 13.6304 5.10106Z"
                fill="white"
              />
            </svg>

            <span> Export </span>
          </p>
        </div>

        <div class="table-wrapper mt-5">
          <table class="w-full">
            <thead>
              <tr class="font-bold text-xs text-gray-400 leading-5">
                <th>
                  <input class="-ml-2" type="checkbox" />
                </th>
                <th>Transaction ID</th>
                <th class='text-left'>Time</th>
                <th>Amount</th>
                <th>Payment Type</th>
                <th>Subscription Type</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="i in 8"
                :key="i"
                class="cursor-pointer odd:bg-gray-100s"
              >
                <td>
                  <input class="checked:ring-0" type="checkbox" />
                </td>
                <td class="pt-3">
                  <div class="flex justify-center items-center space-x-4">
                    <div class="name">
                      <span
                        class="
                          text-xs
                          block
                          leading-5
                          font-bold
                          text-bizz-black-100
                        "
                        >Usman Abiola</span
                      >
                      <span class="text-xs leading-5 text-gray-400"
                        >#213567</span
                      >
                    </div>
                  </div>
                </td>
                <td class="text-xs leading-5 text-bizz-black-100 font-medium">
                  17 May 2021 10:10pm
                </td>
                <td
                  class="
                    text-sm
                    leading-5
                    text-center text-bizz-green
                    font-medium
                  "
                >
                  $1903
                </td>
                <td
                  class="
                    text-sm
                    leading-5
                    text-center text-bizz-black-100
                    font-medium
                  "
                >
                  via PayPal
                </td>
                <td
                  class="
                    text-sm
                    leading-5
                    text-center text-bizz-black-100
                    font-medium
                  "
                >
                  Corporate Module
                </td>

                <td
                  class="
                    text-sm
                    cursor-pointer
                    leading-5
                    text-bizz-black-100
                    font-medium
                  "
                >
                  <div
                    class="
                      flex
                      space-x-2
                      mx-auto
                      w-9/12
                      border
                      rounded-full
                      px-8
                      py-2
                      items-center
                      justify-center
                    "
                  >
                    <span>View</span>
                    <svg
                      width="22"
                      height="23"
                      class="cu"
                      viewBox="0 0 22 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.5895 9.96653C7.93393 9.6221 8.49236 9.6221 8.83679 9.96653L10.859 11.9888L12.8813 9.96653C13.2257 9.6221 13.7842 9.6221 14.1286 9.96653C14.473 10.3109 14.473 10.8694 14.1286 11.2138L11.4827 13.8597C11.1383 14.2041 10.5798 14.2041 10.2354 13.8597L7.5895 11.2138C7.24507 10.8694 7.24507 10.3109 7.5895 9.96653Z"
                        fill="#040415"
                      />
                    </svg>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="see-more flex justify-center items-center mt-6">
            <nuxt-link
              to="#"
              class="
                text-center
                mx-auto
                text-gray-700
                font-bold
                underline
                text-sm
                leading-5
              "
              >See All Users</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AdminIndex',
  layout: 'dashboard',
  transition: 'layout',
}
</script>

<style scoped lang="scss">
table {
  thead {
    th {
      @apply pb-4;
    }
  }
  tbody {
    tr {
      &:hover {
        @apply bg-gray-100;
      }
      td {
        @apply py-2;
      }
    }
  }
}
</style>
