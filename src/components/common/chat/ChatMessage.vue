<template>
  <div class="message flex items-start space-x-4 secondaryBlack py-4 rounded-lg mx-full primaryStroke">
    <!-- Use a static default avatar image -->
    <img class="w-12 h-12 rounded-full ml-4" src="@/assets/profile-icon.png" alt="Avatar" />
    <div>
      <div class="flex items-center space-x-2">
        <span class="text-white font-semibold">{{ username }}</span>
        <span class="text-gray-400 text-sm">{{ time }}</span>
      </div>
      <div class="text-white mt-1">{{ message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      default: 'Username'
    },
    time: {
      type: String,
      default: 'a few moments ago'
    },
    message: {
      type: String,
      default: 'This is a sample message'
    }
  }
}
</script>

<style scoped>
.message {
  width: 360px;
  /* Add any additional styling if needed */
}
/* Add any additional styling if needed */
</style>
