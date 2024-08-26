<template>
    <LoginTopBar />
    <div class="flex min-h-screen flex-col xl:flex-row">
      <!-- Chat Section -->
      <div
      :class="[
        'transition-all duration-300 ease-in-out',
        isChatVisible ? 'w-2/11' : 'w-0',
        isChatVisible ? 'block' : 'hidden',
        'bg-gray-800 text-white'
      ]"
    >
        <div class="p-6 h-full ">
          <Chat />
        </div>
      </div>
  
      <!-- Main Content Section -->
      <div
        :class="[
          'flex-grow transition-all duration-300 ease-in-out',
          isChatVisible ? 'w-9/11' : 'w-full'
        ]"
        class="bg-gray-100 p-6 h-full "
      >
    <button @click="goBack" class="bg-[#222121] py-1 px-2 rounded-md mb-2">
      <img src="@/assets/arrow-left.svg" alt="">
    </button>
        <div class="bg-gray-900 text-white py-0 px-6">
          <div class="flex shadow rounded-lg main-card" style="background-color: #171717; border: 3px solid #222121;">
            <!-- Left Column: Image -->
            <div class="w-1/3 p-4 flex justify-center items-center">
                <div class="p-2 rounded-lg shadow-md" style="background-color: #222121;">
              <img src="@/assets/Rectangle 2116cans.svg" alt="Placeholder" class=" h-auto rounded-lg shadow-md" />
              <div class="text-center mt-1">
              <span class="text-white">Zaqk187420</span>
            </div>
            </div>
            </div>
            
            <!-- Right Column: Content -->
            
