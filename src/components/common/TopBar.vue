<template>
  <div class="flex justify-between items-center h-16 relative px-[20px]">
    <!-- Navbar (Left) -->
    <div class="flex items-center flex-shrink-0">
      <Navbar />
    </div>

    <!-- MainLogo (Centered) -->
    <div class="absolute left-1/2 transform -translate-x-1/2">
      <MainLogo />
    </div>

    <!-- UserProfile (Right) -->
    <div class="flex items-center flex-shrink-0">
      <UserProfile v-if="isLoggedIn" />
      <SteamSignIn v-else />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import Navbar from './Navbar.vue'
import MainLogo from './MainLogo.vue'
import UserProfile from './Profile.vue'
import SteamSignIn from './SteamSignIn.vue'
import { useAuthStore } from '@/stores/userStatus'

export default {
  components: {
    Navbar,
    MainLogo,
    SteamSignIn,
    UserProfile
  },
  setup() {
    const authStore = useAuthStore()

    // isLoggedIn as a computed property based on the store's state
    const isLoggedIn = computed(() => authStore.isAuthenticated)

    // Call fetchUserStatus when the component is mounted
    onMounted(() => {
      authStore.fetchUserStatus()
    })

    return {
      isLoggedIn
    }
  }
}
</script>
