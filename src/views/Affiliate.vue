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
        <div class="p-6" style="height:calc(100vh - 100px); overflow-y: auto" >
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
      class="bg-gray-100 p-6 " style="height:calc(100vh - 40px); overflow-y: auto" 
    >
     <!-- Header -->
     <div class="flex justify-between items-center text-white  px-6">
        <h1 class="text-2xl ">Your Affiliate Stats</h1>
   
      </div>
      <div class="bg-gray-900 text-white p-6 pt-0 pb-0">
        <div class="flex">
          <!-- Left Column: Single Card -->
          <div class="w-1/3 p-6 pl-0 pb-0">
            <div class="rounded-xl shadow-md p-6 mb-3" style="background-color: #171717; border: 3px solid #222121;">
              <div class="text-white font-semibold">
                <h3 class="text-xl flex justify-center">Total Earnings</h3>
                <span class="flex text-xl justify-center">$245.43</span>
              </div>
            </div>
          </div>
      
          <!-- Right Column: Three Cards in a Single Row -->
          <div class="w-2/3 py-6 px-0 pb-0 flex flex-row gap-4">
            <div class="w-1/3">
              <div class="rounded-xl shadow-md p-6 mb-3" style="background-color: #171717; border: 3px solid #222121;">
                <div class="text-white font-semibold">
                  <h3 class="text-xl flex justify-center">Total Wagered</h3>
                  <span class="flex text-xl justify-center">$1750.43</span>
                </div>
              </div>
            </div>
            <div class="w-1/3">
              <div class="rounded-xl shadow-md p-6 mb-3" style="background-color: #171717; border: 3px solid #222121;">
                <div class="text-white font-semibold">
                  <h3 class="text-xl flex justify-center">Active Referrals</h3>
                  <span class="flex text-xl justify-center">20</span>
                </div>
              </div>
            </div>
            <div class="w-1/3">
              <div class="rounded-xl shadow-md p-6 mb-3" style="background-color: #171717; border: 3px solid #222121;">
                <div class="text-white font-semibold">
                  <h3 class="text-xl flex justify-center">Total Referrals</h3>
                  <span class="flex text-xl justify-center">53</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      

        <div class="bg-gray-900 text-white p-6 pt-0  ">
          <div class="flex">
            <!-- Left Column: Image -->
            <div class="py-4 ps-0 pe-6 block w-1/3">
             
            
              <div class="pt-4" >
                <div class="rounded-xl shadow-md p-4" style="background-color: #171717; border: 3px solid #222121;">
                  <!-- Label and Input with ID for Affiliate Code -->
                  <label for="affiliate-code" class="block flex justify-center text-lg font-medium text-gray-300 mb-2">
                    Create Affiliate Code:
                  </label>
                  <input
                    id="affiliate-code"
                    type="text"
                  
                    class="text-white p-2 rounded-md w-full "
                    style="background-color: #171717; color: #ffffff; border: 1px solid #222121;"
                  >
                  <div>
                    <button type="button"
                      class="mt-4 p-2 w-full rounded-md shadow text-lg"
                      style="background-color: #222121; color: #ffffff;"
                    >
                      Save
                    </button>
                  </div>
            
                
                </div>
              </div>
              <div class="pt-4">
                <div class="rounded-lg shadow-md p-4" style="background-color: #171717; border: 3px solid #222121;">
                  <!-- Label and Input with ID for Affiliate Code -->
                  <h3  class="block flex justify-center text-lg font-medium text-gray-300 mb-2">
                    Available Earnings
                  </h3>
                  <p class="text-white flex justify-center p-2 rounded-md w-full "
                    style="background-color: #171717; color: #ffffff; "
                  >5.32</p>
                  <div>
                    <button type="button"
                      class="mt-4 p-2 w-full rounded-md shadow text-lg"
                      style="background-color: #222121; color: #ffffff;"
                    >
                      Claim Earnings
                    </button>
                  </div>
            
                
                </div>
              </div>

              <div class="pt-4">
                <div class="rounded-lg shadow-md p-4" style="background-color: #171717; border: 3px solid #222121;">
                  <!-- Label and Input with ID for Affiliate Code -->
                  <h3  class="block text-lg font-medium text-gray-300 mb-2 flex justify-center">
                    Affiliate Payouts
                  </h3>
                  <p class="text-white p-2 rounded-md w-full "
                    style="background-color: #171717; color: #ffffff; "
                  >You will receive 20% of the houses profit wagered by users of your code as a commission.</p>
                  <div>
                    
                  </div>
            
                
                </div>
              </div>
            </div>
            
      
            <!-- Right Column: Content with Transition -->
            <div class="w-2/3 p-4 rounded-lg shadow right-card" style="background-color:#171717; border: 3px solid #222121;">
                  
                  <div class=" p-6 w-full flex flex-col text-white h-[90%] border-7 rounded-bl-lg rounded-br-lg" >
                      <div class="flex-1 overflow-auto">
                        <table class="w-full">
                          <thead>
                            <tr>
                              <th class="text-start p-2 text-xl">User</th>
                              <th class="text-start p-2 text-xl relative cursor-pointer flex items-center">
                                Total Wagered
                                <span class="dropdown-icon"></span>
                              </th>
                              <th class="text-start p-2 text-xl">Commission Earned</th>
                              <th class="text-start p-2 text-xl">Status</th>
                             
                            </tr>
                          </thead>
                          <transition name="fade" mode="out-in">
                            <tbody :key="currentPage">
                              <tr class="hover:bg-gray-700 border-bottom" style="background-color: #222121; cursor:pointer; border-bottom: 10px solid #171717;">
                                <td class="text-start p-2 text-lg flex items-center">
                                  <img src="@/assets/Ellipse 120user.svg" alt="" class="mr-2"> <!-- Add margin-right to separate image and text -->
                                  <span>Quintice420</span>
                                </td>
                                <td class="text-start p-2 text-lg">$3242.21</td>
                                <td class="text-start p-2 text-lg">$15.12</td>
                                <td class="text-start p-2 text-lg">Inactive</td>
                               
                                
                              </tr>
                    
                              <tr @click="openBanModal" class="hover:bg-gray-700 border-bottom" style="background-color: #222121; cursor:pointer;">
                                <td class="text-start p-2 text-lg flex items-center">
                                  <img src="@/assets/Ellipse 120user.svg" alt="" class="mr-2"> <!-- Add margin-right to separate image and text -->
                                  <span>Gooner187420</span>
                                </td>
                                <td class="text-start p-2 text-lg">$532.53</td>
                                <td class="text-start p-2 text-lg">$2.32</td>
                                <td class="text-start p-2 text-lg">Active</td>
                               
                                
                              </tr>
                              
                            </tbody>
                          </transition>
                        </table>
                      </div>
                    
                      <footer class="mt-4 p-2 bg-gray-700 rounded-lg">
                        <div class="flex justify-between items-center">
                          <button @click="prevPage" :disabled="currentPage === 1" class="p-2 bg-gray-700 rounded-lg shadow" style="background-color:#222121">
                            <img src="@/assets/_left.svg" alt="">
                          </button>
                          <span  style="background-color:#222121" class="p-2 bg-gray-700 rounded-lg shadow">{{ currentPage }} / {{ totalPages }}</span>
                          <button @click="nextPage" :disabled="currentPage === totalPages" class="p-2 bg-gray-700 rounded-lg shadow" style="background-color:#222121">
                            <img src="@/assets/_right.svg" alt="">
                          </button>
                        </div>
                      </footer>
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
    margin-top: 33px;
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
  