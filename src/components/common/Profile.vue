<template>
  <!-- <div class="nav-wrapper" v-if="isAuthenticated"> -->
    <div class="nav-wrapper">
    <div
      class="flex items-center drop-shadow-custom bg-secondaryBlack p-2 rounded-[20px] hover:bg-gray-700 transition-colors duration-200 primaryStroke relative w-max"
    >
      <div class="relative flex items-center">
        <div
        class="w-[60px] h-[60px] rounded-full overflow-hidden absolute left-2 top-1/2 transform -translate-y-1/2 z-10 border-2 border-white"
      >
        <img src="@/assets/Rectangle 2116cans.svg" alt="User Profile" class="object-cover w-full h-[66px]" style="margin-top:-3px;" />
      </div>
      </div>
      <div class="ml-20">
        <span class="text-white font-semibold text-xl">{{ username }}</span>
      </div>
      <button class="ml-auto p-2" @click="toggleDropdown">
        <img
          src="@/assets/small-arrow-down.svg"
          alt="Arrow Down"
          class="h-6 w-6 transition-transform duration-200"
          :class="{ 'rotate-180': isDropdownVisible }"
        />
      </button>
      <DropDownMenu :visible="isDropdownVisible" />
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue' // Import the 'ref' function
import { useAuthStore } from '@/stores/userStatus'
import DropDownMenu from './DropDownMenu.vue'

export default {
  name: 'UserProfile',
  components: {
    DropDownMenu
  },
  setup() {
    const authStore = useAuthStore()

    // Computed properties to get user data from the store
    const username = computed(() => authStore.user?.name || 'Guest')
    const profilePictureUrl = computed(
      () => authStore.user?.avatar || 'https://example.com/default-avatar.jpg' // Default profile picture if none
    )
    const isAuthenticated = computed(() => authStore.isAuthenticated)

    return {
      username,
      profilePictureUrl,
      isAuthenticated,
      isDropdownVisible: ref(false),
      toggleDropdown() {
        this.isDropdownVisible = !this.isDropdownVisible
      }
    }
  }
}
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
.nav-wrapper {
  height: 63px;
  margin: 0 auto; /* Center the container */
  padding: 0 0; /* Optional padding for better spacing */
}
.border-2{
  border-width: 3px;
}
</style>
