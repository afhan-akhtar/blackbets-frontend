<template>
  <TopBar />
  <OnlineAndSocials />
  <OnlineAndSocials />
  <OnlineAndSocials />
  <ChatMessage
    avatarUrl="https://avatars.steamstatic.com/edd90c6af7248e29e73215d46da9274c78b6f9ab_full.jpg"
    username="Zaqk187420"
    time="1 minute ago"
    message="Wow this site is amazing"
  />
  <SendMessage />
  <UserProfile />
  <MainLogo />
</template>
<script>
import OnlineAndSocials from '../components/common/chat/OnlineAndSocials.vue'
import ChatMessage from '../components/common/chat/ChatMessage.vue'
import SendMessage from '../components/common/chat/SendMessage.vue'
import Chat from '../components/common/Chat.vue'
import MainLogo from '../components/common/MainLogo.vue'
import UserProfile from '../components/common/Profile.vue'
import TopBar from '../components/common/TopBar.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Jackpot',
  components: {
    OnlineAndSocials,
    ChatMessage,
    SendMessage,
    Chat,
    MainLogo,
    UserProfile, 
    TopBar
  }
}
</script>

<style></style>
