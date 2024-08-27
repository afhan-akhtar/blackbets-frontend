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
        class="flex flex-col justify-center items-center overflow-hidden "
      >
       <!-- Go Back Button -->
       <div class="row w-full p-4 mt-3">
        <button @click="goBack" class="bg-[#222121] py-1 px-2 rounded-md">
          <img src="@/assets/arrow-left.svg" alt="">
        </button>
      </div>
        <JackpotHistory />
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Chat from "../components/common/Chat.vue";
  import LoginTopBar from "../components/common/LoginTopBar.vue";
  import JackpotHistory from "../components/common/JackpotHistory.vue";
  
  export default {
    components: {
      Chat,
      LoginTopBar,
      JackpotHistory
    },
    data() {
      return {
        isChatVisible: true,
   
      };
    },
    methods: {
      toggleChat() {
        this.isChatVisible = !this.isChatVisible;
      },
      async fetchTransactions() {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // Example API endpoint
          this.transactions = response.data.map((item, index) => ({
            id: index + 1,
            amount: (Math.random() * 500).toFixed(2), // Example amount
            chance: (Math.random() * 100).toFixed(2), // Example chance
            ticket: (Math.random() * 100).toFixed(7), // Example ticket
          }));
        } catch (error) {
          this.transactionError = error.message;
        }
      },
      async addTransaction(transaction) {
        try {
          const response = await axios.post('https://jsonplaceholder.typicode.com/posts', transaction); // Example API endpoint
          this.transactions.push(response.data);
        } catch (error) {
          this.transactionError = error.message;
        }
      },
      goBack() {
      this.$router.go(-1);
    },
    },
   
  };
  </script>
  
 