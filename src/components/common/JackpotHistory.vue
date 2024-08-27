<template>
    <div class="main-content text-center h-full">
      <!-- Current Items Section -->
      <div class="py-6 px-0 rounded-xl shadow-xl bg-gray-900 border-gray-700" style="width: 800px; background-color: #222121;">
        <p class="font-bold mb-4 text-xl">Jackpot History</p>
        <hr class="color-hr mb-3" />
  
        <TransactionCard
          v-for="transaction in transactions"
          :key="transaction.id"
          :transaction="transaction"
        />
  
        <hr class="colored-hr" />
        
        <SectionCard title="Largest Pot" />
        
        <TransactionCard
          v-for="transaction in transactions.slice(0, 1)" 
          :key="'largest-pot-' + transaction.id"
          :transaction="transaction"
        />
  
        <SectionCard title="Luckiest Pot" />
  
        <TransactionCard
          v-for="transaction in transactions.slice(0, 1)" 
          :key="'luckiest-pot-' + transaction.id"
          :transaction="transaction"
        />
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import TransactionCard from './TransactionCard.vue';
  import SectionCard from './SectionCard.vue';
  
  export default {
    components: {
      TransactionCard,
      SectionCard
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
        transactionError: null,
      };
    },
    methods: {
      toggleChat() {
        this.isChatVisible = !this.isChatVisible;
      },
      async fetchTransactions() {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
          this.transactions = response.data.map((item, index) => ({
            id: index + 1,
            amount: (Math.random() * 500).toFixed(2),
            chance: (Math.random() * 100).toFixed(2),
            ticket: (Math.random() * 100).toFixed(7),
          }));
        } catch (error) {
          this.transactionError = error.message;
        }
      },
      async addTransaction(transaction) {
        try {
          const response = await axios.post('https://jsonplaceholder.typicode.com/posts', transaction);
          this.transactions.push(response.data);
        } catch (error) {
          this.transactionError = error.message;
        }
      },
      goBack() {
        this.$router.go(-1);
      }
    },
    mounted() {
      // Uncomment this line to fetch transactions from the API when the component mounts
      // this.fetchTransactions();
    }
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
  