<template>
    <transition name="fade" mode="out-in">
        <div class="w-full p-4 rounded-xl shadow-xl right-card" style="background-color:#171717; border: 3px solid #222121;" :key="currentPage">
          <div class="flex flex-col gap-4">
            <!-- Loop over items -->
            <div v-for="(item, index) in items" :key="item.name" class="bg-gray-800 px-10 py-3 rounded-xl shadow-xl w-full bg-[#222121]">
              <div class="flex justify-between items-center">
                <span class="font-semibold text-lg">{{ item.name }}</span>
                <span class="text-gray-300 text-lg">{{ item.users }} users</span>
                <span class="text-gray-300 text-lg">${{ item.price }}</span>
                <span @click="deleteItem(index)" class="font-semibold text-lg cursor-pointer text-red-500">Delete</span>
              </div>
            </div>
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
        </div>
      </transition>
</template>


<script>

import axios from 'axios'

export default {
 
  data() {
    return {
     
      currentPage: 1,
      totalPages: 26,
      items: [
        { name: 'Free50cent', users: 50, price: 0.7 },
        { name: 'Free50cent', users: 50, price: 0.7 },
        { name: 'Free50cent', users: 50, price: 0.7 },
        { name: 'Free50cent', users: 50, price: 0.7 },
        { name: 'Free50cent', users: 50, price: 0.7 },
        { name: 'Free50cent', users: 50, price: 0.7 },
        { name: 'Free50cent', users: 50, price: 0.7 },
        { name: 'Free50cent', users: 50, price: 0.7 },
        { name: 'Free50cent', users: 50, price: 0.7 },
      ],
    }
  },
  methods: {
    toggleChat() {
      this.isChatVisible = !this.isChatVisible
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },
    async makeTransaction() {
      try {
        const transactionData = {
          amount: 100,
          userId: this.$store.state.user.id,
        }
        const response = await axios.post('https://your-backend-api/transaction', transactionData)
        console.log('Transaction successful', response.data)
      } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message)
      }
    },
    deleteItem(index) {
      this.items.splice(index, 1);
    },
   
  }
}
</script>

<style scoped>
.main-card {
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 30px;
  padding-bottom: 20px;
}
.right-card {
  margin-top: 20px;
  margin-bottom: 16px;
}

/* Fade Animation */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.custom-input::placeholder {
  color: #272727;
  font-size: x-large;
}
</style>
