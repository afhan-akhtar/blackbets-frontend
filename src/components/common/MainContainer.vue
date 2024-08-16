<template>
  <div class="flex h-screen">
    <!-- Chat Section -->
    <div
      :class="[
        'transition-all duration-300 ease-in-out',
        isChatVisible ? 'w-2/11' : 'w-0',
        isChatVisible ? 'block' : 'hidden',
        'bg-gray-800 text-white overflow-hidden'
      ]"
    >
      <div class="p-4">
        <h2 class="text-xl font-semibold">Chat</h2>
        <!-- Chat content goes here -->
        <Chat />
        <p class="mt-4">This is the chat section.</p>
      </div>
    </div>

    <!-- Main Content Section -->
    <div
      :class="[
        'flex-grow transition-all duration-300 ease-in-out',
        isChatVisible ? 'w-9/11' : 'w-full'
      ]"
      class="bg-gray-100 p-6"
    >
      <button @click="toggleChat" class="mb-4 p-2 bg-blue-500 text-white rounded">
        Toggle Chat
      </button>
      <div>
        <!-- Main content goes here -->
        <h1 class="text-2xl font-bold">Main Content</h1>
        <p class="mt-4">This is the main content section.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Chat from './Chat.vue'

export default {
  components: {
    Chat
  },
  data() {
    return {
      isChatVisible: true
    }
  },
  methods: {
    toggleChat() {
      this.isChatVisible = !this.isChatVisible
    }
  }
}
</script>

<style scoped>
/* Custom styles can go here */
</style>
