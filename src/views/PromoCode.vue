<template>
    <LoginTopBar />
    <div class="flex min-h-screen">
      <!-- Chat Section -->
      <div
        :class="[
          'transition-all duration-300 ease-in-out',
          isChatVisible ? 'w-2/11' : 'w-0',
          isChatVisible ? 'block' : 'hidden',
          'bg-gray-800 text-white overflow-hidden'
        ]"
      >
      <div class="py-6 px-5 " >
          <Chat />
        </div>
      </div>
  
      <!-- Main Content Section -->
      <div
        :class="[
          'flex-grow transition-all duration-300 ease-in-out',
          isChatVisible ? 'w-9/11' : 'w-full'
        ]"
        class="bg-gray-100 p-6"
     
      >
      <button @click="goBack" class="bg-[#222121] py-1 px-2 rounded-md mb-2">
        <img src="@/assets/arrow-left.svg" alt="">
      </button>
        <div class="flex items-center justify-between gap-4 px-6 py-0">
          <input type="text" placeholder="Promo Code" class="p-4 rounded-xl bg-gray-700 text-white bg-[#171717] custom-input" style="border:3px solid #222121;" />
          <input type="text" placeholder="Uses" class="p-4 rounded-xl bg-gray-700 text-white bg-[#171717] custom-input" style="border:3px solid #222121;"  />
          <input type="text" placeholder="Value" class="p-4 rounded-xl bg-gray-700 text-white bg-[#171717] custom-input" style="border:3px solid #222121;"  />
          <button @click="handleButtonClick" class="bg-blue-500 text-white px-6 py-3 text-xl rounded-xl bg-[#171717]" style="border:3px solid #222121;">Create Promo Code</button>
        </div>
        <div class="bg-gray-900 text-white px-6 py-0">
          <div class="flex flex-wrap gap-4">
            <!-- Right Column: Content with Transition -->
        <PromoCode />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Chat from '../components/common/Chat.vue'
  import LoginTopBar from '../components/common/LoginTopBar.vue'
   import PromoCode from '../components/common/PromoCode.vue'
  import axios from 'axios'
  
  export default {
    components: {
      Chat,
      LoginTopBar,
      PromoCode
    },
    data() {
      return {
        isChatVisible: true,
      
      }
    },
    methods: {
      toggleChat() {
        this.isChatVisible = !this.isChatVisible
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
     
      goBack() {
      this.$router.go(-1);
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
  