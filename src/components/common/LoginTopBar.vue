<template>
  <div class="flex justify-between items-center h-16 relative px-5">
    <!-- Navbar (Left) -->
    <div class="flex items-center flex-shrink-0">
      <Navbar />
    </div>

    <!-- MainLogo (Centered) -->
    <div class="absolute left-1/2 transform -translate-x-1/2">
      <MainLogo />
    </div>

    <!-- Notification and UserProfile (Right) -->
    <div class="flex items-center flex-shrink-0 space-x-4">
      <!-- Notification Button -->
      <div class="relative pr-6">
        <button @click="togglePopup" class="relative btn btn-link p-2 rounded-md shadow" style="background-color: #171717;">
          <!-- Tailwind Notification Icon -->
        
          <img src="@/assets/bell-icon.svg" alt="">
          <span class="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-green-500 border rounded-full" style="border-color: #4CC124; background-color: #4CC124;"></span>
        </button>

        <!-- Notification Popup -->
        <div
        v-if="isPopupVisible"
        class="absolute right-0 top-full mt-2 main-container bg-[#171717] text-white rounded-lg shadow-lg z-50"
        style="box-shadow: 0 4px 8px rgba(34, 33, 33, 0.5);"
      >
        <div class="p-4">
          <div class="flex justify-end items-center mb-4">
            <button @click="clearAllNotifications" class="text-sm text-white">
              Clear all
            </button>
          </div>
      
          <div v-if="notifications.length === 0" class="text-center text-gray-400">No new notifications.</div>
          <div v-for="notification in notifications" :key="notification.id" class="flex flex-col mb-4 bg-[#222121] p-4 rounded-lg">
            <button @click="deleteNotification(notification.id)" class="text-sm text-white flex justify-end">
              <img src="@/assets/delete.svg" alt="">
            </button>
            <p v-html="notification.message"></p>
          </div>
        </div>
      </div>
      
      </div>

      <!-- UserProfile (Right) -->
      <div>
        <UserProfile />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import MainLogo from './MainLogo.vue'
import UserProfile from './Profile.vue'

export default {
  components: {
    Navbar,
    MainLogo,
    UserProfile,
  },
  data() {
    return {
      isPopupVisible: false,
      notifications: [
        {
          id: 1,
          message: `
            <div>System</div>
            <div>Welcome to Blackbets</div>
            <div>Feel free to look around or join our Discord for giveaways:</div>
            <div><a href="https://discord.gg/blackbets" style="color: #4042BA;  target="_blank">https://discord.gg/blackbets</a></div>
          `,
        },
        {
          id: 2,
          message: `
            <div>System</div>
            <div>Welcome to Blackbets</div>
            <div>Feel free to look around or join our Discord for giveaways:</div>
            <div><a href="https://discord.gg/blackbets" style="color: #4042BA;   target="_blank">https://discord.gg/blackbets</a></div>
          `,
        },
        
      ],
    };
  },
  methods: {
    togglePopup() {
      this.isPopupVisible = !this.isPopupVisible;
    },
    deleteNotification(notificationId) {
      this.notifications = this.notifications.filter(notification => notification.id !== notificationId);
    },
    clearAllNotifications() {
      this.notifications = [];
    },
  },
};
</script>

<style scoped>
.main-container{
  width: 40rem;
}
.rounded-lg{
  border-radius: 1.5rem;
}


</style>
