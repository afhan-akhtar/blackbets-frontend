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
          <!-- Current Items Section -->
          <div class="py-6 px-0 rounded-xl shadow-xl bg-gray-900 border-gray-700" style="width: 800px; background-color: #222121;">
            <p class="font-bold mb-4 text-xl">Jackpot History</p>
            <hr class="color-hr" />
  
            <div v-for="transaction in transactions" :key="transaction.id" class="flex justify-center space-x-4 py-4 card rounded-lg shadow-lg" style="background-color: #171717; margin: 20px;">
              <div class="p-2 rounded-md w-full text-center">
                <div class="rounded-t-md overflow-hidden">
                  <img src="@/assets/Rectangle 1218.svg" alt="Item Image" class="w-full h-16" />
                </div>
                <div>
                  <p class="text-xs text-white mt-1">Won <span style="color:#4CC124;">${{ transaction.amount }}</span> with a {{ transaction.chance }}% Chance</p>
                </div>
                <div>
                  <p class="text-xs text-white mt-1">Ticket:{{ transaction.ticket }}</p>
                </div>
              </div>
            </div>
  
            <hr class="colored-hr" />
            <div class="flex justify-center items-center mt-5">
              <div class="rounded-lg" style="background-color: #171717; width:200px">
                <h6 class="text-center">Largest Pot</h6>
              </div>
            </div>
  
            <div class="flex justify-center space-x-4 py-4 card rounded-lg shadow-lg" style="background-color: #171717; margin: 20px; margin-top:0px;">
              <div class="p-2 rounded-md w-full text-center">
                <div class="rounded-t-md overflow-hidden">
                  <img src="@/assets/Rectangle 1218.svg" alt="Item Image" class="w-full h-16" />
                </div>
                <div>
                  <p class="text-xs text-white mt-1">Won <span style="color:#4CC124;">$250.46</span> with a 22.53% Chance</p>
                </div>
                <div>
                  <p class="text-xs text-white mt-1">Ticket:0.8514096</p>
                </div>
              </div>
            </div>
  
            <div class="flex justify-center items-center mt-5">
              <div class="rounded-lg" style="background-color: #171717; width:200px">
                <h6 class="text-center">Luckiest Pot</h6>
              </div>
            </div>
  
            <div class="flex justify-center space-x-4 py-4 card rounded-lg shadow-lg" style="background-color: #171717; margin: 20px; margin-top:0px;">
              <div class="p-2 rounded-md w-full text-center">
                <div class="rounded-t-md overflow-hidden">
                  <img src="@/assets/Rectangle 1218.svg" alt="Item Image" class="w-full h-16" />
                </div>
                <div>
                  <p class="text-xs text-white mt-1">Won <span style="color:#4CC124;">$250.46</span> with a 22.53% Chance</p>
                </div>
                <div>
                  <p class="text-xs text-white mt-1">Ticket:0.8514096</p>
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
        transactions: [
          { id: 1, amount: 250.46, chance: 22.53, ticket: '0.8514096' },
          { id: 2, amount: 250.46, chance: 22.53, ticket: '0.8514096' },
          { id: 3, amount: 250.46, chance: 22.53, ticket: '0.8514096' },
          { id: 4, amount: 250.46, chance: 22.53, ticket: '0.8514096' },
          { id: 5, amount: 250.46, chance: 22.53, ticket: '0.8514096' },
        ],
        transactionError: null, // Variable to hold error messages
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
    },
    mounted() {
      // Uncomment this line to fetch transactions from the API when the component mounts
      // this.fetchTransactions();
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
  
  .bg-yellow-500 {
    background-color: #FFC107;
  }
  
  html, body {
    overflow-x: hidden; /* Disable horizontal scrolling on the entire page */
  }
  .colored-hr {
    border: 0; /* Remove default border */
    height: 2px; /* Adjust the height of the line */
    background-color: #131313; /* Set your desired color */
  }
  .color-hr {
    border: 0; /* Remove default border */
    height: 2px; /* Adjust the height of the line */
    background-color: #9D9D9D; /* Set your desired color */
  }
  </style>
  