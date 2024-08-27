<template>
    <div>
      <!-- Value and Button Section -->
      <div class="flex justify-between items-center mb-0 rounded-full shadow-xl p-8 card" style="background-color:#171717; height: 188px; margin-top:-210px;">
        <p class="text-2xl ">${{ amount.toFixed(2) }}</p>
        <p class="text-2xl ">30/200</p>
      </div>
      <div class="flex justify-between items-center mb-0 rounded-xl p-4" style="background-color:#222121; margin-bottom:-30px; box-shadow: 0px 4px 6px #171717; margin-left:80px; margin-right: 80px;">
        <router-link to="/jackpot/inventory" class="text-xl">See Inventory</router-link>
        <router-link to="/jackpot/history" class="text-xl">Jackpot History</router-link>
      </div>
      
      <button type="submit" @click="handleTransaction" class="card text-2xl text-black px-6 py-3 font-bold" style="background-color: #222121; clip-path: polygon(0% 0%, -50% 0%, 100% 0%, 100% 0%, 90% 100%, 10% 100%); box-shadow: 0px 4px 6px #171717;">
        DEPOSIT
        <p class="mt-4 text-lg">Instant Jackpot</p>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      amount: {
        type: Number,
        default: 0
      }
    },
    methods: {
      handleTransaction() {
        this.$emit('handleTransaction');
      }
    }
  }
  </script>
  
  <style scoped>
  .card {
    background-color: #222121;
  }
  </style>
  