<div class="w-2/3 grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-lg shadow right-card" style="background-color:#222121;" >
    <!-- Statistics Section -->
     
    <div class="bg-gray-800 p-4 rounded-lg" >
      <h3 class="text-xl font-semibold">Statistics</h3>
      <div class="mt-4">
        <div class="flex justify-between mb-2">
          <span class="font-semibold text-lg">Won:</span>
        
        </div>
        <div class="flex justify-between mb-2">
          <span class="font-semibold text-lg">Lost:</span>
       
        </div>
        <div class="flex justify-between">
          <span class="font-semibold text-lg">Profit:</span>
         
        </div>
      </div>
    </div>
    
    <!-- Coinflip Section -->
    <div class="bg-gray-800 p-4 rounded-lg ">
      <h3 class="text-xl font-semibold">Coinflip</h3>
      <div class="mt-4">
        <div class="flex justify-between mb-2">
        
          <span class="text-gray-300 text-lg">15</span>
        </div>
        <div class="flex justify-between mb-2">
          
          <span class="text-gray-300 text-lg">17</span>
        </div>
        <div class="flex justify-between">
         
          <span class="text-gray-300 text-lg" style="color: #EF4242">-15.61$</span>
        </div>
      </div>
    </div>
    
    <!-- Jackpot Section -->
    <div class="bg-gray-800 p-4 rounded-lg">
      <h3 class="text-xl font-semibold">Jackpot</h3>
      <div class="mt-4">
        <div class="flex justify-between mb-2">
          
          <span class="text-gray-300 text-lg">3</span>
        </div>
        <div class="flex justify-between mb-2">
        
          <span class="text-gray-300 text-lg">22</span>
        </div>
        <div class="flex justify-between">
          
          <span class="text-gray-300 text-lg " style="color: #4CC124;" >243.51$</span>
        </div>
      </div>
    </div>
  </div>
  
          </div>
        </div>


        <div class="bg-gray-900 text-white p-6 ">
          <div class="flex">
            <!-- Left Column: Image -->
            <div class="py-4 ps-0 pe-6 block w-1/3">
              <router-link to="/affiliate">
                <div class="rounded-lg shadow-md p-6 mb-3" style="background-color: #171717; border: 3px solid #222121;">
                  <h3 class="text-white font-semibold text-xl">Total profit: 
                    <span style="color: #4CC124;" class="text-xl">$245.43</span>
                  </h3>
                </div>
              </router-link>
              
            
              <div class="pt-4">
                <div class="rounded-lg shadow-md p-4" style="background-color: #171717; border: 3px solid #222121;">
                  <!-- Label and Input with ID for Affiliate Code -->
                  <label for="affiliate-code" class="block text-lg font-medium text-gray-300 mb-2">
                    Redeem Affiliate Code:
                  </label>
                  <input
                    id="affiliate-code"
                    type="text"
                    placeholder="FREE"
                    class="text-white p-2 rounded-md w-full "
                    style="background-color: #171717; color: #ffffff; border: 1px solid #222121;"
                  >
                  <router-link to="/affiliate/withdraw">
                    <button type="button"
                      class="mt-4 p-2 w-full rounded-md shadow text-lg"
                      style="background-color: #222121; color: #ffffff;"
                    >
                      Redeem
                    </button>
                  </router-link>
            
                  <!-- Label and Input with ID for Promo Code -->
                  <label for="promo-code" class="block text-lg font-medium text-gray-300 mt-6 mb-2">
                    Redeem Promo Code:
                  </label>
                  <input
                    id="promo-code"
                    type="text"
                    
                    class="text-white p-2 rounded-md w-full shadow"
                    style="background-color: #171717; color: #ffffff; border: 1px solid #222121;"
                  >
                  <router-link to="/promo-code">
                    <button type="button"
                      class="mt-4 p-2 w-full rounded-md shadow text-lg"
                      style="background-color: #222121; color: #ffffff;"
                    >
                      Redeem
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
            
            <div class="w-2/3 p-4 rounded-lg shadow right-card" style="background-color:#171717; border: 3px solid #222121;">
            <!-- Right Column: Content with Transition -->
            <Transactions :transactions="transactions" :currentPage="currentPage" :totalPages="totalPages" @nextPage="nextPage" @prevPage="prevPage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Chat from '../components/common/Chat.vue'
  import LoginTopBar from '../components/common/LoginTopBar.vue'
  import Transactions from '../components/common/Transactions.vue'
  
  export default {
    components: {
      Chat,
      LoginTopBar, 
      Transactions
    },
    data() {
      return {
        isChatVisible: true,
        currentPage: 1,
      totalPages: 26,
      transactions: [
          { gamemode: 'Coinflip', amount: '$22.43', status: 'Resend Trade', winLoss: 'Win' },
          { gamemode: 'Coinflip', amount: '$11.32', status: 'Success', winLoss: 'Loss' },
          { gamemode: 'Jackpot', amount: '$5.21', status: 'Success', winLoss: 'Loss' },
          { gamemode: 'Coinflip', amount: '$22.43', status: 'Success', winLoss: 'Loss' },
          { gamemode: 'Coinflip', amount: '$16.32', status: 'Success', winLoss: 'Win' },
          { gamemode: 'Jackpot', amount: '$5.21', status: 'Success', winLoss: 'Loss' }
          // More transactions...
        ],
      }
    },
    methods: {
      toggleChat() {
        this.isChatVisible = !this.isChatVisible
      },
      nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    async makeTransaction() {
      try {
        // Prepare transaction data
        const transactionData = {
          amount: 100,  // Example transaction amount
          userId: this.$store.state.user.id,
        };

        // Send transaction request to backend using axios
        const response = await axios.post('https://your-backend-api/transaction', transactionData);

        console.log('Transaction successful', response.data);

        // Handle success (e.g., update UI, show confirmation message)
      } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        // Handle error (e.g., show error message to user)
      }
    },
    goBack() {
      this.$router.go(-1);
    },


    }
  }
  </script>
  
  <style scoped>
.main-card{
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 30px;
    padding-bottom: 20px;
}
.right-card{
    margin-top: 20px;
    margin-bottom: 16px;
}

/* Fade Animation */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
  </style>
  