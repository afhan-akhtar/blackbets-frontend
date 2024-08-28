<template>
  <div class="flex items-center bg-gray-900 rounded-lg space-x-2">
    <div
      class="flex items-center space-x-0 bg-gray-800 p-4 rounded-md shadow-xl primaryStroke hover:bg-gray-700 transition"
    >
      <div class="flex items-center space-x-2 px-2">
        <img src="@/assets/online-icon.svg" alt="Online Icon" class="w-6 h-6" />
        <span class="text-white">304 Online</span>
      </div>
    </div>
    <button
      class="flex items-center justify-center primaryBlack rounded-md hover:bg-gray-700 transition primaryStroke p-2 shadow-xl"
    >
      <img src="@/assets/discord-icon.svg" alt="Discord" class="w-10 h-10" />
    </button>
    <button
      class="flex items-center justify-center primaryBlack rounded-md hover:bg-gray-700 transition primaryStroke p-2 shadow-xl"
    >
      <img src="@/assets/twitter-icon.svg" alt="Twitter" class="w-10 h-10" />
    </button>
    <button
      @click="toggleChat"
      class="flex items-center justify-center primaryBlack rounded-md hover:bg-gray-700 transition primaryStroke p-2 shadow-xl"
    >
      <img src="@/assets/arrow-left.svg" alt="Back" class="w-10 h-10" />
    </button>
  </div>


</template>

<script>
export default {
  name: 'OnlineAndSocials',
  props: {
    toggleChat: {
      type: Function,
      required: true
    }
  }
}
</script>

<style scoped>

</style>

