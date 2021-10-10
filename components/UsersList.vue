<template>
  <div>
    <div
      class="
        table-wrapper
        mt-8
        w-full
        overflow-x-scroll
        lg:overflow-x-hidden
        pb-6
      "
    >
      <table class="w-full items-center table-auto">
        <thead>
          <tr class="font-bold text-xs text-gray-400 leading-5">
            <th class="px-3">
              <input class=" :lg-ml-3" type="checkbox" />
            </th>
            <th class="px-3">Fullname</th>
            <th class="px-3">Joined</th>
            <th class="px-3">Cards</th>
            <th class="px-3">Email</th>
            <th class="px-3">Card Type</th>
            <th class="px-3">Views</th>
            <th class="px-3">Option</th>
          </tr>
        </thead>
        <tbody class="">
          <tr
            v-for="(user, i) in users"
            :key="i"
            class="cursor-pointer odd:bg-gray-100s"
          >
            <td class="px-3 md:mr-0 block whitespace-nowrap">
              <input class="checked:ring-0" type="checkbox" />
            </td>
            <td class="pt-3 px-3 whitespace-nowrap pr-6">
              <div class="flex justify-center items-center space-x-4">
                <img
                  class="rounded-full w-36px h-36px"
                  src="/usertableavatar.png"
                  alt=""
                />
                <div class="name">
                  <span
                    class="
                      text-xs
                      block
                      leading-5
                      font-bold
                      text-bizz-black-100
                    "
                  >
                    {{ user.full_Name }}
                  </span>
                  <span class="text-xs leading-5 text-gray-400">{{
                    user.user_id
                  }}</span>
                </div>
              </div>
            </td>
            <td
              class="
                text-sm
                px-3
                leading-5
                text-center
                whitespace-nowrap
                text-bizz-black-100
                font-medium
              "
            >
              {{ user.joined }}
            </td>
            <td
              class="
                text-sm
                px-3
                leading-5
                text-center
                whitespace-nowrap
                text-bizz-green
                font-medium
              "
            >
              2
            </td>
            <td
              class="
                text-sm
                px-3
                leading-5
                text-center
                whitespace-nowrap
                text-bizz-black-100
                font-medium
              "
            >
              {{ user.email }}
            </td>
            <td
              class="
                text-sm
                px-3
                leading-5
                text-center
                whitespace-nowrap
                text-bizz-black-100
                font-medium
              "
            >
              {{ user.card_type }}
            </td>
            <td
              class="
                text-sm
                px-3
                justify-center
                items-center
                whitespace-nowrap
                leading-5
                flex
                text-bizz-green
                font-medium
              "
            >
              <div
                class="
                  rounded-full
                  text-center
                  mb-3
                  px-4
                  bg-bizz-green bg-opacity-10
                  py-2
                "
              >
                {{ user.views }}
              </div>
            </td>

            <td
              class="
                text-sm
                px-3
                cursor-pointer
                leading-5
                whitespace-nowrap
                text-bizz-black-100
                font-medium
              "
            >
              <div
                class="
                  flex
                  space-x-1
                  mx-auto
                  w-9/12
                  border
                  rounded-full
                  px-7
                  py-2
                  items-center
                  justify-center
                "
              >
                <span>View</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 
          <div class='see-more flex justify-center items-center mt-6'>
            <nuxt-link to='#' class='text-center mx-auto text-gray-700  font-bold underline text-sm leading-5'>See All Users</nuxt-link>

          </div> -->
      <div class="border-t border-gray-300 min-w-full py-4 mt-10 mb-5">
        <div v-if="total" class="constainer mx-auto max-w-5xl">
          <Pagination v-if="total > 10" :total="total" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogList',

  props: {
    users: {
      type: Array,
      default: Array,
    },
    total: {
      type: Number,
      default: 10,
    },
  },
}
</script>
