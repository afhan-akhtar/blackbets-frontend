<template>
  <div class="message flex items-center secondaryBlack py-4 rounded-lg mx-full primaryStroke shadow-xl">
    <!-- Use a static default avatar image -->
    <img class="w-[80px] h-[80px] rounded-full" src="@/assets/Rectangle 93chat.svg" alt="Avatar" />
    <div>
      <div class="flex items-center space-x-2">
        <span class="text-white font-bold text-lg">{{ username }}</span>
        <span class="text-gray-400 text-sm" style="color: #72767D">{{ time }}</span>
      </div>
      <div class="text-white mt-1 text-md" style="color: #DCDDDE">{{ message }}</div>
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
