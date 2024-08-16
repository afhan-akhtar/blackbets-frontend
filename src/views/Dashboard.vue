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
        <div class="p-4">
          <h2 class="text-xl font-semibold">Chat</h2>
          <!-- Chat content goes here -->
          <Chat />
          <p class="mt-4">This is the chat section.</p>
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
        <div class="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
          <div class="flex shadow rounded-lg main-card" style="background-color: #171717;">
            <!-- Left Column: Image -->
            <div class="w-1/3 p-4 flex justify-center items-center">
                <div class="p-2 rounded-lg shadow-md" style="background-color: #222121;">
              <img src="@/assets/profile-logo.png" alt="Placeholder" class=" h-auto rounded-lg shadow-md" />
              <div class="text-center mt-1">
              <span class="text-white">Zaqk187420</span>
            </div>
            </div>
            </div>
            
            <!-- Right Column: Content -->
            
<div class="w-2/3 grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-lg shadow right-card" style="background-color:#222121;" >
    <!-- Statistics Section -->
     
    <div class="bg-gray-800 p-4 rounded-lg" >
      <h3 class="text-lg font-semibold">Statistics</h3>
      <div class="mt-4">
        <div class="flex justify-between mb-2">
          <span class="font-semibold">Won:</span>
        
        </div>
        <div class="flex justify-between mb-2">
          <span class="font-semibold">Lost:</span>
       
        </div>
        <div class="flex justify-between">
          <span class="font-semibold">Profit:</span>
         
        </div>
      </div>
    </div>
    
    <!-- Coinflip Section -->
    <div class="bg-gray-800 p-4 rounded-lg ">
      <h3 class="text-lg font-semibold">Coinflip</h3>
      <div class="mt-4">
        <div class="flex justify-between mb-2">
        
          <span class="text-gray-300">15</span>
        </div>
        <div class="flex justify-between mb-2">
          
          <span class="text-gray-300">17</span>
        </div>
        <div class="flex justify-between">
         
          <span class="text-gray-300" style="color: #EF4242">-15.61$</span>
        </div>
      </div>
    </div>
    
    <!-- Jackpot Section -->
    <div class="bg-gray-800 p-4 rounded-lg">
      <h3 class="text-lg font-semibold">Jackpot</h3>
      <div class="mt-4">
        <div class="flex justify-between mb-2">
          
          <span class="text-gray-300">3</span>
        </div>
        <div class="flex justify-between mb-2">
        
          <span class="text-gray-300">22</span>
        </div>
        <div class="flex justify-between">
          
          <span class="text-gray-300" >243.51$</span>
        </div>
      </div>
    </div>
  </div>
  
          </div>
        </div>



        <div class="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
            <div class="flex">
              <!-- Left Column: Image -->
              <div class=" p-4 block ">
                  <div class=" rounded-lg shadow-md p-4" style="background-color: #222121;">
                  <h3>Total profit: $245.43</h3>
               
              </div>
              

              <div class=" p-4 flex">
                <div class=" rounded-lg shadow-md" style="background-color: #222121;">
                <h3>Total profit: $245.43</h3>
             
            </div>
        </div>
            </div>
              
              <!-- Right Column: Content -->
              
              <div class="w-2/3 p-4 rounded-lg shadow right-card" style="background-color:#222121;">
                <!-- Headings Row with Single HR -->
                <div class="flex flex-col md:flex-row items-center justify-between">
                  <div class="flex-1  p-2">
                    <h3 class="text-lg font-semibold">Gamemode</h3>
                  </div>
                  <div class="flex-1  p-2">
                    <h3 class="text-lg font-semibold">Amount</h3>
                  </div>
                  <div class="flex-1  p-2">
                    <h3 class="text-lg font-semibold">Trade Status</h3>
                  </div>
                  <div class="flex-1  p-2">
                    <h3 class="text-lg font-semibold">Win/Loss</h3>
                  </div>
                </div>
              
                <!-- Single Horizontal Rule Below All Headings -->
                <hr class="border-gray-600 my-4" />
              
                <!-- Content Sections Below Each Heading -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <!-- Gamemode Section -->
                  <div class="bg-gray-800 p-4 rounded-lg">
                    <div class="mt-4">
                      <div class="flex justify-between">
                        <span class="font-semibold">Coinflip</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="font-semibold">Coinflip</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="font-semibold">Jackpot</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="font-semibold">Coinflip</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="font-semibold">Coinflip</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="font-semibold">Jackpot</span>
                      </div>
                    </div>
                  </div>
              
                  <!-- Amount Section -->
                  <div class="bg-gray-800 p-4 rounded-lg">
                    <div class="mt-4">
                      <div class="flex justify-between">
                        <span class="text-gray-300">$22.43</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-gray-300">$11.32</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-gray-300">$5.21</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-gray-300">$22.43</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-gray-300">$16.32</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-gray-300">$5.21</span>
                      </div>
                    </div>
                  </div>
              
                  <!-- Trade Status Section -->
                  <div class="bg-gray-800 p-4 rounded-lg">
                    <div class="mt-4">
                      <div class="flex justify-between">
                        <span class="text-gray-300">Resend Trade</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-gray-300">Success</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-gray-300">Success</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-gray-300">Success</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-gray-300">Success</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-gray-300">Success</span>
                      </div>
                    </div>
                  </div>
              
                  <!-- Win/Loss Section -->
                  <div class="bg-gray-800 p-4 rounded-lg">
                    <div class="mt-4">
                      <div class="flex justify-between">
                        <span class="text-gray-300" style="color: #4CC124;">Win</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-gray-300" style="color: #EF4242;">Loss</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-gray-300" style="color: #EF4242;">Loss</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-gray-300" style="color: #EF4242;">Loss</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-gray-300" style="color: #4CC124;">Win</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-gray-300" style="color: #EF4242;">Loss</span>
                      </div>
                    </div>
                  </div>
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
        isChatVisible: true
      }
    },
    methods: {
      toggleChat() {
        this.isChatVisible = !this.isChatVisible
      }
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

  </style>
  