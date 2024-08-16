<template>
  <div class="nav-wrapper">
    <div
      class="flex items-center drop-shadow-custom bg-secondaryBlack p-2 px-5 h-[58px] rounded-[20px] hover:bg-gray-700 transition-colors duration-200 primaryStroke relative w-max hover:scale-105 transform transition-transform duration-200 ease-in-out cursor-pointer"
      @click="handleClick"
    >
      <span
        class="text-white font-regular h-[32px] align-middle leading-none -mt-1 text-2xl flex items-center"
        >Sign in with Steam</span
      >
      <img src="@/assets/steam-icon.svg" alt="SteamIcon" class="ml-4 h-[32px] flex-shrink-0" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  methods: {
    handleClick() {
      // Access environment variable
      const steamLoginUrl = `http://localhost:3000/auth/steam`

      // Redirect the user to the Steam login URL
      window.location.href = steamLoginUrl
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
.cursor-pointer {
  cursor: pointer;
}
</style>
