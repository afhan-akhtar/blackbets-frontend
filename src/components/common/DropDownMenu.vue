<template>
  <div
  v-if="visible"
  class="absolute left-0 top-full w-full bg-secondaryBlack rounded-lg shadow-lg z-50 mt-2"
>
  <ul class="text-left primaryStroke rounded-lg">
    <li class="flex items-center justify-center px-8 py-2 hover:bg-gray-700 cursor-pointer">
      <router-link to="/profile" class="flex items-center w-full text-white no-underline">
        <div class="w-10 h-10 overflow-hidden mr-4">
          <img
            src="@/assets/profile-icon.svg"
            alt="Profile Icon"
            class="object-cover w-full h-full"
          />
        </div>
        <span>Profile</span>
      </router-link>
    </li>
    <li class="flex items-center justify-center px-10 py-2 hover:bg-gray-700 cursor-pointer">
      <router-link to="/affiliate" class="flex items-center w-full text-white no-underline">
        <div class="w-10 h-10 overflow-hidden mr-4">
          <img
            src="@/assets/affiliate-icon.svg"
            alt="Affiliate Icon"
            class="object-cover w-full h-full"
          />
        </div>
        <span>Affiliate</span>
      </router-link>
    </li>
    <li
      class="flex items-center justify-center px-4 py-2 hover:bg-gray-700 cursor-pointer"
      @click="navigateTo('fairness')"
    >
      <div class="w-10 h-10 overflow-hidden mr-4">
        <img
          src="@/assets/fairness-icon.svg"
          alt="Fairness Icon"
          class="object-cover w-full h-full"
        />
      </div>
      <span class="text-white">Fairness</span>
    </li>
    <li class="flex items-center justify-center px-10 py-2 hover:bg-gray-700 cursor-pointer">
      <router-link to="/profile-settings" class="flex items-center w-full text-white no-underline">
        <div class="w-10 h-10 overflow-hidden mr-4">
          <img
            src="@/assets/profile-icon.svg"
            alt="Settings Icon"
            class="object-cover w-full h-full"
          />
        </div>
        <span>Settings</span>
      </router-link>
    </li>
    <li
      class="flex items-center justify-center px-4 py-2 hover:bg-gray-700 cursor-pointer"
      @click="signOut"
    >
      <div class="w-10 h-10 overflow-hidden mr-4">
        <img
          src="@/assets/sign-out-icon.svg"
          alt="Sign Out Icon"
          class="object-cover w-full h-full"
        />
      </div>
      <span class="text-white">Sign out</span>
    </li>
  </ul>
</div>

</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    navigateTo(page) {
      console.log(`Navigating to ${page}`)
      // Use Vue Router's push method to navigate to a different route
      this.$router.push({ path: page })
    },
    delete_cookie(name) {
      // Delete cookie by setting its expiration date to the past
      document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`
    },
    signOut() {
      console.log('Signing out')

      // Delete the token cookie
      this.delete_cookie('token')

      // Redirect the user to the Home page after signing out
      this.$router.push('/')
    }
  }
}
</script>

<style scoped></style>
