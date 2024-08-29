<template>
  <div v-if="isHistoryVisible" class="popup-overlay">
    <div class="popup-content rounded-xl shadow-xl">
      <!-- Close Button -->
      <div class="flex justify-start items-center p-3 pb-0">
        <button @click="closeHistoryPopup" class="py-1 px-2 rounded-md mb-2">
          <img src="@/assets/arrow-left.svg" alt="Close">
        </button>
      </div>
      
     

        <!-- JackpotHistory Component -->
        <JackpotHistory />

      
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import JackpotHistory from "@/components/common/JackpotHistory.vue";

export default {
  components: {
    JackpotHistory,
  },
  props: {
    isHistoryVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
  
      transactions: [], // To store fetched transactions
      transactionError: null, // To store errors during transaction
    };
  },
  methods: {
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
  
    closeHistoryPopup() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow-y: auto; /* Enable Y-axis scrolling */
  overflow-x: hidden;
}

.popup-content {
  position: relative;
  width: 800px;
  background-color: #222121;
  border-radius: 8px;
  max-height: 95vh;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
