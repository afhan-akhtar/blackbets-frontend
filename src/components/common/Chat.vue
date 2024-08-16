<template>
  <div class="container mx-auto bg-secondaryBlack primaryStroke p-2">
    <!-- Top Red Section with OnlineAndSocial Component -->
    <div class="bg-red-500 flex justify-center items-center px-2 py-4">
      <OnlineAndSocials />
    </div>

    <!-- Grey Divider Line -->
    <div class="bg-primaryBlack h-1 my-2"></div>

    <!-- Blue Sections with ChatMessage Components -->
    <div class="flex-1 overflow-y-auto pt-2">
      <div class="bg-blue-500 flex justify-center items-center p-0">
        <ChatMessage
          avatarUrl="https://avatars.steamstatic.com/edd90c6af7248e29e73215d46da9274c78b6f9ab_full.jpg"
          username="Zaqk187420"
          time="1 minute ago"
          message="Wow this site is amazingg"
        />
      </div>
      <div class="bg-blue-500 flex justify-center items-center p-4">
        <ChatMessage
          avatarUrl="https://avatars.steamstatic.com/edd90c6af7248e29e73215d46da9274c78b6f9ab_full.jpg"
          username="Zaqk187420"
          time="1 minute ago"
          message="Wow this site is amazing"
        />
      </div>
      <div class="bg-blue-500 flex justify-center items-center p-4">
        <ChatMessage
          avatarUrl="https://avatars.steamstatic.com/edd90c6af7248e29e73215d46da9274c78b6f9ab_full.jpg"
          username="Zaqk187420"
          time="1 minute ago"
          message="Wow this site is amazing"
        />
      </div>
      <div class="bg-blue-500 flex justify-center items-center p-4">
        <ChatMessage
          avatarUrl="https://avatars.steamstatic.com/edd90c6af7248e29e73215d46da9274c78b6f9ab_full.jpg"
          username="Zaqk187420"
          time="1 minute ago"
          message="Wow this site is amazing"
        />
      </div>
      <div class="bg-blue-500 flex justify-center items-center p-4">
        <ChatMessage
          avatarUrl="https://avatars.steamstatic.com/edd90c6af7248e29e73215d46da9274c78b6f9ab_full.jpg"
          username="Zaqk187420"
          time="1 minute ago"
          message="Wow this site is amazing"
        />
      </div>
      <div class="bg-blue-500 flex justify-center items-center p-4">
        <ChatMessage
          avatarUrl="https://avatars.steamstatic.com/edd90c6af7248e29e73215d46da9274c78b6f9ab_full.jpg"
          username="Zaqk187420"
          time="1 minute ago"
          message="Wow this site is amazing"
        />
      </div>
    </div>
    <!-- Bottom Black Section with SendMessage Component -->
    <div class="bg-black flex justify-center items-center p-4">
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
