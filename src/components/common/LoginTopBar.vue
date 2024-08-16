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
        <UserProfile  />
       
      </div>
    </div>
  </template>
  
  <script>
  import { computed, onMounted } from 'vue'
  import Navbar from './Navbar.vue'
  import MainLogo from './MainLogo.vue'
  import UserProfile from './Profile.vue'
  import { useAuthStore } from '@/stores/userStatus'
  
  export default {
    components: {
      Navbar,
      MainLogo,
      
      UserProfile
    },
   
  }
  </script>
  