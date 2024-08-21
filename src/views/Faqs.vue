<template>
    <LoginTopBar />
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
        <div class="p-6" style="height:calc(100vh - 100px); overflow-y:auto;">
          <Chat />
        </div>
      </div>
  
      <!-- Main Content Section -->
      <div
        :class="[
          'flex-grow transition-all duration-300 ease-in-out',
          isChatVisible ? 'w-0' : 'w-full'
        ]"
        class="bg-black p-6" style="height:calc(100vh - 80px); overflow-y:auto;"
      >
        <!-- Header -->
        <div class="flex justify-between items-center text-white mb-2">
          <h1 class="text-2xl">Frequently Asked Questions</h1>
        </div>
  
        <!-- FAQ Content -->
        <div class="p-6 rounded-lg shadow-lg text-white" style="background-color: #171717; border: 3px solid #222121;">
          <div v-for="(faq, index) in faqs" :key="index" class="mb-6">
            <h2 class="text-lg font-bold mb-2">{{ faq.question }}</h2>
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Chat from "../components/common/Chat.vue";
  import LoginTopBar from "../components/common/LoginTopBar.vue";
  
  export default {
    components: {
      Chat,
      LoginTopBar,
    },
    data() {
      return {
        isChatVisible: true,
        faqs: [
          {
            question: "What Is Blackbets.com?",
            answer: "Blackbets.com is an independent platform where users can use Rust items and their initial value to participate in two types of games: Coinflip and Jackpot. Jackpot is a game that accommodates multiple players. Participants deposit Rust skins into a communal pot and earn a possible win percentage based on their contribution. The more you contribute, the greater your win percentage and chance of winning. Coinflip is a head-to-head game for two players. The game is straightforward, resembling a coin toss, with each player having approximately 50% chance of winning."
          },
          {
            question: "How to Play",
            answer: "To play Jackpot, select Deposit and choose the skins you want to contribute. For Coinflip, you can either join an existing game or create your own using the 'Create a game' button. Both games provide on-screen prompts to help you complete your deposit. Afterward, use your mobile device to confirm the transaction via the Steam App. (If you haven't enabled Mobile Authenticator, please watch this video)"
          },
          {
            question: "Claiming Your Winnings",
            answer: "When you win a Jackpot or Coinflip game, a notification will appear shortly with a link to your winnings. Accept the trade offer in your Steam Trade offers promptly to prevent any issues. Winning offers are available for a limited time before being canceled, but you can resend them from 'My Profile' if needed. For any problems, contact support with the game ID of the affected round."
          },
          {
            question: "Understanding Jackpot Tickets",
            answer: "Jackpot operates on a ticket system. If you contribute items early, you'll receive low-numbered tickets; if you contribute later, you'll receive high-numbered tickets."
          },
          {
            question: "Setting Up Your Account",
            answer: "To get started, click the Login button in the upper right corner of the site. Once logged in, visit your profile and follow the instructions to set your Steam Trade link. (Important: Your Steam Inventory must be set to Public to play.)"
          },
          {
            question: "Troubleshooting Inventory Issues",
            answer: "If your inventory isn't loading, ensure your Steam Inventory is public and your Steam Trade link is correctly set. If you think everything is set up properly, double-check and reset if necessary. If you've recently acquired new items, refresh your inventory using the button provided in the interface. If your inventory still doesn't load after 10 minutes, reach out to support using the contact options at the bottom of the page."
          },
          {
            question: "Need More Help?",
            answer: "If you have any further questions or need additional assistance, please join our Discord server. Our support team is available to help you out. You can create a support ticket. We're here to help, so don't hesitate to reach out!"
          }
        ]
      };
    },
    methods: {
      toggleChat() {
        this.isChatVisible = !this.isChatVisible;
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    background-color: #171717;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
    height: 150px;
    transition: opacity 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative; /* For absolute positioning of images */
  }
  
  .card img {
    width: 64px; /* Width of the images */
    height: 64px; /* Height of the images */
    position: absolute;
    top: 8px;
    right: 8px;
  }
  
  .card-link:hover {
    opacity: 0.8;
    transform: scale(1.02);
  }
  </style>
  