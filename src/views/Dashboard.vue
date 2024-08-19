<template>
    <LoginTopBar />
    <div class="flex h-screen">
      <!-- Chat Section -->
      <div
        :class="[
          'transition-all duration-300 ease-in-out',
          isChatVisible ? 'w-2/11' : 'w-0',
          isChatVisible ? 'block' : 'hidden',
          'bg-gray-800 text-white overflow-hidden'
        ]"
      >
        <div class="p-6">
          <!-- <h2 class="text-xl font-semibold">Chat</h2> -->
          <!-- Chat content goes here -->
          <Chat />
          <!-- <p class="mt-4">This is the chat section.</p> -->
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
        <div class="bg-gray-900 text-white py-0 px-6">
          <div class="flex shadow rounded-lg main-card" style="background-color: #171717;">
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
              <div class="rounded-lg shadow-md p-6 mb-3" style="background-color: #171717;">
                <h3 class="text-white font-semibold text-xl">Total profit: 
                  <span style="color: #4CC124;" class="text-xl">$245.43</span>
                </h3>
              </div>
            
              <div class="pt-4">
                <div class="rounded-lg shadow-md p-4" style="background-color: #171717;">
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
                  <div>
                    <button type="button"
                      class="mt-4 p-2 w-full rounded-md shadow text-lg"
                      style="background-color: #222121; color: #ffffff;"
                    >
                      Redeem
                    </button>
                  </div>
            
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
                  <div>
                    <button type="button"
                      class="mt-4 p-2 w-full rounded-md shadow text-lg"
                      style="background-color: #222121; color: #ffffff;"
                    >
                      Redeem
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
      
            <!-- Right Column: Content with Transition -->
            <div class="w-2/3 p-4 rounded-lg shadow right-card" style="background-color:#171717;">
              <div>
                <h1 class="text-xl">Transactions:</h1>
              </div>
              
              <!-- Add Transition -->
              <transition name="fade" mode="out-in">
                <div class="w-full p-4 rounded-lg shadow right-card" style="background-color:#222121;" :key="currentPage">
                  <!-- Content Sections Below Each Heading -->
                    <!-- Headings Row with Single HR -->
                <div class="flex flex-col md:flex-row items-center justify-between">
                  <div class="flex-1  p-2">
                    <h3 class="text-xl font-semibold">Gamemode</h3>
                  </div>
                  <div class="flex-1  p-2">
                    <h3 class="text-xl font-semibold">Amount</h3>
                  </div>
                  <div class="flex-1  p-2">
                    <h3 class="text-xl font-semibold">Trade Status</h3>
                  </div>
                  <div class="flex-1  p-2">
                    <h3 class="text-xl font-semibold">Win/Loss</h3>
                  </div>
                </div>
                <hr />
                  <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <!-- Gamemode Section -->
                    <div class="bg-gray-800 p-4 rounded-lg">
                      <div class="mt-4">
                        <div class="flex justify-between">
                          <span class="font-semibold text-lg">Coinflip</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="font-semibold text-lg">Coinflip</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="font-semibold text-lg">Jackpot</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="font-semibold text-lg">Coinflip</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="font-semibold text-lg">Coinflip</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="font-semibold text-lg">Jackpot</span>
                        </div>
                      </div>
                    </div>
      
                    <!-- Amount Section -->
                    <div class="bg-gray-800 p-4 rounded-lg">
                      <div class="mt-4">
                        <div class="flex justify-between">
                          <span class="text-gray-300 text-lg">$22.43</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-gray-300 text-lg">$11.32</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-gray-300 text-lg">$5.21</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-gray-300 text-lg">$22.43</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-gray-300 text-lg">$16.32</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-gray-300 text-lg">$5.21</span>
                        </div>
                      </div>
                    </div>
      
                    <!-- Trade Status Section -->
                    <div class="bg-gray-800 p-4 rounded-lg">
                      <div class="mt-4">
                        <div class="flex justify-between">
                          <span class="text-gray-300 text-lg">Resend Trade</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-gray-300 text-lg">Success</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-gray-300 text-lg">Success</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-gray-300 text-lg">Success</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-gray-300 text-lg">Success</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-gray-300 text-lg">Success</span>
                        </div>
                      </div>
                    </div>
      
                    <!-- Win/Loss Section -->
                    <div class="bg-gray-800 p-4 rounded-lg">
                      <div class="mt-4">
                        <div class="flex justify-between">
                          <span class="text-gray-300 text-lg" style="color: #4CC124;">Win</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-gray-300 text-lg" style="color: #EF4242;">Loss</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-gray-300 text-lg" style="color: #EF4242;">Loss</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-gray-300 text-lg" style="color: #EF4242;">Loss</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-gray-300 text-lg" style="color: #4CC124;">Win</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-gray-300 text-lg" style="color: #EF4242;">Loss</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
      
              <div class="mt-4 flex justify-between items-center">
                <button @click="prevPage" :disabled="currentPage === 1" class="p-2 bg-gray-700 rounded-lg shadow" style="background-color:#222121">
                  <img src="@/assets/_left.svg" alt="">
                </button>
                <span style="background-color:#222121" class="p-2 bg-gray-700 rounded-lg shadow" >{{ currentPage }} / {{ totalPages }}</span>
                <button @click="nextPage" :disabled="currentPage === totalPages" class="p-2 bg-gray-700 rounded-lg shadow " style="background-color:#222121">
                  <img src="@/assets/_right.svg" alt="">
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Chat from '../components/common/Chat.vue'
  import LoginTopBar from '../components/common/LoginTopBar.vue'
  
  export default {
    components: {
      Chat,
      LoginTopBar
    },
    data() {
      return {
        isChatVisible: true,
        currentPage: 1,
      totalPages: 26,
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
  