<template>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div class="bg-gray-800 py-4 px-1 rounded-lg">
        <div class="mt-4">
          <div v-for="(transaction, index) in transactions" :key="index" class="flex justify-between">
            <span class="font-semibold text-lg">{{ transaction.gamemode }}</span>
          </div>
        </div>
      </div>
      <div class="bg-gray-800 py-4 px-1 rounded-lg">
        <div class="mt-4">
          <div v-for="(transaction, index) in transactions" :key="index" class="flex justify-between">
            <span class="text-gray-300 text-lg">{{ transaction.amount }}</span>
          </div>
        </div>
      </div>
      <div class="bg-gray-800 py-4 px-1 rounded-lg">
        <div class="mt-4">
          <div v-for="(transaction, index) in transactions" :key="index" class="flex justify-between">
            <span class="text-gray-300 text-lg">{{ transaction.status }}</span>
          </div>
        </div>
      </div>
      <div class="bg-gray-800 py-4 px-1 rounded-lg">
        <div class="mt-4">
          <div v-for="(transaction, index) in transactions" :key="index" class="flex justify-between">
            <span class="text-gray-300 text-lg" :style="{ color: transaction.winLoss === 'Win' ? '#4CC124' : '#EF4242' }">{{ transaction.winLoss }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      transactions: Array
    }
  }
  </script>
  