<template>
    <div>
        <h1 class="text-xl mb-3">Transactions:</h1>
      </div>
    <div class="w-full p-4 rounded-lg shadow right-card" style="background-color:#222121;">
      
  
      <!-- Add Transition -->
      <transition name="fade" mode="out-in">
        <div :key="currentPage">
          <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="flex-1 p-2">
              <h3 class="text-xl font-semibold">Gamemode</h3>
            </div>
            <div class="flex-1 p-2">
              <h3 class="text-xl font-semibold">Amount</h3>
            </div>
            <div class="flex-1 p-2">
              <h3 class="text-xl font-semibold">Trade Status</h3>
            </div>
            <div class="flex-1 p-2">
              <h3 class="text-xl font-semibold">Win/Loss</h3>
            </div>
          </div>
          <hr />
          <TransactionList :transactions="transactions" />
        </div>
      </transition>
  
     
    </div>
    <div class="mt-4 flex justify-between items-center">
        <button @click="prevPage" :disabled="currentPage === 1" class="p-2 bg-gray-700 rounded-lg shadow" style="background-color:#222121">
          <img src="@/assets/_left.svg" alt="">
        </button>
        <span style="background-color:#222121" class="p-2 bg-gray-700 rounded-lg shadow">{{ currentPage }} / {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages" class="p-2 bg-gray-700 rounded-lg shadow" style="background-color:#222121">
          <img src="@/assets/_right.svg" alt="">
        </button>
      </div>
  </template>
  
  <script>
 import TransactionList from '@/components/common/TransactionList.vue'
  
  export default {
    components: {
      TransactionList
    },
    props: {
      transactions: Array,
      currentPage: Number,
      totalPages: Number
    },
    emits: ['nextPage', 'prevPage'],
    methods: {
      nextPage() {
        this.$emit('nextPage');
      },
      prevPage() {
        this.$emit('prevPage');
      }
    }
  }
  </script>
  
  <style scoped>
  /* Fade Animation */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
  </style>
  