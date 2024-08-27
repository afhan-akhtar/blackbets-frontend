<template>
  <LoginTopBar />
  <div class="flex min-h-screen bg-black text-white overflow-hidden">
    <!-- Chat Section -->
    <div
      :class="[
        'transition-all duration-300 ease-in-out',
        isChatVisible ? 'w-2/11' : 'w-0',
        isChatVisible ? 'block' : 'hidden',
        'bg-gray-900 '
      ]"
    >
      <div class="p-6 h-full">
        <Chat />
      </div>
    </div>

    <!-- Main Content Section -->
    <div
      :class="[
        'flex-grow transition-all duration-300 ease-in-out',
        isChatVisible ? 'w-9/11' : 'w-full'
      ]"
      class="flex flex-col justify-center items-center overflow-hidden ">
      <!-- Go Back Button -->
      <div class="row w-full p-4 mt-3">
        <button @click="goBack" class="bg-[#222121] py-1 px-2 rounded-md">
          <img src="@/assets/arrow-left.svg" alt="">
        </button>
      </div>

      <div class="main-content text-center h-full ">
        <!-- Circle with Timer -->
        <TimerCircle :timer="'2m 0s'" />

        <!-- Value and Button Section -->
        <ValueAndButtonSection :amount="amount" @handleTransaction="handleTransaction" />
        

        <!-- Current Items Section -->
        <div class="py-6 px-0 rounded-xl shadow-xl bg-gray-900 border-gray-700 mt-6" style="width: 800px; background-color: #171717;">
          <p class="font-bold mb-4 text-xl">Current Items</p>
          <hr class="color-hr" />

             <!-- Single row of 5 small cards -->
             <ItemCard :itemsPerRow="5" :numberOfRows="1" />

             <!-- Two rows of 5 small cards each -->
             <ItemCard :itemsPerRow="5" :numberOfRows="2" />
        </div>
      </div>
    </div>
  </div>
</template>

  
  <script>
  import axios from 'axios';
  import Chat from "../components/common/Chat.vue";
  import LoginTopBar from "../components/common/LoginTopBar.vue";
  import ItemCard from "../components/common/ItemCard.vue";
  import TimerCircle from "../components/common/TimerCircle.vue";
  import ValueAndButtonSection from "../components/common/ValueAndButtonSection.vue";
  
  export default {
    components: {
      Chat,
      LoginTopBar,
      ItemCard,
      TimerCircle,
      ValueAndButtonSection
    },
    data() {
      return {
        isChatVisible: true,
        amount: 55.42, // Example amount
        transactionStatus: null, // To hold transaction status
      };
    },
    methods: {
      toggleChat() {
        this.isChatVisible = !this.isChatVisible;
      },
      async handleTransaction() {
        try {
          // Simulating a transaction with static data
          const transactionData = {
            amount: this.amount,
            type: 'deposit',
          };
  
          // Replace the URL with your actual API endpoint
          const response = await axios.post('/api/transaction', transactionData);
  
          // Handle successful transaction
          this.transactionStatus = response.data.message || 'Transaction successful!';
        } catch (error) {
          // Handle errors
          console.error('Transaction failed:', error);
          this.transactionStatus = 'Transaction failed. Please try again.';
        }
      },
      goBack() {
      this.$router.go(-1);
    },
    },
  };
  </script>
  
  <style scoped>
  .main-content {
    max-width: 800px;
    margin-top: 30px;
    margin-bottom: 30px;
    overflow-x: hidden; /* Disable horizontal scrolling */
  }
  
  .circle-timer {
    background-color: #202020;
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
    position: relative;
    overflow: hidden;
  }
  
  .circle-timer img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .circle-timer p {
    margin: 0;
  }
  
  html, body {
    overflow-x: hidden; /* Disable horizontal scrolling on the entire page */
  }
  
  .color-hr {
    border: 0; /* Remove default border */
    height: 2px; /* Adjust the height of the line */
    background-color: #9D9D9D; /* Set your desired color */
  }
  .mx-4 {
    margin-left: 5rem;
    margin-right: 5rem;
}
  </style>
  