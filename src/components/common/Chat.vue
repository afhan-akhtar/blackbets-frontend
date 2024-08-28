<template>
  <button v-if="!isChatVisible"
      @click="toggleChat"
      class="flex items-center justify-center primaryBlack rounded-md hover:bg-gray-700 transition primaryStroke p-2"
    >
      <img src="@/assets/Line 80sidebar_toggle.svg" alt="Back" class="w-10 h-10" />
    </button>
    <!-- Chat Section -->
    <div
      :class="[
        'transition-all duration-300 ease-in-out',
        isChatVisible ? 'w-2/11' : 'w-0',
        isChatVisible ? 'block' : 'hidden',
        'bg-gray-800 text-white overflow-hidden'
      ]"
    >
      <!-- <div  class="p-4">
        <h2 class="text-xl font-semibold">Chat</h2>
      
      </div> -->
    </div>
  <div v-if="isChatVisible"  class="container mx-auto bg-secondaryBlack primaryStroke p-2 rounded-xl shadow-xl">
  

    <!-- Top Red Section with OnlineAndSocial Component -->
    <div class="bg-red-500 flex justify-center items-center px-2 py-4">
      <OnlineAndSocials :toggleChat="toggleChat" />
    </div>

    <!-- Grey Divider Line -->
    <div class="bg-primaryBlack h-1 my-2"></div>

    <!-- Blue Sections with ChatMessage Components -->
    <div class="flex-1 overflow-y-auto pt-2">
      <div class="bg-blue-500 flex justify-center items-center p-0">
        <ChatMessage
          avatarUrl="https://avatars.steamstatic.com/edd90c6af7248e29e73215d46da9274c78b6f9ab_full.jpg"
          username="Zaqk187420"
          time="10 minutes ago"
          message="Wow this site is amazing"
        />
      </div>
      <div class="bg-blue-500 flex justify-center items-center p-4">
        <ChatMessage
          avatarUrl="https://avatars.steamstatic.com/edd90c6af7248e29e73215d46da9274c78b6f9ab_full.jpg"
          username="Zaqk187420"
          time="10 minutes ago"
          message="Wow this site is amazing"
        />
      </div>
      <div class="bg-blue-500 flex justify-center items-center p-4">
        <ChatMessage
          avatarUrl="https://avatars.steamstatic.com/edd90c6af7248e29e73215d46da9274c78b6f9ab_full.jpg"
          username="Zaqk187420"
          time="5 minutes ago"
          message="Wow this site is amazing"
        />
      </div>
      <div class="bg-blue-500 flex justify-center items-center p-4">
        <ChatMessage
          avatarUrl="https://avatars.steamstatic.com/edd90c6af7248e29e73215d46da9274c78b6f9ab_full.jpg"
          username="Zaqk187420"
          time="3 minutes ago"
          message="Wow this site is amazing"
        />
      </div>
      <div class="bg-blue-500 flex justify-center items-center p-4">
        <ChatMessage
          avatarUrl="https://avatars.steamstatic.com/edd90c6af7248e29e73215d46da9274c78b6f9ab_full.jpg"
          username="Zaqk187420"
          time="3 minutes ago"
          message="Wow this site is amazing"
        />
      </div>
      <div class="bg-blue-500 flex justify-center items-center p-4">
        <ChatMessage
          avatarUrl="https://avatars.steamstatic.com/edd90c6af7248e29e73215d46da9274c78b6f9ab_full.jpg"
          username="Zaqk187420"
          time="2 minutes ago"
          message="Wow this site is amazing"
        />
      </div>
      
     
    </div>
    <!-- Bottom Black Section with SendMessage Component -->
    <div class="bg-black flex justify-center  items-center p-4">
      <SendMessage />
    </div>
  </div>
</template>

<script>
import OnlineAndSocials from './chat/OnlineAndSocials.vue'
import ChatMessage from './chat/ChatMessage.vue'
import SendMessage from './chat/SendMessage.vue'

export default {
  components: {
    OnlineAndSocials,
    ChatMessage,
    SendMessage
  },
  data() {
    return {
      isChatVisible: true // Initially set to true
    }
  },
  created() {
    // Check local storage to see if the chat was previously hidden
    const chatState = localStorage.getItem('chatVisible')
    if (chatState !== null) {
      this.isChatVisible = JSON.parse(chatState)
    }
  },
  methods: {
    toggleChat() {
      this.isChatVisible = !this.isChatVisible
      // Store the state in local storage
      localStorage.setItem('chatVisible', this.isChatVisible)
    }
  }
}
</script>

<style scoped>
body {
  margin: 0;
}
.container {
  max-width: 800px;
}
</style>
