<template>
    <LoginTopBar />
    <div class="flex h-screen bg-black text-white overflow-hidden">
      <!-- Chat Section -->
      <div
        :class="[
          'transition-all duration-300 ease-in-out',
          isChatVisible ? 'w-2/11' : 'w-0',
          isChatVisible ? 'block' : 'hidden',
          'bg-gray-900 overflow-hidden'
        ]"
      >
        <div class="p-6 h-full overflow-y-auto">
          <Chat />
        </div>
      </div>
  
      <!-- Main Content Section -->
      <div
        :class="[
          'flex-grow transition-all duration-300 ease-in-out',
          isChatVisible ? 'w-9/11' : 'w-full'
        ]"
        class="flex flex-col justify-center items-center overflow-hidden"
      >
        <div class="main-content text-center h-full overflow-y-auto">
          <!-- Circle with Timer -->
          <div class="relative inline-block flex justify-center items-center">
            <div class="relative w-72 h-72 rounded-full bg-[#212020] flex justify-center items-center">
              <!-- <div class="absolute inset-0 rounded-full bg-[#333232] opacity-50 border-4 border-dashed border-white"></div> -->
              <div class="absolute inset-0 rounded-full  flex justify-center items-center shadow-xl" style="inset: 30px; background-color: #222121;">
                <img src="@/assets/Group 11.svg" alt="Timer Background" class=" w-full h-full rounded-full" />
              </div>
              <div class="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
                <p class="text-4xl font-bold mb-2">2m 0s</p>
              </div>
            </div>
          </div>
  
          <!-- Value and Button Section -->
          <div class="flex justify-between items-center mb-0 rounded-full shadow-xl p-8 card" style="background-color:#171717; height: 193px; margin-top:-224px;">
            <p class="text-lg ">${{ amount.toFixed(2) }}</p>
            <p class="text-lg ">30/200</p>
          </div>
          <div class="flex justify-between items-center mb-0 rounded-xl  p-4 mx-4" style="background-color:#222121; margin-bottom:-30px;">
            <router-link to="/jackpot/inventory"><p class="text-lg ">See Inventory</p></router-link>
            <router-link to="/jackpot/history"><p class="text-lg ">Jackpot History</p></router-link>
          </div>
          
          <button type="submit" @click="handleTransaction" class=" card text-lg bg-yellow-500 text-black px-6 py-3 rounded-md shadow-xl font-bold" style="background-color: #222121;  clip-path: polygon(0% 0%, -50% 0%, 100% 0%, 100% 0%, 90% 100%, 10% 100%);
}">
            DEPOSIT
              <!-- <p v-if="transactionStatus" class="mt-4 text-lg">{{ transactionStatus }}</p> -->
          <p  class="mt-4 text-lg">Instant Jackpot</p>
          </button>
        
  
          <!-- Current Items Section -->
          <div class="py-6 px-0 rounded-xl shadow-xl bg-gray-900 border-gray-700 mt-6" style="width: 800px; background-color: #171717;">
            <p class="font-bold mb-4 text-xl">Current Items</p>
            <hr class="color-hr" />
            
            <!-- Single row of 5 small cards -->
            <div class="flex flex-col items-center space-y-4 py-4 card rounded-lg shadow-lg" style="background-color: #222121; margin: 20px;">
              <!-- Centered Image Above Items -->
              <div class="flex flex-col items-center">
                <img src="@/assets/Rectangle 93chat.svg" alt="New Image" class="object-cover h-20 mb-2" />
                <div class="flex flex-row items-center text-white space-x-4">
                  <p class="text-lg">$2.32</p>
                  <p class="text-sm">12.64%</p>
                </div>
              </div>
            
              <!-- Items Row -->
              <div class="flex justify-center space-x-4">
                <div v-for="item in 5" :key="'small-' + item" class="bg-[#171717] p-2 rounded-md w-24 text-center">
                  <div class="relative rounded-t-xl overflow-hidden mb-2">
                    <img src="@/assets/inventory.svg" alt="Item Image" class="object-cover w-full h-16" />
                  </div>
                  <p class="text-xs text-white">Item {{ item }}</p>
                </div>
              </div>
            </div>
  
            <div class="card rounded-xl shadow-xl" style="background-color:#222121; margin:20px;">
              <!-- New Image Above Rows -->
              <div class="flex flex-col items-center">
                <img src="@/assets/Rectangle 93chat.svg" alt="New Image" class="object-cover h-20 mb-2" />
                <div class="flex flex-row items-center text-white space-x-4">
                  <p class="text-lg">$2.32</p>
                  <p class="text-sm">12.64%</p>
                </div>
              </div>
            
              <!-- First Row of Items -->
              <div class="flex justify-center space-x-4 py-4">
                <div v-for="item in 5" :key="'small-' + item" class="bg-[#171717] p-2 rounded-md w-24 text-center">
                  <div class="rounded-t-xl overflow-hidden">
                    <img src="@/assets/inventory.svg" alt="Item Image" class="object-cover w-full h-16" />
                  </div>
                  <p class="text-xs text-white mt-1">Item {{ item }}</p>
                </div>
              </div>
            
              <!-- Second Row of Items -->
              <div class="flex justify-center space-x-4 py-4">
                <div v-for="item in 5" :key="'small-' + item" class="bg-[#171717] p-2 rounded-md w-24 text-center">
                  <div class="rounded-t-xl overflow-hidden">
                    <img src="@/assets/inventory.svg" alt="Item Image" class="object-cover w-full h-16" />
                  </div>
                  <p class="text-xs text-white mt-1">Item {{ item }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
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
    },
  };
  </script>
  
  <style scoped>
  .main-content {
    max-width: 800px;
    height: calc(100vh - 100px); /* Adjust according to the height of the LoginTopBar */
    overflow-y: auto; /* Enable vertical scrolling */
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
  